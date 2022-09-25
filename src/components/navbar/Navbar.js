import { useRef } from 'react';
import styles from './Navbar.module.css';
import { Link as LinkScroll } from 'react-scroll';
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const ref = useRef(null);

  const closeMenu = (e) => {
    let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const checkRef = ref.current;
    if (width <= 858) {
      checkRef.checked = false;
    }
  }

  return (
    <header className={styles.navbar}>
      <input type="checkbox" id="check" className={styles.checkinput} ref={ref} />
      <p className={styles.logo}>Portfolio</p>
      <label htmlFor="check" className={styles.checkbtn} >
        <AiOutlineMenu />
      </label>
      <label htmlFor="check" className={styles.checkbtnclose} >
        <AiOutlineClose />
      </label>
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
