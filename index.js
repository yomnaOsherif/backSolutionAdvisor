const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const db = require("./config/keys").mongoURI;
const users = require("./pages/users");
const path = require("path");

app.use(express.json());
app.set("views", path.join(__dirname, "views"));

// Connect to mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use(
  cors({
    // credentials: true,
    origin: "*",
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "origin",
      "x-csrf-token",
      "Access-Control-Allow-Headers",
      "Access-Control-Allow-Credentials",
    ],
  })
);
// cors
// const resolveCrossDomain = function(req, res,next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//   res.header("Access-Control-Allow-Headers", "Content-Type, authorization");
//   res.header("Access-Control-Allow-Credentials", true);

//   if ('OPTIONS' == req.method) {
//       res.send(200);
//   }
//   else {
//       next();
//   }
// };
// app.use(resolveCrossDomain);

// app.use(cors({credentials: true, origin: 'http://3.20.237.235/:5000'}));

// ------------------ helmet ---------------------------------
app.use(
  helmet({
    // over-ridden by masking
    contentSecurityPolicy: false,
    hidePoweredBy: false,
    frameguard: {
      action: "deny",
    },
  })
);
app.use(helmet.noSniff());
// Sets "X-Download-Options: noopen"
app.use(helmet.ieNoOpen());
// Sets "X-XSS-Protection: 0"
app.use(helmet.xssFilter());
// Sets "X-Permitted-Cross-Domain-Policies: by-content-type"
app.use(
  helmet.permittedCrossDomainPolicies({
    permittedPolicies: "by-content-type", // none
  })
);

// body parser
app.use(
  bodyParser.json({
    limit: "5mb",
  })
);

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

// Pretty API Responses
app.set("json spaces", 4);

morgan.token("remote-addr", function (req) {
  return req.headers["x-forwarded-for"] || req.ip;
});

// log the time taken in each request
app.use(morgan("tiny"));

app.use(express.static(`${__dirname}/clients/solution-advisor`));

app.use("/api/users", users);

app.get("/", (req, res) => {
  // ------------- in production ---------------
  // const token = req.csrfToken();
  // res.cookie('XSRF-TOKEN', token);
  // --------------------------------

  // res.cookie('_csrf', token);
  // res.locals.csrfToken = token;
  res.sendFile(path.resolve("./clients/solution-advisor/index.html"));
});

// redirect client
app.get("*", (req, res) => {
  // -------------in production---------------
  // const token = req.csrfToken();
  // res.cookie('XSRF-TOKEN', token);
  // --------------------------------

  // res.locals.csrfToken = token;
  res.sendFile(path.resolve("./clients/solution-advisor/index.html"));
});
app.use((req, res) => {
  res.status(404).send({ err: "We can not find what you are looking for" });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server on ${port}`));
