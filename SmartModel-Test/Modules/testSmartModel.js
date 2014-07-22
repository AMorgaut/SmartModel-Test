
/**
 * @method runTests
 * @param {string} [test] optionnal specific test name (by default all tests are launched
 * @returns {object}
 **/
exports.runTests = function runTests(test) {
    var testSuite = require('smartModel/tests');
    testSuite = testSuite['test ' + test.toUpperCase()] || testSuite;
    var nbFails = require('test').run(testSuite);
	return {
	    nbFails: nbFails,
	    logs: console.content
	};
};
