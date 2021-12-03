import React, {useEffect, useMemo, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setCounter} from "../../../../../Reducers/folderCountersReducer";
import styled from "styled-components";

let Styles = styled.div`
  .miniModal {
    width: 100px;
    height: 30px;
    border: 1px;
  }

  .Counter {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #00a2bf;
    text-align: center;
    margin-left: 5px;
    color: white;
    font-size: 10px;
    position: fixed;
  }

  .forNewSign {
    right: 40px;
    top: 180px;
  }

  .forNewReceived {
    right: 40px;
    top: 230px;
  }

  .forSign {
    right: 20px;
    top: 180px;
  }

  .forReceived {
    right: 20px;
    top: 230px;
  }
`


const Counter = ({item}) => {
  let dispatch = useDispatch()
  let Counter = useSelector(state => state.folderCounter.folderCount)

  useEffect(() => {
    dispatch(setCounter())
    const interval = setInterval(() => {
      dispatch(setCounter())
    }, 5000);

    return () => clearInterval(interval);
  }, [])


  return (
    <Styles>

      <div className={'Counter forNewReceived'}>
        <span>{Counter && Counter.forSignNew}</span>
      </div>


      <div className={'Counter forNewSign'}>
        <span>{Counter && Counter.receivedNew}</span>
      </div>


      <div className={'Counter forSign bg-danger'}>
          <span
          >{Counter && Counter.received}</span>
      </div>


      <div className={'Counter forReceived bg-danger'}>
        <span>{Counter && Counter.forSign}</span>
      </div>

    </Styles>
  );
};

export default Counter;
