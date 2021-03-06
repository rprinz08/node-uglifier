'use strict';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
define(["."], function (Graph) {///////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


	describe("constructor", function () {


		it("is present", function () {
			expect(typeof Graph).toBe('function');
		});


		it("never throws any exception", function () {
			expect(function () {
				new Graph()
			}).not.toThrow();
		});


		it("returns an object of type Graph", function () {
			var graph = new Graph();
			expect(graph instanceof Graph).toBeTruthy();
		});


	});


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
});/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
