const cors = require("cors");
const jsonServer = require("json-server");
const path = require("path");

const app = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "data", "db.json"));
const middleware = jsonServer.defaults();
const port = process.env.PORT || 5001;

// Enable all CORS requests.
app.use(cors());

// Index route message.
app.get("/", (_req, _res, next) => {
  next({
    message: "No resource found.",
    status: 404,
  });
});

// Generic logging middleware.
app.use(middleware);

// Mount routes.
app.use("/api", router);

// Error handler.
app.use(
  ({ status = 500, message = "Internal server error." }, _req, res, _next) => {
    res.status(status).json({ error: message });
  }
);

app.listen(port);
