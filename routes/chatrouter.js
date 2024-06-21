const express = require("express");

const chatController = require("./chatController");
const chatRouter = express.Router();

// GET / - chat page

chatRouter.get("/", chatController.startChat);

module.exports = chatRouter;