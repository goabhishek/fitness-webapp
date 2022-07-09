/* eslint-disable react/prop-types */
import { Stack } from "@fluentui/react";
import React from "react";
import Link from "next/link";

// import AccountModalPopup from '../Organization/AccountsModalPopup';
const Card = () => {
  return (
  
      <div style={cardStyle.card}>
        <div>
          <img
            src="https://res.cloudinary.com/cataxvira/image/upload/v1648463987/report%20images/taxmap/user_iw1r9d.png"
            alt="user"
            style={cardStyle.icon}
          />
        </div>
        <Stack
          // key={user?._id}
          style={cardStyle.content}
          tokens={{ childrenGap: 1 }}
          wrap
        >
          <span style={cardStyle.title}>Abhishek Mishra </span>
          <span style={cardStyle.Subcontent}>Raipur</span>
          <span style={cardStyle.Subcontent}>
           lorem10
          </span>
          <span style={cardStyle.Subcontent}>
         lorem10
          </span>

          <span style={{ fontWeight: 'bold', color: 'black', ...cardStyle.Subcontent }}>
                   frontend
                </span>
                <span style={{ fontWeight: 'bold', color: 'black', ...cardStyle.Subcontent }}>
                   Hello
                </span>
        </Stack>
      </div>
   
  );
};
export default Card;
export const cardStyle = {
  card: {
    width: 370,
    border: "1px solid rgba(166, 77, 121, .1)",
    padding: 15,
    borderRadius: 15,
    boxShadow: "0 0.12rem 0.7rem 0 rgb(5 11 5 / 15%)",
    backgroundColor: "rgba(232, 215, 241, 0.1)",
    cursor: "pointer",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: "1rem",
    fontWeight: "bold",
  },
  Subcontent: {
    color: "rgb(105,105,105)",
    fontSize: "0.8rem",
  },
  content: {
    marginLeft: 20,
  },
  modalContainer: {
    width: 600,
    height: 800,
    padding: "16px",
    // border: "1px solid red",
  },
  modalContent: {
    fontSize: "1.5rem",
    fontWeight: 500,
  },

  icon: { height: 42, width: 42 },
};
