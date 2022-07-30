function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: Date.now(),
          text: action.text,
          completed: false,
        },
      ];
    case "TOGGLE_COMPLETED":
      return state.map((todo) => {
        return todo.id === action.id
          ? { ...todo, completed: !todo.completed }
          : { ...todo };
      });
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.id);
    case "CLEAR_COMPLETED":
      return state.filter((todo) => !todo.completed);
    default:
      throw new Error("Unhandled action type: " + action.type);
  }
}

export default todoReducer;
