import React from "react";
import Layout from "./component/Login/Layout";
import LayoutSign from "./component/SignUp/LayoutSign";

const App = () => {
  return (
    <div className="login">
      <Layout></Layout>
      <LayoutSign></LayoutSign>
    </div>
  );
};

export default App;
