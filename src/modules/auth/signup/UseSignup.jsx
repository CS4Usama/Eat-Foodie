import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {doSignup} from '../../../store/actions/AuthAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';


export default function UseSignup() {

    const [passwordVisibility1, setPasswordVisibility1] = useState(false);
    const [passwordVisibility2, setPasswordVisibility2] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [favDish, setFavDish] = useState('');
    const [gender, setGender] = useState('male');
    const [dob, setDob] = useState('');
    const [profileImage, setProfileImage] = useState('');
    const dispatch = useDispatch();

    const doSignupUser = () => {
        let user = {
            email, password, name, city, favDish, gender, dob, profileImage
        }
        console.log("USAMA", user);
        if(password === confirmPassword) {
            // dispatch(action);
            // dispatch(doSignup(email, password));     //By Separate Parameters/Props
            dispatch(doSignup(user));       //By Object
            toast.error('Congratulations! You have successfully created your account...', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            toast.error('Password did not match...', {
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


    return [passwordToogleIcon1, passwordToogleIcon2, passwordInputType1, passwordInputType2, setEmail, setPassword, setConfirmPassword, setName, setCity, setFavDish, setGender, setDob, setProfileImage, doSignupUser];
}