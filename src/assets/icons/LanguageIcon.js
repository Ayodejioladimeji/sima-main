import React from 'react';
import {SvgXml} from 'react-native-svg';

const LanguageIcon = ({width, height, color}) => {
  return (
    <SvgXml
      xml={`<svg width=${width} height=${height} viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.52197 9.46772C1.52197 13.67 4.92838 17.0764 9.13066 17.0764C13.3329 17.0764 16.7394 13.67 16.7394 9.46772C16.7394 5.26544 13.3329 1.85903 9.13066 1.85903C4.92838 1.85903 1.52197 5.26544 1.52197 9.46772Z" stroke=${color} stroke-width="1.1413" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.89119 1.89708C9.89119 1.89708 12.1738 4.90251 12.1738 9.46772C12.1738 14.0329 9.89119 17.0384 9.89119 17.0384M8.36945 17.0384C8.36945 17.0384 6.08684 14.0329 6.08684 9.46772C6.08684 4.90251 8.36945 1.89708 8.36945 1.89708M2.00098 12.1308H16.2597M2.00098 6.80468H16.2597" stroke=${color} stroke-width="1.1413" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`}
    />
  );
};

export {LanguageIcon};
