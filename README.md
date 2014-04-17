bootstrap_view
==============

Small, simple but effective jQuery function to get the active view class from bootstrap (xs, sm, md or lg)

For TodoTipo (www.todotipo.nl) I am working on a responsive design that has some Javascript actions that do/don't or need different handling depending on the screen the site is shown.

To do this, I could build a 'if width larger than X and smaller than Y' set of statements, and that way decide when it is xs, sm, md or lg , but if in any case I would want to reuse this or have different breakpoints in my CSS, I would have to patch the code.

Some google queries later I found a nice post on stackoverflow and decided to use that as base for this solution.

Please, credits for Raphael_ - http://stackoverflow.com/a/15150381/1040669 - his input was the basis to this function.

usage
=====
```$.bootstrap_view.activeClass``` to get a string with the active view class on the last check; returns: xs, sm, md or lg . on init a check is done

```$.bootstrap_view.checkClass``` to do a new check; eg called on window resize. returns: xs, sm, md or lg . Value is stored in activeClass
