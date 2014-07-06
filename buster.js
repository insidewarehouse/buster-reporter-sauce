var config = module.exports;

config["buster-reporter-sauce-tests"] = {
	rootPath: ".",
	environment: "browser",
	src: [
		"index.js"
	],
	tests: [
		"test/*.test.js"
	],
	extensions: [ require("./index") ]
};
