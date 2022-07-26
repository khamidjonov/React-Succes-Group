import { useState } from 'react';

import Logo from '../../assets/images/SuccesGroupLogo.png';
import UserImage from "../../assets/images/user's image.png";

import { BsBriefcase } from 'react-icons/bs';
import { HiOutlineClipboardList } from 'react-icons/hi';
import { FiSettings, FiArrowUpRight, FiMenu } from 'react-icons/fi';
import { ImExit } from 'react-icons/im';
import { AiOutlineBell, AiOutlineRight } from 'react-icons/ai';
import { IoIosClose } from 'react-icons/io';

const Lessons = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
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
            <h4 className="type-name">Kurslarim</h4>
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
        <div className="lessons-list">
          <div className="lessons-item active">
            <div className="lesson__header">
              <p className="lesson-name">Java kursi</p>
              <FiArrowUpRight className="lesson__icon-upright" />
            </div>
            <div className="lesson__details">
              <div className="lesson__details-item">
                <h5>G-60</h5>
                <p>Guruhi</p>
              </div>
              <div className="lesson__details-item">
                <h5>18:00</h5>
                <p>Boshlanish vaqti</p>
              </div>
              <div className="lesson__details-item">
                <h5>20:00</h5>
                <p>Tugash vaqti</p>
              </div>
            </div>
            <div className="lesson__footer">
              <p className="lessons-students">O'quvchilar soni: 30 ta</p>
              <div className="lesson-status">
                <span className="lesson-status__icon"></span>
                <p>Active</p>
              </div>
            </div>
          </div>
          <div className="lessons-item">
            <div className="lesson__header">
              <p className="lesson-name">Java kursi</p>
              <FiArrowUpRight className="lesson__icon-upright" />
            </div>
            <div className="lesson__details">
              <div className="lesson__details-item">
                <h5>G-60</h5>
                <p>Guruhi</p>
              </div>
              <div className="lesson__details-item">
                <h5>18:00</h5>
                <p>Boshlanish vaqti</p>
              </div>
              <div className="lesson__details-item">
                <h5>20:00</h5>
                <p>Tugash vaqti</p>
              </div>
            </div>
            <div className="lesson__footer">
              <p className="lessons-students">O'quvchilar soni: 30 ta</p>
              <div className="lesson-status">
                <span className="lesson-status__icon"></span>
                <p>Archive</p>
              </div>
            </div>
          </div>
          <div className="lessons-item">
            <div className="lesson__header">
              <p className="lesson-name">Java kursi</p>
              <FiArrowUpRight className="lesson__icon-upright" />
            </div>
            <div className="lesson__details">
              <div className="lesson__details-item">
                <h5>G-60</h5>
                <p>Guruhi</p>
              </div>
              <div className="lesson__details-item">
                <h5>18:00</h5>
                <p>Boshlanish vaqti</p>
              </div>
              <div className="lesson__details-item">
                <h5>20:00</h5>
                <p>Tugash vaqti</p>
              </div>
            </div>
            <div className="lesson__footer">
              <p className="lessons-students">O'quvchilar soni: 30 ta</p>
              <div className="lesson-status">
                <span className="lesson-status__icon"></span>
                <p>Archive</p>
              </div>
            </div>
          </div>
          <div className="lessons-item">
            <div className="lesson__header">
              <p className="lesson-name">Java kursi</p>
              <FiArrowUpRight className="lesson__icon-upright" />
            </div>
            <div className="lesson__details">
              <div className="lesson__details-item">
                <h5>G-60</h5>
                <p>Guruhi</p>
              </div>
              <div className="lesson__details-item">
                <h5>18:00</h5>
                <p>Boshlanish vaqti</p>
              </div>
              <div className="lesson__details-item">
                <h5>20:00</h5>
                <p>Tugash vaqti</p>
              </div>
            </div>
            <div className="lesson__footer">
              <p className="lessons-students">O'quvchilar soni: 30 ta</p>
              <div className="lesson-status">
                <span className="lesson-status__icon"></span>
                <p>Archive</p>
              </div>
            </div>
          </div>
          <div className="lessons-item">
            <div className="lesson__header">
              <p className="lesson-name">Java kursi</p>
              <FiArrowUpRight className="lesson__icon-upright" />
            </div>
            <div className="lesson__details">
              <div className="lesson__details-item">
                <h5>G-60</h5>
                <p>Guruhi</p>
              </div>
              <div className="lesson__details-item">
                <h5>18:00</h5>
                <p>Boshlanish vaqti</p>
              </div>
              <div className="lesson__details-item">
                <h5>20:00</h5>
                <p>Tugash vaqti</p>
              </div>
            </div>
            <div className="lesson__footer">
              <p className="lessons-students">O'quvchilar soni: 30 ta</p>
              <div className="lesson-status">
                <span className="lesson-status__icon"></span>
                <p>Archive</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lessons;
