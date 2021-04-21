import React from "react";
import "../../src/css/AddResource.css";
import AddResourceForm from "./AddResourceForm";
import Footer from "./Footer";
import TopNav2 from "./TopNav2";

const AddResource = () => {
  return (
    <div><TopNav2/>
      <div className="ar-container">
        <AddResourceForm />
      </div>
      <Footer />
    </div>
  );
};

export default AddResource;
