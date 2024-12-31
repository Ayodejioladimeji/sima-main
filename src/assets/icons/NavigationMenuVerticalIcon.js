import React from 'react';
import {SvgXml} from 'react-native-svg';

const NavigationMenuVerticalIcon = ({width, height, color}) => {
  return (
    <SvgXml
      xml={`<svg width=${width} height=${height} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_3_571)">
<path d="M9 4.125C10.0355 4.125 10.875 3.28553 10.875 2.25C10.875 1.21447 10.0355 0.375 9 0.375C7.96447 0.375 7.125 1.21447 7.125 2.25C7.125 3.28553 7.96447 4.125 9 4.125Z" stroke=${color} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 10.875C10.0355 10.875 10.875 10.0355 10.875 9C10.875 7.96447 10.0355 7.125 9 7.125C7.96447 7.125 7.125 7.96447 7.125 9C7.125 10.0355 7.96447 10.875 9 10.875Z" stroke=${color} stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 17.625C10.0355 17.625 10.875 16.7855 10.875 15.75C10.875 14.7145 10.0355 13.875 9 13.875C7.96447 13.875 7.125 14.7145 7.125 15.75C7.125 16.7855 7.96447 17.625 9 17.625Z" stroke=${color} stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_3_571">
<rect width="18" height="18" fill="white"/>
</clipPath>
</defs>
</svg>
`}
    />
  );
};

export {NavigationMenuVerticalIcon};
