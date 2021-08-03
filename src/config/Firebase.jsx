import firebase from 'firebase';
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyCJdLTQ-htT13LQDc-CFUj8aFl_0vUNsWI",
  authDomain: "eat-foodie-5e685.firebaseapp.com",
  projectId: "eat-foodie-5e685",
  storageBucket: "eat-foodie-5e685.appspot.com",
  messagingSenderId: "888028122760",
  appId: "1:888028122760:web:ade4c8b863c007b5f6d93d",
  measurementId: "G-5Y1993SJ6Y"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export const db = firebase.firestore();
export const auth = firebase.auth();
// export const storage = firebase.storage();



function signUp(userDetails) {
  return new Promise((resolve, reject) => {
      const { userName, userEmail, userPassword, userCity, userCountry, userGender, userAge, userProfileImage, isRestaurant, typeOfFood } = userDetails;
      auth.createUserWithEmailAndPassword(userDetails.userEmail, userDetails.userPassword).then((success) => {
          let user = auth.currentUser;
          var uid;
          if (user != null) {
              uid = user.uid;
          };
          firebase.storage().ref().child(`userProfileImage/${uid}/` + userProfileImage.name).put(userProfileImage).then((url) => {
              url.ref.getDownloadURL().then((success) => {
                  const userProfileImageUrl = success
                  console.log(userProfileImageUrl)
                  const userDetailsForDb = {
                      userName: userName,
                      userEmail: userEmail,
                      userPassword: userPassword,
                      userCity: userCity,
                      userCountry: userCountry,
                      userGender: userGender,
                      userAge: userAge,
                      userUid: uid,
                      isRestaurant: isRestaurant,
                      userProfileImageUrl: userProfileImageUrl,
                      typeOfFood: typeOfFood,
                  }
                  db.collection("users").doc(uid).set(userDetailsForDb).then((docRef) => {
                      // console.log("Document written with ID: ", docRef.id);
                      if(userDetailsForDb.isRestaurant){
                          userDetails.propsHistory.push("/order-requests");
                          resolve(userDetailsForDb)
                      }else{
                          userDetails.propsHistory.push("/");
                          resolve(userDetailsForDb)
                      }
                  }).catch(function (error) {
                      console.error("Error adding document: ", error);
                      reject(error)
                  })
              }).catch((error) => {
                  // Handle Errors here.
                  let errorCode = error.code;
                  let errorMessage = error.message;
                  console.log("Error in getDownloadURL function", errorMessage);
                  reject(errorMessage)
              })
          }).catch((error) => {
              // Handle Errors here.
              let errorCode = error.code;
              let errorMessage = error.message;
              console.log("Error in Image Uploading", errorMessage);
              reject(errorMessage)
          })
      }).catch((error) => {
          var errorMessage = error.message;
          console.log("Error in Authentication", errorMessage);
          reject(errorMessage)
      })
  })
}

function addItem(itemDetails) {
  const { itemTitle, itemIngredients, itemPrice, itemImage, chooseItemType, } = itemDetails;
  return new Promise((resolve, reject) => {
      let user = firebase.auth().currentUser;
      var uid;
      if (user != null) {
          uid = user.uid;
      };
      firebase.storage().ref().child(`itemImage/${uid}/` + itemImage.name).put(itemImage).then((url) => {
          url.ref.getDownloadURL().then((success) => {
              const itemImageUrl = success
              console.log(itemImageUrl)
              const itemDetailsForDb = {
                  itemTitle: itemTitle,
                  itemIngredients: itemIngredients,
                  itemPrice: itemPrice,
                  itemImageUrl: itemImageUrl,
                  chooseItemType: chooseItemType,
                  // userUid: uid,
              }
              db.collection("users").doc(uid).collection("menuItems").add(itemDetailsForDb).then((docRef) => {
                  // console.log("Document written with ID: ", docRef.id);
                  // itemDetails.propsHistory.push("/my-foods");
                  resolve("Successfully added food item")
              }).catch(function (error) {
                  let errorCode = error.code;
                  let errorMessage = error.message;
                  reject(errorMessage)
                  // console.error("Error adding document: ", error);
              })
          }).catch((error) => {
              // Handle Errors here.
              let errorCode = error.code;
              let errorMessage = error.message;
              console.log("Error in getDownloadURL function", errorCode);
              console.log("Error in getDownloadURL function", errorMessage);
              reject(errorMessage)
          })
      }).catch((error) => {
          // Handle Errors here.
          let errorCode = error.code;
          let errorMessage = error.message;
          console.log("Error in Image Uploading", errorMessage);
          reject(errorMessage)
      })
  })
}

function orderNow(cartItemsList, totalPrice, resDetails, userDetails, history) {
  return new Promise((resolve, reject) => {
      let user = firebase.auth().currentUser;
      var uid;
      if (user != null) {
          uid = user.uid;
      };

      const myOrder = {
          itemsList: cartItemsList,
          totalPrice: totalPrice,
          status: "PENDING",
          ...resDetails,
      }

      const orderRequest = {
          itemsList: cartItemsList,
          totalPrice: totalPrice,
          status: "PENDING",
          ...userDetails,
      }

      // console.log("myOrder => ", myOrder)
      // console.log("orderRequest => ", orderRequest)
      db.collection("users").doc(uid).collection("myOrder").add(myOrder).then((docRef) => {
          // console.log(docRef.id)
          db.collection("users").doc(resDetails.id).collection("orderRequest").doc(docRef.id).set(orderRequest).then((docRef) => {
              // console.log("Document written with ID: ", docRef.id);
              resolve('Successfully ordered')
              // history.push("/my-orders");
          }).catch(function (error) {
              console.error("Error adding document: ", error.message);
              reject(error.message)
          })
      }).catch(function (error) {
          console.error("Error adding document: ", error.message);
          reject(error.message)
      })
  })
}

export default firebase;
export {
  signUp,
  addItem,
  orderNow,
}