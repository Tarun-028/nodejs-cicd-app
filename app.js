const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;
const VERSION = process.env.APP_VERSION || "development";

app.use(express.json());

app.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Node.js CI/CD Application</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background: #101827;
                    color: white;
                    text-align: center;
                    padding: 80px 20px;
                }
                .card {
                    max-width: 650px;
                    margin: auto;
                    padding: 35px;
                    border-radius: 16px;
                    background: #1e293b;
                }
                h1 { color: #38bdf8; }
                .status { color: #4ade80; }
                code { color: #facc15; }
            </style>
        </head>
        <body>
            <div class="card">
                <h1>Node.js CI/CD Application</h1>
                <p class="status">Application deployed automatically by Jenkins CI/CD!</p>
                <p>Deployed automatically using Jenkins and Docker.</p>
                <p>Version: <code>${VERSION}</code></p>
                <p>Repository: Tarun-028/nodejs-cicd-app</p>
            </div>
        </body>
        </html>
    `);
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "healthy",
        application: "Node.js CI/CD App"
    });
});

app.get("/api/info", (req, res) => {
    res.json({
        application: "Node.js CI/CD App",
        runtime: "Node.js",
        framework: "Express",
        version: VERSION
    });
});

app.get("/version", (req, res) => {
    res.json({
        version: VERSION
    });
});

app.use((req, res) => {
    res.status(404).json({
        error: "Route not found"
    });
});

if (require.main === module) {
    app.listen(PORT, "0.0.0.0", () => {
        console.log(`Application running on port ${PORT}`);
    });
}

module.exports = app;
