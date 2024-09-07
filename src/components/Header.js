import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import useOnlinestatus from "../utils/useOnlinestatus";
import Usercontext from "../utils/Usercontext";
import { LOGO_URL } from "../utils/constants";
import { FaCartShopping } from "react-icons/fa6";
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { adduser, removeuser } from '../utils/userSlice';

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const [loginbtn, setloginbtn] = useState("Login");
  const Onlinestatus = useOnlinestatus();
  const cartItems = useSelector((store) => store.cart.items);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(adduser({ uid: uid, email: email, displayName: displayName }));
        setloginbtn("Sign Out");  
      } else {
        dispatch(removeuser());
        setloginbtn("Sign In");   
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  const handlesignout = () => {
    signOut(auth)
      .then(() => {
        setloginbtn("Login");  
        navigate("/Login");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="flex xs:flex-row justify-between items-center px-4 md:px-20 shadow-lg mb-8 bg-white">
      <div className="w-16 sm:w-24 mb-2 sm:mb-0">
        <img src={LOGO_URL} alt="Logo" className="h-full w-full" />
      </div>
      <div className="flex xs:flex-row items-center gap-4 md:gap-10">
        <ul className="flex xs:flex-row items-center gap-2 sm:gap-4 md:gap-10 text-sm sm:text-base md:text-xl">
          <li className=" hover:text-orange-400">
            <Link to="/">Home</Link>
          </li>
          <li className=" hover:text-orange-400">
            <Link to="/About">About</Link>
          </li>
          <li className=" hover:text-orange-400">
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/Cart" className="font-bold flex items-center gap-1 sm:gap-2  hover:text-orange-400">
              <FaCartShopping />
              {cartItems.length}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
