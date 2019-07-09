module.exports = (app,  express, appRoot) => {
    global.appRoot = appRoot
    global.app = app
    global.express = express
}