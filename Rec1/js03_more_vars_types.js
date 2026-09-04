function demo() {
	const i1 = 10;
	const i2 = 20;

	const f1 = 1.5;
	const f2 = 3.14;

	const si = "5";
	const sf = "5.5";


	// Expected result: 1: i1 is 10 and has type number
	console.log(`1: i1 is ${i1} and has type ${typeof(i1)}`);
	
	// Expected result: 2: i2 is 20 and has type number
	console.log(`2: i2 is ${i2} and has type ${typeof(i2)}`);

	// Expected result: 3: f1 is 1.5 and has type number
	console.log(`3: f1 is ${f1} and has type ${typeof(f1)}`);

	// Expected result: 4: f2 is 3.14 and has type number
	console.log(`4: f2 is ${f2} and has type ${typeof(f2)}`);

	// Expected result: 5: si is 5 and has type string
	console.log(`5: si is ${si} and has type ${typeof(si)}`);

	// Expected result: 6: sf is 5.5 and has type string
	console.log(`6: sf is ${sf} and has type ${typeof(sf)}`);


	// Expected result: 7: parseInt(si) is 5 and has type number
	console.log(`7: parseInt(si) is ${parseInt(si)} and has type ${typeof(parseInt(si))}`);

	// Expected result: 8: parseInt(sf) is 5 and has type number
	console.log(`8: parseInt(sf) is ${parseInt(sf)} and has type ${typeof(parseInt(sf))}`);

	// Expected result: 9: parseFloat(si) is 5 and has type number
	console.log(`9: parseFloat(si) is ${parseFloat(si)} and has type ${typeof(parseFloat(si))}`);

	// Expected result: 10: parseFloat(sf) is 5.5 and has type number
	console.log(`10: parseFloat(sf) is ${parseFloat(sf)} and has type ${typeof(parseFloat(sf))}`);


	const s1 = "a string";
	const s2 = "a string";
	const s3 = s1;

	// Expected result: s1 is 
	//                  equal to 
	//                  s2! 
	console.log("\n\ns1 is ");
	if (s1 == s2) {
		console.log("equal to");
	}
	else if (s1 < s2) {
		console.log("less than");
	}
	else if (s1 > s2) {
		console.log("greater than");
	}
	console.log("s2!");
	
	// Expected result: s1 is 
	//                  equal to 
	//                  s3!
	console.log("\n\ns1 is ");
	if (s1 == s3) {
		console.log("equal to");
	}
	else if (s1 < s3) {
		console.log("less than");
	}
	else if (s1 > s3) {
		console.log("greater than");
	}
	console.log("s3!");
}

demo();
