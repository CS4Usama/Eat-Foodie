import {LOGIN, LOGOUT} from '../actions/AuthAction';

// We will use this 'isUserLoggedIn' Boolean Variable for checking whether User is Login or not
let initialState = {
    isUserLoggedIn: false,
    // user: {}
    userArr: null
}

function AuthReducer(state=initialState, action) {
    switch (action.type) {
        case LOGIN:
            // console.log(action.payload.snapshot)
            // If User Login then What ?
            // let userName = state.userArr.map((item) => {
            //     if(action.payload.docId === item.docID) {
            //         return {...action.payload.data, ...action.payload.docID};
            //     } else {
            //         return item;
            //     }
            // })
            // console.log("Login User is: ",userName);
            return {
                ...state,
                isUserLoggedIn: true,
                user: action.payload
                // user: userName
            };
            
        case LOGOUT:
            // If User Login then What ?
            return {
                ...state,
                isUserLoggedIn: false,
                // user: {}
                user: null
            };
            

        default:
            return state;
    }
}

export default AuthReducer;