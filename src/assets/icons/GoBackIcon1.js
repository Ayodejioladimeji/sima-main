import React from 'react';
import {SvgXml} from 'react-native-svg';

const GoBackIcon1 = ({width, height, color}) => {
  return (
    <SvgXml
      xml={`<svg
  width=${width}
  height=${height}
  viewBox="0 0 25 8"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"><path
    d="M0.646446 3.88668C0.451185 4.08195 0.451185 4.39853 0.646446 4.59379L3.82843 7.77577C4.02369 7.97103 4.34027 7.97103 4.53553 7.77577C4.7308 7.58051 4.7308 7.26393 4.53553 7.06866L1.70711 4.24024L4.53553 1.41181C4.7308 1.21655 4.7308 0.899964 4.53553 0.704702C4.34027 0.50944 4.02369 0.50944 3.82843 0.704702L0.646446 3.88668ZM25 3.74023L1 3.74024L1 4.74024L25 4.74023L25 3.74023Z"
    fill=${color} />
</svg>`}
    />
  );
};

export {GoBackIcon1};
