import mongoose, { Document, Schema } from "mongoose";

// Interface pour typer le modèle Task
interface ITask extends Document {
  title: string;
  completed: boolean;
}

// Création du modèle Task avec le typage correct
const taskSchema = new Schema<ITask>({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

const Task = mongoose.model<ITask>("Task", taskSchema);

export default Task;
