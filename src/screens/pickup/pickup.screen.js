import React from 'react';

import Header from '../../components/header/header.component';
import Button from '../../components/button/button.component';
import Wrapper from '../../components/wrapper/wrapper.component';

const PickupScreen =()=>{
  return(
    <>
      <Header title='Where are we picking up' />
      <Wrapper/>
      <Button icon color style={{width:160, alignSelf:'center', marginTop:20}} />
    </>
  );
};

export default PickupScreen;

