import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, setUser } from "../helper/userSlice";
import { Outlet } from "react-router-dom";
import useRefreshToken from "../helper/useRefreshToken";
import appStore from "../helper/Store";

const PersistentLogin = () => {
  const [loading, setLoading] = useState(true);
  const user = useSelector(getUser);
  const verifyAccessToken = useRefreshToken();
  const dispatch = useDispatch();
  const accessToken = user?.accessToken;

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        const [statusResult, newAccessToken, email] = await verifyAccessToken();
        if (statusResult == 200) {
          dispatch(setUser({ email: email, accessToken: newAccessToken }));
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    !accessToken ? verifyRefreshToken() : setLoading(false);
  }, []);

  return <>{loading ? <p>Loading...</p> : <Outlet />}</>;
};

export default PersistentLogin;
