const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;

const {nome, curso} = argv

console.log(`Hello ${nome}, meu curso é ${curso}`)