function getMenuTemplate(app, getCommentWindow) {
    const menuTemplate = [
        {
            label: "Opções",
            submenu: [
                {
                    label: "Adicionar comentário",
                    accelerator: defAccelerator("Ctrl+N", "Cmd+N"),
                    click() {
                        getCommentWindow();
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

    function defAccelerator(shortcutWinx, shortcutMac) {
        if (process.platform === "win32" || process.platform === "linux") {
            return shortcutWinx;
        } else {
            return shortcutMac;
        }
    }

    return menuTemplate;
}

module.exports.getMenuTemplate = getMenuTemplate;
