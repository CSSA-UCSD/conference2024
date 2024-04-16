# UCSD Cognitive Science Student Association Conference 2023
Note: The `master` branch is the code from last year's conference. You can consider each branch as different versions of the code, such as different features or designs before merging into the main code that changes the deployed website.
## Git Instructions
### Getting Started
* To clone this repository, run `git clone https://github.com/CSSA-UCSD/conference2022.git` in your terminal. *Any edits made in the `main` branch and pushed to this remote repository will change the actual live website.* If it's just local edits on your computer (without pushing the changes), the live deployed website won't be affected. 
* After cloning, you'll be in the `main` branch (you should be able to tell in your terminal). Start by working on a new branch by running `git checkout -b name_of_branch` where `name_of_branch` can by your *name* if you'd like to try developing a different version/design of the website, or the *feature* you'd like to implement onto the current conference page. This command should take you to the new branch as you create it.
* To check other branches on your laptop, run `git branch`. To switch to other branches, run `git checkout name_of_branch`. For example, running `git checkout main` will switch the version of your code to the code running the actual website. 
### Checking for Code Updates
* Check for any remote updates or local changes made by running `git status` in whichever branch you'd like to know. This tells you which files have been changed or whether your current branch is behind the remote repository, which should have the most updated version of the actual website. If you'd like to check for updates on the actual live website, make sure you're in the `main` branch to run this command. You'll also be able to see if there are any updates in each branch on GitHub.
* **Make sure to `git pull` for any updates in the `main` branch when working on the code!** 

### Adding Features
If you're working on an issue, please create a branch name following `<issue #>-<description>-<of>-<issue>` for consistency. For example, a branch called `2-sched-text` may suggest that this branch solves issue 2 by adding schedule texts.

### Saving Code Changes
1. Once you've made changes you'd like to save, add the file changed by running `git add file_name` or if you'd like to add all files changed at once, run `git add .`.
2. After adding the filed, run `git commit -m message` where `message` is a short description of the changes made. This simulates a snapshot of the current status of the code. You could also do both at once by running `git commit -am message`.
3. Push your branch to GitHub for the first time by running `git push -u origin name_of_branch`. Running `git push` uploads your code to GitHub and allows others to see/clone changes you've made on the branch. `origin` is just a conventional term for remote (online) repository. Feel free to double check resources online for any uncertainties! 
* For subsequent changes you make, you'll only have to run `git push` after adding and committing the files changed. 
---

## Available Scripts
In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

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

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
