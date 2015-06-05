PWCC = window.PWCC || {};
PWCC.commentReply = (function( window, undefined ){
	// Avoid scope lookups on commonly used variables
	var document = window.document;
	var PWCC = window.PWCC;
	
	// initialise the events
	init();
	
	/**
	 * Add events to links classed .comment-reply-link.
	 *
	 * Searches the context for reply links and adds the JavaScript events 
	 * required to move the comment form. To allow for lazy loading of 
	 * comments this method is exposed as PWCC.commentReply.init()
	 *
	 * @since 0.2
	 *
	 * @param {HTMLElement} context The parent DOM element to search for links.
	 */
	function init( context ) {
		var links = replyLinks();
	}	


	/**
	 * Return all links classed .comment-reply-link
	 *
	 * @since 0.2
	 *
	 * @param {HTMLElement} context The parent DOM element to search for links.
	 *
	 * @return {HTMLCollection|NodeList|Array}
	 */
	function replyLinks( context ) {
		var selectorClass = 'comment-reply-link';
		var replyLinks;
		var allLinks;
		var i,l;
		
		// childNodes is a handy check to ensure the context is a HTMLElement
		if ( !context || !context.childNodes ) {
			context = document;
		}
		
		if ( document.getElementsByClassName ) {
			// fastest
			replyLinks = context.getElementsByClassName( selectorClass );
		}
		else if ( document.querySelectorAll ) {
			// fast
			replyLinks = context.querySelectorAll( '.' + selectorClass );
		}
		else {
			// slow (IE7 and earlier)
			replyLinks = [];
			allLinks = context.getElementsByTagName( 'a' );

			for ( i=0,l=allLinks.length; i<l; i++ ) {
				if ( hasClass( allLinks[i], selectorClass ) ) {
					replyLinks.push( allLinks[i] );
				}
			}
		}
		
		return replyLinks;
	}


	/**
	 * Check if an element includes a particular class
	 *
	 * @since 0.2
	 *
	 * @param {HTMLElement} element   The element to check for the class
	 * @param {String}      className The class to check for
	 * @returns Boolean
	 */
	function hasClass( element, className ) {
		var elementClass = ' ' + element.className + ' ';
		className = ' ' + className + ' ';
		
		if ( elementClass.indexOf( className ) === -1 ) {
			// class not found
			return false;
		}
		else {
			return true;
		}
	}


	return {
		init: init
	};
	
})( window );


var addComment = {
	moveForm : function(commId, parentId, respondId, postId) {
		var t = this, div, comm = t.I(commId), respond = t.I(respondId), cancel = t.I('cancel-comment-reply-link'), parent = t.I('comment_parent'), post = t.I('comment_post_ID');

		if ( ! comm || ! respond || ! cancel || ! parent )
			return;

		t.respondId = respondId;
		postId = postId || false;

		if ( ! t.I('wp-temp-form-div') ) {
			div = document.createElement('div');
			div.id = 'wp-temp-form-div';
			div.style.display = 'none';
			respond.parentNode.insertBefore(div, respond);
		}

		comm.parentNode.insertBefore(respond, comm.nextSibling);
		if ( post && postId )
			post.value = postId;
		parent.value = parentId;
		cancel.style.display = '';

		cancel.onclick = function() {
			var t = addComment, temp = t.I('wp-temp-form-div'), respond = t.I(t.respondId);

			if ( ! temp || ! respond )
				return;

			t.I('comment_parent').value = '0';
			temp.parentNode.insertBefore(respond, temp);
			temp.parentNode.removeChild(temp);
			this.style.display = 'none';
			this.onclick = null;
			return false;
		};

		try { t.I('comment').focus(); }
		catch(e) {}

		return false;
	},

	I : function(e) {
		return document.getElementById(e);
	}
};
