import {auth, db} from '../../config/Firebase';


const restaurant_list = () => {
    return (dispatch) => {
        db.collection('users').onSnapshot(snapshot => {
            const restaurantList = [];
            snapshot.forEach(doc => {
                if (doc.data().isRestaurant) {
                    const obj = { id: doc.id, ...doc.data() }
                    restaurantList.push(obj);
                }
            })
            console.log('Restaurant List', restaurantList);
            dispatch({
                type: 'RESTAURANT_LIST',
                restaurantList: restaurantList,
            })
        })
    }
}

const order_request = () => {
    return (dispatch) => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                // console.log("user uid => ", user.uid)
                db.collection('users').doc(user.uid).collection("orderRequest").onSnapshot(snapshot => {
                    const orderRequest = [];
                    snapshot.forEach(doc => {
                        const obj = { id: doc.id, ...doc.data() }
                        // console.log("Order Request From Action => ", obj)
                        orderRequest.push(obj)
                    })
                    dispatch({
                        type: 'ORDER_REQUEST',
                        orderRequest: orderRequest,
                    })
                })
            }
        });
    }
}

const my_order = () => {
    return (dispatch) => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                // console.log("user uid => ", user.uid)
                db.collection('users').doc(user.uid).collection("myOrder").onSnapshot(snapshot => {
                    const myOrder = [];
                    snapshot.forEach(doc => {
                        const obj = { id: doc.id, ...doc.data() }
                        // console.log("Order Request From Action => ", obj)
                        myOrder.push(obj)
                    })
                    dispatch({
                        type: 'MY_ORDER',
                        myOrder: myOrder,
                    })
                })
            }
        });
    }
}

const my_foods = () => {
    return (dispatch) => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                // console.log("user uid => ", user.uid)
                db.collection('users').doc(user.uid).collection("menuItems").onSnapshot(snapshot => {
                    const myFoods = [];
                    snapshot.forEach(doc => {
                        const obj = { id: doc.id, ...doc.data() }
                        // console.log("Order Request From Action => ", obj)
                        myFoods.push(obj)
                    })
                    dispatch({
                        type: 'MY_FOODS',
                        myFoods: myFoods,
                    })
                })
            }
        });
    }
}


export {
    restaurant_list,
    order_request,
    my_order,
    my_foods,
}