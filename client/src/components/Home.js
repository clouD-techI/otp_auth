import React from "react";
import queryString from "query-string";

function Home({ location }) {
  const { number, otp } = queryString.parse(location.search);
  console.log(number, otp);

  return (
    <div>
      <h1>Welcome User</h1>
      <h2>Your entered Mobile Number {number}</h2>
      <h2>Your entered Otp {otp}</h2>
    </div>
  );
}

export default Home;
