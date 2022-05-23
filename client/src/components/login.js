import { useContext, useRef } from "react";

import { UserContext } from "../context/user-context";
import classes from "./login.module.css";

const Login = () => {
  const ref = useRef();
  const ctx = useContext(UserContext);
  const submitHandler = (event) => {
    event.preventDefault();

    // send API request to see if that nickname is available

    // add nickname to context
    ctx.login(ref.current.value);

    // clear input field
    ref.current.value = "";
  };

  return (
    <div className={classes.container}>
      <form className={classes} onSubmit={submitHandler}>
        <div className="flex flex-col relative ">
          <input
            ref={ref}
            type="text"
            id="simple-email"
            className="flex-1 placeholder:text-center appearance-none border-2 border-gray-500 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            placeholder="Your nickname"
          />

          <button
            type="submit"
            className="w-1/2 self-center  m-2 py-2  transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none"
          >
            Chat!
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
