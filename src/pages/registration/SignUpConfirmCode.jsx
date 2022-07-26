import React from 'react';

import RegistrationNav from './RegistrationNav';

const SignUpConfirmCode = () => {
  const [code, setCode] = React.useState(false);

  return (
    <div className="registration-container">
      <RegistrationNav />
      <form className="registration-form-container confirm-code">
        <h3>Confirm Code</h3>
        <label htmlFor="code">Enter code</label>
        <div className={`form-item check-policy ${code && 'active'}`}>
          <input
            type="text"
            id="code"
            placeholder="______"
            maxLength="6"
            required
            onChange={(e) => {
              e.target.value.length === 6 ? setCode(true) : setCode(false);
            }}
          />
        </div>

        {/* eslint-disable-next-line */}
        <a href="#" className="enter">
          Resend code
        </a>
        <button type="submit" className="btn full">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUpConfirmCode;
