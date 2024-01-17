# Sign in with Google using Express.js

![](https://img.shields.io/badge/status-deprecated-red)

Go to [Google Console](https://console.cloud.google.com) and create a new Project.

Click on menu APIs & Servicers > OAuth consent screen. Select `External` and click Create.

Click on menu APIs & Services > Credentials. Click on Create Credentials > OAuth client ID.

Fill the form and add authorized URIs like `http://localhost:5000` then press Create.
After that click on Download JSON to save `client_secret_whatever.json`.

## History of commands

```bash
npm init -y
npm i express ejs dotenv nodemon
```

## References

[https://developers.google.com/identity/sign-in/web/sign-in?hl=pt-br](https://developers.google.com/identity/sign-in/web/sign-in?hl=pt-br)

[https://plainenglish.io/blog/authentication-with-google-sign-in-in-node-js-419640f07b56](https://plainenglish.io/blog/authentication-with-google-sign-in-in-node-js-419640f07b56)