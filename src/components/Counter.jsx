import style from "./Counter.module.css";

const Counter = ({ title, number }) => {
  return (
    <div className={style.counter}>
      <p className={style.counterNumber}>{number}</p>
      <p className={style.counterText}>{title}</p>
    </div>
  );
};

export default Counter;
