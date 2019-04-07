const fs = require('fs');

fs.readdirSync('../').forEach(file => {
    console.log(fs.statSync(`../${file}`).isDirectory() ? `* ${file}` : `- ${file}`)
})
console.log(`Read Completed`)
fs.rename(`./my.txt`, `./our.txt`, (err) => {
    if(err) throw err
    console.log(`File Renamed Successfully`)
})