import express from "express";
import autisticUserRoutes from "./src/routes/autistaRoutes.js";
import adminRoutes from "./src/routes/adminRoutes.js";
import ingredientsRoutes from "./src/routes/ingredientesRoutes.js";
import recipesRoutes from "./src/routes/receitaRoutes.js";
import diaryRoutes from "./src/routes/diarioRoutes.js"

const app = express();

app.use(express.json());

app.use('/admin', adminRoutes);
app.use('/ingredients', ingredientsRoutes);
app.use('/autistas', autisticUserRoutes);
app.use('/recipes', recipesRoutes);
app.use('/diary', diaryRoutes);




app.listen(3000, () => {
  console.log("Server running...");
});
