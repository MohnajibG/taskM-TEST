"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = 3000;
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Connect to MongoDB
mongoose_1.default.connect("mongodb://localhost:27017/taskManagerDB");
mongoose_1.default.connection.on("connected", () => {
    console.log("✅ Connected to MongoDB");
});
mongoose_1.default.connection.on("error", (err) => {
    console.error("❌ MongoDB connection error:", err);
});
// Define Task model
const taskSchema = new mongoose_1.default.Schema({
    title: String,
    completed: Boolean,
});
const Task = mongoose_1.default.model("Task", taskSchema);
// Routes
app.get("/tasks", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tasks = yield Task.find();
        res.json(tasks);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to retrieve tasks" });
    }
}));
app.post("/tasks", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title } = req.body;
        const newTask = new Task({ title, completed: false });
        yield newTask.save();
        res.json(newTask);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to add task" });
    }
}));
// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
