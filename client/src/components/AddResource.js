import React from "react";
import "../../src/css/AddResource.css";
import AddResourceForm from "./AddResourceForm";
import Footer from "./Footer";
 

const AddResource = () => {
  return (
    <div>
      <div className="ar-container">
        <AddResourceForm />
      </div>
      <Footer />
    </div>
  );
};

export default AddResource;
