/*
* bootstrap_view - 0.1
*
* Colin Myerscough - Parcye/Code56 - www.parcye.com / www.code56.nl / twitter.com/Parcye facebook.com/Parcye
* Please, credits for Raphael_ - http://stackoverflow.com/a/15150381/1040669 - his input was the basis to this function.
*
* Date: 18-04-2014 
*
* Background info: For TodoTipo (www.todotipo.nl) I am working on a responsive design that has some Javascript actions that do/don't or need different handling depending on the screen the site is shown.
* To do this, I could build a 'if width larger than X and smaller than Y' set of statements, and that way decide when it is xs, sm, md or lg , but if in any case I would want to reuse this or have different breakpoints in my CSS, I would have to patch the code.
* Some google queries later I found a nice post on stackoverflow and decided to use that as base for this solution.
*
*/

(function( $ ) {
	$.bootstrap_view = function() {
		var currentClass = null;
		var doCheck = function() {
			var envs = ['xs', 'sm', 'md', 'lg'];

			$el = $('<div>');
			$el.appendTo($('body'));

			for (var i = envs.length - 1; i >= 0; i--) {
				var env = envs[i];

				$el.addClass('hidden-'+env);
				if ($el.is(':hidden')) {
					$el.remove();
					currentClass = env;
					return env
				}
			};
		}
		doCheck();
		return {
			activeClass: currentClass,
			queryClass: doCheck
		}
	}
}( jQuery ));

/*
* USAGE:
* $.bootstrap_view.activeClass to get a string with the active view class on the last check; returns: xs, sm, md or lg . on init a check is done
* $.bootstrap_view.checkClass to do a new check; eg called on window resize. returns: xs, sm, md or lg . Value is stored in activeClass
*/
