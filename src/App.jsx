import React from "react";
import { Route, Routes } from "react-router-dom";
import Authentication from "./routes/authentication/authentication.component";
import Home from "./routes/home.component";
import Navigation from "./routes/navigation/navigation.component";
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
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
