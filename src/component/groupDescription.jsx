import styles from "./groupDescription.module.css";
import { MdAdd } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import { useContext } from "react";
import { GroupAndOrder } from "../store/store";

const GroupDescription = (props) => {
  let { groupData } = props;
  let { cardCount } = props;
  let { cardCountHelper } = props;

  let myContext = useContext(GroupAndOrder);

  let { currentGroupingIcon, currentGroupingValue } =
    myContext.handleGroupDescriptionValue(groupData);

  return (
    <div className={styles.descriptionContainer}>
      <div className={styles.left}>
        <div className={styles.iconContainer}>
          <div>{currentGroupingIcon}</div>
          <span className={styles.status}>{currentGroupingValue}</span>
          <span className={styles.cardCt}>{cardCount[cardCountHelper]}</span>
        </div>
      </div>
      <div className={styles.right}>
        <MdAdd style={{ margin: "0rem 0.2rem", color: "grey" }} />
        <BsThreeDots style={{ margin: "0rem 0.2rem", color: "grey" }} />
      </div>
    </div>
  );
};
export default GroupDescription;
