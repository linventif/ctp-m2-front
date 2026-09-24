// Ce composant est utilisé pour afficher le champ de saisie de tâche.
import styles from "./Footer.module.css";
export function Footer({ todoItems }) {
  return (
		<footer>
			<code className={styles.footer}>
				Le gestionnaire de tâches vous as permis de traiter{' '}
				{todoItems.filter((item) => item.done).length} tâches depuis le début de son utilisation.
			</code>
		</footer>
  );
}
