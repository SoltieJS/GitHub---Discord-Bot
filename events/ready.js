//⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ C O N S T S ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓

const client = require("../index");

//⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ E V E N T⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓ ⁓

client.on("ready", () =>
    console.log(`${client.user.tag} is up and ready to go!`)
);