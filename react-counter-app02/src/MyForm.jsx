import React, { useState } from 'react';
import './style.css';

const MyForm = () => {
   const [formData, setFormData] = useState({
      username: '',
      password: '',
      email: '',
      phoneNumber: ''
   });

   const handleChange = ({ target: { name, value } }) => {
      if (name === 'username' && value.length < 3) {
         console.log("Username must be at least 3 characters long");
      }
      if (name === 'password' && value.length < 8) {
         console.log("Password must be at least 8 characters long");
      }
      if (name === 'email' && !isEmail(value)) {
         console.log("Email is invalid!");
      }
      if (name === 'phoneNumber' && !isPhoneNumber(value)) {
         console.log("PhoneNumber is invalid!");
      }
      setFormData(prev => ({ ...prev, [name]: value }));
   };
   const handleSubmit = (e) => {
      e.preventDefault();
      if (handleFormValidation()) {
         console.log(`Form submitted with data: ${formData}`);
         handleReset();
      }
   };
   const handleReset = () => {
      setFormData({
         username: '',
         password: '',
         email: '',
         phoneNumber: ''
      });
   };

   const handleFormValidation = () => {
      if (!formData.username || !formData.password || !formData.email || !formData.phoneNumber) {
         window.alert("Please fill out all fields!");
         return false;
      }
      if (formData.username.length < 3) {
         window.alert("Username must be at least 3 characters long");
         return false;
      }
      if (formData.password.length < 8) {
         window.alert("Password must be at least 8 characters long");
         return false;
      }
      if (!isEmail(formData.phoneNumber)) {
         window.alert("Email is invalid!");
         return false;
      }
      if (!isPhoneNumber(formData.phoneNumber)) {
         window.alert("PhoneNumber is invalid!");
         return false;
      }
      return true;
   };
   const isEmail = (str) => {
      const emailReg = new RegExp(
         '^[a-zA-Z0-9._]{2,}[@]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,}$'
      );
      return emailReg.test(str);
   };
   const isPhoneNumber = (str) => {
      const phoneNumber = new RegExp(`^(0|98)9[0-9]{9}$`);
      return phoneNumber.test(str);
   };

   return (
      <div className="form__container">
         <form className="form" onSubmit={handleSubmit}>
            <div className="form__row">
               <label>Username:</label>
               <input
                  type="text"
                  className="form__input form__input-focus"
                  placeholder="Username...."
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
               />
            </div>

            <div className="form__row">
               <label>Password:</label>
               <input
                  type="password"
                  className="form__input form__input-focus"
                  placeholder="Password...."
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
               />
            </div>

            <div className="form__row">
               <label>Email:</label>
               <input
                  type="email"
                  className="form__input form__input-focus"
                  placeholder="example@stu.yazd.ac.ir"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
               />
            </div>

            <div className="form__row">
               <label>Phone number:</label>
               <input
                  type="text"
                  className="form__input form__input-focus"
                  placeholder="Phonenumber...."
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
               />
            </div>

            <button type="submit" className="form__btn-submit">
               Send
            </button>
         </form>
      </div>
   );
};

export default MyForm;