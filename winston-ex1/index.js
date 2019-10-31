const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, prettyPrint, colorize, simple, printf } = format;

// createLogger 함수를 통해 logger 를 생성합니다.
const logger = createLogger({
  format: combine(colorize(), timestamp(), simple()),
  level: 'info',
  transports: [
    new transports.Console()
  ]
})

// logger.info(`[DEBUG] 디버깅 모드에 진입하였습니다.`)


const logger2 = createLogger({
  transports: [
    new transports.Console({
      format: format.simple()
    })
  ]
})

logger2.info('helloworld')


// const { createLogger, format, transports } = require('winston');
// const { combine, timestamp, colorize, printf } = format;

const level = process.env.LOG_LEVEL || 'debug';

const myFormat = printf(({ level, message, label, timestamp }) => {
	return `${timestamp} ${level}: ${message}`;
});

const logger3 = createLogger({
	format: combine(colorize(), timestamp(), myFormat, format.json()),
	transports: [new transports.Console()]
});


logger3.info('helloworld')