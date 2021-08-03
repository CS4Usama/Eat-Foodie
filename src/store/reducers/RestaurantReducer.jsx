let initialState = {
    error: '',
    students: []
}

function RestaurantReducer(state=initialState, action) {
    switch (action.type) {
        case "RESTAURANT_LIST": {
            return { ...state, restaurantList: action.restaurantList }
        }
        case "ORDER_REQUEST": {
            return { ...state, orderRequest: action.orderRequest }
        }
        case "MY_ORDER": {
            return { ...state, myOrder: action.myOrder }
        }
        case "MY_FOODS": {
            return { ...state, myFoods: action.myFoods }
        }

        default: {
            return state;
        }
    }
}

export default RestaurantReducer;