const port = 5000;
const express = require("express");
const app = express();
const si = require("systeminformation");

app.get("/api/specs", async (req, res) => {
	res.json(await si.getAllData());
});

app.use("/static", express.static(__dirname + "/static"));

if (process.env.NODE_ENV === "dev") {
	app.listen(port, () => console.log("on"));
}

module.exports = app;
