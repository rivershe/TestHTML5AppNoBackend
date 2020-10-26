/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/ths/systest/TestHTML4AppNoBackend/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
