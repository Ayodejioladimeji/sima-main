import React from 'react';
import {SvgXml} from 'react-native-svg';

const ShieldCheckmarkOutlineIcon = ({width, height, color}) => {
  return (
    <SvgXml
      xml={`<svg width=${width} height=${height} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><title>ionicons-v5-s</title><polyline points="336 176 225.2 304 176 255.8" style="fill:none;stroke:${color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><path d="M463.1,112.37C373.68,96.33,336.71,84.45,256,48,175.29,84.45,138.32,96.33,48.9,112.37,32.7,369.13,240.58,457.79,256,464,271.42,457.79,479.3,369.13,463.1,112.37Z" style="fill:none;stroke:${color};stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/></svg>`}
    />
  );
};

export {ShieldCheckmarkOutlineIcon};
