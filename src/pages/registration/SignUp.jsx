import React, { useState } from 'react';

import { FaEye, FaEyeSlash } from 'react-icons/fa';

import RegistrationNav from './RegistrationNav';

const SignUp = () => {
  const [phoneValue, setPhoneValue] = useState('+998 9');
  const [passwordVisibility1, setPasswordVisibility1] = useState(true);
  const [passwordVisibility2, setPasswordVisibility2] = useState(false);

  return (
    <div className="registration-container">
      <RegistrationNav />
      <form className="registration-form-container">
        <h3>Ro'yhatdan o'tish</h3>
        <label htmlFor="name-and-surname">Ism Familiya</label>
        <div className="form-item">
          <input
            type="text"
            id="name-and-surname"
            placeholder="Firstname and Givenname"
            required
          />
        </div>
        <label htmlFor="phone-number">Phone Number</label>
        <div className="form-item">
          <input
            type="text"
            id="phone-number"
            placeholder="+998(99)99-99-99"
            value={phoneValue}
            onChange={(e) => setPhoneValue(e.target.value)}
            required
          />
        </div>
        <label htmlFor="password-1">Password</label>
        <div className="form-item">
          <div className="password">
            <input
              type={!passwordVisibility1 ? 'password' : 'text'}
              id="password-1"
              placeholder="********"
            />
            {!passwordVisibility1 ? (
              <FaEyeSlash
                onClick={() => {
                  setPasswordVisibility1(true);
                }}
              />
            ) : (
              <FaEye
                onClick={() => {
                  setPasswordVisibility1(false);
                }}
              />
            )}
          </div>
        </div>
        <label htmlFor="password-2">Confirm Password</label>
        <div className="form-item">
          <div className="password">
            <input
              type={!passwordVisibility2 ? 'password' : 'text'}
              id="password-2"
              placeholder="********"
            />
            {!passwordVisibility2 ? (
              <FaEyeSlash onClick={() => setPasswordVisibility2(true)} />
            ) : (
              <FaEye onClick={() => setPasswordVisibility2(false)} />
            )}
          </div>
        </div>
        <div className="check-policy">
          <input type="checkbox" name="" id="check-policy" />
          <label htmlFor="check-policy">I agree with terms of policy</label>
        </div>
        <button type="submit" className="btn full">
          Send SMS code
        </button>
        {/* eslint-disable-next-line */}
        <a href="#" className="enter">
          Enter system
        </a>
      </form>
    </div>
  );
};

export default SignUp;
