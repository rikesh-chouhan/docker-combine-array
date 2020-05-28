const START_SQ_BRACK = '[';
const END_SQ_BRACK = ']';

function main() {

	var args = process.argv.slice(2);

	var appendString = '';

	args.forEach(function(val, index, array) {
		appendString = appendString.concat(val);
	});

	console.log('About to parse string: ' + appendString);

	try {
		var theArrays = createArrays(appendString);
		var oneArray = combineArrays(theArrays[0], theArrays[1]);
		console.log('Combined Array: ' + oneArray);
	} catch (e) {
		console.error(e.name + ': ' + e.message);
	}
}


function createArrays(passedString) {
	let arrayOfArrays = [];
	let bracketArray = [];
	let arrayCounter = -1;
	let numString = '';

	for (let i = 0; i < passedString.length; i++) {
		if (passedString[i] === START_SQ_BRACK) {
			bracketArray.push(i);
			arrayCounter++;
			arrayOfArrays[arrayCounter] = [];
		} else if (passedString[i] === END_SQ_BRACK) {
			if (bracketArray.length === 0) {
				throw new Error('Did not find matching open bracket for close: ' + END_SQ_BRACK);
			} else if (passedString.charAt(bracketArray[bracketArray.length - 1]) === START_SQ_BRACK) {
				let numString = passedString.substring(bracketArray[bracketArray.length - 1]+1, i);
				if(numString.trim().length > 0) {
					arrayOfArrays[arrayCounter] = getNumberArray(numString);
				}
				bracketArray.push(i);
			}
		} else {
			// do nothing
		}
	}
	if (arrayCounter < 1) {
		throw new Error('Only 1 array was provided, expected 2.');
	}
	if (bracketArray.length % 2 !== 0) {
		throw new Error('Brackets not correctly placed');
	}


	return arrayOfArrays;
}

function getNumberArray(passedString) {
	let arrNums = [];
	passedString.split(',').filter(x => !isNaN(x)).map(x => arrNums.push(parseInt(x)));

	return arrNums;
}

function combineArrays(array1, array2) {
	let counter1 = 0;
	let counter2 = 0;
	let combined = [];

	while (counter1 < array1.length && counter2 < array2.length) {
		if (array1[counter1] <= array2[counter2]) {
			combined.push(array1[counter1]);
			counter1++;
		} else {
			combined.push(array2[counter2]);
			counter2++;
		}
	}

	while (counter1 < array1.length) {
		combined.push(array1[counter1]);
		counter1++;
	}

	while (counter2 < array2.length) {
		combined.push(array2[counter2]);
		counter2++;
	}

	return combined;
}

main();
