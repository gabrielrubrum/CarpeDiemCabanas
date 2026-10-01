<?php
/**
 * Plugin Name: Carpe Diem GitHub Deploy
 * Description: Dispara o workflow de deploy estático no GitHub quando posts públicos mudam.
 * Version: 1.0.0
 * Author: Carpe Diem
 */

if (!defined('ABSPATH')) {
    exit;
}

const CARPE_GITHUB_DEPLOY_WORKFLOW = 'deploy-hostgator.yml';
const CARPE_GITHUB_DEPLOY_BRANCH = 'main';
const CARPE_GITHUB_DEPLOY_DEBOUNCE_SECONDS = 60;

function carpe_github_deploy_has_config(): bool {
    return defined('CARPE_GITHUB_TOKEN')
        && defined('CARPE_GITHUB_OWNER')
        && defined('CARPE_GITHUB_REPO')
        && CARPE_GITHUB_TOKEN
        && CARPE_GITHUB_OWNER
        && CARPE_GITHUB_REPO;
}

function carpe_github_deploy_dispatch(string $reason, int $post_id): void {
    if (!carpe_github_deploy_has_config()) {
        error_log('Carpe GitHub Deploy: configuração ausente em wp-config.php.');
        return;
    }

    $debounce_key = 'carpe_github_deploy_' . md5($reason . '_' . $post_id);
    if (get_transient($debounce_key)) {
        return;
    }
    set_transient($debounce_key, '1', CARPE_GITHUB_DEPLOY_DEBOUNCE_SECONDS);

    $url = sprintf(
        'https://api.github.com/repos/%s/%s/actions/workflows/%s/dispatches',
        rawurlencode(CARPE_GITHUB_OWNER),
        rawurlencode(CARPE_GITHUB_REPO),
        rawurlencode(CARPE_GITHUB_DEPLOY_WORKFLOW)
    );

    $response = wp_remote_post($url, [
        'timeout' => 15,
        'headers' => [
            'Accept' => 'application/vnd.github+json',
            'Authorization' => 'Bearer ' . CARPE_GITHUB_TOKEN,
            'Content-Type' => 'application/json',
            'User-Agent' => 'Carpe-Diem-WordPress-GitHub-Deploy',
            'X-GitHub-Api-Version' => '2022-11-28',
        ],
        'body' => wp_json_encode([
            'ref' => CARPE_GITHUB_DEPLOY_BRANCH,
            'inputs' => [
                'reason' => $reason,
                'post_id' => (string) $post_id,
            ],
        ]),
    ]);

    if (is_wp_error($response)) {
        error_log('Carpe GitHub Deploy: falha ao chamar GitHub API. ' . $response->get_error_message());
        return;
    }

    $status = wp_remote_retrieve_response_code($response);
    if ($status < 200 || $status >= 300) {
        error_log('Carpe GitHub Deploy: GitHub API retornou HTTP ' . $status . '.');
    }
}

function carpe_github_deploy_should_dispatch(int $post_id, $post, bool $update): bool {
    if (!$post || $post->post_type !== 'post') {
        return false;
    }

    if (wp_is_post_autosave($post_id) || wp_is_post_revision($post_id)) {
        return false;
    }

    return $post->post_status === 'publish';
}

function carpe_github_deploy_on_save_post(int $post_id, $post, bool $update): void {
    if (!carpe_github_deploy_should_dispatch($post_id, $post, $update)) {
        return;
    }

    carpe_github_deploy_dispatch($update ? 'published_post_updated' : 'post_published', $post_id);
}
add_action('save_post_post', 'carpe_github_deploy_on_save_post', 20, 3);

function carpe_github_deploy_on_transition(string $new_status, string $old_status, $post): void {
    if (!$post || $post->post_type !== 'post') {
        return;
    }

    if ($new_status === 'publish' || $old_status === 'publish') {
        carpe_github_deploy_dispatch('post_status_changed', (int) $post->ID);
    }
}
add_action('transition_post_status', 'carpe_github_deploy_on_transition', 20, 3);

function carpe_github_deploy_on_deleted_post(int $post_id, $post): void {
    if ($post && $post->post_type === 'post' && $post->post_status === 'publish') {
        carpe_github_deploy_dispatch('published_post_deleted', $post_id);
    }
}
add_action('before_delete_post', 'carpe_github_deploy_on_deleted_post', 20, 2);
