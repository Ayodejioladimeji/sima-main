import React from 'react';
import {SvgXml} from 'react-native-svg';

const ProfileIcon = ({width, height, color}) => {
  return (
    <SvgXml
      xml={`<svg
  width=${width}
  height=${height}
  viewBox="0 0 20 20"
  fill="none"
  xmlns="http://www.w3.org/2000/svg">
  <path
    d="M10.133 9.68332C10.108 9.68332 10.0913 9.68332 10.0663 9.68332C10.0247 9.67499 9.96635 9.67499 9.91635 9.68332C7.49968 9.60832 5.67468 7.70832 5.67468 5.36666C5.67468 2.98332 7.61635 1.04166 9.99968 1.04166C12.383 1.04166 14.3247 2.98332 14.3247 5.36666C14.3164 7.70832 12.483 9.60832 10.158 9.68332C10.1497 9.68332 10.1413 9.68332 10.133 9.68332ZM9.99968 2.29166C8.30802 2.29166 6.92468 3.67499 6.92468 5.36666C6.92468 7.03332 8.22468 8.37499 9.88302 8.43332C9.92468 8.42499 10.0413 8.42499 10.1497 8.43332C11.783 8.35832 13.0663 7.01666 13.0747 5.36666C13.0747 3.67499 11.6913 2.29166 9.99968 2.29166Z"
    fill=${color} />
  <path
    d="M10.1413 18.7917C8.50801 18.7917 6.86634 18.375 5.62467 17.5417C4.46634 16.775 3.83301 15.725 3.83301 14.5833C3.83301 13.4417 4.46634 12.3833 5.62467 11.6083C8.12467 9.95001 12.1747 9.95001 14.658 11.6083C15.808 12.375 16.4497 13.425 16.4497 14.5667C16.4497 15.7083 15.8163 16.7667 14.658 17.5417C13.408 18.375 11.7747 18.7917 10.1413 18.7917ZM6.31634 12.6583C5.51634 13.1917 5.08301 13.875 5.08301 14.5917C5.08301 15.3 5.52467 15.9833 6.31634 16.5083C8.39134 17.9 11.8913 17.9 13.9663 16.5083C14.7663 15.975 15.1997 15.2917 15.1997 14.575C15.1997 13.8667 14.758 13.1833 13.9663 12.6583C11.8913 11.275 8.39134 11.275 6.31634 12.6583Z"
    fill=${color} />
</svg>`}
    />
  );
};

export {ProfileIcon};
