import React, { useEffect, useState } from "react";
import axios from "../axios";
const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
function showName(user) {
  return <div key={user.id}>{user.name}</div>;
}
function Function() {
  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    process();
  }, []);
  const process = async () => {
    // const data = await axios.get("/").then(async function (response) {
    //   const { data } = response.data;
    //   await sleep(3000);
    //   setUsers(data);
    //   setLoading(false);
    //   console.log(data);
    // });
    try {
      const response = await axios.get("/");
      if (response.status == 200) {
        const { data } = response.data;
        await sleep(3000);
        setUsers(data);
        setLoading(false);
        console.log(data);
      } else {
        console.log("ERROR");
        throw new Error(`${response.status}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <h1>
        {loading ? "Loading" : users.map(showName)}
        {/* {setUsers([
        { id: 1, name: "Vaidhya" },
        { id: 2, name: "Prakash" },
        { id: 3, name: "Ram" },
        { id: 4, name: "Kumar" },
      ])} */}
      </h1>
    </div>
  );
}
export default Function;
