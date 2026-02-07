console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
console.log("printing odd numbers between 1 & 100");
for (let i = 1; i < 100; i++ )
{
	if ( i % 2 != 0 )
	{
		console.log(i);	
	}
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
console.log("Fizz Buzz exercise. Find numbers divisible by 3 and/or 5");
for ( i = 1; i <= 100; i++ )
{
	wordToPrint = "";

	if ( i % 3 == 0 )
	{
		wordToPrint = "FÌZZ";
	}
	if ( i % 5 == 0 )
	{
		wordToPrint += "BUZZ";
	}
	if ( wordToPrint != "" )
	{
		console.log("number ", i, "equals", wordToPrint);
	}
}

// Exercise 3a Section
console.log("EXERCISE 3a:\n==========\n");
console.log("Fizz Buzz exercise with while. Find numbers divisible by 3 and/or 5");
i = 1;
while ( i++ <= 100 )
{
	wordToPrint = "";

	if ( i % 3 == 0 )
	{
		wordToPrint = "FÌZZ";
	}
	if ( i % 5 == 0 )
	{
		wordToPrint += "BUZZ";
	}
	if ( wordToPrint != "" )
	{
		console.log("number ", i, "equals", wordToPrint);
	}
}

// Exercise 3b Section
console.log("EXERCISE 3b:\n==========\n");
console.log("Fizz Buzz exercise with do/while. Find numbers divisible by 3 and/or 5");
i = 1;
do
{
	wordToPrint = "";

	if ( i % 3 == 0 )
	{
		wordToPrint = "FÌZZ";
	}
	if ( i % 5 == 0 )
	{
		wordToPrint += "BUZZ";
	}
	if ( wordToPrint != "" )
	{
		console.log("number ", i, "equals", wordToPrint);
	}
} while ( ++i < 100 );

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
console.log("Find our given random number if it's between 100 and 500");

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for ( i = 0; i < n; i++ )
{
	if ( value == i )
	{
		console.log("Our random number", value, " was found!");
		break;
	}
}
if ( value != n ) 
{
	console.log("Did not find value = ", value, "n = ", n);
}

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
console.log("Customized Fizz Buzz exercise.");

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
n = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for ( i = start; i <= n; i++ )
{
	if ( i % fizzDivisor == 0 && i % buzzDivisor )
	{
		console.log("FIZZBUZZ, ", "start = ", start, " n = ", n, "fizzDivisor = ", fizzDivisor, " buzzDivisor = ", buzzDivisor);
	}
	else if ( i % fizzDivisor == 0 )
	{
		console.log("FIZZ, ", "start = ", start, " n = ", n, "fizzDivisor = ", fizzDivisor, " buzzDivisor = ", buzzDivisor);
		// console.log("FIZZ");
	}
	else if ( i % buzzDivisor == 0 )
	{
		console.log("BUZZ, ", "start = ", start, " n = ", n, 
			"fizzDivisor = ", fizzDivisor, " buzzDivisor = ", buzzDivisor);
		//console.log("BUZZ");
	}
}
