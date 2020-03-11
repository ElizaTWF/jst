# Build a dev env - node modules {Node, NPM, Jest} #

The plan:
	
	->Build a small feature - a maths app

			-> Build a test file using matchers running positive tests

					-> Build a test file using matchers running negative tests

						->Enhance your environment for editing and version control

							->Sync to git

								->Edit in Visual Studio
                
## Install your runtime environment ##               
You can install Node from this [link](https://nodejs.org/en/).

This will launch a Windows MSI installer to place the application on your PC. 

Accept all the installer defaults. 

If you have applications like Visual Studio installed, you may be asked if you want to integrate with it. This is not necessary for this tutorial. 

## Build dev environment ##
Create app folders-
C:\dev\jst

From a command prompt inside the jst folder, initialise the dev folder:
 npm init -y  
  
(The ‘-y’ switch means the initialisation defaults are accepted so you don’t have to provide all the information indicated by the “ “ as the application folders are being created)

## Add a command shortcut ## (optional)
Create a CMD shortcut in the jst folder:

Right-click in folder. ‘New’->’Shortcut’ -> follow the wizard

C:\Windows\System32\cmd.exe /K "cd C:\dev\jst"

When opening the prompt, remember to do it as an admin so you can carry out actions like installation and updating applications.

## Install Jest from the command line ##
From a command prompt inside the jst folder -

npm install --save-dev jest

(This will take a while if you are doing it for the 1st time)

The install runs over port 8888 (the same as Fiddler) so you can only run one or the other at a time

## Run a failing test ##
This shows that NPM will use Jest as your test runner.

npm test

The test runner will run (and fail as there are no tests written yet - obvs) 

This at least shows Jest is installed and NPM recognises it


## Running tests ##
Configure an NPM script for running the tests from the command line. 

Open up package.json and configure the script named "test" for running Jest:

	"scripts": {
	    "test": "jest"
	  },


## Tests Folder ##
By default Jest expects to find test files in a folder called tests in your project folder. 
So create this new folder using the mkdir command from the command window:


## Basic maths app ##
Open a new file in Notepad++
Paste in your maths app code:

	const sum = (a, b) => a + b
	const mul = (a, b) => a * b
	const sub = (a, b) => a - b
	const div = (a, b) => a / b
	
	module.exports = { sum, mul, sub, div }

Save the file as a JS file with the name ‘maths.js’

## Create a test file ##
Save the test code to a new file in the same folder as maths.js. 
Call it ‘maths.test.js’ / type: .js file

	const { sum, mul, sub, div } = require('./maths')

	test('Adding 1 + 1 equals 2', () => {
	  expect(sum(1, 1)).toBe(2)
	})
	test('Multiplying 1 * 1 equals 1', () => {
	  expect(mul(1, 1)).toBe(1)
	})
	test('Subtracting 1 - 1 equals 0', () => {
	  expect(sub(1, 1)).toBe(0)
	})
	test('Dividing 1 / 1 equals 1', () => {
	  expect(div(1, 1)).toBe(1)
	})
	

## Run the tests (again) ##
npm test 

The outcome should be a bit greener compared to your 1st run

These are basic unit tests for your maths app


## Matchers ##

	const { sum, mul, sub, div } = require('./maths')

	test('Adding 1 + 1 equals 2', () => {
	  expect(sum(1, 1)).toBe(2)
	})
Jest uses a concept called "matchers" to allow values to be checked in different ways. 


In the checking code, we have included the expression toBe() 
=> this is the only matcher used.


## Matchers (a refrence to come back to) ##
	toBe compares strict equality, using ===


	toEqual compares the values of two variables. If it’s an object or array, it checks the equality of all the properties or elements


	toBeNull is true when passing a null value


	toBeDefined is true when passing a defined value (opposite to the above)


	toBeUndefined is true when passing an undefined value


	toBeCloseTo is used to compare floating values, avoiding rounding errors


	toBeTruthy true if the value is considered true (like an if does)
	
	toBeFalsy true if the value is considered false (like an if does)


	toBeGreaterThan true if the result of expect() is higher than the argument


	toBeGreaterThanOrEqual true if the result of expect() is equal to the argument, or higher than the argument


	toBeLessThan true if the result of expect() is lower than the argument


	toBeLessThanOrEqual true if the result of expect() is equal to the argument, or lower than the argument


	toMatch is used to compare strings with regular expression pattern matching
	
	toContain is used in arrays, true if the expected array contains the argument in its elements set


	toHaveLength(number): checks the length of an array


	toHaveProperty(key, value): checks if an object has a property, and optionally checks its value


	toThrow checks if a function you pass throws an exception (in general) or a specific exception


	toBeInstanceOf(): checks if an object is an instance of a class
	
	
## Negative matchers ##
All the previous examples of matchers can be negated using .not. inside the statement.
Taking the code from our maths.test as an example:
Change the answers so they are “wrong” and then change the .tobe to .not.tobe
Save the file as neg.maths.tests and run the test runner again

* Compare *

	const { sum, mul, sub, div } = require('./maths')

	test('Adding 1 + 1 equals 2', () => {
	  expect(sum(1, 1)).toBe(2)
	})
	test('Multiplying 1 * 1 equals 1', () => {
	  expect(mul(1, 1)).toBe(1)
	})
	test('Subtracting 1 - 1 equals 0', () => {
	  expect(sub(1, 1)).toBe(0)
	})
	test('Dividing 1 / 1 equals 1', () => {
	  expect(div(1, 1)).toBe(1)
	})

	* To *
	
	const { sum, mul, sub, div } = require('./maths')

	test('Adding 1 + 1 does not equal 0', () => {
	  expect(sum(1, 1)).not.toBe(0)
	})
	test('Multiplying 1 * 1 does not equal 21', () => {
	  expect(mul(1, 1)).not.toBe(21)
	})
	test('Subtracting 1 - 1 does not equal 20', () => {
	  expect(sub(1, 1)).not.toBe(20)
	})
	test('Dividing 1 / 1 does not equal 13', () => {
	  expect(div(1, 1)).not.toBe(13)
	})


## Read all the things ##
[Matchers - the full list: Expect API doc](https://jestjs.io/docs/en/expect)

[Testing JS with Jest](Testing JS with Jest)

[Using-matchers](https://jestjs.io/docs/en/using-matchers)

[Jest tutorial](https://www.valentinog.com/blog/jest/)

[Thoughts-on-jest-snapshots](https://blog.scottlogic.com/2017/09/01/thoughts-on-jest-snapshots.html)

[Evaluating-redux-saga-test-libraries](https://blog.scottlogic.com/2018/01/16/evaluating-redux-saga-test-libraries.html)



