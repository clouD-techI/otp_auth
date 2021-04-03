import React, { useState } from "react";
import Mobile from "./Mobile";
import Otp from "./Otp";

function Index() {
  const [mobile, setMobile] = useState(true);
  const [userNumber, setUserNumber] = useState("");

  const changeStatus = (userNumber) => {
    setUserNumber(userNumber);
    setMobile(false);
  };
  return (
    <>
      {mobile ? (
        <Mobile status={changeStatus} />
      ) : (
        <Otp userNumber={userNumber} />
      )}
    </>
  );
}

export default Index;
