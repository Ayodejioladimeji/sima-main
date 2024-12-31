import React from 'react';
import {SvgXml} from 'react-native-svg';

const GoBackIcon2 = ({width, height, color}) => {
  return (
    <SvgXml
      xml={`<svg width=${width} height=${height} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 7.00001H1" stroke=${color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 13L1 7L7 1" stroke=${color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`}
    />
  );
};

export {GoBackIcon2};
