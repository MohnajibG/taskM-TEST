import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [tasks, setTasks] = useState<any[]>([]);
  const [title, setTitle] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  // Charger les tâches depuis l'API au démarrage
  useEffect(() => {
    const loadTasks = async () => {
      try {
        const response = await axios.get("http://localhost:3000/tasks"); // Récupérer les tâches
        setTasks(response.data); // Mettre à jour l'état avec les tâches récupérées
      } catch (error) {
        console.log(error);
        setError("Erreur lors de la récupération des tâches");
      }
    };
    loadTasks();
  }, []);

  // Ajouter une tâche avec la méthode POST
  const addTask = async () => {
    if (!title) {
      console.log("Le titre est requis");
      setError("Le titre est requis");
      return;
    }
    try {
      const response = await axios.post("http://localhost:3000/tasks", {
        title, // Passer le titre de la tâche dans body
      });
      setTasks((prevTasks) => [...prevTasks, response.data]); // Ajouter la nouvelle tâche
      setTitle(""); // Réinitialiser le champ titre
      setError(null); // Réinitialiser l'erreur
    } catch (error) {
      console.log(error);
      setError("Erreur lors de l'ajout de la tâche");
    }
  };

  return (
    <div>
      <h1>Gestionnaire de Tâches</h1>
      {/* Affichage des erreurs */}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div>
        {/* Affichage des tâches */}
        {tasks.map((task) => (
          <h2 key={task.id}>{task.title}</h2>
        ))}
      </div>
      <input
        type="text"
        value={title}
        // Mettre à jour le titre
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Nouvelle tâche"
      />
      {/* Bouton pour ajouter une tache */}
      <button onClick={addTask}>Ajouter</button>
    </div>
  );
};
export default App;
