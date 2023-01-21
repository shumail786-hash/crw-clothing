import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/home.component";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/signIn.component";
const App = () => {
  const Shop = () => {
    return (
      <div>
        <h1>I am Shop</h1>
      </div>
    );
  };

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
