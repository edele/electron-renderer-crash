const { app, BrowserWindow } = require("electron");
const url = require("url");
const path = require("path");

app.commandLine.appendSwitch("--enable-precise-memory-info");

let mainWindow;

app.on("ready", function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  });

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "index.html"),
      protocol: "file:",
      slashes: true
    })
  );

  // mainWindow.webContents.openDevTools();

  mainWindow.on("closed", function() {
    mainWindow = null;
  });
});
