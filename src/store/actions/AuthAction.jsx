import {auth, db} from '../../config/Firebase';
import { toast } from 'react-toastify';


export const LOGIN = 'Login';
export const LOGOUT = 'Logout';

export const doLogin = (email, password) => async(dispatch) => {
    
    try {
        // Firebase Login Code
        const userCredential = await auth.signInWithEmailAndPassword(email, password)
        var user = userCredential.user;
        console.log("user", user.uid);
        let snapshot = await db.collection('users').where('uid','==',user.uid).get();
        let userRecord = {}
        snapshot.forEach((item)=>{
            userRecord = item.data()
          console.log("item", item.data());
        })

        console.log("User ID:", );
        dispatch({
            type: LOGIN,
            payload: userRecord
        });

        toast.error('Welcome to your profile...', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    } catch(err) {
        console.log("Exception is: ", err);
        // alert(JSON.stringify(err));
        toast.error('User does not exist.', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
}


export const doSignup = (user) => async(dispatch) => {
    try {
        // Firebase Login Code
        const userCredential = await auth.createUserWithEmailAndPassword(user.email, user.password);
        var userData = userCredential.user;
        console.log("USAMA Mushtaq")
        console.log('UserData logged',user);
        // DB Firestore
        await db.collection("users").add({
            ...user,
            // email: user.email,
            // password: user.password,
            uid: userData.uid
        });
        
        let snapshot = await db.collection('users').get();
        let userArr = [];
        snapshot.forEach((doc) => {
            userArr.push({
                docID: doc.id,
                ...doc.data()
            });
        })
        console.log(userData)
        console.log("Array", userArr)

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