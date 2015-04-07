# laravel-elixir-group
Group the elixir tasks for [Laravel Elixir](https://github.com/laravel/elixir).

## Installation

	npm install laravel-elixir-group --save-dev

## Usage

In your Gulpfile, firstly you should import the module.

```javascript
var elixir = require('laravel-elixir');
var ElixirGroup = require('laravel-elixir-group');
```

Then, you can add a task group named 'taskA' like this:

```javascript
ElixirGroup.register('taskA', function() {
	elixir(function(mix) {
		mix.less('app_in_a.less');
		/** and something else for Task A ... **/
	});
});
```

and maybe you will add 'taskB':

```javascript
ElixirGroup.register('taskB', function() {
	elixir(function(mix) {
		mix.less('app_in_b.less');
		/** and something else for task B ... **/
	});
});
```

At last, you start to run task:

	ElixirGroup.start();

## Command

In your terminal, you just need to add the group option like this:

	gulp [task] --taskA
	gulp [task] --taskB

Or run all tasks by adding nothing as usual.

	gulp [task]


## Bugs and Contributions

If you find a bug, please [post an issue on GitHub](https://github.com/HyanCat/laravel-elixir-group/issues) describing the problem.

Or better yet, make a pull request with the solution.

And any questions can exchange message with [Email](mailto://hyancat@live.cn).

## License

This is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT)