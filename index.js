const electron = require("electron");
const { getMenuTemplate } = require("./src/ui/parts/menuTemplate");
const { getCommentWindow } = require("./src/ui/windows/commentWindow");
const { getPaths, paths } = require("./src/utils/paths");

const { app, BrowserWindow, Menu } = electron;

let mainWindow;
let menuTemplate;

app.on("ready", () => {
    mainWindow = new BrowserWindow({});
    mainWindow.loadFile(paths.main);
    
    menuTemplate = getMenuTemplate(app, getCommentWindow);
    const mainMenu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(mainMenu);
});
