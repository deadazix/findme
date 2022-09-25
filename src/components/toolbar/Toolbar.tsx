import classes from "./Toolbar.module.css";
import Tool from "./Tool";

const Toolbar = () => {
  return (
    <menu className={classes.menu}>
      <ul className={classes["tools-list"]}>
        <Tool type='start' />
        <Tool type='obstacle' />
        <Tool type='home' />
      </ul>
    </menu>
  );
};

export default Toolbar;
