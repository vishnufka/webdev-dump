const langs = require('langs')
const franc = require('franc')

const text = process.argv[2]

console.log(text)

let code = franc(text)
console.log(code)

console.log(langs.where('3',code).name)