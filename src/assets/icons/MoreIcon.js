import React from 'react';
import {SvgXml} from 'react-native-svg';

const MoreIcon = ({width, height, color}) => {
  return (
    <SvgXml
      xml={`<svg width=${width} height=${height} viewBox="0 0 4 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 2.84375C2.36244 2.84375 2.65625 2.54994 2.65625 2.1875C2.65625 1.82506 2.36244 1.53125 2 1.53125C1.63756 1.53125 1.34375 1.82506 1.34375 2.1875C1.34375 2.54994 1.63756 2.84375 2 2.84375Z" stroke=${color} stroke-width="1.3125" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 7.65625C2.36244 7.65625 2.65625 7.36244 2.65625 7C2.65625 6.63756 2.36244 6.34375 2 6.34375C1.63756 6.34375 1.34375 6.63756 1.34375 7C1.34375 7.36244 1.63756 7.65625 2 7.65625Z" stroke=${color} stroke-width="1.3125" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 12.4688C2.36244 12.4688 2.65625 12.1749 2.65625 11.8125C2.65625 11.4501 2.36244 11.1562 2 11.1562C1.63756 11.1562 1.34375 11.4501 1.34375 11.8125C1.34375 12.1749 1.63756 12.4688 2 12.4688Z" stroke=${color} stroke-width="1.3125" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`}
    />
  );
};

export {MoreIcon};
