import styles from "./header.module.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import { VscSettings } from "react-icons/vsc";
import { IoMdMoon } from "react-icons/io";
import { useContext, useState } from "react";
import { GroupAndOrder } from "../store/store";
import { IoMdSunny } from "react-icons/io";

const Header = () => {
  // to change the value of order and group
  let myContext = useContext(GroupAndOrder);
  let bringGroupVal = myContext.bringGroupVal;
  let bringOrderVal = myContext.bringOrderVal;
  // theme changer
  let [isLight, setIsLight] = useState(true);
  const toggleTheme = () => {
    setIsLight(!isLight);
  };

  // state of  dialog
  const [showFilter, setShowFilter] = useState(false);

  return (
    <section className={styles.navbar}>
      <nav>
        <div className={styles.displaySwitchWrapper}>
          <div
            className={styles.displaySwitch}
            onClick={() => {
              setShowFilter(!showFilter);
            }}
          >
            <div className={styles.switchIcon}>
              <VscSettings />
            </div>
            <span>Display</span>
            <div
              className={`${styles.dropdownIcon} ${
                showFilter ? styles.rotate : ""
              }`}
            >
              <MdKeyboardArrowDown />
            </div>
          </div>
          <section
            className={`${styles.dropdown} ${
              showFilter ? styles.showFilter : styles.hideFilter
            }`}
          >
            <div className={`${styles.dropdownItem} ${styles.grouping}`}>
              <span>Grouping</span>
              <select
                name="grouping"
                id="grouping"
                onChange={(event) => bringGroupVal(event)}
              >
                <option value="user">user</option>
                <option value="status">status</option>
                <option value="priority">priority</option>
              </select>
            </div>
            <div className={`${styles.dropdownItem} ${styles.ordering}`}>
              <span>Ordering</span>
              <select
                name="ordering"
                id="ordering"
                onChange={(event) => bringOrderVal(event)}
              >
                <option value="Piority">priority</option>
                <option value="title">title</option>
              </select>
            </div>
          </section>
        </div>
        <button
          type="button"
          className={styles.themeChanger}
          onClick={toggleTheme}
        >
          {isLight ? (
            <IoMdMoon />
          ) : (
            <IoMdSunny style={{ color: "yellow", fontSize: "1.4rem" }} />
          )}
        </button>
      </nav>
    </section>
  );
};
export default Header;
