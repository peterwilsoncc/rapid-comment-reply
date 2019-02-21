=== Rapid Comment Reply ===
Contributors: peterwilsoncc
Tags: comments, javascript
Requires at least: 4.1
Tested up to: 4.3-beta
Stable tag: 2.0
License: GPL
License URI: https://wordpress.org/about/gpl/

Bleeding edge version of WordPress's comment-reply.js.

== Description ==
The bleeding edge version of WordPress's comment reply JavaScript.

= Browser support =
Browser support is identical to that in core.

Visitors using older browsers will use a non-JavaScript fallback when replying to comments. In practical terms, on most sites the fallback will be limited to visitors using IE8 or earlier.

= Contributing =

Development of this plugin is done on [Github](https://github.com/peterwilsoncc/rapid-comment-reply). Pull requests and issue reports are welcome.

== Installation ==
Install this from your WordPress dashboard

== Changelog ==

= 2.0 =
* Re-purposed to include hot-fixes for WordPress core.

= 1.1 =
* Adds touch events to JavaScript to avoid 300ms delay
* Uses element.dataset as data-* attribute getter when possible

= 1.0.1 =
* Fix incompatibility with Jetpack Comments
* Use config object for class names and IDs

= 1.0 =
* Refactor the move form code to use modern web techniques

= 0.4 =
* Move getElementByID alias out of addComment scope
* Replicate changes to link format in WordPress core

= 0.3 =

* Check for modern events and selectors in browsers (cuts the mustard)
* Set version of JavaScript file correctly
* Give class instance a PHP global
* Initialise after plugins have loaded

= 0.2 =

* Unobtrusive JS using the existing functions. 

= 0.1 =

* Initial version: replaces the WordPress comment-reply.js with the plugin's version

== Upgrade Notice ==

= 1.1 =

Now featuring touch events, removes delay on touch devices.

= 1.0.1 =
Now compatible with Jetpack comments.

= 2.0 =
Includes hot-fixes to be released in WordPress 5.1.1.
