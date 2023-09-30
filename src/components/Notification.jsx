const Notification = ({ type, text }) => {
  return (
    <div id="toasts">
      <div className={`toast ${type}`}>{text}</div>
    </div>
  );
};

export default Notification;
