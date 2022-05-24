import Login from "./components/Login";
import ChatBox from "./components/ChatBox";
import { useContext } from "react";
import { UserContext } from "./context/user-context";

function App() {
  const ctx = useContext(UserContext);
  return <div>{ctx.nickname ? <ChatBox /> : <Login />}</div>;
}

export default App;
