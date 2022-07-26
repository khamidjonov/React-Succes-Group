import './index.scss';

import { Route, Routes } from 'react-router-dom';

import SignIn from './SignIn';
import SignUp from './SignUp';
import SignUpConfirmCode from './SignUpConfirmCode';

const index = () => {
  return (
    <div>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-up-confirm" element={<SignUpConfirmCode />} />
      </Routes>
    </div>
  );
};

export default index;
