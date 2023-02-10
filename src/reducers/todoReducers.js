const intialData = {
    list: []
}
const todoReducers = (state = intialData, action) => {
    switch (action.type) {
        case "ADDTODO":
            const { id, data } = action.payload;
            return {
                ...state,

                list: [
                    ...state.list,
                    {
                        id: id,
                        data: data

                    }
                ]
            }

        case "DELETE_TODO":
            const newItem = state.list.filter((item) => item.id !== action.id)
            return {
                ...state,
                list: newItem
            }
        case "REMOVE_TODO":
            return {
                ...state,
                list: []
            }


        default: return state;
    }

}
export default todoReducers;