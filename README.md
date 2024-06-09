# Kanbas - Learning Management System (LMS) Project

## Overview

Kanbas is a functional Learning Management System (LMS) inspired by a popular LMS widely used in educational institutions. Built with React, this project aims to provide a robust platform for managing and delivering educational content. The aim is to start simple, then keep building. The first branch will be a simple HTML rendering of the site. We will then add styling using CSS. Then we'll go for the real deal, using JavaScript/TypeScript and various libraries (notably React and Node) as well as MongoDB to build a modern, functional web app utilizing the MERN stack. 

I'll be updating the README as we go! Note that I'll be deploying different versions in different branches and perhaps merge the final one to main once I'm done.

## Getting Started

### V6 is implemented, but the deployed version is not fully functional :( 
A deployed version is here: https://assignment-6--comfy-bonbon-d2bf33.netlify.app/#/Kanbas/Dashboard

*However* the most functional version is deployed locally. There were issues with making the server-side dedployment using the on-render.com service we used for the assignment. Therefore the professor only required that it functions locally. To run locally, you will need to download and run the server-side and front-end code:

Server side code: https://github.com/LSenai/kanbas-node-server/tree/assignment-6
- I typically run this with the command nodemon App.js

Client side code: https://github.com/LSenai/kanbas-react-web-app/tree/assignment-6
- go to directory with the source directory and run 'npm build'

Hopefully over the summer I'll try to investigate the issue with on-render and perhaps deploy using another service. 

### V5 
V5 is live! https://assignment-5--comfy-bonbon-d2bf33.netlify.app/#/Kanbas/Dashboard

This time we've built and deployed a server and configured RESTful APIs using Express.js.I really enjoyed learning about API design and how to implement them, so I found this assignment to be the most exciting. 

For the next (and perhaps final?) installment, we'll use a proper Mongo database to have long-term persistence, and will probably also implement different user types and user authentication.

### V4
https://assignment-4--comfy-bonbon-d2bf33.netlify.app/#/Kanbas/Dashboard 

In version 4, I began learning about and implementing state management, using Redux. This allows for some slightly more dynamic features, such as being able to add and delete courses. Of course, once you referesh, everything re-render, since we're not actually modifying data. In the next version, we'll get slightly more persistence in our data by learning how to build and deploy a server, and implement RESTful APIs.

State management seems to be one of the trickiest aspects of web application. As I've learned, it can lead to some pretty whacky events/renderings. I think for the time being, this will be the biggest area of growth for me. 

### V3
Here's the latest deployment. We've got the beginnings of a single page application! Up next, we'll start incorporating more state management, and eventually, a proper relational DB. https://assignment-3--comfy-bonbon-d2bf33.netlify.app/#/Kanbas

### V2
V2 with CSS is up: https://assignment-2--comfy-bonbon-d2bf33.netlify.app/kanbas/dashboard/screen

### V1

The vanilla HTML version is deployed on netlify: https://comfy-bonbon-d2bf33.netlify.app/kanbas/courses/home/screen



