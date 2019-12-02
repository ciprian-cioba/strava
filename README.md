This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
[![Netlify Status](https://api.netlify.com/api/v1/badges/871437b1-30e8-43e1-bdbf-5a11aa18f248/deploy-status)](https://app.netlify.com/sites/friendly-keller-bdb7c1/deploys)
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


### 
sudo apt install git-secret
gpg --gen-key
gpg --list-secret-keys
gpg --export-secret-keys --armor XXXXXXXX > ./my-priv-gpg-key.asc

https://git-secret.io/
Usage: Adding someone to a repository using git-secret
Get their gpg public-key. You won’t need their secret key.

Import this key into your gpg setup (in ~/.gnupg or similar) by running gpg --import KEY_NAME.txt

Now add this person to your secrets repo by running git secret tell persons@email.id (this will be the email address associated with the public key)

The newly added user cannot yet read the encrypted files. Now, re-encrypt the files using git secret reveal; git secret hide -d, and then commit and push the newly encrypted files. (The -d options deletes the unencrypted file after re-encrypting it). Now the newly added user be able to decrypt the files in the repo using git-secret.


#### So tests ...
    Realized this react stuff has a build in jest... good enough for me


### deploys

    auto deploy to netlify
    
    and zeit

    $ npm i -g now
    $ now 
    $ now --prod

## publishing to npm
 https://create-react-app.dev/docs/deployment#publishing-components-to-npm