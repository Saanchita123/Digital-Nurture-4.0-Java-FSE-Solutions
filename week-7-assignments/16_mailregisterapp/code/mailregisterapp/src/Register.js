import React, { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const validateFeild = (name, value) => {
    let error = "";

    switch (name) {
      case "fullName":
        error = value.length < 5 ? "Name must be atleat 5 charaters long " : "";
        break;

      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        error = !emailRegex.test(value) ? "email must contain @ and ." : "";
        break;

      case "password":
        error =
         value.length < 8
            ? "password must be at least 8 characters long"
            : "";
        break;

      default:
        break;
    }

    return error;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: validateFeild(name, value),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {
      fullName: validateFeild("fullName", formData.fullName),
      email: validateFeild("email", formData.email),
      password: validateFeild("password", formData.password),
    };
    setErrors(newErrors);

    const isValid = Object.values(newErrors).every((error) => error === "");
    if (isValid) {
      alert("REGISTRATION SUCCESSFULL !");
      setFormData({
        fullName: "",
        email: "",
        password: "",
      });
    } else {
      if (newErrors.fullName) alert(newErrors.fullName);
      if (newErrors.email) alert(newErrors.email);
      if (newErrors.password) alert(newErrors.password);
    }
  };
  return (
    <div className="register-form">
      <h1>Register here !!!!1</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name : </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && <div className="errors">{errors.fullName}</div>}
        </div>
        <div className="form-group">
          <label>Email : </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>
        <div className="form-group">
          <label>Password : </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <div className="error">{errors.password}</div>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default Register;
