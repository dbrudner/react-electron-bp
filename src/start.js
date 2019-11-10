const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require("path");
const url = require("url");

const api = require("./api");

let mainWindow;

function createWindow() {
	mainWindow = new BrowserWindow({ width: 800, height: 600 });

	mainWindow.loadURL(
		process.env.ELECTRON_START_URL ||
			url.format({
				pathname: path.join(__dirname, "/../public/index.html"),
				protocol: "file:",
				slashes: true
			})
	);

	mainWindow.on("closed", () => {
		mainWindow = null;
	});
}

function onReady() {
	createWindow();

	api.listen(5000, () => {
		console.log("API Listening");
	});
}

app.on("ready", onReady);

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit();
	}
});

app.on("activate", () => {
	if (mainWindow === null) {
		createWindow();
	}
});
