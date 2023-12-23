import { useContext } from "react";
import { GroupAndOrder } from "../store/store";

const CardContainer = (props) => {
  let { groupData } = props;
  let { setCardCount } = props;
  let { cardCount } = props;
  let { cardCountHelper } = props;
  let myContext = useContext(GroupAndOrder);

  let orderedList = myContext.handleOrdering();

  let totalCards = myContext.handleCreatingCard({
    orderedList,
    groupData,
    cardCount,
    setCardCount,
    cardCountHelper,
  });
  return (
    <>
      {totalCards.map((card) => {
        return card;
      })}
    </>
  );
};
export default CardContainer;
