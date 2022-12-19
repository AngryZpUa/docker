import fs from 'fs'

fs.appendFile('my-file.txt', 'File make Node.js', (err) => {
    if (err) throw err
    console.log('file saved!')
})

setTimeout(() => console.log('Finish'), 30000)