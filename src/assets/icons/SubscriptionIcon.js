import React from 'react';
import {SvgXml} from 'react-native-svg';

const SubscriptionIcon = ({width, height, color}) => {
  return (
    <SvgXml
      xml={`<svg width=${width} height=${height} viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 13C2 14 4 15 6 15M6 15C8.5 15 11 14.5 11 12C11 9.5 8.54951 9 6 9M6 15V9M6 15V18M6 9C3.5 9 1 8.5 1 6C1 3.5 3.5 3 6 3M6 9V3M6 3C8 3 10 4 11 5M6 3V0" stroke=${color} stroke-width="2" />
</svg>`}
    />
  );
};

export {SubscriptionIcon};
