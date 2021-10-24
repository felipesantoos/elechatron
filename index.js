const electron = require("electron");
const { getMenuTemplate } = require("./src/ui/parts/MenuTemplate");
const commentWindow = require("./src/ui/windows/CommentWindow");
const homeWindow = require("./src/ui/windows/HomeWindow");

const { app, Menu, ipcMain } = electron;

let homeApp;
let menuTemplate;

app.on("ready", () => {
    homeWindow.create();
    homeWindow.load();
    homeApp = homeWindow.get();
    
    menuTemplate = getMenuTemplate(app, commentWindow);
    const mainMenu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(mainMenu);
});

ipcMain.on("addComment", (event, value) => {
    commentWindow.quit();
    homeApp.webContents.send("addComment", value);
});

ipcMain.on("closeAllWindows", (event) => {
    app.quit();
});
