import React from 'react';
import {SvgXml} from 'react-native-svg';

const XMarkIcon = ({width, height, color}) => {
  return (
    <SvgXml
      xml={`<svg width=${width} height=${height} viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.04883 9.18115C0.737793 9.49219 0.731445 10.0444 1.05518 10.3682C1.38525 10.6919 1.9375 10.6855 2.24219 10.3809L6 6.62304L9.75146 10.3745C10.0688 10.6919 10.6147 10.6919 10.9385 10.3682C11.2622 10.0381 11.2622 9.49853 10.9448 9.18115L7.19336 5.42969L10.9448 1.67187C11.2622 1.35449 11.2686 0.808592 10.9385 0.484862C10.6147 0.161131 10.0688 0.161131 9.75146 0.478514L6 4.22998L2.24219 0.478514C1.9375 0.167479 1.37891 0.154783 1.05518 0.484862C0.731445 0.808592 0.737793 1.36719 1.04883 1.67187L4.80029 5.42969L1.04883 9.18115Z" fill=${color} fill-opacity="1"/>
</svg>
`}
    />
  );
};

export {XMarkIcon};