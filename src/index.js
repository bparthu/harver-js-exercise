const { logger } = require('./utils');
const { getFizzBuzz } = require('./fizz-buzz');

/*
    thought process
    ---------------
    1. Promise handling
        - I would recommend using async / await, if we use node version 8.x and above
        - to keep things basic, i am using good old promise then / catch methods 
        - Note: code looks much simpler / cleaner, if we use async / await see the example at bottom
    2. Print numbers in numerical order vs random
        This is closely tied up with how we resolve promises. Default / basic approach always resolves promises in random.
        There are various approaches to print numbers in numerical order.
        Since the requirements states that the numerical order doesn't matter, i am keeping default / basic approach.
*/


logger.info('--- Fizz Buzz async ---');
for(let i=1; i<=100; i++) {
    getFizzBuzz({withErrors: true}, i)
    .then(res => {
        logger.info(`${i}: ${res}`);
    })
    .catch(err => {
        logger.info(`It shouldn't break anything!`);
    });
};


/*
    example code using async / await 

    (async () => {
        logger.info('--- Fizz Buzz async ---');
        for(let i=1; i<=100; i++) {
            try {
                logger.info(`${i}: ${await getFizzBuzz({withErrors: true}, i)}`);
            } catch(e) {
                logger.info(`It shouldn't break anything!`)
            }
        };
    })()
    .catch(e => {
        // unhandled promise rejections
    })
*/