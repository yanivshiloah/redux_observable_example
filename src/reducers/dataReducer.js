export default (state = null, action) => {
    switch (action.type) {
        case 'GET_DATA':
            return action.payload;
        default:
            return state;
    }
}
