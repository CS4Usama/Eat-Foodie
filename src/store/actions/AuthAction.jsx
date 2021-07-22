import {auth, db} from '../../config/Firebase';

export const LOGIN = 'Login';
export const LOGOUT = 'Logout';

export const doLogin = (email, password) => async(dispatch) => {
    try {
        // Firebase Login Code
        const userCredential = await auth.signInWithEmailAndPassword(email, password)
        var user = userCredential.user;

        console.log("User ID:", user.uid);

        dispatch({
            type: LOGIN,
            payload: user
        });
    } catch(err) {
        console.log("Exception is: ", err);
        // alert(err);
        alert(JSON.stringify(err));
    }
}


export const doSignup = (user) => async(dispatch) => {
    try {
        // Firebase Login Code
        const userCredential = await auth.createUserWithEmailAndPassword(user.email, user.password);
        var userData = userCredential.user;
console.log('UserData logged',user);
        // DB Firestore
        await db.collection("users").add({
            ...user,
            // email: user.email,
            // password: user.password,
            uid: userData.uid
        });

        dispatch({
            type: LOGIN,
            payload: userData
        });
    } catch(err) {
        console.log("Exception is: ", err);
        // alert(err);
        alert(JSON.stringify(err));
    }
}


export const doLogout = () => async(dispatch) => {
    try {
        // Firebase Login Code
        const res = await auth.signOut();

        console.log("Logout Response:", res);

        dispatch({
            type: LOGOUT,
        });
    } catch(err) {
        console.log("Exception is: ", err);
        // alert(err);
        alert(JSON.stringify(err));
    }
}