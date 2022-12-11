const dayjs = require("dayjs")
var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

console.log(dayjs('2002-05-14').format('DD/MM/YYYY')) //exibir a data no formato que quiser
console.log(days('2002-05-14').fromNow(true))