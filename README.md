# M-Aug-24-Cypress
Demonstrate the cypress framework. 

Install NodeJs
Install cypress in by using command npm init
npx cypress open

Create package under cypress as pages where we will store our objectes.
Creae package under e2e as tests where we will write our test.

git status -> thsi command is used to check which file we have not yet commited.
git add . -> This command is used to add all files. 
git commit -m "comment" -> This command is used to commit your code to the git hub. 
git push -> By using this command all your code whatever is there in your local machine will be added to the remot server to your git hub repo.
git pull ->
git fetch origin main ->
git pull origin main ->
git config --global http.postBuffer 524288000 ->
git push origin main ->

Create Folder called Pages and create file with page name with .js extension. 
Create class in that page and kee all elements in that class. 
Ensure that class must be exported. 
Create your test file in e2e test with cy.js file extension.
Import page class and create an object for that.
Create data file in fixtures for register data in json format.
Import register data file in your test file.
Now create describe block and It block and start scription. 

Run the comand cypress open and select your test to check.
Enter command git status to check what file you have made chagnes
To add all the file in git enter the command git add . (If you want to add specif file you can add file name after . )
Now to commit enter the command git commit -m "Any Message"
git push by using this command all your local machin code will puch to the remot server. 

Create command in command.js file for login which we uswaly require in all tc.

Create another .js fiel under pages called Homepage.js 
Create class and setup all the elements there. 
Create another test data file in fisture called TestData01.json.
Create Add to cart file in e2e -test with cy.js extension to call all the methods. 

To run the file headleass moad user the command npx cypress run.

Now to run the file by script go to package.json and in script create your won script to run specific file.
So I have created script to run specific test as bellow 
 "scripts": {
    "test:addToCart":"npx cypress run --spec cypress/e2e/tests/addToCart.cy.js",
 }
 Now to run this I need to run the command in terminal npm run test:addToCart

 Generate custom HTML report Mochawesome report.
 Go to offecial website https://www.npmjs.com/package/cypress-mochawesome-reporter
 First step is we need to instal mochawesome report by this command. npm i --save-dev cypress-mochawesome-reporter
 Now you can verify in package.json file new dependency will be added "cypress-mochawesome-reporter": "^3.8.2"
 Now in cypress.config.js file need to add configration that already provided by mochawesome. 
 reporter: 'cypress-mochawesome-reporter',
 require('cypress-mochawesome-reporter/plugin')(on);
 Now you need to import this in your e2e.js package file. import 'cypress-mochawesome-reporter/register';
 To generate report you just need to run your test. Report folder will be created in cypress. 

Create directri in git hub by using this command. mkdir .github
Then go to the github directory by cd .github
Now create one more direcotry in git hub mkdir workflows
Now in workflow create yml file build.yml
Then to setup yml file go to this link https://github.com/cypress-io/github-action
Copy the github action code as per your requirement. For exampel End to End Testing





