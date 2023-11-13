# HRnet

HRnet is a React-based application designed to manage human resources data effectively. 
This project uses Material-UI for its UI components, Redux Toolkit for state management, and a [modal package](https://www.npmjs.com/package/modal-component-test).

The goal of the project was to redesign an application using JQuery into a React-based one 
in order to perform Lighthouse performance tests comparing the old and new applications.

## Original HRnet Application

Here is the [list of issue](https://github.com/OpenClassrooms-Student-Center/P12_Front-end/issues) found on the original application.

## Features

- Employee data management
- Integration with Material-UI for a responsive and modern UI
- Redux Toolkit for efficient global state management

## Installation

To get started with HRnet, clone the repository, go to the HRnet-app file and install the dependencies:

```bash
git clone https://github.com/Okamixtape/HRnet.git
cd HRnet-app
npm install
```

## Usage

To run the application locally:

```bash
npm start
```

This will start the application in development mode. 
Open http://localhost:3000 to view it in your browser. 
The page will reload when you make changes.

## Building for Production

To build the app for production, run the following command:

```bash
npm build
```

Then you can use [serve](https://www.npmjs.com/package/serve) which helps you serve a static site, single page application or just a static file

```bash
npm global add serve
```

And serve it locally

```bash
serve -s build
```
