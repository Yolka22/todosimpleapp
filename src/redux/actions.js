// actions.js

export const addTodo = (content) => {
    return {
      type: 'ADD_TODO',
      payload: {
        content,
      },
    };
  };
  
  export const removeTodo = (index) => {
    return {
      type: 'REMOVE_TODO',
      payload: {
        index,
      },
    };
  };

  export const toggleTodo = (index) => {
    return {
      type: 'TOGGLE_TODO',
      payload: {
        index,
      },
    };
  };
  