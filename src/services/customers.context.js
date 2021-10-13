import React, {createContext, useState} from 'react';


export const CustomersContext = createContext();

const CustomersContextProvider = ({children})=>{
  
  const [userCredentials, setUserCredentials] = useState({})

  return(
    <CustomersContext.Provider value={{userCredentials, setUserCredentials}} >
        {children}
    </CustomersContext.Provider>
  );
};

export default CustomersContextProvider;
