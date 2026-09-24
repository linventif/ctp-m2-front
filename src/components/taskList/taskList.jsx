// Ce composant est utilisé pour afficher la liste des tâches.
import { TaskItem } from "../taskItem/taskItem";
import styles from "./TaskList.module.css";

export function TaskList({ todoItems, removeTodoItem, toggleTodoItem }) {
	return (
		<div className='box'>
			<h2 className={styles.title}>
				Il reste {todoItems.filter((item) => !item.done).length} tâches
				à traiter
			</h2>
			<ul className={styles.container}>
				{todoItems.map((item) => (
					<TaskItem
						key={item.id}
						todoItem={item}
						removeTodoItem={removeTodoItem}
						toggleTodoItem={toggleTodoItem}
					/>
				))}
			</ul>
		</div>
	);
}
