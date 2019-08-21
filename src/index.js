'use strict'

function isValid(s) {
	// early fail for empty string
	if (s.length === 0)
		return false

	let hsh = {};
	let min, max, maxC = 0, minC = 0;

	// build hash of letters and counts
	for (let i=0; i<s.length; i++) {
		let v = hsh[s[i]] || 0;
		v++;
		hsh[s[i]] = v;
	}

	// examine hash
	for (const key in hsh) {
		// set first count to max
		if (!max) {
			max = hsh[key];
			maxC++;
			continue;
		}

		// encountered second count
		if (!min && hsh[key] !== max) {
			// set to max if larger than current max
			if (hsh[key] > max) {
				min = max;
				minC = maxC;
				max = hsh[key];
				maxC = 1;
			} else {
				// set to min
				min = hsh[key];
				minC++;
			}
			continue;
		}

		if (hsh[key] === min) {
			minC++;
			continue;
		}

		if (hsh[key] === max) {
			maxC++;
			continue;
		}
		// early fail if encounter a third count
		if (hsh[key] !== min && hsh[key] !== max)
			return false
	}

	// if only one frequency of letter occ, return true
	if (minC === 0)
		return true;

	if (max - min !== 1) {
		// only situation in which the distance between max and min can be greater
		// than one is if the minimum count is 1 and the minimum frequency is 1
		if (min === 1 && minC === 1)
			return true
		return false
	}

	if (maxC <= 1)
		return true
	return false
}

module.exports = isValid;
