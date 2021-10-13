import React, {createContext} from 'react';


const CustomersContext = createContext();

const CustomersContextProvider = ({children})=>{
  return(
    <CustomersContext.Provider value={null} >
        {children}
    </CustomersContext.Provider>
  );
};

export default CustomersContextProvider;
