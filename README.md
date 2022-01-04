# sql-library-manager

Used express generator to initialize project. Installed, sequelize, sqlite3, and pug. Initialized the Sequelize ORM and replaced config file with provided JSON.

An app that lets you store, update and delete books. 

Initialized project with express generator 
	npx express-generator
	npm install //to install dependencies 
	DEBUG=sql-library-manager:* npm start //start app
Installed additional dependencies 
	sequelize - npm install sequelize 
	sqlite3 - npm install sqlite3
	pug - npm install pug
Initialized the Sequelize ORM 
	npm install sequelize-cli 
	npx sequelize init
Created Book Model by running: 
	npx sequelize model:create --name Book --attributes title:string,author:string,genre:string,year:integer


