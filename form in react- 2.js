//using one state to update multiple input fields by giving each field a "name" attribute

import React from "react";
import "./styles.css";
export default function Form() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    secondName: "",
  });

  console.log(formData);

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <form>
      <input
        type="text"
        placeholder="First Name"
        onChange={handleChange}
        name="firstName"
      />

      <input
        type="text"
        placeholder="Last Name"
        onChange={handleChange}
        name="secondName"
      />
    </form>
  );
}
