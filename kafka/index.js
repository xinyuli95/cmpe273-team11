const produce = require("./produce")
const consume = require("./consume")

// call the `produce` function and log an error if it occurs
produce().catch((err) => {
	console.error("error in producer: ", err)
})

