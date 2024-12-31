import React from 'react';
import {SvgXml} from 'react-native-svg';

const HorizontalLineIcon = ({width, height, color}) => {
  return (
    <SvgXml
      xml={`<svg
  width=${width}
  height=${height}
  viewBox="0 0 128 4"
  fill="none"
  xmlns="http://www.w3.org/2000/svg">
  <rect width=${width} height=${height} rx="2" fill=${color} />
</svg>`}
    />
  );
};

export {HorizontalLineIcon};
