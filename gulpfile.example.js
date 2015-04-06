var elixir = require('laravel-elixir');
var ElixirGroup = require('./elixir-group');


ElixirGroup.register('taskA', function() {
	elixir(function(mix) {
		mix.less('app_in_a.less');
		/** and something else for Task A ... **/
	});
});

ElixirGroup.register('taskB', function() {
	elixir(function(mix) {
		mix.less('app_in_b.less');
		/** and something else for task B ... **/
	});
});

ElixirGroup.start();

/**
 * usage in terminal:
 * 		gulp [task] --taskA
 * 		gulp [task] --taskB
 * 		gulp [task]
 */