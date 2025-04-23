# QA-Automation

WebdriverIO test automation framework

## How to set up and install

### Pre-requisites

[Install node js](https://nodejs.org/en/download/)

[Install latest version of Java](https://www.oracle.com/java/technologies/downloads/) (to run allure reports)

[Install Git bash](https://git-scm.com/downloads)

[Install VS code](https://code.visualstudio.com/download)

### Steps

1. open git bash in the location you want to clone the repo
2. Run $ git clone
3. Once the repository is cloned, open VScode
4. Import the cloned repo as a project in to VScode
5. Type npm install @wdio/cli in the VScode terminal
6. Again run $npx wdio wdio.qa.conf.js --spec test/specs/*.js to initiate the test execution
7. One the tests are complete, the results will be saved in allure-reports folder. Open index.html file in a browser to view test reports. Note: Allure reports wont load correctly when you open ‘index.html’ for the first time due to cross origin policy errors. To work around this, please follow below steps

     * Install mozilla firefox
     * In a new window type ‘about:config’ and hit enter
     * You will be shown ‘Proceed with Caution’ warning
     * Hit ‘Accept risks and continue’
     * In the ‘search preference name’ text box, type security.fileuri.strict_origin_policy and hit enter
     * You will see the value of this preference as ‘true’ initially
     * Double click to toggle it to false
     * Reopen firefox and load index.html again. Results should be loaded successfully

## Assertions
The framework is set up to use built in assertion library (expect API) that allows you to make powerful assertions. However, in rare circumstances, only if a specific assertion type is not covered by Expect APIs, it is advised to use Chai library as additional assertion api.

## Webdriver.IO in asynchronous mode
Webdriver.IO will stop the support of synchronous mode due to changes in chromium. However, the synchronous mode can be achieved by using async and await commands in the test automation code. This automation framework is set up to use async/await commands as suggested by the technical steering committee of webdrive.io 

Read more about this below

[Sync API Deprecation | WebdriverIO](https://webdriver.io/blog/2021/07/28/sync-api-deprecation/)

[Replacement for Node-Fibers](https://github.com/webdriverio/webdriverio/discussions/6702)

[Sync vs Async | WebdriverIO](https://webdriver.io/docs/sync-vs-async)

## Learning resources
[Learn about Webdriver.IO](https://webdriver.io/docs/what-is-webdriverio)

[Learn about Webdriver.IO APIs](https://webdriver.io/docs/api)

[Learn about selectors Selectors](https://webdriver.io/docs/selectors)

[Java script tutorials](https://www.youtube.com/c/AllThingsJavaScriptLLC)