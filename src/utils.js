const winston = require('winston');

// setup logger to write to file
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.simple(),
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: `fizz-buzz.log`, options: { flags: 'w' } })
    ]
  });

module.exports = {logger};