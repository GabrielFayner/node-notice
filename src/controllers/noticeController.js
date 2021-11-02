const express = require("express");
const {
  getAll,
  getById,
  created,
  updated,
  deleted,
} = require("../repositories/noticeRepository");
const Notice = require("../models/Notice");
const router = express.Router();

//index
router.get("/", async (req, res) => {
  await getAll(Notice, req, res);
});

// show
router.get("/:id", async (req, res) => {
  await getById(Notice, req, res);
});

// create
router.post("/", async (req, res) => {
  await created(Notice, req, res);
});

//update
router.put("/:id", async (req, res) => {
  await updated(Notice, req, res);
});

//delete
router.delete("/:id", async (req, res) => {
  await deleted(Notice, req, res);
});

module.exports = (app) => app.use("/notice", router);
