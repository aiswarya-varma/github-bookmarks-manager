const reducer = (state = [], action) => {
    switch (action.type) {
        case "ADDREPO": return state.filter((s) => s.id === action.payload.id).length ? state : [...state, action.payload];
        case "REMOVEREPO": return state.filter((s) => s.id !== action.payload);
        default: return state;
    }
}

export default reducer;