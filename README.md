# Burger app

## Introduction

An web app which allows you to keep track of what burger you have not eaten and which has been eaten

## User Story

As I bought all the burger from the McDonald menu and I am not sure which one I have and have not eaten yet. This inspired me to create this app to keep track of my burgers. This app will be adjusted to track my tendies in the future

## Instruction

Controller: controller handles all the GET/POST/DELETE/PUT request from the computer

GET: Get the data from the SQL and render it with handlebar

POST: Handle the request to add more burgers to the list

PUT: Change the burger from un-eaten to eaten

DELETE: Delete eaten burger from the list

///////////////////////////////

Model: Handle the requests from the controller

/////////////////////////////

View: files which hold the handlebars. Main is the main body of the html. Index handles the list of burger and the form to add more burger. partials handles the delete and eating status of the burger.

///////////////////////////

Index.js: handle the ajax onclick/on summit comment which will send a PUT/POST request.
/////////////////////////
