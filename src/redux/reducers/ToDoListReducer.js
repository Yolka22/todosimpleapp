const initialState = {
    list : [
      { content: 'content1', completed: false },
      { content: 'content2', completed: false },
      { content: 'content3', completed: false },
      { content: 'content4', completed: false },
      { content: 'content5', completed: false },
    ],

    completedCount: 0,
  };
  
  const ToDoListReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          ...state,
          list: [...state.list, { content: action.payload.content }],
        };
        case 'REMOVE_TODO':
      const newList = state.list.filter((_, index) => index !== action.payload.index);
      return {
        ...state,
        list: newList,
        completedCount: newList.filter((item) => item.completed).length,
      };
      case 'TOGGLE_TODO':
      const updatedList = state.list.map((item, index) =>
        index === action.payload.index ? { ...item, completed: !item.completed } : item
      );

      return {
        ...state,
        list: updatedList,
        completedCount: updatedList.filter((item) => item.completed).length,
      };

    default:
      return state;
    }
  };
  
  export default ToDoListReducer;
  