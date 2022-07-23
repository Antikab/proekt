const arr = [1, 2, 3, 4, 5];


function worker(array) {
	for (let i = 0; i < array.length; i++) {
		makeWork(array[i], work);

	}
}

function makeWork(val, work) {
	console.log(val);
	work(val);
}

function work(ful) {
	console.log(`nigger: ${ful * 2}`);
}

worker(arr);

