import React from 'react';
import {SvgXml} from 'react-native-svg';

const EditIcon2 = ({width, height, color}) => {
  return (
    <SvgXml
      xml={`<svg width=${width} height=${height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.232 3.23199L16.768 6.76799L13.232 3.23199ZM14.732 1.73199C15.2009 1.26309 15.8369 0.999664 16.5 0.999664C17.1631 0.999664 17.7991 1.26309 18.268 1.73199C18.7369 2.2009 19.0003 2.83687 19.0003 3.49999C19.0003 4.16312 18.7369 4.79909 18.268 5.26799L4.5 19.036H1V15.464L14.732 1.73199V1.73199Z" stroke=${color} stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`}
    />
  );
};

export {EditIcon2};
