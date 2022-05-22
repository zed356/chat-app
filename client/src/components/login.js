import classes from "./login.module.css";

const Login = () => {
  return (
    <div className={classes.container}>
      <form className={classes}>
        <div className="flex flex-col relative ">
          <input
            type="text"
            id="simple-email"
            className="flex-1 appearance-none border-2 border-gray-500 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            placeholder="Your nickname"
          />

          <button
            type="submit"
            className=" px-6 m-2 py-2  transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none"
          >
            Chat!
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
