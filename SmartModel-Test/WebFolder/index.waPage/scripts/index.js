
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var buttonRunTests = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	buttonRunTests.click = function buttonRunTests_click (event)// @startlock
	{// @endlock
		var result;
		try {
		    result = testSmartModel.runTests();
    	    console.info(result);
    		testLogs = result.data;
    		if (testLogs)
        		$('errorDivTestFailed').html(result.data.nbFailed ? result.data.nbFailed + ' tests failed' : '');
    		sources.testLogs.sync();
    	} catch (e) {
    	    console.error(e);
    	}
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("buttonRunTests", "click", buttonRunTests.click, "WAF");
// @endregion
};// @endlock
