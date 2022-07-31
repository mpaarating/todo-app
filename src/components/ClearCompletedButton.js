import React from "react";

const ClearCompletedButton = ({ todoList, dispatch }) => {
  const handleClearCompleted = () => {
    dispatch({ type: "CLEAR_COMPLETED" });
  };

  return (
    <div className="container">
      {todoList.length > 0 ? (
        <button
          className="mt-1 mb-1 button is-danger"
          onClick={handleClearCompleted}
        >
          Clear Completed
        </button>
      ) : null}
    </div>
  );
};

export default React.memo(ClearCompletedButton);
