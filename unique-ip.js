fs = require('fs')

const data = fs.readFileSync('test-data.log').toString()

const linesFromData = data.split('\n')

const countUniqueIP = lines => {
    let indexIP = lines
        .map(line => line.split(' '))
        .reduce((prevIndexIP, line) => {
            if (prevIndexIP[line[0]]) {
                prevIndexIP[line[0]]++
                return prevIndexIP
            } else {
                prevIndexIP[line[0]] = 1
                return prevIndexIP
            }
        }, {})
    let uniqueIPs = Object.keys(indexIP).length
    return `The number of unique IP addresses is ${uniqueIPs}.`
}

console.log(countUniqueIP(linesFromData))

module.exports = countUniqueIP