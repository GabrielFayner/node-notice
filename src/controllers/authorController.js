const express = require("express");
const {
  getAll,
  getById,
  created,
  updated,
  deleted,
} = require("../repositories/authorRepository");
const Author = require("../models/Author");
const router = express.Router();

router.get("/", async (req, res) => {
  await getAll(Author, req, res);
});

// show
router.get("/:id", async (req, res) => {
  await getById(Author, req, res);
});

// create
router.post("/", async (req, res) => {
  await created(Author, req, res);
});

//update
router.put("/:id", async (req, res) => {
  await updated(Author, req, res);
});

//delete
router.delete("/:id", async (req, res) => {
  await deleted(Author, req, res);
});

module.exports = (app) => app.use("/author", router);
