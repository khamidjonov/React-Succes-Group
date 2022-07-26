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
  AiOutlinePlusCircle,
  AiOutlineDelete,
  AiOutlineClose,
  AiOutlineCheck,
} from 'react-icons/ai';
import { IoIosClose } from 'react-icons/io';
import { BiMessageCheck } from 'react-icons/bi';

const Attendance = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const [studentList] = useState([
    {
      name: 'Sardor Narzikulov',
      isCameOnMonday: true,
      isMouseOver: false,
    },
    {
      name: 'Olim Sotimov',
      isCameOnMonday: false,
      isMouseOver: false,
    },
    {
      name: 'Sardor Narzikulov',
      isCameOnMonday: true,
      isMouseOver: true,
    },
    {
      name: 'Olim Sotimov',
      isCameOnMonday: 'unset',
    },
    {
      name: 'Sardor Narzikulov',
      isCameOnMonday: 'unset',
      setAttendance: true,
    },
    {
      name: 'Olim Sotimov',
      isCameOnMonday: 'unset',
    },
    {
      name: 'Sardor Narzikulov',
      isCameOnMonday: 'unset',
    },
    {
      name: 'Olim Sotimov',
      isCameOnMonday: 'unset',
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
            <h4 className="type-name">Davomot</h4>
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
                <p>Ustoz: Nodir Komilov</p>
                <div className="date-icon">
                  <BsCalendarDate /> 16.02.2021
                </div>
              </div>
            </div>
            <div className="choose-direction">
              <p className="choose-direction-item">Guruh</p>
              <p className="choose-direction-item active">Davomot</p>
              <p className="choose-direction-item">Imtihon</p>
            </div>
          </div>
          <div className="students-attendance">
            <table>
              <thead>
                <tr>
                  <th>N</th>
                  <th>Ism familiya</th>
                  <th className="monday active">Dushanba</th>
                  <th className="tuesday">Seshanba</th>
                  <th className="wednesday">Chorshanba</th>
                  <th className="thursday">Payshanba</th>
                  <th className="friday">Juma</th>
                  <th className="saturday">Shanba</th>
                  <th className="sunday">Yakshanba</th>
                </tr>
              </thead>
              <tbody>
                {studentList.map((student, index) => {
                  return (
                    <>
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
                        <td
                          className={`day mark monday ${
                            student.isCameOnMonday === 'unset'
                              ? ''
                              : student.isCameOnMonday
                              ? 'came'
                              : 'not-came'
                          } ${student.isMouseOver && 'not-came'}`}
                        >
                          {student.isCameOnMonday === 'unset' &&
                          !(
                            student.isMouseOver === false ||
                            student.isMouseOver === true
                          ) ? (
                            <>
                              <div className="marking show-form">
                                <AiOutlinePlusCircle className="plus-icon" />
                                <p>Belgilash</p>
                              </div>
                              {student.setAttendance && (
                                <div className="set-attendance">
                                  <form className="first-part">
                                    <div>
                                      <input
                                        type="radio"
                                        name="student-attendance"
                                        id="came"
                                      />
                                      <label htmlFor="came">Keldi</label>
                                    </div>
                                    <div className="without-reason">
                                      <span>Kelmadi</span>
                                      <AiOutlineRight />
                                    </div>
                                  </form>
                                  <form className="second-part">
                                    <div className="checked">
                                      <input
                                        type="radio"
                                        name="student-attendance"
                                        id="reason"
                                      />
                                      <label htmlFor="reason">Sababli</label>
                                    </div>
                                    <div>
                                      <input
                                        type="radio"
                                        name="student-attendance"
                                        id="no-reason"
                                      />
                                      <label htmlFor="no-reason">Sababli</label>
                                    </div>
                                  </form>
                                </div>
                              )}
                            </>
                          ) : student.isMouseOver ? (
                            <>
                              <AiOutlineDelete />
                              <p>O'chirish</p>
                            </>
                          ) : student.isCameOnMonday ? (
                            'Keldi'
                          ) : (
                            'Kelmadi'
                          )}
                        </td>
                        <td className="day tuesday"></td>
                        <td className="day wednesday"></td>
                        <td className="day thursday"></td>
                        <td className="day friday"></td>
                        <td className="day saturday"></td>
                        <td className="day sunday"></td>
                      </tr>
                    </>
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
                  <p>Davomot yuborildi</p>
                </div>
              </div>
            </table>
          </div>
          <button className="btn send-attendance">Davomotni yuborish</button>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
