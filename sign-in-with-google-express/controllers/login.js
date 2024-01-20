const axios = require('axios');
const fs = require('fs');

const LoginController = {
    index: (req, res) => {
        // client_secret.json is generated from google console
        const secret = JSON.parse(fs.readFileSync('client_secret.json'));
        res.render('login', { clientId: secret.web.client_id });
    },

    withGoogle: async (req, res) => {
        const url = `https://oauth2.googleapis.com/tokeninfo?id_token=${req.body.credential}`;

        // FETCH API
        // const response = await fetch(url);
        // const googleUser = await response.json();
        // res.json({loggedUser: googleUser.email});

        // AXIOS
        const response = await axios.get(url);
        const googleUser = response.data;
        res.json({loggedUser: googleUser.email});
    }
}

module.exports = LoginController;