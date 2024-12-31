import React from 'react';
import {SvgXml} from 'react-native-svg';

const NavigationMenuHorizontalicon = ({width, height, color}) => {
  return (
    <SvgXml
      xml={`<svg width=${width} height=${height} viewBox="0 0 40 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke=${color} stroke-width="4"/>
<path d="M20 6C21.1046 6 22 5.10457 22 4C22 2.89543 21.1046 2 20 2C18.8954 2 18 2.89543 18 4C18 5.10457 18.8954 6 20 6Z" stroke=${color} stroke-width="4"/>
<path d="M36 6C37.1046 6 38 5.10457 38 4C38 2.89543 37.1046 2 36 2C34.8954 2 34 2.89543 34 4C34 5.10457 34.8954 6 36 6Z" stroke=${color} stroke-width="4"/>
</svg>
`}
    />
  );
};

export {NavigationMenuHorizontalicon};
