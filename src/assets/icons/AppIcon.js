import React from 'react';
import {SvgXml} from 'react-native-svg';

const AppIcon = ({width, height, color}) => {
  return (
    <SvgXml
      xml={`<svg width=${width} height=${height} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="80" height="80" rx="17.7778" fill=${color}/>
<rect x="48.8762" y="10.0431" width="22.4842" height="37.2909" transform="rotate(53.526 48.8762 10.0431)" fill="url(#paint0_linear_2_9)"/>
<rect x="47.7097" y="29.7451" width="22.4842" height="37.2909" transform="rotate(53.526 47.7097 29.7451)" fill="url(#paint1_linear_2_9)"/>
<defs>
<linearGradient id="paint0_linear_2_9" x1="46.522" y1="6.17467" x2="72.5321" y2="49.5248" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint1_linear_2_9" x1="45.3555" y1="25.8767" x2="71.3656" y2="69.2268" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>`}
    />
  );
};

export {AppIcon};
