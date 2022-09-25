import classes from "./Toolbar.module.css";
import Tool from "./Tool";
import ButtonStart from '../btns/BottonStart'
const Toolbar = () => {
  return (
    <menu className={classes.menu}>
      <ul className={classes["tools-list"]}>
        <Tool type='start' />
        <Tool type='obstacle' />
        <Tool type='home' />
      </ul>
      <ButtonStart type="button" className={classes['button--start']} >start</ButtonStart>

    </menu>

  );
};

export default Toolbar;
