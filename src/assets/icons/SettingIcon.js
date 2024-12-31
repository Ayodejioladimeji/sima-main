import React from 'react';
import {SvgXml} from 'react-native-svg';

const SettingIcon = ({width, height, color}) => {
  return (
    <SvgXml
      xml={`<svg
  width=${width}
  height=${height}
  viewBox="0 0 16 17"
  fill="none"
  xmlns="http://www.w3.org/2000/svg">
  <path
    d="M9.71193 0.386089C9.83274 0.386093 9.95044 0.424441 10.0481 0.495612C10.1457 0.566782 10.2182 0.667101 10.2552 0.782122L10.8829 2.73261C11.1465 2.86158 11.3988 3.00652 11.6396 3.16973L13.6437 2.73832C13.7619 2.71309 13.885 2.72602 13.9954 2.77524C14.1057 2.82447 14.1976 2.90745 14.2577 3.01223L15.8396 5.75022C15.9 5.85494 15.9256 5.97614 15.9127 6.09634C15.8997 6.21654 15.849 6.32953 15.7677 6.41902L14.3924 7.93695C14.4124 8.22802 14.4124 8.52012 14.3924 8.81119L15.7677 10.3314C15.849 10.4209 15.8997 10.5339 15.9127 10.6541C15.9256 10.7743 15.9 10.8955 15.8396 11.0002L14.2577 13.7393C14.1974 13.8439 14.1055 13.9267 13.9951 13.9757C13.8848 14.0247 13.7618 14.0374 13.6437 14.0121L11.6396 13.5807C11.3999 13.7428 11.1465 13.8889 10.884 14.0178L10.2552 15.9683C10.2182 16.0833 10.1457 16.1836 10.0481 16.2548C9.95044 16.326 9.83274 16.3643 9.71193 16.3643H6.54823C6.42742 16.3643 6.30972 16.326 6.21209 16.2548C6.11446 16.1836 6.04194 16.0833 6.00497 15.9683L5.3784 14.019C5.11547 13.8904 4.86187 13.7435 4.61943 13.5796L2.61644 14.0121C2.49828 14.0373 2.37516 14.0244 2.26481 13.9752C2.15446 13.926 2.06259 13.843 2.00242 13.7382L0.420575 11.0002C0.360171 10.8955 0.334586 10.7743 0.347508 10.6541C0.360431 10.5339 0.411194 10.4209 0.492477 10.3314L1.86775 8.81119C1.84782 8.52088 1.84782 8.22955 1.86775 7.93924L0.492477 6.41902C0.411194 6.32953 0.360431 6.21654 0.347508 6.09634C0.334586 5.97614 0.360171 5.85494 0.420575 5.75022L2.00242 3.01109C2.06276 2.90651 2.1547 2.82377 2.26503 2.77476C2.37537 2.72574 2.4984 2.71298 2.61644 2.73832L4.61943 3.17087C4.86139 3.00766 5.11476 2.86044 5.3784 2.73147L6.00611 0.782122C6.04296 0.667472 6.11514 0.567418 6.21231 0.496282C6.30948 0.425146 6.42667 0.386575 6.54709 0.386089H9.71079H9.71193ZM9.29421 1.52739H6.96595L6.31769 3.54408L5.88057 3.7575C5.66568 3.86265 5.45824 3.98239 5.2597 4.11587L4.85568 4.38978L2.78307 3.94239L1.61894 5.96022L3.03987 7.53293L3.00563 8.01684C2.98922 8.25548 2.98922 8.49495 3.00563 8.73358L3.03987 9.21749L1.61666 10.7902L2.78193 12.808L4.85454 12.3618L5.25856 12.6346C5.4571 12.768 5.66454 12.8878 5.87943 12.9929L6.31655 13.2064L6.96595 15.223H9.29649L9.94704 13.2052L10.383 12.9929C10.5977 12.888 10.8048 12.7683 11.0027 12.6346L11.4056 12.3618L13.4794 12.808L14.6435 10.7902L13.2214 9.21749L13.2557 8.73358C13.2721 8.49457 13.2721 8.25471 13.2557 8.0157L13.2214 7.53179L14.6446 5.96022L13.4794 3.94239L11.4056 4.3875L11.0027 4.11587C10.8048 3.98214 10.5977 3.8624 10.383 3.7575L9.94704 3.54522L9.29535 1.52739H9.29421ZM8.13008 4.9513C9.03816 4.9513 9.90904 5.31204 10.5512 5.95414C11.1933 6.59625 11.554 7.46714 11.554 8.37521C11.554 9.28329 11.1933 10.1542 10.5512 10.7963C9.90904 11.4384 9.03816 11.7991 8.13008 11.7991C7.222 11.7991 6.35112 11.4384 5.70901 10.7963C5.0669 10.1542 4.70617 9.28329 4.70617 8.37521C4.70617 7.46714 5.0669 6.59625 5.70901 5.95414C6.35112 5.31204 7.222 4.9513 8.13008 4.9513ZM8.13008 6.09261C7.5247 6.09261 6.94411 6.33309 6.51603 6.76117C6.08796 7.18924 5.84747 7.76983 5.84747 8.37521C5.84747 8.9806 6.08796 9.56119 6.51603 9.98926C6.94411 10.4173 7.5247 10.6578 8.13008 10.6578C8.73547 10.6578 9.31606 10.4173 9.74413 9.98926C10.1722 9.56119 10.4127 8.9806 10.4127 8.37521C10.4127 7.76983 10.1722 7.18924 9.74413 6.76117C9.31606 6.33309 8.73547 6.09261 8.13008 6.09261Z"
    fill=${color}/>
</svg>`}
    />
  );
};

export {SettingIcon};
