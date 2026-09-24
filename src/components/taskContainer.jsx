import { Footer } from "./footer/footer";
import { Header } from "./header/header";
import { TaskInput } from "./taskInput/taskInput";
import { TaskList } from "./taskList/taskList";
import { useState } from "react";


// Ce composant est utilisé pour afficher l'intégralité de la fonctionalité de Tache.
export function TaskContainer() {
  const [todoItems, setTodoItems] = useState([
    { id: 1, label: "Apprendre TypeScript & Solid JS", done: false },
    { id: 2, label: "Faire des gauffres au rhum vanille", done: false },
    { id: 3, label: "Mettre 20/20 à mon CTP", done: false },
  ]);

  return (
    <main>
      <Header />
      <TaskInput todoItems={todoItems} setTodoItems={setTodoItems} />
      <TaskList todoItems={todoItems} setTodoItems={setTodoItems} />
      <Footer todoItems={todoItems} />
    </main>
  );
}
