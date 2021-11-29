import React from 'react';
import {useSelector} from "react-redux";


const RightClickMenu = ({x, y, showMenu}) => {
  const style = () => {
    return {
      width: 100,
      height: 150,
      borderRadius: 10,
      background: '#6c757d',
      color: 'black',
      flexDirection: 'column',
      padding: 5,
      top: y,
      left: x,
      position: 'absolute',
      display: showMenu ? 'flex' : 'none',
      zIndex: 99999,

    }
  }
  const styles = {
    div: {
      flex: 1,
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center',
      backGroundColor: 'green',
      color: 'white',
      fontWeight: 'bold',
      cursor: 'pointer',

    },

  }
  let getId = useSelector(state => state.chosenDocument.uniqueId)
  const changeToRed = () => {
    document.getElementById(getId).style.backgroundColor = '#ccffcc';
  }
  const changeToYellow = () => {
    document.getElementById(getId).style.backgroundColor = '#fff2cc';
  }
  const changeToGreen = () => {
    document.getElementById(getId).style.backgroundColor = '#ffcccc';
  }

  return (
    <div style={style()}>
      <div style={styles.div}
           className={"colorBtnGreen align-items-center"}
           onClick={changeToRed}
      >
        <span className={"mt-5"}> Red</span>
      </div>
      <div style={styles.div} className={"colorBtnYellow"}
           onClick={changeToYellow}
      >
        <span>Yellow</span>
      </div>
      <div style={styles.div} className={"colorBtnRed"}
           onClick={changeToGreen}
      >
        <span>green</span>
      </div>
    </div>
  );
};


export default RightClickMenu;
