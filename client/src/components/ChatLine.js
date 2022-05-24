const ChatLine = (props) => {
  return (
    <p className={`p-1 bg-slate-50 border-2 ${props.alignRight}`}>
      {props.msg}
    </p>
  );
};

export default ChatLine;
