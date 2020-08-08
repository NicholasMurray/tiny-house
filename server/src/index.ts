import express from "express";
import bodyParser from "body-parser";
import { listings } from "./listings";

const app = express();
const port = 9000;

app.use(bodyParser.json());

// Listings
app.get("/listings", (req, res) => {
  res.send(listings);
});

app.post("/delete-listing", (req, res) => {
  const id: string = req.body.id;

  for (let i = 0; i < listings.length; i++) {
    const element = listings[i];
    if (element.id === id) {
      return res.send(listings.splice(i, 1));
    }
  }

  return res.send("failed to find listing");
});

// Delete Listings

app.listen(port);

console.log(`[app] : http://localhost:${port}`);
