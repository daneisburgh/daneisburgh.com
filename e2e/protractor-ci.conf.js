// eslint-disable-next-line @typescript-eslint/no-var-requires
var config = require("./protractor.conf").config;

config.capabilities = {
    browserName: "chrome",
    chromeOptions: {
        args: ["--headless", "--no-sandbox", " --disable-gpu"]
    }
};

exports.config = config;
