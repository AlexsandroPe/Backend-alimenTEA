import express from "express";

import autisticUserRoutes from "./src/routes/autistaRoutes.js";
import adminRoutes from "./src/routes/adminRoutes.js";
import ingredientsRoutes from "./src/routes/ingredientesRoutes.js";
import recipesRoutes from "./src/routes/receitaRoutes.js";
import diaryRoutes from "./src/routes/diarioRoutes.js"

const app = express();
autisticUserRoutes(app);
ingredientsRoutes(app);
adminRoutes(app);
recipesRoutes(app);
diaryRoutes(app);

app.listen(3000, () => {
  console.log("Server running...");
});
