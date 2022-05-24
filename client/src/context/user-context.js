import React, { useState } from "react";

export const UserContext = React.createContext({
  nickname: "",
  chatLog: [""],
});

export default function UserContextFN(props) {
  const [nickname, setNickname] = useState(null);
  const [chatLog, setChatLog] = useState([]);

  const login = (nickname) => {
    setNickname(nickname);
  };

  const addMessage = (msg) => {
    setChatLog((prev) => {
      return [...prev, { msg: msg, author: nickname }];
    });
  };

  return (
    <UserContext.Provider value={{ nickname, login, addMessage, chatLog }}>
      {props.children}
    </UserContext.Provider>
  );
}
