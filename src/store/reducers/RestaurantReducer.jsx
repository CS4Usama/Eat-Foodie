import {LOGIN, LOGOUT} from '../actions/AuthAction';

// We will use this 'isResLoggedIn' Boolean Variable for checking whether Restaurant is Login or not
let initialState = {
    isResLoggedIn: false,
    // res: {}
    resArr: null
}

function AuthReducer(state=initialState, action) {
    switch (action.type) {
        case LOGIN:
            // console.log(action.payload.snapshot)
            // If Restaurant Login then What ?
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
                isResLoggedIn: true,
                res: action.payload
                // res: resName
            };
            
        case LOGOUT:
            // If Restaurant Login then What ?
            return {
                ...state,
                isResLoggedIn: false,
                // res: {}
                res: null
            };
            

        default:
            return state;
    }
}

export default AuthReducer;