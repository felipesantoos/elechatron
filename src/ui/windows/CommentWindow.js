const electron = require("electron");
const { BrowserWindow, Menu } = electron;
const { paths } = require("../../utils/paths");
const { menuDeveloper } = require("../parts/MenuTemplate");

let commentWindow;

function create() {
    commentWindow = new BrowserWindow({
        width: 500,
        height: 300,
        title: "Adicionar comentário",
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
    });
}

function load() {
    commentWindow.loadFile(paths.commentPage);
}

function get() {
    return commentWindow;
}

function quit() {
    commentWindow.close();
    commentWindow = null;
}

function setMenu() {
    if (process.platform !== "darwin") {
        // commentWindow.setMenu(null);
        commentWindow.setMenu(Menu.buildFromTemplate([menuDeveloper]));
    }
}

module.exports.create = create;
module.exports.load = load;
module.exports.get = get;
module.exports.quit = quit;
module.exports.setMenu = setMenu;
