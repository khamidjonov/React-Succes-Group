import { useState } from 'react';

import Logo from '../../assets/images/SuccesGroupLogo.png';
import UserImage from "../../assets/images/user's image.png";
import StudentImage from '../../assets/images/image for list.png';

import { BsBriefcase, BsCalendarDate } from 'react-icons/bs';
import { HiOutlineClipboardList } from 'react-icons/hi';
import { FiSettings, FiArrowUpRight, FiMenu } from 'react-icons/fi';
import { ImExit } from 'react-icons/im';
import { AiOutlineBell, AiOutlineRight, AiOutlineDown } from 'react-icons/ai';
import { IoIosClose } from 'react-icons/io';

const Group = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const [studentList] = useState([
    {
      name: 'Sardor Narzikulov',
      phoneNumber: '+(99) 8658423',
      fatherPhoneNumber: '+(91) 1274832',
      motherPhoneNumber: '+(88) 4687453',
      isPaid: false,
      isActive: false,
    },
    {
      name: 'Olim Sotimov',
      phoneNumber: '+(93) 1643135',
      fatherPhoneNumber: '+(90) 6874135',
      motherPhoneNumber: '+(95) 3546848',
      isPaid: true,
      isActive: false,
    },
    {
      name: 'Sardor Narzikulov',
      phoneNumber: '+(99) 8658423',
      fatherPhoneNumber: '+(91) 1274832',
      motherPhoneNumber: '+(88) 4687453',
      isPaid: true,
      isActive: true,
    },
    {
      name: 'Olim Sotimov',
      phoneNumber: '+(93) 1643135',
      fatherPhoneNumber: '+(90) 6874135',
      motherPhoneNumber: '+(95) 3546848',
      isPaid: false,
      isActive: false,
    },
    {
      name: 'Sardor Narzikulov',
      phoneNumber: '+(99) 8658423',
      fatherPhoneNumber: '+(91) 1274832',
      motherPhoneNumber: '+(88) 4687453',
      isPaid: true,
      isActive: false,
    },
    {
      name: 'Olim Sotimov',
      phoneNumber: '+(93) 1643135',
      fatherPhoneNumber: '+(90) 6874135',
      motherPhoneNumber: '+(95) 3546848',
      isPaid: false,
      isActive: false,
    },
    {
      name: 'Sardor Narzikulov',
      phoneNumber: '+(99) 8658423',
      fatherPhoneNumber: '+(91) 1274832',
      motherPhoneNumber: '+(88) 4687453',
      isPaid: false,
      isActive: false,
    },
    {
      name: 'Olim Sotimov',
      phoneNumber: '+(93) 1643135',
      fatherPhoneNumber: '+(90) 6874135',
      motherPhoneNumber: '+(95) 3546848',
      isPaid: true,
      isActive: false,
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
              <p className="choose-direction-item active">Guruh</p>
              <p className="choose-direction-item">Davomot</p>
              <p className="choose-direction-item">Imtihon</p>
            </div>
          </div>
          <div className="students-list">
            <table>
              <thead>
                <tr>
                  <th>N</th>
                  <th>Ism familiya</th>
                  <th className="phone-number">Telefon raqami</th>
                  <th className="father-phone-number">Dadasining raqami</th>
                  <th className="mother-phone-number">Onasining raqami</th>
                  <th className="payment">Shu oyga to'lov</th>
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
                        <td className="down-icon">
                          <AiOutlineDown color="ff0000" className="down" />
                        </td>
                        <td className="phone-number">{student.phoneNumber}</td>
                        <td className="father-phone-number">
                          {student.fatherPhoneNumber}
                        </td>
                        <td className="mother-phone-number">
                          {student.motherPhoneNumber}
                        </td>
                        <td className="payment">
                          <p className={student.isPaid ? 'paid' : 'unpaid'}>
                            {student.isPaid ? "To'langan" : "To'lanmagan"}
                          </p>
                        </td>
                      </tr>

                      <div className="other-details">
                        <div className="detail__item">
                          <h6>Tel.raqam</h6>
                          <p>{student.phoneNumber}</p>
                        </div>
                        <div className="detail__item">
                          <h6>Otasini raqami</h6>
                          <p>{student.fatherPhoneNumber}</p>
                        </div>
                        <div className="detail__item">
                          <h6>Onasini raqami</h6>
                          <p>{student.motherPhoneNumber}</p>
                        </div>
                        <div className="detail__item">
                          <h6>Oylik to'lov</h6>
                          <p className={student.isPaid ? 'paid' : 'unpaid'}>
                            {student.isPaid ? "To'langan" : "To'lanmagan"}
                          </p>
                        </div>
                      </div>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
          <button className="btn send-attendance">Davomotni yuborish</button>
        </div>
      </div>
    </div>
  );
};

export default Group;
