const getTopThreeURL = require('./top-three-url')
fs = require('fs')

const data = fs.readFileSync('test-data.log').toString()
const lines = data.split('\n')

test('get top 3 most visited URLs from log file', () => { 
    expect(getTopThreeURL(lines)).toBe('The top 3 most visited URLs are /docs/top-10-stuart-little-quotes/ with 5 visits, /home/about-us/ with 3 visits and /art/home/ with 2 visits.')
})