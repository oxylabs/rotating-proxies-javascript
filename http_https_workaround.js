var axios = require("axios");
const HttpsProxyAgent = require("https-proxy-agent");
const httpsAgent = new HttpsProxyAgent({host: "46.138.246.248", port: 8088, auth: "USERNAME:PASSWORD"})
// Use axios as you normally would, but specify httpsAgent in the config, this is due to a bug
// with using an http proxy with an https target (https://github.com/axios/axios/issues/925#issuecomment-513028175)
axios = axios.create({httpsAgent});
// Create and execute a new Promise
(async function () {
    try {
        const url = `https://ip.oxylabs.io/location`;
        // Call the GET method on the URL with proxy information
        let response = await axios.get(url);
        // Print effective IP address and location details
        console.log(response.data);
    } catch (err) {
        //Log the error message
        console.error(err);
    }
})();
