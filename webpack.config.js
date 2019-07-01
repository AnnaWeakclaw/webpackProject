module.exports = {
    // name of the top level file
    entry: "./app.js",
    // object containing your output configuration
    output: {
        filename: "bundle.js"
    },
    // After watch is set to true, when you run the webpack command, webpack will rebuild your bundle when any of your files change.
    watch: true
}