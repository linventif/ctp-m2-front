import { Footer } from "./footer/footer";
import { Header } from "./header/header";
import { TaskInput } from "./taskInput/taskInput";
import { TaskList } from "./taskList/taskList";
import { useState } from "react";


// Ce composant est utilisé pour afficher l'intégralité de la fonctionalité de Tache.
export function TaskContainer() {
  const [todoItems, setTodoItems] = useState([
		{ id: 1, label: 'Apprendre TypeScript & Solid JS', done: false },
		{ id: 2, label: 'Faire des gauffres au rhum vanille', done: false },
		{ id: 3, label: 'Mettre 20/20 à mon CTP', done: false },
		{ id: 4, label: 'Publier mon projet sur GitHub', done: true },
  ]);

  function removeTodoItem(id) {
		setTodoItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function addTodoItem(label) {
		const newTask = {
			id: todoItems.length + 1,
			label: label,
			done: false,
		};
		setTodoItems([...todoItems, newTask]);
  }

  function toggleTodoItem(id) {
		setTodoItems((prevItems) =>
			prevItems.map((item) =>
				item.id === id ? { ...item, done: !item.done } : item,
			),
		);
  }

  return (
		<main>
			<Header />
			<TaskInput addTodoItem={addTodoItem} />
			<TaskList
				todoItems={todoItems}
				removeTodoItem={removeTodoItem}
				toggleTodoItem={toggleTodoItem}
			/>
			<Footer todoItems={todoItems} />
		</main>
  );
}
