const express = require("express");
const Blog = require("../Model/BlogSchema");
const router = express.Router();

router.post("/blogs", async (req, res) => {
  const newBlog = new Blog(req.body);
  await newBlog.save();
  res.json(newBlog);
});

router.get("/blogs", async (req, res) => {
  const blogs = await Blog.find();
  res.json(blogs);
});

router.put("/blogs/:id", async (req, res) => {
  const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(blog);
});

router.delete("/blogs/:id", async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.send("Blog Deleted");
});

router.post("/blogs/DeleteAll", async (req, res) => {
  await Blog.deleteMany();
  res.send("Every Blog Deleted");
});

module.exports = router;
