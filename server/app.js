import Server from "./src/server.js";

const app = new Server();

app.startApp();

process.on("unhandledRejection", (err) => {
  console.error("Unhandled promise rejection", err);
  process.exit(1);
});

process.on("uncaughtException", (err) => {
  console.error("Unhandled error", err);
  process.exit(1);
});
