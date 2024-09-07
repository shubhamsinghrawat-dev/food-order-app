import React, { useState, useRef,alert} from "react";
import { checkvalidate } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from 'react-redux';
import { adduser } from '../utils/userSlice';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errormessage, setErrormessage] = useState(null);
    const dispatch = useDispatch();
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const navigate = useNavigate();

    const handlebuttonclick = (event) => {
        event.preventDefault(); 

        const nameValue = name.current ? name.current.value : '';
        const emailValue = email.current ? email.current.value : ''; 
        const passwordValue = password.current ? password.current.value : ''; 

        const message = checkvalidate(!isSignInForm, nameValue, emailValue, passwordValue);
        setErrormessage(message);

        if (message === null) {
            if (!isSignInForm) {
                // Sign up
                createUserWithEmailAndPassword(auth, emailValue, passwordValue)
                    .then((userCredential) => {
                        const user = userCredential.user;
                        updateProfile(auth.currentUser, {
                            displayName: nameValue, 
                        }).then(() => {
                            const { uid, email, displayName } = auth.currentUser;
                            dispatch(adduser({ uid: uid, email: email, displayName: displayName }));
                            navigate("/"); 
                        }).catch((error) => {
                            setErrormessage(error.message);
                        });
                    })
                    .catch((error) => {
                        setErrormessage(error.message);
                    });
            } else {
                // Sign in
                signInWithEmailAndPassword(auth, emailValue, passwordValue)
                    .then((userCredential) => {
                        const user = userCredential.user;
                        dispatch(adduser({ uid: user.uid, email: user.email, displayName: user.displayName }));
                        navigate("/"); 
                    })
                    .catch((error) => {
                        setErrormessage(error.message);
                    });
            }
        }
    };

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

    return (
        <div>
            <form className="w-full md:w-4/12 absolute p-12 bg-[smokewhite] mx-auto right-0 left-0 rounded">
                <h1 className="font-bold text-3xl py-4 text-orange-500">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>
                {!isSignInForm && (
                    <input
                        ref={name}
                        type="text"
                        placeholder="Enter Your Name"
                        className="p-3 my-4 w-full bg-orange-200 rounded"
                    />
                )}
                <input type="text" ref={email} placeholder="Enter Your Email" className="p-3 my-3 bg-orange-200 w-full rounded" />
                <input type="password" ref={password} placeholder="Enter Password" className="p-3 my-3 w-full bg-orange-200 rounded" />
                <p className='text-red-500 text-lg'>{errormessage}</p>
                <button
                    className="p-2 my-4 w-full rounded-md bg-orange-500 text-white font-bold"
                    onClick={handlebuttonclick}
                >
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                <p className="py-4 cursor-pointer text-orange-400 underline" onClick={toggleSignInForm}>
                    {isSignInForm ? "Don't have account? Sign Up Now" : "Already User? Sign In Now."}
                </p>
            </form>
        </div>
    );
}

export default Login;
