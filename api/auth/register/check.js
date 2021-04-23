module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "1muL":
/***/ (function(module, exports) {

module.exports = require("nodemailer");

/***/ }),

/***/ "412b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HfyN");
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("yFn1");
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("1muL");
/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var njwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("R6Q3");
/* harmony import */ var njwt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(njwt__WEBPACK_IMPORTED_MODULE_3__);




let transporter = nodemailer__WEBPACK_IMPORTED_MODULE_2___default.a.createTransport({
  host: "smtp.rediffmailpro.com",
  port: 465,
  secure: true,
  // true for 465, false for other ports
  auth: {
    user: "info@arnavgupta.net",
    // generated ethereal user
    pass: "God71441" // generated ethereal password

  }
});
let transporterAlternate = nodemailer__WEBPACK_IMPORTED_MODULE_2___default.a.createTransport({
  service: "Gmail",
  port: 465,
  secure: true,
  auth: {
    user: "arnav.xx.gupta@gmail.com",
    pass: "Arnav300804"
  }
});
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  if (req.method == "POST") {
    bcryptjs__WEBPACK_IMPORTED_MODULE_1___default.a.genSalt(10, function (err, salt) {
      bcryptjs__WEBPACK_IMPORTED_MODULE_1___default.a.hash(req.body.password, 10, async function (err, hash) {
        req.body.password = hash;
        const {
          db
        } = await Object(_util_mongodb__WEBPACK_IMPORTED_MODULE_0__[/* connectToDatabase */ "a"])();
        let username = await db.collection("userData").find({
          username: req.body.username
        }).limit(1).count();

        if (username == 0) {
          let email = await db.collection("userData").find({
            email: req.body.email
          }).limit(1).count();

          if (username == 0 && email == 0) {
            let code = Math.floor(Math.random() * 10000) + 1000;
            transporter.sendMail({
              from: '"Team covidresources 👥" <info@arnavgupta.net>',
              to: `info@arnavgupta.net, ${req.body.email}`,
              subject: "Email Verification",
              text: `Your verification Code is ${code}`,
              html: `<b>Your verification Code is ${code}</b>`
            }, function (error, info) {
              if (error) {
                transporterAlternate.sendMail({
                  from: '"Team covidresources 👥" <arnav.xx.gupta@gmail.com>',
                  to: `info@arnavgupta.net, ${req.body.email}`,
                  subject: "Email Verification",
                  text: `Your verification Code is ${code}`,
                  html: `<b>Your verification Code is ${code}</b>`
                }, function (error, info) {
                  if (error) {
                    res.send("error");
                  } else {
                    res.status(200).json(njwt__WEBPACK_IMPORTED_MODULE_3___default.a.create({
                      code: code
                    }, "ArnavGod30080422020731017817087571441", "HS512").compact());
                  }
                });
              } else {
                res.status(200).json(njwt__WEBPACK_IMPORTED_MODULE_3___default.a.create({
                  code: code
                }, "ArnavGod30080422020731017817087571441", "HS512").compact());
              }
            });
          } else {
            res.status(202).json("email exists");
          }
        } else {
          res.status(202).json("username exists");
        }
      });
    });
  } else {
    res.status(202).json("error");
  }
});

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("412b");


/***/ }),

/***/ "HfyN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return connectToDatabase; });
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ykE2");
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);

const {
  MONGODB_URI,
  MONGODB_DB
} = process.env;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

if (!MONGODB_DB) {
  throw new Error("Please define the MONGODB_DB environment variable inside .env.local");
}
/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */


let cached = global.mongo;

if (!cached) {
  cached = global.mongo = {
    conn: null,
    promise: null
  };
}

async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true
    };
    cached.promise = mongodb__WEBPACK_IMPORTED_MODULE_0__["MongoClient"].connect(MONGODB_URI, opts).then(client => {
      return {
        client,
        db: client.db(MONGODB_DB)
      };
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

/***/ }),

/***/ "R6Q3":
/***/ (function(module, exports) {

module.exports = require("njwt");

/***/ }),

/***/ "yFn1":
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

/***/ }),

/***/ "ykE2":
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ })

/******/ });