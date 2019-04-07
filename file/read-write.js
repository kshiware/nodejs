const fs = require('fs')

let data = fs.readFileSync(`./our.txt`, 'utf8')
console.log(`${data} `)
console.log(`------------------------------`)

fs.readFile(`./our.txt`, `utf8`, (err, data) => {
    if (err) throw err
    // your logic
    let fileData = data
    fs.writeFile(`./our.txt`, fileData.replace(`for`, `from`), err => {
        if(err) throw err
        console.log(`Data written successfully`)
    })
    console.log(data)
})
console.log(`Executed`)

fs.writeFile(`./our.txt`, `Data written for code`, err => {
    if(err) throw err
    console.log(`Data written successfully`)
})
fs.appendFile(`./our.txt`, `This is appended data`, err => {
    if(err) throw err
    console.log(`Data appended successfully`)
})