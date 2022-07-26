import { useState } from 'react';

import Logo from '../../assets/images/SuccesGroupLogo.png';
import UserImage from "../../assets/images/user's image.png";
import StudentImage from '../../assets/images/image for list.png';

import { BsBriefcase, BsCalendarDate } from 'react-icons/bs';
import { HiOutlineClipboardList } from 'react-icons/hi';
import { FiSettings, FiArrowUpRight, FiMenu } from 'react-icons/fi';
import { ImExit } from 'react-icons/im';
import {
  AiOutlineBell,
  AiOutlineRight,
  AiOutlineClose,
  AiOutlineCheck,
} from 'react-icons/ai';
import { IoIosClose } from 'react-icons/io';
import { BiMessageCheck } from 'react-icons/bi';

const Exam = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const [studentList] = useState([
    {
      name: 'Sardor Narzikulov',
      grade: '4 5 5'
    },
    {
      name: 'Olim Sotimov',
    },
    {
      name: 'Sardor Narzikulov',
    },
    {
      name: 'Olim Sotimov',
    },
    {
      name: 'Sardor Narzikulov',
    },
    {
      name: 'Olim Sotimov',
    },
    {
      name: 'Sardor Narzikulov',
    },
    {
      name: 'Olim Sotimov',
    },
  ]);

  return (
    <div className="container">
      <div className={`side-nav ${isSideNavOpen && 'active'}`}>
        <div className="logo">
          <img src={Logo} alt="logo" />
          <IoIosClose
            className="close-icon"
            onClick={() => setIsSideNavOpen(false)}
          />
        </div>
        <div className="user-details">
          <p className="user-name">Nodir Komilov</p>
          <p className="user-phone-number">+99893 835 92 04</p>
        </div>
        <div className="nav-tabs">
          <div className="nav-tabs__item active">
            <BsBriefcase className="tab-icon" />
            <p className="tab-name">Kurslarim</p>
          </div>
          <div className="nav-tabs__item">
            <HiOutlineClipboardList className="tab-icon" />
            <p className="tab-name">Natija</p>
          </div>
          <div className="nav-tabs__item">
            <FiSettings className="tab-icon" />
            <p className="tab-name">Sozlamalar</p>
          </div>
          <div className="nav-tabs__item">
            <FiArrowUpRight className="tab-icon" />
            <p className="tab-name">Home PDP.uz</p>
          </div>
          <div className="nav-tabs__item">
            <ImExit className="tab-icon red-icon" />
            <p className="tab-name">Chiqish</p>
          </div>
        </div>
      </div>

      <div className="main-part">
        <div className="user-information">
          <div className="menu-type-and-menu">
            <FiMenu
              className="menu-icon"
              onClick={() => setIsSideNavOpen(true)}
            />
            <h4 className="type-name">Imtihon</h4>
          </div>
          <div className="about-user">
            <AiOutlineBell className="icon-bell" />
            <div className="user">
              <img src={UserImage} alt="user" className="user-image" />
              <p className="user-name">Nodir Komilov</p>
              <AiOutlineRight className="icon-upright" />
            </div>
          </div>
        </div>
        <div className="about-group">
          <div className="group__header">
            <div className="group-number">
              <h5>G-60 guruhi</h5>
              <div className="teacher-and-date">
                <div className="date-icon" style={{display: 'block'}}>
                  <BsCalendarDate /> 16.02.2021
                </div>
              </div>
            </div>
            <div className="theme">
              <p>Mavzu</p>
              <input type='text' placeholder='Lorem ipsum door sit amet...' />
            </div>
            <div className="choose-direction">
              <p className="choose-direction-item">Guruh</p>
              <p className="choose-direction-item">Davomot</p>
              <p className="choose-direction-item active">Imtihon</p>
            </div>
          </div>
          <div className="exam">
            <table>
              <thead>
                <tr>
                  <th>N</th>
                  <th>Ism familiya</th>
                  <th className="monday">Ball</th>
                  <th className="theme">
                    <p>Mavzu</p>
                    <input type='text' placeholder='Lorem ipsum door sit amet...' />
                  </th>
                </tr>
              </thead>
              <tbody>
                {studentList.map((student, index) => {
                  return (
                      <tr
                        className={`student-item ${
                          index % 2 === 0 ? 'even' : 'odd'
                        } ${student.isActive ? 'active' : ''}`}
                      >
                        <td>{index + 1 < 10 ? '0' + (index + 1) : index}</td>
                        <td className="student-name-and-photo">
                          <img src={StudentImage} alt="student" />
                          <p>{student.name}</p>
                        </td>
                        <td className="monday-grade">{student.grade ? student.grade : 'Ballni kiriting'}</td>
                        <td className='td theme'></td>
                      </tr>
                  );
                })}
              </tbody>

              <div className="modal-window-1">
                <div className="header"></div>
                <div className="check-message">
                  <BiMessageCheck className="check-message-icon" />
                  <p>To'g'ri belgilaganingizga ishonchingiz komilmi ?</p>
                </div>
                <div className="btns">
                  <button className="btn unsend">Yo'q</button>
                  <button className="btn fill send">Yuborish</button>
                </div>
              </div>
              <div className="modal-window-2">
                <div className="header"></div>
                <div className="close">
                  <AiOutlineClose />
                </div>
                <div className="check-message">
                  <AiOutlineCheck className="check-message-icon" />
                  <p>Imtihon yuborildi</p>
                </div>
              </div>
            </table>
          </div>
          <button className="btn send-attendance">Natijani yuborish</button>
        </div>
      </div>
    </div>
  );
};

export default Exam;
