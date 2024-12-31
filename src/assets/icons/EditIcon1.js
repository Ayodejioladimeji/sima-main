import React from 'react';
import {SvgXml} from 'react-native-svg';

const EditIcon1 = ({width, height, color}) => {
  return (
    <SvgXml
      xml={`<svg width=${width} height=${height} viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 3.24024H3C2.46957 3.24024 1.96086 3.45096 1.58579 3.82603C1.21071 4.2011 1 4.70981 1 5.24024V16.2402C1 16.7707 1.21071 17.2794 1.58579 17.6545C1.96086 18.0295 2.46957 18.2402 3 18.2402H14C14.5304 18.2402 15.0391 18.0295 15.4142 17.6545C15.7893 17.2794 16 16.7707 16 16.2402V11.2402M14.586 1.82624C14.7705 1.63522 14.9912 1.48286 15.2352 1.37804C15.4792 1.27322 15.7416 1.21805 16.0072 1.21574C16.2728 1.21344 16.5361 1.26404 16.7819 1.3646C17.0277 1.46516 17.251 1.61367 17.4388 1.80145C17.6266 1.98924 17.7751 2.21254 17.8756 2.45834C17.9762 2.70413 18.0268 2.96749 18.0245 3.23305C18.0222 3.49861 17.967 3.76105 17.8622 4.00505C17.7574 4.24906 17.605 4.46975 17.414 4.65424L8.828 13.2402H6V10.4122L14.586 1.82624Z" stroke=${color} stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`}
    />
  );
};

export {EditIcon1};
