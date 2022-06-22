# Getting Started with Create React App A11y Template

This project was bootstrapped with [JROCK2004 A11y Tempalte](https://github.com/jrock2004/cra-template-a11y).

## Using the Template

Before doing anything, please run `npm run prepare` or `yarn prepare` to set up the git hooks and such

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn start:safari`

Same as yarn start but this will make it open the app in your safari browser.

### `yarn start:firefox`

Same as yarn start but this will make it open the app in your firefox browser.

### `yarn generate`

Allows you to generate things like components css modules, tests and such

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more
information.

### `yarn run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will
remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right
into your project so you have full control over them. All of the commands except `eject` will still work, but they will
point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you
shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t
customize it when you are ready for it.

### `yarn run check-types`

This will run a type check on the whole project and report any thing it finds.

### `yarn run audit`

This will run a lint check to check for any linting issues and will run your tests if you have any.

### `yarn run lint`

This will run a lint check to check for any linting issues.

### `yarn run lint:err`

This will run linter in quiet mode

### `yarn run lint:fix`

Will run the linter and fix anything that it can fix.

### `yarn run prettier`

Will run prettier against your whole project and will fix what it finds.

### `yarn run prepare`

This will set up husky so it can run commit checks and such in your project.

### `yarn run release`

This will generate a new version of your app and create a changlog entry
