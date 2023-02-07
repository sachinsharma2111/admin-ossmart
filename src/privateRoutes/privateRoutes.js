import React, { useState } from "react";
import { Navigate } from "react-router-dom";

export { PrivateRoute };

function PrivateRoute({ children }) {

    const currentUser = localStorage.getItem("userToken");

if (!currentUser) {
    return <Navigate to="/login" />
}
return children;
}