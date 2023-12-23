import { createContext, useEffect, useState } from "react";
import { TbCircleDotted, TbCircle } from "react-icons/tb";
import { BiSolidCircleThreeQuarter } from "react-icons/bi";
import { GoCheckCircleFill, GoXCircleFill } from "react-icons/go";
import { BsFillExclamationSquareFill } from "react-icons/bs";
import { AiOutlineDash } from "react-icons/ai";
import { LuSignalLow, LuSignalMedium, LuSignalHigh } from "react-icons/lu";
import Card from "../component/card";

export const GroupAndOrder = createContext({
  groupingVal: "",
  orderingVal: "",
  handleGroup: () => {},
  handleOrder: () => {},
  setGroupingVal: () => {},
  setOrderingVal: () => {},
  bringGroupVal: () => {},
  bringOrderVal: () => {},
  handleStatusIcon: () => {},
  handleNameIcon: () => {},
  handleDataForDescription: () => {},
  handleColorOnShortName: () => {},
  handlePriorityIcon: () => {},
  handleGroupDescriptionValue: () => {},
  handleCreatingCard: () => {},
  handleOrdering: () => {},
  handleCardVariable: () => {},

  API_DATA: {},
  isFetched: false,
});

const GroupAndOrderProvider = ({ children }) => {
  let [isFetched, setIsFetched] = useState(false);
  let [groupingVal, setGroupingVal] = useState("user");
  let [orderingVal, setOrderingVal] = useState("priority");
  let [API_DATA, setApiData] = useState({});

  // handling data fetching
  useEffect(() => {
    setIsFetched(false);
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers"
        );
        const data = await response.json();
        setApiData(data);
        setIsFetched(true);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);
  //handle color and shortname
  let handleColorOnShortName = (name) => {
    let color;
    if (name === "AS") color = "red";
    else if (name === "Y") color = "green";
    else if (name === "SK") color = "blue";
    else if (name === "S") color = "rgb(26 129 211)";
    else if (name === "R") color = "rgb(43,23,53)";
    else color = grey;
    return color;
  };
  // making function for grouping
  let handleGroup = () => {
    if (groupingVal === "status") {
      //todo
      console.log("i am status");
    } else if (groupingVal === "user") {
      //todo
      console.log("i am user");
    } else if (groupingVal === "priority") {
      //todo
      console.log("i am priority");
    }
  };

  // making function for ordering
  let handleOrder = () => {
    if (orderingVal === "priority") {
      //todo
      console.log("i am priority");
    } else if (orderingVal === "title") {
      //todo
      console.log("i am title");
    }
  };

  // the two given function brings the value of order and group
  const bringOrderVal = (event) => {
    setOrderingVal(event.target.value);
  };
  const bringGroupVal = (event) => {
    setGroupingVal(event.target.value);
  };
  // handling status icon
  let handleStatusIcon = (status) => {
    let statusIcon;
    if (status === "Todo") statusIcon = <TbCircle />;
    else if (status === "In progress")
      statusIcon = (
        <BiSolidCircleThreeQuarter style={{ color: "rgb(235 207 6)" }} />
      );
    else if (status === "Backlog") statusIcon = <TbCircleDotted />;
    else if (status === "Done")
      statusIcon = <GoCheckCircleFill style={{ color: "rgb(9 9 225)" }} />;
    else if (status === "Cancelled")
      statusIcon = <GoXCircleFill style={{ color: "#6c6666" }} />;
    return statusIcon;
  };
  // handling name icon
  let handleNameIcon = (name) => {
    const words = name.split(" ");
    const shortName = words
      .map((word) => word.charAt(0).toUpperCase())
      .join("");
    return shortName;
  };

  // handling priority icon
  let handlePriorityIcon = (priorityVal) => {
    let priorityIcon;
    if (priorityVal === 0)
      priorityIcon = (
        <AiOutlineDash
          style={{ backgroundColor: "transparent", color: "grey" }}
        />
      );
    else if (priorityVal === 1)
      priorityIcon = (
        <LuSignalLow
          style={{ backgroundColor: "transparent", color: "grey" }}
        />
      );
    else if (priorityVal === 2)
      priorityIcon = (
        <LuSignalMedium
          style={{ backgroundColor: "transparent", color: "grey" }}
        />
      );
    else if (priorityVal === 3)
      priorityIcon = (
        <LuSignalHigh
          style={{ backgroundColor: "transparent", color: "grey" }}
        />
      );
    else if (priorityVal === 4)
      priorityIcon = (
        <BsFillExclamationSquareFill style={{ color: "rgb(245, 138, 66)" }} />
      );
    return priorityIcon;
  };
  // handling description props
  let handleDataForDescription = () => {
    let users = API_DATA.users;
    let dataForDescription;
    if (groupingVal === "user") {
      dataForDescription = users;
    } else if (groupingVal === "priority") {
      dataForDescription = [0, 1, 2, 3, 4];
    } else if (groupingVal === "status") {
      dataForDescription = [
        "Backlog",
        "Todo",
        "In progress",
        "Done",
        "Cancelled",
      ];
    }
    return dataForDescription;
  };
  // handling the current grouping for description
  let handleGroupDescriptionValue = (groupData) => {
    let currentGroupingIcon;
    let currentGroupingValue;

    if (groupingVal === "user") {
      let shortName = handleNameIcon(groupData.name);
      let userNameColor = handleColorOnShortName(shortName);
      const userIcon = (
        <div className="userIcon">
          <button
            type="button"
            style={{ backgroundColor: `${userNameColor}`, fontWeight: "700" }}
            className={`userIconInsider btn btn-primary position-relative`}
          >
            {shortName}
            <span
              className={`  translate-middle  border border-light rounded-circle userIconDot ${
                groupData.available ? "available" : ""
              } `}
            ></span>
          </button>
        </div>
      );
      currentGroupingIcon = userIcon;
      currentGroupingValue = groupData.name;
    }
    if (groupingVal === "status") {
      currentGroupingIcon = handleStatusIcon(groupData);
      currentGroupingValue = groupData;
    }

    if (groupingVal === "priority") {
      currentGroupingIcon = handlePriorityIcon(groupData);

      switch (groupData) {
        case 0:
          currentGroupingValue = "No Priority";
          break;
        case 1:
          currentGroupingValue = "Low";
          break;
        case 2:
          currentGroupingValue = "Medium";
          break;
        case 3:
          currentGroupingValue = "High";
          break;
        case 4:
          currentGroupingValue = "Urgent";
        default:
          "No Priority";
      }
    }
    return { currentGroupingIcon, currentGroupingValue };
  };
  // handle creating card for card container
  let handleCreatingCard = ({
    orderedList,
    groupData,
    cardCount,
    setCardCount,
    cardCountHelper,
  }) => {
    let keyval = 0;
    let cardCounting = 0;
    let totalCards = [];
    if (groupingVal === "user") {
      for (let i = 0; i < orderedList.length; i++) {
        if (orderedList[i].userId === groupData.id) {
          cardCounting++;
          totalCards.push(<Card key={keyval++} ticket={orderedList[i]} />);
        }
      }
    } else if (groupingVal === "priority") {
      for (let i = 0; i < orderedList.length; i++) {
        if (orderedList[i].priority === groupData) {
          cardCounting++;
          totalCards.push(<Card key={keyval++} ticket={orderedList[i]} />);
        }
      }
    } else if (groupingVal === "status") {
      for (let i = 0; i < orderedList.length; i++) {
        if (orderedList[i].status === groupData) {
          cardCounting++;
          totalCards.push(<Card key={keyval++} ticket={orderedList[i]} />);
        }
      }
    }
    // updating card count
    useEffect(() => {
      cardCount[cardCountHelper] = cardCounting;
      setCardCount(cardCount);
    }, [orderedList]);
    return totalCards;
  };
  // handle ordering
  let handleOrdering = () => {
    let tickets = API_DATA.tickets;
    function orderingByTitle(ticketList) {
      return ticketList.slice().sort((a, b) => a.title - b.title);
    }
    function orderingByPriority(ticketList) {
      return ticketList.slice().sort((a, b) => a.priority - b.priority);
    }
    let [orderedList, setOrderedList] = useState(tickets);
    useEffect(() => {
      let newOrderedList;
      if (orderingVal === "priority")
        newOrderedList = orderingByPriority(tickets);
      else newOrderedList = orderingByTitle(tickets);
      setOrderedList(newOrderedList);
    }, [orderingVal]);

    return orderedList;
  };
  let handleCardVariable = (ticket) => {
    let users = API_DATA.users;
    let statusIcon = handleStatusIcon(ticket.status);
    let priorityIcon = handlePriorityIcon(ticket.priority);
    // handling for namechange
    let nameChange;
    if (groupingVal === "priority" || groupingVal === "status") {
      let userId = ticket.userId;
      let user;

      for (let i = 0; i < users.length; i++) {
        if (users[i].id === userId) user = users[i];
      }
      let shortName = handleNameIcon(user.name);
      let userNameColor = handleColorOnShortName(shortName);
      const userIcon = (
        <div className="userIcon">
          <button
            type="button"
            style={{
              backgroundColor: `${userNameColor}`,
              fontWeight: "700",
            }}
            className={`userIconInsider btn btn-primary position-relative`}
          >
            {shortName}
            <span
              className={`  translate-middle  border border-light rounded-circle userIconDot ${
                user.available ? "available" : ""
              } `}
            ></span>
          </button>
        </div>
      );
      nameChange = userIcon;
    }
    // handling for statuschange
    let statusChange;
    if (groupingVal === "priority" || groupingVal === "user") {
      statusChange = statusIcon;
    }
    // handling for prioritychange
    let priorityChange;
    if (groupingVal === "user" || groupingVal === "status") {
      priorityChange = priorityIcon;
    }

    return { nameChange, statusChange, priorityChange };
  };
  return (
    <GroupAndOrder.Provider
      value={{
        groupingVal,
        orderingVal,
        handleGroup,
        handleOrder,
        setGroupingVal,
        setOrderingVal,
        bringGroupVal,
        bringOrderVal,
        handleStatusIcon,
        handleNameIcon,
        handlePriorityIcon,
        handleColorOnShortName,
        handleGroupDescriptionValue,
        handleCreatingCard,
        handleDataForDescription,
        handleOrdering,
        handleCardVariable,
        API_DATA,
        isFetched,
      }}
    >
      {children}
    </GroupAndOrder.Provider>
  );
};
export default GroupAndOrderProvider;
