"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var UserController_1 = require("../controllers/UserController");
var UserLoginController_1 = require("../controllers/UserLoginController");
var router = (0, express_1.Router)();
router.post("/", UserController_1.default.store);
router.post("/login", UserLoginController_1.default.store);
exports.default = router;
