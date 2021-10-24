const electron = require("electron");
const { BrowserWindow, ipcMain } = electron;
const { paths } = require("../../utils/paths");

let homeWindow;

function create() {
    homeWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
    });

    homeWindow.on("close", () => closeAllWindows());
}

function load() {
    homeWindow.loadFile(paths.homePage);
}

function get() {
    return homeWindow;
}

function closeAllWindows() {
    ipcMain.emit("closeAllWindows");
}

module.exports.create = create;
module.exports.load = load;
module.exports.get = get;
