import {auth, db} from '../../config/Firebase';
import { toast } from 'react-toastify';


export const LOGIN = 'Login';
export const LOGOUT = 'Logout';

export const doLogin = (email, password) => async(dispatch) => {
    
    try {
        // Firebase Login Code
        const resCredential = await auth.signInWithEmailAndPassword(email, password)
        var res = resCredential.res;
        console.log("restaurant", res.uid);
        let snapshot = await db.collection('restaurants').where('uid','==',res.uid).get();
        let resRecord = {}
        snapshot.forEach((item)=>{
            resRecord = item.data()
          console.log("item", item.data());
        })

        console.log("Restaurant ID:", );
        dispatch({
            type: LOGIN,
            payload: resRecord
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
        toast.error('Restaurant does not exist.', {
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


export const doSignup = (res) => async(dispatch) => {
    try {
        // Firebase Login Code
        const resCredential = await auth.createUserWithEmailAndPassword(res.email, res.password);
        var resData = resCredential.res;
        console.log("USAMA Mushtaq")
        console.log('RestaurantData logged',res);
        // DB Firestore
        await db.collection("restaurants").add({
            ...res,
            // email: res.email,
            // password: res.password,
            uid: resData.uid
        });
        
        let snapshot = await db.collection('restaurants').get();
        let resArr = [];
        snapshot.forEach((doc) => {
            resArr.push({
                docID: doc.id,
                ...doc.data()
            });
        })
        console.log(resData)
        console.log("Array", resArr)

        dispatch({
            type: LOGIN,
            payload: resData
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