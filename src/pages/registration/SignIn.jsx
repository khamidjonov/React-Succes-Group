import React, { useState } from 'react';

import { FaEyeSlash, FaEye } from 'react-icons/fa';

import RegistrationNav from './RegistrationNav';

const SignIn = () => {
  const [phoneValue, setPhoneValue] = useState('+998 9');
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [isPasswordValid] = useState(false);

  return (
    <div className="registration-container">
      <RegistrationNav />
      <form className="registration-form-container">
        <h3>Sign in</h3>
        <label htmlFor="phone-number">Phone Number</label>
        <div className={`form-item active`}>
          <input
            type="text"
            id="phone-number"
            placeholder="+998(99)99-99-99"
            value={phoneValue}
            onChange={(e) => setPhoneValue(e.target.value)}
            required
          />
        </div>
        <label htmlFor="password">Password</label>
        <div className={`form-item ${!isPasswordValid && 'incorrectPassword'}`}>
          <div className="password">
            <input
              type={!passwordVisibility ? 'password' : 'text'}
              id="password"
              placeholder="********"
            />
            {!passwordVisibility ? (
              <FaEyeSlash
                onClick={() => {
                  setPasswordVisibility(true);
                }}
              />
            ) : (
              <FaEye
                onClick={() => {
                  setPasswordVisibility(false);
                }}
              />
            )}
          </div>
        </div>
        {!isPasswordValid && <p className="incorrect">Password is incorrect</p>}
        <div className="check-policy">
          <input type="checkbox" name="" id="check-policy" />
          <label htmlFor="check-policy">Save it</label>
        </div>
        {/* eslint-disable-next-line */}
        <a href="#" className="enter">
          Enter system
        </a>
        <button type="submit" className="btn full">
          Send SMS code
        </button>
      </form>
    </div>
  );
};

export default SignIn;
