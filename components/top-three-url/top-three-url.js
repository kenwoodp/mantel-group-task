fs = require('fs')

const data = fs.readFileSync('data.log').toString()

const linesFromData = data.split('\n')

const getTopThreeURL = lines => {
    let indexURL = lines
        .map(line => line.split(' '))
        .reduce((prevIndexURL, line) => {
            if (prevIndexURL[line[6]]) {
                prevIndexURL[line[6]]++
                return prevIndexURL
            } else {
                prevIndexURL[line[6]] = 1  
                return prevIndexURL
            } 
        }, {})
    let entriesURL = Object.entries(indexURL)
    let sortedEntriesURL = entriesURL.sort((a, b) => b[1] - a[1])
    return `The top 3 most visited URLs are ${sortedEntriesURL[0][0]} with ${sortedEntriesURL[0][1]} visits, ${sortedEntriesURL[1][0]} with ${sortedEntriesURL[1][1]} visits and ${sortedEntriesURL[2][0]} with ${sortedEntriesURL[2][1]} visits.`
}

console.log(getTopThreeURL(linesFromData))

module.exports = getTopThreeURL