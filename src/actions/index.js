const addRepo = data => {
    return {
        type: "ADDREPO",
        payload: data
    };
}

const removeRepo = data => {
    return {
        type: "REMOVEREPO",
        payload: data
    };
}

export { addRepo, removeRepo };