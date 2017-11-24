# HackJam Redux
## Démarrer
```
git clone https://github.com/hackages/hackjam-redux
npm install
npm run start
```

## TODOS
### Connectez React et Redux
Dans index.js, utilisez le Provider pour connecter React et Redux
[See: https://github.com/reactjs/react-redux/blob/master/docs/api.md#provider-store](https://github.com/reactjs/react-redux/blob/master/docs/api.md#provider-store)

### Écrire le todos reducers
Dans redux/todosReducer.js, implémentez les différentes fonctionnalitées du reducer:

    - Ajouter des todos
    - Toggle des todos:
    - Supprimer des todos

### Connecter TodoList.js
En utilisant connect de React Redux, connectez la TodoList pour qu'elle reçoive les todos de redux
[See: Connect](https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options)

### Connecter TodoItem.js
Permettez à TodoItem de Toggle des todos et d'en supprimer en le connectant à Redux en lui passant les action creators toggleTodo et deleteTodo qu'il faut donc implémenter.
Vous pouvez trouver ceux-ci dans src/redux/todosReducer

### Connecter TodoForm.js
Permettre à TodoForm.js de créer des Todos en lui donnant l'action creator addTodo que vous devez donc implémenter.
