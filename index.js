const electron = require("electron");
const { getMenuTemplate } = require("./src/ui/parts/MenuTemplate");
const { getCommentWindow } = require("./src/ui/windows/CommentWindow");
const { paths } = require("./src/utils/paths");

const { app, BrowserWindow, Menu } = electron;

let mainWindow;
let menuTemplate;

app.on("ready", () => {
    mainWindow = new BrowserWindow({});
    mainWindow.loadFile(paths.homePage);
    mainWindow.on("closed", () => app.quit());
    
    menuTemplate = getMenuTemplate(app, getCommentWindow);
    const mainMenu = Menu.buildFromTemplate(menuTemplate);
    Menu.setApplicationMenu(mainMenu);
});
