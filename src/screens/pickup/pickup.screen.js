import React, {useCallback, useMemo, useRef} from 'react';
import Header from '../../components/header/header.component';
import Button from '../../components/button/button.component';
import Wrapper from '../../components/wrapper/wrapper.component';
import BottomSheet from '@gorhom/bottom-sheet';

import {InputItem, SegmentedControl, Checkbox} from '@ant-design/react-native';

const PickupScreen = () => {
    // ref
    const bottomSheetRef = useRef(null);

    // variables
    const snapPoints = useMemo(() => ['25%', '50%'], []);

    return (
        <>
            <Header title='Where are we picking up' />
            <Wrapper />
            <InputItem labelPosition='top' placeholder='City' />
            <InputItem placeholder='State' />
            <InputItem placeholder='Zip' />
            <SegmentedControl values={['Home', 'Business']} />
            <Checkbox> Primary Location?</Checkbox>
            <Button icon color style={{width: 160, alignSelf: 'center', marginTop: 20}} />
            <BottomSheet ref={bottomSheetRef} snapPoints={snapPoints} />
        </>
    );
};

export default PickupScreen;

