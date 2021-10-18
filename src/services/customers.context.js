import React, {createContext, useState, useEffect} from 'react';


export const CustomersContext = createContext();

const CustomersContextProvider = ({children})=>{
  
  const [totalCount, setTotalCount] = useState(0);
  const [cost, setCost] = useState(0);
  const [dryList, setDryList] = useState([]);
  const [detergentList, setDetergentList] = useState([]);
  const [userCredentials, setUserCredentials] = useState(0);

  useEffect(()=>{
    setCost(totalCount*5)
  },[totalCount])

  return(
    <CustomersContext.Provider 
      value={
        {
          userCredentials, setUserCredentials,
          cost, setCost,
          totalCount, setTotalCount,
          detergentList,setDetergentList,
          dryList, setDryList
        }
      } 
    >
        {children}
    </CustomersContext.Provider>
  );
};

export default CustomersContextProvider;
