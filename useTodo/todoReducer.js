export const todoReducer = (initialState = [], action) => {
    switch (action.type) {
        case 'Add Todo':
            return [...initialState, action.payload];
            break;

        case 'Remove Todo':
            return initialState.filter((todo) => todo.id !== action.payload);
            break;

        case 'Done Todo':
            return initialState.map((todo) => {
                if (todo.id === action.payload) {
                    return { ...todo, done: !todo.done };
                }
                return todo;
            });
            break;

        default:
            throw new Error(action.type);
    }
};
