const getTopThreeIP = require('./top-three-ip')
fs = require('fs')

const data = fs.readFileSync('test-data.log').toString()
const lines = data.split('\n')

test('get top 3 most active IPs from log file', () => { 
    expect(getTopThreeIP(lines)).toBe('The top 3 most active IP addresses are 177.71.128.21 with 6 visits, 168.41.191.40 with 3 visits and 50.112.00.28 with 2 visits.')
})