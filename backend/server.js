import express from 'express';
import cors from "cors";
import dotenv from "dotenv";
import fs from "fs";
import pg from 'pg';
const { Pool } = pg;


dotenv.config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

const pool = new Pool({
    host: PGHOST || "ep-ancient-dream-abbsot9k-pooler.eu-west-2.aws.neon.tech",
    database: PGDATABASE || "neondb",
    username: PGUSER || "neondb_owner",
    password: PGPASSWORD || "npg_jAS3aITLC5DX",
  port: 5432,
  ssl: {
    require: true,
  },
});

const client = await pool.connect();

const app = express();
const port = process.env.PORT || 1337;
app.use(cors());
app.use(express.json({ limit: "5mb" }));

app.get("/", (req, res) => {
  res.json({ message: "cofounder backend boilerplate :)" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
