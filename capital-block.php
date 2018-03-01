<?php
/**
 * Plugin Name: Capital Block
 * Plugin URI: https://capitalp.jp/
 * Description: Original custom blocks for Gutenberg.
 * Version: 0.8.0
 * Author: Takahashi_Fumiki
 * Author URI: https://capitalp.jp
 * License: GPL-3.0 or later
 * License URI: https://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain: capitalb
 * Domain Path: languages
 */


defined( 'ABSPATH' ) || die();

add_action( 'enqueue_block_editor_assets', function() {
	// Random image.
	wp_enqueue_script(
		'myplugin-block',
		plugins_url( 'block-extended.js', __FILE__ ),
		[ 'wp-blocks', 'wp-element' ]
	);
} );
