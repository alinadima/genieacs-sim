class Plugin {

    constructor(options = {}) {

    }

    test() {
        console.log("test")
    }


    setUp() {
        console.log("setUp")
    }

    perform() {
        console.log("perform")
    }
}
module.exports = Plugin;