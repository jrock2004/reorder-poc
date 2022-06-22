import fs from 'fs';
import {
  componentTemplate,
  cssModuleTemplate,
  storyTemplate,
  testTemplate
} from './templates.mjs';

const args = process.argv.slice(2);

// Check to see if the user has provided a type and a name
if (args.length === 0) {
  logError('You need to provide a type and a name');

  process.exit(1);
}

switch (args[0]) {
  case '--help':
    log('Usage: generator [type] [name]');
    log('  component: Create a new component');
    log('  css: Create a new CSS module');
    log('  story: Create a new story');
    log('  test: Create a new test');
    break;
  case 'component':
    createComponent(args[1]);
    break;
  case 'css':
    createCssModule(args[1]);
    break;
  case 'story':
    if (args.length !== 3) {
      logError('You need to provide a story name and title of your story');

      process.exit(1);
    } else {
      createStory(args[1], args[2]);
    }

    break;
  case 'test':
    createTest(args[1]);
    break;
  default:
    logError('Something went wrong, try passing in --help to check commands');

    process.exit(1);
}

/**
 * This is used to generate a new functional component in react
 *
 * @param {string} name - The name of the component
 */
function createComponent(name) {
  const componentName = name.charAt(0).toUpperCase() + name.slice(1);
  const componentDir = `./src/components/${componentName}`;
  const componentFile = `${componentDir}/index.tsx`;

  createFile(componentDir, componentFile, componentTemplate(componentName));
}

/**
 * This is used to generage a new CSS module in react
 *
 * @param {string} name - The name of the css module
 */
function createCssModule(name) {
  const componentName = name.charAt(0).toUpperCase() + name.slice(1);
  const componentDir = `./src/components/${componentName}`;
  const cssModuleFile = `${componentDir}/${componentName}.module.scss`;

  createFile(componentDir, cssModuleFile, cssModuleTemplate(componentName));
}

/**
 * This is used to generate a new test for your component
 *
 * @param {string} name The name of the test
 */
function createTest(name) {
  const componentName = name.charAt(0).toUpperCase() + name.slice(1);
  const componentDir = `./src/components/${componentName}`;
  const testFile = `${componentDir}/${componentName}.test.tsx`;

  createFile(componentDir, testFile, testTemplate(componentName));
}

/**
 * This is used to generate a new story file for your component
 *
 * @param {string} name - The name of the test
 * @param {string} title - Grouping name for your story
 */
function createStory(name, title) {
  const componentName = name.charAt(0).toUpperCase() + name.slice(1);
  const componentDir = `./src/components/${componentName}`;
  const storyFile = `${componentDir}/${componentName}.stories.tsx`;

  createFile(componentDir, storyFile, storyTemplate(componentName, title));
}

function createFile(dir, filePath, content) {
  if (!fileExists(filePath)) {
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(filePath, content);

    logSuccess(`${filePath} created`);
  } else {
    logWarning(`${filePath} already exists`);
  }
}

/**
 * Checks to see if the file already exists
 *
 * @param {string} filePath - The file name you want to check
 * @returns boolean
 */
function fileExists(filePath) {
  return fs.existsSync(filePath);
}

/**
 * Logs your success message
 *
 * @param {string} message - text you want to log
 */
function logSuccess(message) {
  log(`\x1b[32m${message}\x1b[0m`);
}

/**
 * Logs your error message
 *
 * @param {string} message - text you want to log
 */
function logError(message) {
  log(`\x1b[31m${message}\x1b[0m`);
}

/**
 * Logs your warning message
 *
 * @param {string} message - text you want to log
 */
function logWarning(message) {
  log(`\x1b[33m${message}\x1b[0m`);
}

/**
 * Logs your message
 *
 * @param {string} message - text you want to log
 */
function log(message) {
  console.log(message);
}
