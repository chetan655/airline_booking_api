const { createLogger, format, transports } = require("winston");
const { combine, timestamp, label, printf } = format;

const customFormat = printf(({ level, message, timestamp, label }) => {
  return `${timestamp} :  ${level}: ${message}`;
});

const logger = createLogger({
  format: combine(timestamp({ format: "YYYY-MM-DD HH-mm:ss" }), customFormat),
  transports: [
    new transports.Console(),
    new transports.File({ filename: "all.log" }),
  ],
});

module.exports = logger;
