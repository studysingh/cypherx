import React, { useContext, useEffect, useState } from "react";

import GroupDescription from "./groupDescription";
import styles from "./groupwiseContainer.module.css";
import { GroupAndOrder } from "../store/store";
import CardContainer from "./cardContainer";

const GroupWiseContainer = () => {
  let myContext = useContext(GroupAndOrder);

  let [cardCount, setCardCount] = useState([0, 0, 0, 0, 0]);

  let dataForDescription = myContext.handleDataForDescription();

  let keyval = 0;

  return (
    <>
      {dataForDescription.map((data) => (
        <div className={styles.groupWiseContainer} key={keyval++}>
          <GroupDescription
            groupData={data}
            cardCount={cardCount}
            cardCountHelper={keyval}
          />
          <CardContainer
            groupData={data}
            setCardCount={setCardCount}
            cardCount={cardCount}
            cardCountHelper={keyval}
          />
        </div>
      ))}
    </>
  );
};

export default GroupWiseContainer;
