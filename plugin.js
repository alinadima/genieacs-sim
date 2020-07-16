class Plugin {

    constructor(options = {}) {

    }

    onEventReceived(event) {
        console.log("onEventReceived");
    }


    setUp(device) {
        console.log("setUp");
    }

    perform() {
        console.log("perform");
    }

    handleSetParameters(device) {
        console.log("Handle set parameters");
    }

    performFresh() {
        console.log("This function should implement the perform fresh operation specific to any plugin.")
    }

}
module.exports = Plugin;