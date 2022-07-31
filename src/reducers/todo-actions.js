const actions = {
  addTodo: (text) => ({ type: actionTypes.addTodo, text }),
  updateTodo: (id, text) => ({ type: actionTypes.updateTodo, id, text }),
  toggleCompleted: (id) => ({ type: actionTypes.toggleCompleted, id }),
  toggleEditing: (id) => ({ type: actionTypes.toggleEditing, id }),
  deleteTodo: (id) => ({ type: actionTypes.deleteTodo, id }),
  clearCompleted: () => ({ type: actionTypes.clearCompleted }),
}

const actionTypes = {
    addTodo: "ADD_TODO",
    updateTodo: "UPDATE_TODO",
    toggleCompleted: "TOGGLE_COMPLETED",
    toggleEditing: "TOGGLE_EDITING",
    deleteTodo: "DELETE_TODO",
    clearCompleted: "CLEAR_COMPLETED",
}

export { actions, actionTypes }
