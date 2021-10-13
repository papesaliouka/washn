import React from 'react';
import CustomersNavigator from './customers.navigator';
import CustomersContextProvider from '../../services/customers.context';
const Navigator= () => {
  return(
    <>
      <CustomersContextProvider>
        <CustomersNavigator/>
      </CustomersContextProvider>
    </>
  );
}

export default Navigator
