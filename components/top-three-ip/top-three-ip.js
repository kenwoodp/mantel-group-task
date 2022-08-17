fs = require('fs')

const data = fs.readFileSync('data.log').toString()

const linesFromData = data.split('\n')

const getTopThreeIP = lines => {
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
    let entriesIP = Object.entries(indexIP)
    let sortedIndexIP = entriesIP.sort((a, b) => b[1] - a[1])
    return `The top 3 most active IP addresses are ${sortedIndexIP[0][0]} with ${sortedIndexIP[0][1]} visits, ${sortedIndexIP[1][0]} with ${sortedIndexIP[1][1]} visits and ${sortedIndexIP[2][0]} with ${sortedIndexIP[2][1]} visits.`
}

console.log(getTopThreeIP(linesFromData))

module.exports = getTopThreeIP