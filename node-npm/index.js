// const yargs = require("yargs/yargs");
import yargs from 'yargs'
import { hideBin } from "yargs/helpers"

const argv = yargs(hideBin(process.argv)).argv;

const {nome, curso} = argv

console.log(`Hello ${nome}, meu curso é ${curso}`)
console.log(nome)