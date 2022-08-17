const countUniqueIP = require('./unique-ip')
fs = require('fs')

const data = fs.readFileSync('test-data.log').toString()
const lines = data.split('\n')

test('counts unique ip addresses in log file', () => { 
    expect(countUniqueIP(lines)).toBe('The number of unique IP addresses is 6.')
})