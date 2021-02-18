const express = require("express");
const router = express.Router();
const Meme = require("../models/Meme");


//GET ALL THE MEMES USING TRY & CATCH
router.get("/", async (req, res) => {
  try {
    const meme = await Meme.find();
    const memeLength = meme.length;
    if (memeLength === 0) {
      res.json([]);
    } else {
      meme.reverse();
      meme.splice(100);
      res.json(meme);
    }
  } catch (err) {
    res.json({ message: err });
  }
});

// SUBMIT A MEME USING MEME MODLE
router.post("/", async (req, res) => {
  const meme = new Meme({
    name: req.body.name,
    caption: req.body.caption,
    url: req.body.url,
  });
  try {
    const savedMeme = await meme.save();  //// SAVE MEME 
    res.json(savedMeme);   /// SEND THE RESPONSE
  } catch (err) {
    res.json({ message: err });
  }
});

// GET A SPACIFIC MEME USING MEMEID 

router.get("/:memeId", async (req, res) => {
  try {
    const meme = await Meme.findById(req.params.memeId);
    res.json(meme);
  } catch (err) {
    res.status(404).send("Not found");  // RETURN STATUS CODE 404 NOT FOUND
  }
});

module.exports = router;
