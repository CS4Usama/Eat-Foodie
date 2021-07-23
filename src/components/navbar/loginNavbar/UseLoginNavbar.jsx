import { useDispatch } from "react-redux";
import { doLogout } from "../../../store/actions/AuthAction";

function UseLoginNavbar() {
    const dispatch = useDispatch();
    const doUserLogout = () => {
        dispatch(doLogout());
    }

    return [doUserLogout];
}

export default UseLoginNavbar;