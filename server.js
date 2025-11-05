require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("Mongo error:", err));

const RecipeSchema = new mongoose.Schema({
  title: String,
  ingredients: String,
  instructions: String,
  skinType: String,
  category: String,
});

const Recipe = mongoose.model("Recipe", RecipeSchema);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

// Get all recipes
app.get("/recipes", async (req, res) => {
  const recipes = await Recipe.find();
  res.json(recipes);
});

// Add a new recipe
app.post("/recipes", async (req, res) => {
  const newRecipe = new Recipe(req.body);
  await newRecipe.save();
  res.json({ message: "Recipe added" });
});

// Update a recipe by ID
app.put("/recipes/:id", async (req, res) => {
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedRecipe);
  } catch (err) {
    res.status(500).json({ error: "Failed to update recipe" });
  }
});

// Delete a recipe by ID
app.delete("/recipes/:id", async (req, res) => {
  try {
    await Recipe.findByIdAndDelete(req.params.id);
    res.json({ message: "Recipe deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete recipe" });
  }
});

// Search recipes by title, category, or skin type
app.get("/recipes/search", async (req, res) => {
  const { title, category, skinType } = req.query;
  const query = {};
  if (title) query.title = { $regex: title, $options: "i" };
  if (category) query.category = { $regex: category, $options: "i" };
  if (skinType) query.skinType = { $regex: skinType, $options: "i" };
  try {
    const recipes = await Recipe.find(query);
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ error: "Search failed" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
