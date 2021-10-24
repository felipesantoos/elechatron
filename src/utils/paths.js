function getPaths() {

    const startPath = __dirname + "../../../";

    const homeFile = "/src/ui/pages/HomePage.html";
    const commentFile = "/src/ui/pages/CommentPage.html";

    const homePath =  startPath + homeFile;
    const commentPath = startPath + commentFile;

    const paths = {
        "homePage": homePath,
        "commentPage": commentPath,
    };

    return paths;
}

module.exports.paths = getPaths();
