# MOBILITY-ASOD-MBIZ

## **Overview:**



## Features


#### Supported Browsers
1. Chrome - default browser
2. Firefox
3. MS Edge
4. WebKit - web browser engine used by Safari

#### Run Mode Details
| Mode | Execl Value |Description |
| ------ | ------ | ------ |
|Normal|Blank| 	Runs the tests sequentially|
|Serial|serial| 	Runs the tests sequentially. On test failure, all subsequent tests are skipped|
|Parallel|parallel| 	Runs the tests parallelly, this is ideal when tests in the scenario are independent of one another|

#### Steps to use
##### 1. Installation

Playwright framework requires [Node.js](https://nodejs.org/) v14+ to run.

Installing the dependencies.
```sh
npm ci
```
##### 2. Test creation
- Create Test file with extenstion .spec.ts. Eg LoginTest.spec.ts
- In the testData excel create a sheet with name of test. Eg. LoginTest
- Create a execution sheet and make an entry of new test case. Eg. in the Regression sheet add a row for new test LoginTest and update other columns like run, mode etc.

##### 3. Execution

To change any environment configuration in .env file at run time use set command.
Eg: To change browser to MS Edge use below command
```sh
set BROWSER=edge
```
Similar command can be used to update other environment configuration

To install dependencie
```sh
npm install
```

To set name and run Tests locally for UI - 
Eg. LoginTest.spec.ts
Change the TEST_NAME in .env file and run below command.

```sh
set TEST_NAME and run locally - $env:TEST_NAME='LoginTest.spec.ts'; if ($?) { npm run local:test }
```

To set name and run Tests locally for RESTAPIs -
Change the TEST_NAME in .env file and run below command.

```sh
$env:TEST_NAME='RESTUserTest.spec.ts'; if ($?) { npm run local:test }
```

To rset name and Tests locally for DBTest - 
```sh
$env:TEST_NAME='DatabaseTest.spec.ts'; if ($?) { npm run local:test }
```

To generate Allure report use below command
```sh
npm run report
```


##### 4. Report & Logs
Playwright HTML report will be present inside
```sh
test-results/results/index.html
```
Execution log will be present in the log file.
```sh
test-results/logs/execution.log
```