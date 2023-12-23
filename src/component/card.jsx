import styles from "./card.module.css";
import { FaCircle } from "react-icons/fa";
import { useContext } from "react";
import { GroupAndOrder } from "../store/store";

const Card = (props) => {
  let myContext = useContext(GroupAndOrder);
  let groupingVal = myContext.groupingVal;

  let { ticket } = props;

  let { nameChange, statusChange, priorityChange } =
    myContext.handleCardVariable(ticket);
  return (
    <div className={styles.card}>
      <div className={styles.topLine}>
        <span>{ticket.id}</span>
        {nameChange}
      </div>

      <div className={styles.midLine}>
        <p>
          {statusChange}
          {ticket.title}
        </p>
      </div>

      <div className={styles.bottomLine}>
        {groupingVal === "user" || groupingVal === "status" ? (
          <div className={styles.bottomIcon}>{priorityChange}</div>
        ) : (
          ""
        )}
        <div className={styles.bottomTag}>
          <div className={styles.tag}>
            <FaCircle />
            <span>{ticket.tag}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
