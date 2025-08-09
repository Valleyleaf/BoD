import { connectDB } from "./Config/Connection.js";
import express from "express";
import cors from "cors";
import commanderRoutes from "./routes/commanders.js";
import itemRoutes from "./routes/items.js";
import articleRoutes from "./routes/articles.js";

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

// Root route
app.get("/", (req, res) => {
  res.json({ 
    message: "BoD API Server is running!", 
    endpoints: {
      commanders: "/api/commanders",
      items: "/api/items", 
      articles: "/api/articles"
    }
  });
});

app.use("/api/commanders", commanderRoutes);
app.use("/api/items", itemRoutes);
app.use("/api/articles", articleRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));