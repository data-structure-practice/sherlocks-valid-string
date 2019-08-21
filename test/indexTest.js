'use strict'

const isValid = require('../src/index');
const expect = require('expect.js');

describe("SherlocksValidString", function() {
	describe("isValid", function() {
		it("returns false for an empty string", function emptyStringTest() {
			expect(isValid('')).to.eql(false);
		});

		it("returns true for \"abcd\"", function shortTrueTest() {
			expect(isValid('abcd')).to.eql(true);
		});

		it("returns true for \"abcdefghhgfedecba\"", function longTrueTest() {
			expect(isValid('abcdefghhgfedecba')).to.eql(true);
		});

		it("returns false for \"aabbcd\"", function shortFalseTest() {
			expect(isValid('aabbcd')).to.eql(false);
		});

		it("returns false for \"aabbccddeefghi\"", function longFalseTest() {
			expect(isValid('aabbccddeefghi')).to.eql(false);
		});
	});
});
