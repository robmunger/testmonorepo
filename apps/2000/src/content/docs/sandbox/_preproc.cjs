// headings trigger a new slide
// headings with a caret (e.g., '##^ foo`) trigger a new vertical slide
module.exports = (markdown, options) => {
    return new Promise((resolve, reject) => {
        return resolve(
            markdown
                .replace(/\{\/\*➡️\*\/\}/g, "<!--")
                .replace(/\{\/\*⬅️\*\/\}/g, "-->")
                .replace(/\{\/\*→/g, "")
                .replace(/←\*\/\}/g, "")
                .replace(/<!--➡️-->/g, "<!--")
                .replace(/<!--⬅️-->/g, "-->")
                .replace(/<!--→/g, "")
                .replace(/←-->/g, "")
        );
    });
};

