/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */

function willItSolve(chosenValue, piles, h) {
	let i = 0; 
	let currentValue = piles[0];
	let count = 0;
	while (i != piles.length) {
		if (currentValue <= chosenValue) {
            if (currentValue != 0)
			    count++;
			currentValue = piles[i + 1];
			i++;
		} else {
			count = count + Math.floor(currentValue/chosenValue);
            currentValue = currentValue % chosenValue;
		}
        if (count > h) {
            return false;
        }
	}
	return true;
}



function findOptimum(piles, left, right, h) {
	while (left < right) {
		let middle = left + Math.floor((right - left)/2);
		if (willItSolve(middle, piles, h)) {
			right = middle;
		} else {
			left = middle + 1;
		}
	}
	return left;
}

 

function findOptimumBananasToEat(piles, h) {
	let max = 1;
	for (let i = 0; i < piles.length; i++) {
		max = Math.max(max, piles[i]);    // n
    }
    return findOptimum(piles, 0, max, h);
}

var minEatingSpeed = function(piles, h) {
    return findOptimumBananasToEat(piles, h);
};