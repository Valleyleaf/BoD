import { connectDB } from "./Config/Connection.js";
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import commanderRoutes from "./routes/Commanders.js";
import itemRoutes from "./routes/Items.js";
import articleRoutes from "./routes/Articles.js";

const app = express();
app.use(cors());
app.use(express.json());

connectDB().catch(err => {
  console.error("Failed to connect to database:", err);
});

app.use("/api/commanders", commanderRoutes);
app.use("/api/items", itemRoutes);
app.use("/api/articles", articleRoutes);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (process.env.NODE_ENV === "production") {
  const frontendPath = path.join(__dirname, "../client/dist"); // change to ../client/build if using CRA
  app.use(express.static(frontendPath));

  app.get("*", (req, res) => {
    res.sendFile(path.join(frontendPath, "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.json({ 
      message: "BoD API Server is running (development mode)", 
      endpoints: {
        commanders: "/api/commanders",
        items: "/api/items", 
        articles: "/api/articles"
      }
    });
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
