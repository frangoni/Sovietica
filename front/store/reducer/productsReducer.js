const initialState = {
    product: [],
    reviews: []
}


export default function user(state = initialState, action) {
    switch (action.type) {
        case "FETCH_PRODUCT":
            return { ...state, product: action.payload }
        case "FETCH_REVIEWS":
            return { ...state, reviews: action.payload }
        default: 
            return state
    }
}

