
const multiModule = require('./module');

console.log(multiModule);

const result = multiModule.calc.plus(1,3);
multiModule.print.valuePrinter(result);

const result2 = multiModule.calc.minus(1,3);
multiModule.print.valuePrinter(result2);
