function getPaths() {

    const startPath = __dirname + "../../../";

    const mainFile = "/src/ui/pages/main.html";
    const commentFile = "/src/ui/pages/addComment.html";

    const mainPath =  startPath + mainFile;
    const commentPath = startPath + commentFile;

    const paths = {
        "main": mainPath,
        "comment": commentPath,
    };

    return paths;
}

module.exports.paths = getPaths();
