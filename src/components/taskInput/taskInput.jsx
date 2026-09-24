// Ce composant est utilisé pour afficher le champ de saisie de tâche.
import styles from "./TaskInput.module.css";
import { useState } from "react";

export function TaskInput({ todoItems, setTodoItems }) {
  const [currentInput, setCurrentInput] = useState("");

  return (
    <div className={`box ${styles.element}`}>
      <h2 className={styles.title}>Ajouter une nouvelle tâche</h2>
      <form
        className={styles.container}
        onSubmit={(e) => {
          e.preventDefault();
          if (currentInput.trim() === '') {
            return;
          }
          const newTask = {
            id: todoItems.length + 1,
            label: currentInput,
            done: false,
          };
          setTodoItems([...todoItems, newTask]);
          setCurrentInput('');
            }}
      >
        <input
          type="text"
          className={styles.input}
          placeholder="Ajouter une nouvelle tâche"
          value={currentInput}
          onChange={(e) => setCurrentInput(e.target.value)}
        />
        <button className="button-primary" type="submit">
          Ajouter
        </button>
      </form>
    </div>
  );
}
