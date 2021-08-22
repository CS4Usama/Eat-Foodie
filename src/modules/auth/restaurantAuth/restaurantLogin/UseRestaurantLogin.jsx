import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { doLogin } from '../../../../store/actions/AuthAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


export default function UseRestaurantLogin() {

    const [passwordVisibility, setPasswordVisibility] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const doLoginUser = () => {
        // dispatch(action);
        dispatch(doLogin(email, password));
    }

    const passwordToogleIcon = (
        <FontAwesomeIcon
            icon={passwordVisibility ? faEyeSlash : faEye}
            onClick={(e) => setPasswordVisibility(passwordVisibility => !passwordVisibility)}
        />
    );

    const passwordInputType = passwordVisibility ? "text" : "password";

    return [setEmail, setPassword, doLoginUser, passwordToogleIcon, passwordInputType];
}