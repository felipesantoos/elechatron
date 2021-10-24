const { BrowserWindow } = require("electron");
const { paths } = require("../../utils/paths");

function getCommentWindow() {
    const commentWindow = new BrowserWindow({
        width: 500,
        height: 300,
        title: "Adicionar comentário",
    });

    commentWindow.loadFile(paths.comment);

    return commentWindow;
}

module.exports.getCommentWindow = getCommentWindow;
