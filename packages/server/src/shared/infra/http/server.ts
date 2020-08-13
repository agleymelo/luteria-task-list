import express from "express";

const app = express();

import "@shared/infra/typeorm";

app.listen(3333, () => {
  console.log("Server on");
});
