const { getRandomWord, getRandomWordSync } = require('word-maker');

function getFizzBuzzSync({ withErrors = false } = {}, n) {
    /*
        calling this function with { withErrors = true } would cascade the random error from getRandomWord
    */
    const randomWord = getRandomWordSync({withErrors});
    const fizzbuzzWord = evalFizzBuzz(n);
    return (fizzbuzzWord) ? fizzbuzzWord : randomWord;
}

function getFizzBuzz({ withErrors = false } = {}, n) {
    /*
        calling this function with { withErrors = true } would cascade the random error from getRandomWord
    */
    return getRandomWord({withErrors})
    .then(res => {
        const randomWord = res;
        const fizzbuzzWord = evalFizzBuzz(n);
        return (fizzbuzzWord) ? fizzbuzzWord : randomWord;
    });    
}

function evalFizzBuzz(n) {
    /*
        Thought process:
            1. find out numbers that are multiple of both 3 and 5 (numerical solution):
                The LCM (Least Common Multiple) of both 3 and 5 is 15. 
                hence, multiple of 15 is also the multiple of both 3 and 5.
            2. conditional construct:
                Have used switch case statement to keep the code readable.
    */
    switch(0) {
        case n%15:
            return 'FizzBuzz';
        case n%3:
            return 'Fizz';
        case n%5:
            return 'Buzz';
        default:
            return null; 
    }
}

module.exports = {getFizzBuzz, getFizzBuzzSync}