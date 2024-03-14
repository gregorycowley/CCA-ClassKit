# CCA P5 Electron Application

Wraps a p5.js sketch in an Electron application.

## Prerequisites
To use Electron, you need to install Node.js. We recommend that you use the latest LTS version available.

Please install Node.js using pre-built installers for your platform. You may encounter incompatibility issues with different development tools otherwise.

To check that Node.js was installed correctly, type the following commands in your terminal client:

```bash
node -v
npm -v
```
The commands should print the versions of Node.js and npm accordingly.

Note: Since Electron embeds Node.js into its binary, the version of Node.js running your code is unrelated to the version running on your system.


## Getting Started
You need to copy this exact folder structure to your own computer.

Reposity folder structure:
```
p5-electron-quick-start/
├── p5-sketch/
│   ├── sketch.js
│   └── index.html
├── main.js
├── package.json
└── README.md
```

## Installation
Download the repository and navigate to the directory in your terminal. Run the following commands to install the necessary dependencies and start the application.

```bash
npm install
npm start
```

## What is happening here?
This is a simple example of how to wrap a p5.js sketch in an Electron application.

Electron is a framework for creating applications for MacOS, Windows, and Linux. It uses web technologies like HTML, CSS, and JavaScript to create a desktop application. 

Electron is a combination of Node.js and Chromium. Node.js is a JavaScript runtime that allows you to run JavaScript on the server. Chromium is the open-source project behind Google Chrome.

You can imagine this application as a web browser that only loads your p5.js sketch.


## Updating
Update your version of npm
```bash
npm install -g npm@latest
```

## Create a distributable application

[Electron Forge](https://www.electronforge.io/import-existing-project)

1. Add a description to your package.json file, otherwise rpmbuild will fail. Blank description are not valid.

2. Add Electron Forge as a development dependency of your app, and use its import command to set up Forge's scaffolding:

```bash
npm install --save-dev @electron-forge/cli
npx electron-forge import
```

3. Create a distributable using Forge's make command:
  
```bash
npx electron-forge make

or

npm run make

```
