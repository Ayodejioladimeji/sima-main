import React from 'react';
import {SvgXml} from 'react-native-svg';

const ScanIcon3 = ({width, height, color}) => {
  return (
    <SvgXml
      xml={`<svg width=${width} height=${height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 3.625V2.75C1 2.28587 1.18437 1.84075 1.51256 1.51256C1.84075 1.18437 2.28587 1 2.75 1H4.5" fill="#EB57D3"/>
<path d="M1 3.625V2.75C1 2.28587 1.18437 1.84075 1.51256 1.51256C1.84075 1.18437 2.28587 1 2.75 1H4.5" stroke=${color} stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1 12.375V13.25C1 13.7141 1.18437 14.1592 1.51256 14.4874C1.84075 14.8156 2.28587 15 2.75 15H4.5" fill="#EB57D3"/>
<path d="M1 12.375V13.25C1 13.7141 1.18437 14.1592 1.51256 14.4874C1.84075 14.8156 2.28587 15 2.75 15H4.5" stroke=${color} stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.5 1H13.25C13.7141 1 14.1592 1.18437 14.4874 1.51256C14.8156 1.84075 15 2.28587 15 2.75V3.625" fill="#EB57D3"/>
<path d="M11.5 1H13.25C13.7141 1 14.1592 1.18437 14.4874 1.51256C14.8156 1.84075 15 2.28587 15 2.75V3.625" stroke=${color} stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.5 15H13.25C13.7141 15 14.1592 14.8156 14.4874 14.4874C14.8156 14.1592 15 13.7141 15 13.25V12.375" fill="#EB57D3"/>
<path d="M11.5 15H13.25C13.7141 15 14.1592 14.8156 14.4874 14.4874C14.8156 14.1592 15 13.7141 15 13.25V12.375" stroke=${color} stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.875 8H14.125H1.875Z" fill="#EB57D3"/>
<path d="M1.875 8H14.125" stroke=${color} stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`}
    />
  );
};

export {ScanIcon3};
