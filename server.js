import express from "express";

import autistaRoutes from "./src/routes/autistaRoutes.js";
import adminRoutes from "./src/routes/adminRoutes.js";
import ingredienteRoutes from "./src/routes/ingredientesRoutes.js";
import receitaRoutes from "./src/routes/receitaRoutes.js";
import diarioRoutes from "./src/routes/diarioRoutes.js"

const app = express();
autistaRoutes(app);
ingredienteRoutes(app);
adminRoutes(app);
receitaRoutes(app);
diarioRoutes(app);

app.listen(3000, () => {
  console.log("Server running...");
});
