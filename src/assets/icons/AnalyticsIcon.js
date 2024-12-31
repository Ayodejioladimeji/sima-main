import React from 'react';
import {SvgXml} from 'react-native-svg';

const AnalyticsIcon = ({width, height, color}) => {
  return (
    <SvgXml
      xml={`<svg width=${width} height=${height} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.83325 14V12.3333M8.99992 14V11.5M13.1666 14V9.83334M1.08325 9.00001C1.08325 5.26834 1.08325 3.40168 2.24242 2.24251C3.40159 1.08334 5.26742 1.08334 8.99992 1.08334C12.7316 1.08334 14.5983 1.08334 15.7574 2.24251C16.9166 3.40168 16.9166 5.26751 16.9166 9.00001C16.9166 12.7317 16.9166 14.5983 15.7574 15.7575C14.5983 16.9167 12.7324 16.9167 8.99992 16.9167C5.26825 16.9167 3.40159 16.9167 2.24242 15.7575C1.08325 14.5983 1.08325 12.7325 1.08325 9.00001Z" stroke=${color} stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.99329 8.57167C5.78912 8.63167 9.86162 8.36083 12.1783 4.68417M10.66 4.24L12.2233 3.98833C12.4133 3.96417 12.6933 4.115 12.7625 4.29417L13.175 5.65917" stroke=${color} stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`}
    />
  );
};

export {AnalyticsIcon};
