import React from 'react'
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';
import Ripple from 'react-native-material-ripple';

const IconToggle = ({size = 24, onPress,...props}) => (
<Ripple rippleContainerBorderRadius={size*2} rippleSize={size*2} rippleOpacity={0.7} rippleCentered onPress={onPress} >
        <Icon size={size} {...props} />
</Ripple>
);

export {IconToggle,Icon, Ripple}
