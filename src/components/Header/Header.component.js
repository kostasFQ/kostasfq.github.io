import React from 'react';
import styles from 'components/Header/styles.module.scss';
import myPhoto from 'assets/imgs/me.jpeg';
import icons from 'assets/icons/icons.module.scss';
import ic from 'assets/icons/linkedin.png';

const Header = () => {
  
  return (
    <div className={styles.header}>
      <div className={styles.header__body}>
        <div className={styles.header__body__photo}>
          <img src={myPhoto} alt='me' height='250px'/>
        </div>
        <div className={styles.header__body__description} >
          <div className={styles.header__body__description__name}>Kanstantsin Asipenka</div>
          <div>Manual/Automation QA</div>
          <div>Front-End Developer </div>
          <div>About me</div>
        </div>
        <ul className={styles.header__body__contacts}>
          <li className={styles.header__body__contacts__item}><i className={icons.email} />kostasFQ@gmail.com</li>
          <li className={styles.header__body__contacts__item}><i className={icons.phone} />+375(33)6057868</li>
          <li className={styles.header__body__contacts__item}><i className={icons.skype} />tria-atista</li>
          <li className={styles.header__body__contacts__item}><i className={icons.city} />Belarus, Brest</li>
          <li className={styles.header__body__contacts__item}><i className={icons.address} />F. Skoriny 36/1 ap.50</li>
          <li className={styles.header__body__contacts__item}>
              <a href='https://github.com/kostasFQ' target='blank'><i className={icons.github}/></a>
              <a href='https://www.linkedin.com/in/kanstantsin-asipenka-7b140611b/' target='blank'> <img src={ic} alt='linkedIn' /> </a>
          </li>
        </ul>
      </div> 
    </div>
  )
}

export default Header;
