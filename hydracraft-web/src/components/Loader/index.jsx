import React, { useEffect, useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import "./styles.css";
export default function Loader({ bar }) {
  return (
    <>
      <ProgressBar
        completed={bar}
        isLabelVisible={false}
        maxCompleted={100}
        borderRadius={"0"}
        barContainerClassName="bar-container"
        bgColor="#e9e9e9"
        // className="m-5"
      />
    </>
  );
}
