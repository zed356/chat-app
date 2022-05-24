import { useRef, useContext } from "react";
import { UserContext } from "../context/user-context";
import ChatLine from "./ChatLine";

const ChatBox = () => {
  const ref = useRef();
  const ctx = useContext(UserContext);

  const sendMessage = (event) => {
    ctx.addMessage(ref.current.value);
    ref.current.value = "";
  };

  return (
    <div className="min-h-screen flex items-center bg-gray-500">
      <div className="flex mx-auto">
        <div className="grid grid-cols-5 grid-rows-5 gap-0  ">
          <div className="col-start-2 col-end-8 row-start-2 row-end-5 row-span-3 bg-white border-black-100  shadow-x1 ">
            {ctx.chatLog.map((el) => (
              <ChatLine
                msg={el.msg}
                alignRight={el.author === ctx.nickname ? "text-right" : ""}
              />
            ))}
          </div>
          <div className="col-start-8 col-span-3 row-start-2 row-span-3 bg-blue-100 border-black-100  shadow-x1 w-36 h-96 text-center">
            Online
          </div>
          <div className="inline-block col-start-2 col-end-11 col-span-4 row-start-5">
            <input
              onKeyUp={(e) => {
                e.key === "Enter" && sendMessage();
              }}
              ref={ref}
              placeholder="Say hi.."
              className=" focus:outline-none focus:ring-2 focus:ring-purple-600  bg-gray-100 border-black-100  shadow-x1 h-12 w-96 p-1 "
            />
            <button
              onClick={sendMessage}
              className="h-12 p-2 relative bg-slate-400 hover:bg-purple-200"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
