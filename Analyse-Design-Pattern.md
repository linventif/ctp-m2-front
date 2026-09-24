# Analyse design pattern
<!--
Identifier de potentiels design patterns compatible avec
l’application
• Patterns plus ou moins déjà implémentés dans votre solution
• Patterns compatibles avec votre solution
• Patterns incompatibles avec votre solution

MVC
• Singleton
• Strategy
• Builder
• Command
• Observer
• State

• Pour chaque pattern 3 cas possibles
• Présence : Expliquez sa présence et s’il est complet
• Compatibilité : Expliquez comment l’ajouter
• Incompatibilité : Expliquez pourquoi   -->

## MVC

**Présence**:

Partiellement : le state `todoItems` de `TaskContainer` joue le role de modèle, les fonctions `addTodoItem` / `removeTodoItem` / `toggleTodoItem` celui de controleur et les composants `TaskList`, `TaskItem`... celui de vue

Il est pas totalement implémenté car de la logique `model` / `controleur` sont mélangés dans le même composant

**Compatibilité**:

On peut le compléter en sortant la logique dans sont propre fichier et en gardant juste `TaskContainer` comme simple vue

**Incompatibilité**:

Non

## Singleton

**Présence**:

Non

**Compatibilité**:

Oui, on pourrais l'ajouté via le system du local storage pour ajouté de la persistance a l'application, car actuellement tout est en ram

**Incompatibilité**:

Non

## Strategy

**Présence**:

Non

**Compatibilité**:

Oui, on peut l'ajouter pour filtrer la liste des `todo items`, avec un potentiel (`all` / `todo` / `done`) en passant à `TaskList` une fonction de filtre interchangeable

**Incompatibilité**:

Non

## Builder

**Présence**:

Non

**Compatibilité**:

Non

**Incompatibilité**:

Il n'est pas utile car une tâche n'a que trois attributs (`id`, `label`, `done`), un objet simple suffit

## Command

**Présence**:

Partiellement : chaque action (`ajouter`, `supprimer`, `terminer`) est une fonction transmise aux composants enfants qui l'exécutent sans connaître son implémentation

Il est incomplet car les actions ne sont pas des objet a part entière, donc impossible de les historiser ou de les annuler

**Compatibilité**:

On peut le compléter en transformant chaque action en objet avec une méthode `execute` et une méthode `undo`, et en gardant un historique des actions dans une queue

**Incompatibilité**:

Non

## Observer

**Présence**:

Oui: quand `setTodoItems` modifie le state, tous les composants qui en dépendent (`TaskList`, `Footer`) sont automatiquement re-render

Et les event de composant: `onChange` / `onSubmit` / `onClick` sont aussi des observateurs d'événements du DOM

**Compatibilité**:

Non

**Incompatibilité**:

Non

## State

**Présence**:

Partiellement : `TaskItem` change son style et ses actions (`terminer` / `restaurer`) via l'état de `done`, ce qui est incomplet car il n'y a pas d'objet d'état dédié et que le test de l'état est actuellement une simple ternaire

**Compatibilité**:

On pourrais remplacé `done` par une enum de `status` (`todo`, `doing`, `done`) associé à un objet qui définit le style & actions de chaque états

**Incompatibilité**:

Non
