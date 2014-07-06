(function () {

	function SauceReporter(opt) {

		var htmlReporter = buster.reporters.html.create(opt);
		var originalEnd = htmlReporter['suite:end'];
		htmlReporter['suite:end'] = function (stats) {
			// @todo: is there a  way to warn about stats.deferred?
			var total = stats.tests;
			var failed = stats.failures + stats.errors + stats.timeouts;

			window.global_test_results = {
				total: total,
				failed: failed,
				passed: total - failed
//				runtime: 0 // @todo: buster does not give us this number :(
			};

			originalEnd.call(this, stats);
		};
		return htmlReporter;
	}

	buster.reporters.sauce = {
		create: function (opt) {
			return new SauceReporter(opt);
		}
	};

}());
