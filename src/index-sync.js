const { logger } = require('./utils');
const { getFizzBuzzSync } = require('./fizz-buzz');

logger.info('--- Fizz Buzz sync ---');
for(let i=1; i<=100; i++) {
    try {
        logger.info(`${i}: ${getFizzBuzzSync({withErrors: true}, i)}`);
    } catch(e) {
        logger.info(`It shouldn't break anything!`);
    }
}