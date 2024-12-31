import React from 'react';
import {SvgXml} from 'react-native-svg';

const ChecklistIcon = ({width, height, color}) => {
  return (
    <SvgXml
      xml={`<svg width=${width} height=${height} viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="9.5" cy="9.5" r="9.5" fill=${color}/>
<path d="M5.54199 9.89577L7.91699 12.2708L13.0628 7.12494" stroke="white" stroke-width="1.1875" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`}
    />
  );
};

export {ChecklistIcon};
