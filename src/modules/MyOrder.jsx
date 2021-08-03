import React, { Component } from 'react';
// import Navbar from '../components/Navbar';
import LoginNavbar from '../components/navbar/loginNavbar/LoginNavbar';
// import firebase from '../config/firebase';
import { connect } from 'react-redux';
import { my_order } from '../store/actions/RestaurantAction';

import 'bootstrap/dist/css/bootstrap.css';
import '../App.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class MyOrder extends Component {
    constructor() {
        super()
        this.state = {
            tab1: "col-12 col-lg-4 col-md-4 text-center order-req-tab-active",
            tab2: "col-12 col-lg-4 col-md-4 text-center",
            tab3: "col-12 col-lg-4 col-md-4 text-center",
            tab1Content: true,
            tab2Content: false,
            tab3Content: false,
        }
    }

    async componentDidMount() {
        this.props.my_order();
    }

    static getDerivedStateFromProps(props) {
        const { user } = props
        return {
            userDetails: user,
        }
    }

    handleTabs(e) {
        if (e === "tab1") {
            this.setState({
                tab1: "col-12 col-lg-4 col-md-4 text-center order-req-tab-active",
                tab2: "col-12 col-lg-4 col-md-4 text-center",
                tab3: "col-12 col-lg-4 col-md-4 text-center",
                tab1Content: true,
                tab2Content: false,
                tab3Content: false,
            })
        } else if (e === "tab2") {
            this.setState({
                tab1: "col-12 col-lg-4 col-md-4 text-center",
                tab2: "col-12 col-lg-4 col-md-4 text-center order-req-tab-active",
                tab3: "col-12 col-lg-4 col-md-4 text-center",
                tab1Content: false,
                tab2Content: true,
                tab3Content: false,
            })
        } else if (e === "tab3") {
            this.setState({
                tab1: "col-12 col-lg-4 col-md-4 text-center",
                tab2: "col-12 col-lg-4 col-md-4 text-center",
                tab3: "col-12 col-lg-4 col-md-4 text-center order-req-tab-active",
                tab1Content: false,
                tab2Content: false,
                tab3Content: true,
            })
        }
    }

    _renderPendingMyOrder() {
        const { myOrder } = this.props;
        // console.log(myOrder)
        if (myOrder) {
            return Object.keys(myOrder).map((val) => {
                const userUid = myOrder[val].userUid;
                const orderId = myOrder[val].id;
                if (myOrder[val].status === "PENDING") {
                    return (
                        <div className="container border-bottom pb-2 px-lg-0 px-md-0 mb-4" key={myOrder[val].id}>
                            <div className="row mb-3">
                                <div className="col-lg-6 col-md-6 col-12">
                                    <h5 className="">{myOrder[val].userName}</h5>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12 text-lg-right text-md-right text-center ">
                                    <span className="text-uppercase text-danger order-req-status">{myOrder[val].status}</span>
                                </div>
                            </div>
                            {
                                Object.keys(myOrder[val].itemsList).map((val2) => {
                                    // console.log(myOrder[val].itemsList[val2])
                                    // console.log(val2)
                                    return (
                                        <div className="row mb-3" key={val2}>
                                            <div className="col-lg-2 col-md-3 col-8 offset-2 offset-lg-0 offset-md-0 px-0 mb-3 text-center">
                                                <img style={{ width: "70px", height: "70px" }} alt="Natural Healthy Food" src={myOrder[val].itemsList[val2].itemImageUrl} />
                                            </div>
                                            <div className="col-lg-7 col-md-6 col-sm-12 px-0">
                                                <h6 className="">{myOrder[val].itemsList[val2].itemTitle}</h6>
                                                <p className="mb-1"><small>{myOrder[val].itemsList[val2].itemIngredients}</small></p>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-12 px-0 text-right">
                                                <span style={{ fontSize: "14px" }} className="mx-3"><b>RS.{myOrder[val].itemsList[val2].itemPrice}</b></span>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <div className="row mb-3 mb-md-0 mb-lg-0">
                                <div className="col-lg-6 col-md-6 col-12 order-lg-first order-md-first order-last ">
                                </div>
                                <div className="col-lg-6 col-md-6 col-12 text-lg-right text-md-right">
                                    <p><b className="mr-4">Total Price:</b><span style={{ fontSize: '1.1rem' }}>RS.{myOrder[val].totalPrice}</span></p>
                                </div>
                            </div>
                        </div>
                    )
                }
            })
        }
    }

    _renderInProgressMyOrder() {
        const { myOrder } = this.props;
        // console.log(myOrder)
        if (myOrder) {
            return Object.keys(myOrder).map((val) => {
                const userUid = myOrder[val].userUid;
                const orderId = myOrder[val].id;
                if (myOrder[val].status === "IN PROGRESS") {
                    return (
                        <div className="container border-bottom pb-2 px-lg-0 px-md-0 mb-4" key={myOrder[val].id}>
                            <div className="row mb-3">
                                <div className="col-lg-6 col-md-6 col-12">
                                    <h5 className="">{myOrder[val].userName}</h5>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12 text-lg-right text-md-right text-center ">
                                    <span className="text-uppercase text-danger order-req-status">{myOrder[val].status}</span>
                                </div>
                            </div>
                            {
                                Object.keys(myOrder[val].itemsList).map((val2) => {
                                    // console.log(myOrder[val].itemsList[val2])
                                    // console.log(val2)
                                    return (
                                        <div className="row mb-3" key={val2}>
                                            <div className="col-lg-2 col-md-3 col-8 offset-2 offset-lg-0 offset-md-0 px-0 mb-3 text-center">
                                                <img style={{ width: "70px", height: "70px" }} alt="Natural Healthy Food" src={myOrder[val].itemsList[val2].itemImageUrl} />
                                            </div>
                                            <div className="col-lg-7 col-md-6 col-sm-12 px-0">
                                                <h6 className="">{myOrder[val].itemsList[val2].itemTitle}</h6>
                                                <p className="mb-1"><small>{myOrder[val].itemsList[val2].itemIngredients}</small></p>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-12 px-0 text-right">
                                                <span style={{ fontSize: "14px" }} className="mx-3"><b>RS.{myOrder[val].itemsList[val2].itemPrice}</b></span>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <div className="row mb-3 mb-md-0 mb-lg-0">
                                <div className="col-lg-6 col-md-6 col-12 order-lg-first order-md-first order-last ">
                                </div>
                                <div className="col-lg-6 col-md-6 col-12 text-lg-right text-md-right">
                                    <p><b className="mr-4">Total Price:</b><span style={{ fontSize: '1.1rem' }}>RS.{myOrder[val].totalPrice}</span></p>
                                </div>
                            </div>
                        </div>
                    )
                }
            })
        }
    }

    _renderDeliveredMyOrder() {
        const { myOrder } = this.props;
        // console.log(myOrder)
        if (myOrder) {
            return Object.keys(myOrder).map((val) => {
                if (myOrder[val].status === "DELIVERED") {
                    return (
                        <div className="container border-bottom pb-2 px-lg-0 px-md-0 mb-4" key={myOrder[val].id}>
                            <div className="row mb-3">
                                <div className="col-lg-6 col-md-6 col-12">
                                    <h5 className="">{myOrder[val].userName}</h5>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12 text-lg-right text-md-right text-center ">
                                    <span className="text-uppercase text-success order-req-status">{myOrder[val].status}</span>
                                    {/* <span className="text-uppercase text-success order-req-status">{orderRequest[val].status}</span> */}
                                </div>
                            </div>
                            {
                                Object.keys(myOrder[val].itemsList).map((val2) => {
                                    // console.log(myOrder[val].itemsList[val2])
                                    // console.log(val2)
                                    return (
                                        <div className="row mb-3" key={val2}>
                                            <div className="col-lg-2 col-md-3 col-8 offset-2 offset-lg-0 offset-md-0 px-0 mb-3 text-center">
                                                <img style={{ width: "70px", height: "70px" }} alt="Natural Healthy Food" src={myOrder[val].itemsList[val2].itemImageUrl} />
                                            </div>
                                            <div className="col-lg-7 col-md-6 col-sm-12 px-0">
                                                <h6 className="">{myOrder[val].itemsList[val2].itemTitle}</h6>
                                                <p className="mb-1"><small>{myOrder[val].itemsList[val2].itemIngredients}</small></p>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-12 px-0 text-right">
                                                <span style={{ fontSize: "14px" }} className="mx-3"><b>RS.{myOrder[val].itemsList[val2].itemPrice}</b></span>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <div className="row mb-3 mb-md-0 mb-lg-0">
                                <div className="col-lg-6 col-md-6 col-12 order-lg-first order-md-first order-last ">
                                    <h6 style={{ fontSize: '15px' }} className="text-success">This order is successfully delivered</h6>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12 text-lg-right text-md-right">
                                    <p><b className="mr-4">Total Price:</b><span style={{ fontSize: '1.1rem' }}>RS.{myOrder[val].totalPrice}</span></p>
                                </div>
                            </div>
                        </div>
                    )
                }
            })
        }
    }

    render() {
        const { tab1, tab2, tab3, tab1Content, tab2Content, tab3Content, userDetails } = this.state;
        return (
            <div>
                <div className="container-fluid res-details-cont1">
                    <div className="">
                        <LoginNavbar history={this.props.history} />
                        <div className="container px-0 res-details-cont1-text mx-0">
                            <div className="container">
                                {
                                    userDetails ? <div className="row">
                                        <div className="col-lg-2 col-md-3 col-6 text-lg-center text-md-center pr-0 mb-2">
                                            <img className="p-2 bg-white rounded text-center" alt="Natural Healthy Food" style={{ width: "60%" }} src={userDetails.userProfileImageUrl} />
                                        </div>
                                        <div className="col-lg-10 col-md-9 col-12 pl-lg-0 pl-md-0">
                                            <h1 className="restaurant-title">{userDetails.userName}</h1>
                                            {/* <p className="restaurant-text">{userDetails.typeOfFood.join(', ')}</p> */}
                                        </div>
                                    </div> : null
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ background: "#EBEDF3" }} className="container-fluid py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 col-md-10 col-sm-12 offset-lg-1 offset-md-1">
                                <div className="container">
                                    <div className="row">
                                        <div className={tab1} onClick={() => this.handleTabs("tab1")}>
                                            <p className="order-req-tab-text"><FontAwesomeIcon icon="spinner" className="mr-3" />Pending</p>
                                        </div>
                                        <div className={tab2} onClick={() => this.handleTabs("tab2")}>
                                            <p className="order-req-tab-text"><FontAwesomeIcon icon="truck" className="mr-3" />In Progress</p>
                                        </div>
                                        <div className={tab3} onClick={() => this.handleTabs("tab3")}>
                                            <p className="order-req-tab-text"><FontAwesomeIcon icon="tasks" className="mr-3" />Delivered</p>
                                        </div>
                                    </div>
                                    {tab1Content &&
                                        < div className="row pending-order-section">
                                            <div className="col-12 bg-white p-4">
                                                {this._renderPendingMyOrder()}              
                                            </div>
                                        </div>
                                    }
                                    {tab2Content && <div className="row inProgress-order-section">
                                        <div className="col-12 bg-white p-4">
                                            {this._renderInProgressMyOrder()}
                                        </div>
                                    </div>
                                    }
                                    {tab3Content && <div className="row delivered-order-section">
                                        <div className="col-12 bg-white p-4">
                                            {this._renderDeliveredMyOrder()}
                                        </div>
                                    </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

const mapStateToProps = state => {
    // console.log("mapStateToProps states =>> ", state);
    return {
        user: state.user,
        myOrder: state.myOrder,
        // todos: state.todos
    }
}

const mapDispatchToProps = dispatch => {
    return {
        my_order: () => dispatch(my_order()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyOrder);