import styles from "./Header.module.css";

const navItem = [
  {
    name: "Home",
  },
  {
    name: "About",
  },
  {
    name: "Skills",
  },
  {
    name: "Projects",
  },
];

const Header = () => {
  return (
    <header className={styles.headerWrapper}>
      <ul className={styles.listContainer}>
        {navItem.map((item, i) => (
          <li className={styles.listItem} key={i}>
            <a href="#">{item.name}</a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
