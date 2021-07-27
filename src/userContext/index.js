import React, {useState} from 'react';
import {SHIFTS} from '../data/dummy-data';

export const userContext = React.createContext();

const UserContextProvider = (props) => {
  const [userInfo, setUserInfo] = useState(null);
  const [shifts, setShifts] = useState(SHIFTS);

  const cleanData = () => {
    setShifts(null);
  };

  const changeStatus = (id, status) => {
    let newData = [...shifts];
    const indexToBeChanged = shifts.findIndex((item) => item.id === id);
    newData[indexToBeChanged].status = status;

    setShifts(newData);
  };

  return (
    <userContext.Provider value={{userInfo, setUserInfo, shifts, changeStatus}}>
      {props.children}
    </userContext.Provider>
  );
};

export default UserContextProvider;
