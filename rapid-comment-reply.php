<?php
/*
Plugin Name: Rapid Comment Reply
Description: Reworking of WordPress's frontend comment-reply.js to be unobtrusive. Refer to trac ticket #31590.
Version: 1.1.1
Author: Peter Wilson
Author URI: http://peterwilson.cc/
*/

/**
 * Faux namespace.
 *
 * Class PWCC_RapidCommentReply
 */
class PWCC_RapidCommentReply {

	/**
	 * @var string Plugin version.
	 */
	private $version;

	/**
	 * Bootstrap the plugin.
	 *
	 * Runs on the `plugins_loaded` action.
	 *
	 * @global string $wp_version The current version of WordPress.
	 */
	function __construct() {
		global $wp_version;
		$this->version = '2.0.0';

		if ( $wp_version !== '5.1' ) {
			return;
		}

		add_action( 'wp_enqueue_scripts', array( $this, 'replace_comment_reply_source' ), 99 );
	}

	/**
	 * Replace WordPress core's comment-reply.js with this plugin's version.
	 *
	 * Runs on the action `wp_enqueue_scripts, 99`.
	 */
	function replace_comment_reply_source() {
		global $wp_scripts;

		$suffix = SCRIPT_DEBUG ? '' : '.min';

		$wp_scripts->registered['comment-reply']->src = plugins_url( "comment-reply$suffix.js", __FILE__ );
		$wp_scripts->registered['comment-reply']->ver = $this->version;
	}
}

function pwcc_rapid_comment_reply_load(){
	global $pwcc_rapid_comment_reply;
	$pwcc_rapid_comment_reply = new PWCC_RapidCommentReply();
}
add_action( 'plugins_loaded', 'pwcc_rapid_comment_reply_load' );
