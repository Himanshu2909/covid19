module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ({

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("VXvk");


/***/ }),

/***/ "BA/D":
/***/ (function(module, exports) {

module.exports = require("request");

/***/ }),

/***/ "DZMZ":
/***/ (function(module, exports) {

module.exports = require("googleapis");

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

/***/ "VXvk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("BA/D");
/* harmony import */ var request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(request__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var googleapis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("DZMZ");
/* harmony import */ var googleapis__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(googleapis__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("HfyN");



const key = {
  type: "service_account",
  project_id: "infinity-71441",
  private_key_id: "ad476c05348a5fa3cf5440f5cee807a4a89643a1",
  private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDQrdr5mWpqQwOq\np156FBRx7frwZQuoDxPjWpInvZ7RyVBOYo+MHLiyys7ejwIXYwF7bE6dSxCD1xUh\nnrsdM1PgO+NWorQh1rf0fm/qB2Gow3OPy5+pSWx7rBtdBrem1296OFh2RbXASlG4\nWzUjWf4EfAc/DNQTiAt84pcDsYbh8X1WOn1/M6hVL6ZfxZJ1hLs1BdPZVqRMe0r6\nuK+YUQNRdBx4fwG0AFuORqIgf+kE6AvuxxrRIJOLGrFTzHy/XJtwTG6nJgORndZd\ns63JJrLPr6X/NKxA+mn4uFH/keFGOPGopFJq1msfEJsV9AlalQB218R3efM2r+zd\n6c9t/WcrAgMBAAECggEATNJ8ByA950Glc2krJDkJL8oC9AXW7TcjxLJ+lMe/VI7O\nlBS/sL6QFi4ISzGNfQuTK5s7M7fDLC39lwNm8gCH08hoUGgUdVKlJQp468hs4OKX\nQ+wb6offuoWpCy2iZXbxEKb2lg/isZgKjppxLQL/uynnxwPTfR87z21hV9g+hiWl\nEvjfHw7RkjeUsbCiwuTUzSqa8rHs0UCGMA88U3HC6YYBf+brjZejslExRNl+HzWa\nMhGEOwhEAxO/FLRHFmKHOpbDdnZhfWw0outkTmJ+iX/QmELeTNkX9gAF2NUE4Bjt\n+ld+Gl5/ILAqQ081zDwNizO20Rq0YYeZPm8xdl+xAQKBgQDuVlwyvBtWfTIjKb/H\nIp+3swBEEwQXzT6HNhNDjJ8QC1v+BYeUXiL1jfqLXn9D3MlHKbF/FA2NXAf3TLeZ\nU5ObBrqQPTfenJvMjbVG0j3ONPV3/Yb3vCkGHdjV7xfvoXbj2CW0CK6we77BeZe/\noPs08a12Kr41nndtq705kbBxAQKBgQDgJNTXmWPfQgmm9KrnNWE8otozGkVKYorU\nHPRyXiZ2iUboIN3kkBbXh/5sNKYWjTIaN2GL1n4MhSkfz8u8HfxqLHZvJwlYcqBd\nqD7hmxTKWn8paqal+tTqM6ynzwUmOU95HNbU5yIa+0TfpghQPvKPvetbgbkhaaPH\ndcf5t65sKwKBgBQKsRAXH1ljh77LOPQ+5h1lcQVIcBSsTrDCDFam0Y1g1yiCQIdq\nbxglC0eC98K2IzrXt7RO9GDJt2XFTr8W9xeXNkMA0tzmYHeQBwlgjo/zhhzD9gCJ\nEw4PnndG9sVQ15WLTIhaHo56qWzNk8QqflVSaVrBd2M84yAWy/+2T5cBAoGBAN/8\njmGhHEeXg3O+3iZMlo30o54bq5CI5vjOsoyzfzZHOn9vkK3+O4VIljvlZO/2S1Id\nc7I9Nxsl2pG6onqrcHldU0ECPnmPmqfdIHFs+xq30ok91ajZ/vjHiMrsutWWwc9i\nvWBmVROncw0XqwkdzmFMRazc9nboTU1eaucl4fyfAoGBAMxtmmQ7FusHmCKLgPIP\nhg7o0YgOKXuwW+SmBG/VG1mmLTlb99Q5uUCNg97C6xaa+VQFqNTaxUYPoxo5qK1N\nLZT6+COEHc2pzYyFJP645xTM5jpcdhJShhO8S2pnonSPMeij2x1uEOuHDnwqVxUF\nu625v/oFUkci1KKGr5uHH0K6\n-----END PRIVATE KEY-----\n",
  client_email: "infinitygod@infinity-71441.iam.gserviceaccount.com",
  client_id: "108993733927960720768",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/infinitygod%40infinity-71441.iam.gserviceaccount.com"
};
const jwtClient = new googleapis__WEBPACK_IMPORTED_MODULE_1__["google"].auth.JWT(key.client_email, null, key.private_key, ["https://www.googleapis.com/auth/indexing"], null, key.private_key_id);
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  const {
    db
  } = await Object(_util_mongodb__WEBPACK_IMPORTED_MODULE_2__[/* connectToDatabase */ "a"])();
  const posts = await db.collection("posts").aggregate([{
    $project: {
      username: 1,
      tags: 1
    }
  }]).toArray();
  const users = await db.collection("userData").aggregate([{
    $project: {
      username: 1,
      tags: 1
    }
  }]).toArray();
  const array = [];
  posts.map(e => jwtClient.authorize(async function (err, tokens) {
    if (err) {
      res.send("Error");
      return;
    }

    let options = {
      url: "https://indexing.googleapis.com/v3/urlNotifications:publish",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      auth: {
        bearer: tokens.access_token
      },
      json: [{
        url: `https://www.covidresources.me/article/${e._id}`,
        type: "URL_UPDATED"
      }, {
        url: `https://www.covidresources.in/en-in/article/${e._id}`,
        type: "URL_UPDATED"
      }, {
        url: `https://www.daisonline.com/article/${e._id}`,
        type: "URL_UPDATED"
      }, {
        url: `https://www.infinity.cyou/en-nl/article/${e._id}`,
        type: "URL_UPDATED"
      }, {
        url: `https://www.arnavgupta.net/article/${e._id}`,
        type: "URL_UPDATED"
      }, {
        url: `https://www.passionatebloggers.me/article/${e._id}`,
        type: "URL_UPDATED"
      }]
    };
    request__WEBPACK_IMPORTED_MODULE_0___default()(options, async function (error, response, body) {
      if (error) {
        res.send("Error");
      } else {
        console.log([{
          url: `https://www.covidresources.me/article/${e._id}`,
          type: "URL_UPDATED"
        }, {
          url: `https://www.covidresources.in/en-in/article/${e._id}`,
          type: "URL_UPDATED"
        }, {
          url: `https://www.daisonline.com/article/${e._id}`,
          type: "URL_UPDATED"
        }, {
          url: `https://www.infinity.cyou/en-nl/article/${e._id}`,
          type: "URL_UPDATED"
        }, {
          url: `https://www.arnavgupta.net/article/${e._id}`,
          type: "URL_UPDATED"
        }, {
          url: `https://www.passionatebloggers.me/article/${e._id}`,
          type: "URL_UPDATED"
        }]);
      }
    });
  }));
  posts.map(e => e.tags.split(" ").map(e => {
    jwtClient.authorize(async function (err, tokens) {
      if (err) {
        res.send("Error");
        return;
      }

      let options = {
        url: "https://indexing.googleapis.com/v3/urlNotifications:publish",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        auth: {
          bearer: tokens.access_token
        },
        json: [{
          url: `https://www.covidresources.me/tags/${e}`,
          type: "URL_UPDATED"
        }, {
          url: `https://www.covidresources.in/en-in/tags/${e}`,
          type: "URL_UPDATED"
        }, {
          url: `https://www.daisonline.com/tags/${e}`,
          type: "URL_UPDATED"
        }, {
          url: `https://www.infinity.cyou/en-nl/tags/${e}`,
          type: "URL_UPDATED"
        }, {
          url: `https://www.arnavgupta.net/tags/${e}`,
          type: "URL_UPDATED"
        }, {
          url: `https://www.passionatebloggers.me/tags/${e}`,
          type: "URL_UPDATED"
        }]
      };
      request__WEBPACK_IMPORTED_MODULE_0___default()(options, async function (error, response, body) {
        if (error) {
          res.send("Error");
        } else {
          console.log([{
            url: `https://www.covidresources.me/tags/${e}`,
            type: "URL_UPDATED"
          }, {
            url: `https://www.covidresources.in/en-in/tags/${e}`,
            type: "URL_UPDATED"
          }, {
            url: `https://www.daisonline.com/tags/${e}`,
            type: "URL_UPDATED"
          }, {
            url: `https://www.infinity.cyou/en-nl/tags/${e}`,
            type: "URL_UPDATED"
          }, {
            url: `https://www.arnavgupta.net/tags/${e}`,
            type: "URL_UPDATED"
          }, {
            url: `https://www.passionatebloggers.me/tags/${e}`,
            type: "URL_UPDATED"
          }]);
        }
      });
    });
  }));
  users.map(e => jwtClient.authorize(async function (err, tokens) {
    if (err) {
      res.send("Error");
      return;
    }

    let options = {
      url: "https://indexing.googleapis.com/v3/urlNotifications:publish",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      auth: {
        bearer: tokens.access_token
      },
      json: [{
        url: `https://www.covidresources.me/user/${e.username}`,
        type: "URL_UPDATED"
      }, {
        url: `https://www.covidresources.in/en-in/user/${e.username}`,
        type: "URL_UPDATED"
      }, {
        url: `https://www.infinity.cyou/en-nl/user/${e.username}`,
        type: "URL_UPDATED"
      }, {
        url: `https://www.arnavgupta.net/user/${e.username}`,
        type: "URL_UPDATED"
      }, {
        url: `https://www.daisonline.com/user/${e.username}`,
        type: "URL_UPDATED"
      }, {
        url: `https://www.passionatebloggers.me/user/${e.username}`,
        type: "URL_UPDATED"
      }]
    };
    request__WEBPACK_IMPORTED_MODULE_0___default()(options, async function (error, response, body) {
      if (error) {
        res.send("Error");
      } else {
        console.log([{
          url: `https://www.covidresources.me/user/${e.username}`,
          type: "URL_UPDATED"
        }, {
          url: `https://www.covidresources.in/en-in/user/${e.username}`,
          type: "URL_UPDATED"
        }, {
          url: `https://www.infinity.cyou/en-nl/user/${e.username}`,
          type: "URL_UPDATED"
        }, {
          url: `https://www.arnavgupta.net/user/${e.username}`,
          type: "URL_UPDATED"
        }, {
          url: `https://www.daisonline.com/user/${e.username}`,
          type: "URL_UPDATED"
        }, {
          url: `https://www.passionatebloggers.me/user/${e.username}`,
          type: "URL_UPDATED"
        }]);
      }
    });
  }));
});

/***/ }),

/***/ "ykE2":
/***/ (function(module, exports) {

module.exports = require("mongodb");

/***/ })

/******/ });