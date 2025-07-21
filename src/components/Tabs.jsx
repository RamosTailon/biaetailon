import { useState } from "react";

import style from "./Tabs.module.css";

const Tabs = ({ tit1, tit2, item1, item2 }) => {
  const [toogleState, setToogleState] = useState(1);

  const toogleTab = (index) => {
    setToogleState(index);
  };

  return (
    <div className={style.container}>
      <div className={style.bloc_tabs}>
        <div
          className={
            toogleState === 1 ? `${style.tab} ${style.activeC}` : `${style.tab}`
          }
          onClick={() => toogleTab(1)}
        >
          {tit1}
        </div>
        <div
          className={
            toogleState === 2 ? `${style.tab} ${style.activeC}` : `${style.tab}`
          }
          onClick={() => toogleTab(2)}
        >
          {tit2}
        </div>
      </div>
      <div className={style.tabs_content}>
        <div
          className={
            toogleState === 1
              ? `${style.content} ${style.showC}`
              : `${style.content}`
          }
        >
          {item1}
        </div>
        <div
          className={
            toogleState === 2
              ? `${style.content} ${style.showC}`
              : `${style.content}`
          }
        >
          {item2}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
