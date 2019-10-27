const winston = require('winston');

const { LEVEL, MESSAGE, SPLAT } = require('triple-beam')


console.log(LEVEL === Symbol.for('level'));
// true

console.log(MESSAGE === Symbol.for('message'));
// true

console.log(SPLAT === Symbol.for('splat'));
// true

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: {service: 'winston-example-1'},
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error'}),
    new winston.transports.File({ filename: 'combined.log', level: 'info'}),
    new winston.transports.Console(),
  ]
})

logger.log({ 
  level: 'info',
  message: 'Hello World!'
})

logger.log({
  level: 'error',
  message: 'Error in example!'
})