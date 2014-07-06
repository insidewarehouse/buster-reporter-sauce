module.exports = function (grunt) {
	grunt.initConfig({
		"saucelabs-custom": {
			dist: {
				options: {
					testname: "buster-reporter-sauce",
					browsers: [
						{ browserName: 'chrome' }
					],
					urls: [
						"http://127.0.0.1:8000/?reporter=sauce"
					]
				}
			}
		}
	});

	grunt.loadNpmTasks("grunt-saucelabs");
	grunt.loadNpmTasks("grunt-release");

	grunt.registerTask("default", [ "test" ]);
	grunt.registerTask("test", [ "buster-static", "saucelabs-custom" ]);

	grunt.registerTask("buster-static", function () {
		// @todo: move buster-static task to grunt-buster package
		var done = this.async();

		var resolveBin = require("resolve-bin"),
			cp = require('child_process');

		resolveBin("buster", { executable: "buster-static" }, function (e, busterStaticBinPath) {
			if (e) {
				grunt.fail.fatal(e);
				return;
			}
			grunt.log.writeln("Spawning " + busterStaticBinPath + " --port 8000");
			var busterStaticProcess = cp.spawn(process.execPath, [ busterStaticBinPath, "--port", "8000" ], {
				env: process.env,
				setsid: true
			});
			busterStaticProcess.stdout.once('data', function () {
				done();
			});
			busterStaticProcess.stderr.on('data', function (data) {
				grunt.fail.fatal(data);
			});
			process.on("exit", function () {
				busterStaticProcess.kill();
			})
		})
	});

};
