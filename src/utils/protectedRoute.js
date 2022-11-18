import React, { useEffect } from "react";
import { useAuth } from "./authContext";
import Router from "next/router";

import LoadingScreen from "../components/LoadingScreen";

export default function ProtectedRoute(Component) {
  return (props) => {
    const { isAuthenticated, loading } = useAuth();

    useEffect(() => {
      if (!isAuthenticated && !loading) Router.push("/auth/login");
    }, [loading, isAuthenticated]);

    return (
      <>
        {isAuthenticated ? (
          <Component {...props} />
        ) : (
          <LoadingScreen loading={true} />
        )}
      </>
    );
  };
}
