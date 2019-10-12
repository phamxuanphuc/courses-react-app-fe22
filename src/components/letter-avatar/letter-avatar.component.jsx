import React from "react";

const LetterAvartar = ({ name, size }) => {
  let colours = [
    "#1abc9c",
    "#2ecc71",
    "#3498db",
    "#9b59b6",
    "#34495e",
    "#16a085",
    "#27ae60",
    "#2980b9",
    "#8e44ad",
    "#2c3e50",
    "#f1c40f",
    "#e67e22",
    "#e74c3c",
    "#ecf0f1",
    "#95a5a6",
    "#f39c12",
    "#d35400",
    "#c0392b",
    "#bdc3c7",
    "#7f8c8d"
  ];
  const nameSplit = String(name)
    .toUpperCase()
    .split(" ");
  let initials;
  if (nameSplit.length === 1) {
    initials = nameSplit[0] ? nameSplit[0].charAt(0) : "?";
  } else {
    initials = nameSplit[0].charAt(0) + nameSplit[1].charAt(0);
  }
  const charIndex = (initials === "?" ? 72 : initials.charCodeAt(0)) - 64;
  const colourIndex = charIndex % 20;
  let styles = {
    width: size,
    height: size,
    backgroundColor: colours[colourIndex],
    borderRadius: '4px',
    textAlign: "center",
    lineHeight: size,
    fontSize: '14px' 
  };

  return <div style={styles}>{initials}</div>;
};
export default LetterAvartar;
