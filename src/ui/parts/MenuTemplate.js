function getMenuTemplate(app, commentWindow) {
    const menuTemplate = [
        {
            label: "Opções",
            submenu: [
                {
                    label: "Adicionar comentário",
                    accelerator: defAccelerator("Ctrl+N", "Cmd+N"),
                    click() {
                        commentWindow.create();
                        commentWindow.load();
                    },
                },
                {
                    label: "Sair",
                    accelerator: defAccelerator("Ctrl+Q", "Cmd+Q"),
                    click() {
                        app.quit();
                    },
                },
            ],
        }
    ];

    if (process.platform === "darwin") {
        menuTemplate.unshift({});
    }

    if (process.env.NODE_ENV !== "production") {
        // development, production e test.
        menuTemplate.push({
            label: "Development",
            submenu: [
                {
                    label: "Toggle Developer Tools",
                    accelerator: defAccelerator("Ctrl+Shift+I", "Cmd+Alt+I"),
                    click(item, focusedWindow) {
                        focusedWindow.toggleDevTools();
                    },
                },
            ],
        });
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
