import yargs from 'yargs'
import {hideBin} from 'yargs/helpers'
import fs from 'fs'
import path from 'path'

const argv = yargs(hideBin(process.argv)).argv
const { operation , title} = argv
const file = path.join(path.resolve(), '/teste.json')
const data = JSON.parse(fs.readFileSync(file, 'utf-8'))

switch (operation) {
    case 'list':
        data.map(item => console.log(`${item.id} => ${item.title}`))
    break;
    case 'add':
        const newId = data.map(item => item).length
        const newItem = {id :  String(newId), title : title} 
        data.push(newItem)
        const novoJson = JSON.stringify(data, null, 2)
        fs.writeFileSync(file, novoJson, 'utf-8')
        data.map(item => console.log(`${item.id} => ${item.title}`))

        break;

}





