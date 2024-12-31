import React from 'react';
import {SvgXml} from 'react-native-svg';

const ChevronDownIcon = ({width, height, color}) => {
  return (
    <SvgXml
      xml={`<svg width=${width} height=${height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="24" height="24" fill="white"/>
<path d="M17 9.5L12 14.5L7 9.5" stroke=${color} stroke-linecap="round" stroke-linejoin="round"/>
</svg>`}
    />
  );
};

export {ChevronDownIcon};
