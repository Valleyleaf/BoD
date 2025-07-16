// filepath: server/server.js
import express from "express";
import cors from "cors";
import { connectDB } from "./Config/Connection.js";
import commanderRoutes from "./routes/commanders.js";
import itemRoutes from "./routes/Items.js";
import articleRoutes from "./routes/Articles.js";

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/commanders", commanderRoutes);
app.use("/api/items", itemRoutes);
app.use("/api/articles", articleRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));