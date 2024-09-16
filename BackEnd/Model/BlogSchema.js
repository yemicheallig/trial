const express = require("express");
const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const Blog = mongoose.model("BlogContent", blogSchema);

module.exports = Blog;
