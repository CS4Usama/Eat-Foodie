import { useSelector, useDispatch } from "react-redux";
import { doLogout } from "../../../store/actions/AuthAction";

function UseLoginNavbar() {
    const dispatch = useDispatch();
    const doUserLogout = () => {
        dispatch(doLogout());
    }
    const userName = useSelector(store => store.AuthReducer.user.name);

    

    return [doUserLogout, userName];
}

export default UseLoginNavbar;