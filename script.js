// This script allows you to pass in the name of a log file through a command line prompt along with either: 'unique', 'topurl', 'topip' or 'allstats'.
//  'unique' => returns the number of unique IP addresses from the log file.
//  'topurl' => returns the top 3 most visited URLs.
//  'topip' => returns the top 3 most active IP addresses.
//  'allstats' => returns all of the above.

fs = require('fs')

const fileName = process.argv[2]

const data = fs.readFileSync(fileName).toString()

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

process.argv.forEach(query => {
    if (query === 'unique') {
        console.log(countUniqueIP(linesFromData))
    } else if (query === 'topurl') {
        console.log(getTopThreeURL(linesFromData))
    } else if (query === 'topip') {
        console.log(getTopThreeIP(linesFromData))
    } else if (query === 'allstats') {
        console.log(countUniqueIP(linesFromData))
        console.log(getTopThreeURL(linesFromData))
        console.log(getTopThreeIP(linesFromData))
    }
})