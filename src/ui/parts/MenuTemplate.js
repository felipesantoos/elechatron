function smAddComment(commentWindow) {
    return {
        label: "Adicionar comentário",
        accelerator: defAccelerator("Ctrl+N", "Cmd+N"),
        click() {
            commentWindow.create();
            commentWindow.load();
            commentWindow.setMenu();
        },
    };
};

function smQuit(app) {
    return {
        label: "Sair",
        accelerator: defAccelerator("Ctrl+Q", "Cmd+Q"),
        click() {
            app.quit();
        },
    };
};

const smReload = {
    role: "reload"
};

const smToggleDeveloperTools = {
    label: "Toggle Developer Tools",
    accelerator: defAccelerator("Ctrl+Shift+I", "Cmd+Alt+I"),
    click(item, focusedWindow) {
        focusedWindow.toggleDevTools();
    },
};

const menuDeveloper = {
    label: "Development",
    submenu: [
        smReload,
        smToggleDeveloperTools,
    ],
};

function getMenuTemplate(app, commentWindow) {
    const menuTemplate = [
        {
            label: "Opções",
            submenu: [
                smAddComment(commentWindow),
                smQuit(app),
            ],
        }
    ];

    if (process.platform === "darwin") {
        menuTemplate.unshift({});
    }

    if (process.env.NODE_ENV !== "production") {
        // development, production e test.
        menuTemplate.push(menuDeveloper);
    }

    return menuTemplate;
}

function defAccelerator(shortcutWinx, shortcutMac) {
    if (process.platform === "win32" || process.platform === "linux") {
        return shortcutWinx;
    } else {
        return shortcutMac;
    }
}

module.exports.getMenuTemplate = getMenuTemplate;
module.exports.menuDeveloper = menuDeveloper;
