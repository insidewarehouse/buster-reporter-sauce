buster.testCase("Integration", {

	"should never fail": function () {
		// basically, if we get a green light in SauceLabs, we don't care about anything else
		buster.referee.assert(true);
	}

});
