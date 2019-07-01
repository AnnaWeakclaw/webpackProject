#### Instructions

[Link](https://medium.com/javascript-training/beginner-s-guide-to-webpack-b1f1a3638460)
Install webpack globally ` npm install webpack -g` and `npm install webpack-cli -g`

`webpack ./app.js bundle.js` -  command uses the webpack command (webpack) to reference our app file (./app.js) and the last argument is the name of the file that we want Webpack to create for us (bundle.js).
 The above command should have created a file called bundle.js that is our first Webpack bundle
 
 Had to run `webpack --mode=development app.js -o bundle.js` that specifies the mode and then got the bundle.js to appear
 
 After that `webpack` command creates bundle.js in dist folder. 
 
 From the command line, install webpack-dev-server globally:
 `npm install webpack-dev-server -g`
 From the command line, run the following command:
 `webpack-dev-server`
 If you go to http://localhost:8080/webpack-dev-server/, you should see your application running there, along with any log statements in your app.