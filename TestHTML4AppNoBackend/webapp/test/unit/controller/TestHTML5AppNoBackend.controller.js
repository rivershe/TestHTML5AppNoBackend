/*global QUnit*/

sap.ui.define([
	"com/ths/systest/TestHTML4AppNoBackend/controller/TestHTML5AppNoBackend.controller"
], function (Controller) {
	"use strict";

	QUnit.module("TestHTML5AppNoBackend Controller");

	QUnit.test("I should test the TestHTML5AppNoBackend controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
