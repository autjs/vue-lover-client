let px2rem = require('postcss-px2rem-exclude')

// Design Width -- px
const DesignWidth = 750

// config
let px2remConfig = {
	remUnit: 100,
	exclude: /node_modules/i
}


module.exports = {
	plugins: [
		px2rem(px2remConfig)
	]
}