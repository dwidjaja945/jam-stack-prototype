exports.handler = function (event, context, callback) {
    /**
     * @event: info about incoming event
     * @context: context in which the function was evoked
     * @callback: function that will be called when completed
     */

    callback(null, {
        statusCode: 200,
        body: "JAM has been made"
    })
}