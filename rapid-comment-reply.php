<?php
/*
Plugin Name: Rapid Comment Reply
Description: Reworking of WordPress's frontend comment-reply.js to be unobtrusive. Refer to trac ticket #31590.
Version: 0.1
Author: Peter Wilson
Author URI: http://peterwilson.cc/
*/


class PWCC_RapidCommentReply {
	
	function __construct() {
		add_action( 'wp_enqueue_scripts', array( $this, 'replace_comment_reply_source' ), 99 );
	}
	
	function replace_comment_reply_source() {
		global $wp_scripts;
		
		$wp_scripts->registered['comment-reply']->src = plugins_url( 'comment-reply.js', __FILE__ );
	}

}

new PWCC_RapidCommentReply();