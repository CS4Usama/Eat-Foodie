import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { doLogin } from '../../../store/actions/AuthAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


export default function UseSignup() {

    const [passwordVisibility1, setPasswordVisibility1] = useState(false);
    const [passwordVisibility2, setPasswordVisibility2] = useState(false);
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const dispatch = useDispatch();

    // const doLoginUser = () => {
    //     // dispatch(action);
    //     dispatch(doLogin(email, password));
    // }

    const passwordToogleIcon1 = (
        <FontAwesomeIcon
            icon={passwordVisibility1 ? faEyeSlash : faEye}
            onClick={(e) => setPasswordVisibility1(passwordVisibility1 => !passwordVisibility1)}
        />
    );
    const passwordInputType1 = passwordVisibility1 ? "text" : "password";

    const passwordToogleIcon2 = (
        <FontAwesomeIcon
            icon={passwordVisibility2 ? faEyeSlash : faEye}
            onClick={(e) => setPasswordVisibility2(passwordVisibility2 => !passwordVisibility2)}
        />
    );
    const passwordInputType2 = passwordVisibility2 ? "text" : "password";


    // return [setEmail, setPassword, doLoginUser];
    return [passwordToogleIcon1, passwordToogleIcon2, passwordInputType1, passwordInputType2];
}