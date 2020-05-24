const initialState = {
    arr: [],
    text: ''
}
export default (state = initialState, action) => {
    switch (action.type) {
        case 'Add':

            state.arr.push(state.text)
            state.text = ""
            return Object.assign({}, state)
        case 'type':
            // console.log(action.text)
            state.text = action.text
            return Object.assign({}, state)
        case 'Delete':
            // console.log(action.name)
            state.arr = state.arr.filter((val, i) => {
                // console.log(i)
                if (i == action.name)
                    return false;
                return true;

            })
            console.log(state.arr)
            return Object.assign({}, state);
    }
}