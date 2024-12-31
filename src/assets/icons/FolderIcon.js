import React from 'react';
import {SvgXml} from 'react-native-svg';

const FolderIcon = ({width, height, color}) => {
  return (
    <SvgXml
      xml={`<svg width=${width} height=${height} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_6_3359)">
<path d="M4.375 3.5H7.875L10.5 6.125H16.625C17.0891 6.125 17.5342 6.30937 17.8624 6.63756C18.1906 6.96575 18.375 7.41087 18.375 7.875V14.875C18.375 15.3391 18.1906 15.7842 17.8624 16.1124C17.5342 16.4406 17.0891 16.625 16.625 16.625H4.375C3.91087 16.625 3.46575 16.4406 3.13756 16.1124C2.80937 15.7842 2.625 15.3391 2.625 14.875V5.25C2.625 4.78587 2.80937 4.34075 3.13756 4.01256C3.46575 3.68437 3.91087 3.5 4.375 3.5Z" stroke=${color} stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.5 8.75V14" stroke=${color} stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.875 11.375H13.125" stroke=${color} stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_6_3359">
<rect width=${width} height=${height} fill="white"/>
</clipPath>
</defs>
</svg>
`}
    />
  );
};

export {FolderIcon};
