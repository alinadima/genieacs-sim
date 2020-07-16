class Plugin {

    constructor(options = {}) {

    }

    onEventReceived(event) {
        console.log("This function should implement the event handling operation specific to your plugin, based on TR69 changes.")
    }


    setUp(device) {
        console.log("This function should implement the setup operation specific to your plugin.")
    }

    perform() {
        console.log("This function should implement the perform main operation specific to your plugin.")
    }

    handleSetParameters(name, device) {
        console.log("This function should implement your specific handling for your parameters set via TR69.")
    }

    performFresh() {
        console.log("This function should implement the perform fresh operation specific to your plugin.")
    }

    addPluginParamsToDataModel(exisitingParamsArray) {
        console.log("This function should add your plugin specific params to the TR69 data model of the device.")
    }
}

module.exports = Plugin;