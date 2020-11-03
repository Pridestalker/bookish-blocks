<?php
/**
 * Plugin Name: Block Template
 * Description: A boilerplate to use to create beautiful blocks.
 * Version: 1.0.0
 * Author: Elderbraum
 * Requires at least: 5.3
 * Requires PHP: 7.4
 */

defined('ABSPATH') || exit;

defined('BPT_FILE') || define('BPT_FILE', __FILE__);

add_action('init', function () {
    require_once __DIR__ . '/vendor/autoload.php';

    \Blocks\Plugin::make();
});
