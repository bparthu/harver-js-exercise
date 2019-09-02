Harver JS Exercise
============================

## Setup project

Set this repository up by running:

```
cd /path/to/harver-js-test
npm install
```
run the app in default(async) / sync
```
npm run start
npm run start:sync
```
run unit tests
```
npm run test
```

## Tasks

Complete these tasks in order. If you can't complete a task, just proceed with the next one.

1. Print numbers from 1 to 100 to the console, but for each number also print a random word using the function `getRandomWordSync`. E.g.

```
1: four
2: firm
3: shape
4: choice
5: coach
6: purple
...
100: buffalo
```

2. Modify your code to be a "Fizz Buzz" program. That is, print the numbers as in the previous step, but
for multiples of three, print "Fizz" (instead of the random word), for multiples of five, print "Buzz" and
for numbers which are both multiples of three and five, print "FizzBuzz".

3. Create a version of steps *1* and *2* using the **asynchronous** function, `getRandomWord`. This function
returns a Promise, which resolves to a random word string. The numbers may or may not be in numerical order.

4. Add error handling to both the synchronous and asynchronous solutions (calling `getRandomWord({ withErrors: true })` will intermitently throw an error instead of return a random word). When an error is caught, the programm should print "It shouldn't break anything!" instead of the random word, "Fizz", "Buzz" or "FizzBuzz"

5. For **Node.JS developers**: Instead of printing the console. Write the information to a file in the root of this project. For **Frontend** developers, send your result to an HTTP endpoint (since there is no running endpoint, this
part of your solution does not need to actually run)
