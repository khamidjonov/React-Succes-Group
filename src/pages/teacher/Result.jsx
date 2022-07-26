import { useState } from 'react';

import Logo from '../../assets/images/SuccesGroupLogo.png';
import UserImage from "../../assets/images/user's image.png";
import StudentImage from '../../assets/images/image for list.png';

import { BsBriefcase} from 'react-icons/bs';
import { HiOutlineClipboardList } from 'react-icons/hi';
import { FiSettings, FiArrowUpRight, FiMenu } from 'react-icons/fi';
import { ImExit } from 'react-icons/im';
import {
  AiOutlineBell,
  AiOutlineRight,
  AiOutlineSearch,
} from 'react-icons/ai';
import { IoIosClose } from 'react-icons/io';

const Result = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const [studentList] = useState([
    {
      name: 'Sardor Narzikulov',
      studyingUniversity: "Farg'ona davlat universiteti",
      result: 'grant',
      allData: true,
    },
    {
      name: 'Olim Sotimov',
      studyingUniversity: "Farg'ona davlat universiteti",
      result: 'grant',
      allData: true,
    },
    {
      name: 'Sardor Narzikulov',
      studyingUniversity: "Farg'ona davlat universiteti",
      result: 'grant',
      allData: true,
    },
    {
      name: 'Olim Sotimov',
      studyingUniversity: "Farg'ona davlat universiteti",
      result: 'grant',
      allData: false
    }
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
          <div className="nav-tabs__item">
            <BsBriefcase className="tab-icon" />
            <p className="tab-name">Kurslarim</p>
          </div>
          <div className="nav-tabs__item active">
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
        <div className="about-group result">
          <div className="group__header">
            <div className="group-number">
              <h5>G-60 guruhi</h5>
            </div>
            <div className="search-for-students">
              <input type='text' placeholder='Lorem ipsum door sit amet...' />
              <AiOutlineSearch />
            </div>
          </div>
          <div className="result">
            <table>
              <thead>
                <tr>
                  <th>N</th>
                  <th>Ism familiya</th>
                  <th className="university"> Universitet nomi </th>
                  <th className="result"> Natija </th>
                  <th className="grade"> Ball </th>
                  <th></th>
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
                        <td className="td university">{student.studyingUniversity}</td>
                        <td className='td result'>{student.result}</td>
                        <td></td>
                      </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
