import React from 'react';
import {SvgXml} from 'react-native-svg';

const CheckMarkIcon = ({width, height, color}) => {
  return (
    <SvgXml
      xml={`
<svg width=${width} height=${height} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill=${color} d="M17.47 250.9C88.82 328.1 158 397.6 224.5 485.5c72.3-143.8 146.3-288.1 268.4-444.37L460 26.06C356.9 135.4 276.8 238.9 207.2 361.9c-48.4-43.6-126.62-105.3-174.38-137z"/></svg>`}
    />
  );
};

export {CheckMarkIcon};
