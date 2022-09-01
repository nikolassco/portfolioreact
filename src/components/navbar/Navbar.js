import { useRef } from 'react';
import styles from './Navbar.module.css';
import { Link as LinkScroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const ref = useRef(null);

  const closeMenu = (e) => {
    let largura = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const checkRef = ref.current;
    if (largura <= 858) {
      checkRef.checked = false;
    }
  }

  return (
    <header className={styles.navbar}>
      <input type="checkbox" id="check" className={styles.checkinput} ref={ref} />
      <label htmlFor="check" className={styles.checkbtn} >
        <FontAwesomeIcon icon={faBars} />
      </label>
      <p className={styles.logo}>Portfolio</p>
      <ul className={styles.menu_list} id="navmenu">
        <li className={styles.menu_item}>
          <LinkScroll to="resume" spy={true} smooth={true} offset={-70} duration={500} className={styles.link} onClick={closeMenu} >Home</LinkScroll>
        </li>
        <li className={styles.menu_item}>
          <LinkScroll to="projects" spy={true} smooth={true} offset={-70} duration={500} className={styles.link} onClick={closeMenu}>Projetos</LinkScroll>
        </li>
        <li className={styles.menu_item}>
          <LinkScroll to="about" spy={true} smooth={true} offset={-70} duration={500} className={styles.link} onClick={closeMenu}>Sobre Mim</LinkScroll>
        </li>
      </ul>
    </header>
  )
}

export default Navbar;
