import React from 'react';
import {SvgXml} from 'react-native-svg';

const DownArrowIcon = ({width, height, color}) => {
  return (
    <SvgXml
      xml={`<svg width=${width} height=${height} viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.338135 0.751343L7.29126 9.13334C7.32058 9.1687 7.35661 9.19701 7.39696 9.2164C7.43731 9.23579 7.48107 9.24582 7.52532 9.24582C7.56958 9.24582 7.61333 9.23579 7.65368 9.2164C7.69403 9.19701 7.73006 9.1687 7.75938 9.13334L14.7131 0.751343" stroke=${color} stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`}
    />
  );
};

export {DownArrowIcon};
