import React, { useState } from "react";

export const UserContext = React.createContext({
  nickname: "",
});

export default function Appcik(props) {
  const [nickname, setNickname] = useState(null);

  const login = (nickname) => {
    setNickname(nickname);
  };

  return (
    <UserContext.Provider value={{ nickname, login }}>
      {props.children}
    </UserContext.Provider>
  );
}
