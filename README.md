# Metal Framework
[![GSoC Heat 2021](https://img.shields.io/badge/GSOC%20HEAT-2021-orange)](https://nitdgpos.github.io/gsoc_heat)


It's a project for GSoC Heat organized by GNU/Linux User's Group, NIT Durgapur.

## Contribution guidelines
Kindly follow [contributing.md](contributing.md), if you want to lend a hand in making this project better.

## Overview
We use **Sass** to compile the **.scss** syntax to **.css** files.
We use **RollUp**  to compile ESM modules into .js files, which transpiles using **Babel** to support all the modern ES6 syntax so that it can be supported by both modern and old browsers.  
We use **Hugo** to setup local development server and build docs file.

## Installing from CDN

Add this following tags in the ```<head></head>``` of the html.

```
<link href="https://cdn.trennds.com/css/metal.min.css" rel="stylesheet" />
<script src="https://cdn.trennds.com/js/metal.min.js" />
```

## Installing
Install all the dependencies using this command
```
npm install
```
To run the development server
```
npm run dev
```
To build the docs folder
```
npm run build-docs
```

To compile and watch all the css files run this command
```
npm run build-css
```
To compile and watch javacript files run this command.
```
npm run build-js
```
