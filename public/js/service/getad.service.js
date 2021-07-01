const axios = require("axios");

const defaultScript =
    "https://ads-dev.amillionads.com/go/4K5MEbEK?source=1amillionads&output=standard&data.1=${resolve('name')}";
const summerScript =
    "https://ads-dev.amillionads.com/go/4K5MEbEK?source=1amillionads&output=standard&data.weather=sun&data.datetime=2021-07-22";
const windySpringScript =
    "https://ads-dev.amillionads.com/go/4K5MEbEK?source=1amillionads&output=standard&data.datetime=2021-05-22&data.windspeed=30";

let getScript = async(keyWord) => {
    let res;

    if (keyWord == "summer") {
        res = await axios.get(summerScript);
        return JSON.stringify(res.data.ad.fileLocation);
    } else if (keyWord == "windy") {
        res = await axios.get(windySpringScript);
        return JSON.stringify(res.data.ad.fileLocation);
    } else {
        res = await axios.get(defaultScript);
        return JSON.stringify(res.data.ad.fileLocation);
    }
};

module.exports = getScript;