import express, { Request, Response } from "express";
import Task from "../Models/taskModel";

const router = express.Router();

// Route GET pour récupérer toutes les tâches
router.get("/tasks", async (req: Request, res: Response) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve tasks" });
  }
});

// Route POST pour ajouter une nouvelle tâche
router.post("/tasks", async (req: Request, res: Response) => {
  try {
    const { title } = req.body;
    const newTask = new Task({ title, completed: false });
    await newTask.save();
    res.json(newTask);
  } catch (error) {
    res.status(500).json({ error: "Failed to add task" });
  }
});

// Route DELETE pour supprimer une tâche par son ID
// router.delete("/tasks/:id", async (req: Request<{ id: string }>, res: Response) => {
//   try {
//     const taskId = req.params.id;
//     const task = await Task.findByIdAndDelete(taskId);
//     if (!task) {
//       return res.status(404).json({ error: "Task not found" });
//     }
//     res.json({ message: "Task deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ error: "Failed to delete task" });
//   }
// });

export default router;
