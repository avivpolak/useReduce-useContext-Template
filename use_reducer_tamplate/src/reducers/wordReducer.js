// No Side Effects
export const wordReducer = (state, action) => {
    switch (action.type) {
        case "INITIAL_STAT":
            return [...action.payload];
        case "ADD_WORD":
            const { name, age, id } = action.payload;
            return [...state, { name, age, id }];
        case "REMOVE_WORD":
            let stateWithoutFriend = state.filter(function (item) {
                return item.id !== action.payload.id;
            });
            return [...stateWithoutFriend];
        case "FILTER_WORDS":
            let stateAfterFilter = state.filter(function (item) {
                return item.name
                    .toLowerCase()
                    .includes(action.payload.string.toLowerCase());
            });
            return [...stateAfterFilter];
        case "UPDATE_WORD":
            let updatedState = state.map((item) => {
                if (item.id === action.id)
                    return { ...item, title: action.title };
                return item;
            });
            return [...updatedState];
        default:
            return state;
    }
};
