const reducer = (state, action) => {
    switch (action.type) {
        case "ADDREPO": return [...state, action.payload]
        case "REMOVEREPO": {
            // return new state after removing the repo with the same name as in action.payload
            return state;
        }
        default: return state
    }
}

export default reducer;