import React from 'react';
import {SvgXml} from 'react-native-svg';

const LogOutIcon = ({width, height, color}) => {
  return (
    <SvgXml
      xml={`<svg width=${width} height=${height} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.8287 0.949265C9.02404 0.949265 9.21138 1.02686 9.34951 1.16499C9.48763 1.30312 9.56523 1.49046 9.56523 1.6858C9.56523 1.88114 9.48763 2.06848 9.34951 2.2066C9.21138 2.34473 9.02404 2.42233 8.8287 2.42233C6.94041 2.42233 5.12946 3.17245 3.79424 4.50767C2.45902 5.84289 1.7089 7.65384 1.7089 9.54213C1.7089 11.4304 2.45902 13.2414 3.79424 14.5766C5.12946 15.9118 6.94041 16.6619 8.8287 16.6619C9.02404 16.6619 9.21138 16.7395 9.34951 16.8777C9.48763 17.0158 9.56523 17.2031 9.56523 17.3985C9.56523 17.5938 9.48763 17.7811 9.34951 17.9193C9.21138 18.0574 9.02404 18.135 8.8287 18.135C6.54973 18.135 4.3641 17.2297 2.75263 15.6182C1.14116 14.0067 0.23584 11.8211 0.23584 9.54213C0.23584 7.26316 1.14116 5.07753 2.75263 3.46606C4.3641 1.85458 6.54973 0.949265 8.8287 0.949265Z" fill=${color}/>
<path d="M13.2188 7.11646C13.0887 6.97684 13.0178 6.79217 13.0212 6.60136C13.0246 6.41055 13.1019 6.22849 13.2368 6.09355C13.3718 5.9586 13.5538 5.8813 13.7446 5.87794C13.9354 5.87457 14.1201 5.9454 14.2597 6.0755L17.2058 9.02162C17.3438 9.15972 17.4212 9.34692 17.4212 9.54211C17.4212 9.73729 17.3438 9.92449 17.2058 10.0626L14.2597 13.0087C14.1923 13.0811 14.111 13.1391 14.0206 13.1794C13.9303 13.2196 13.8328 13.2413 13.7339 13.243C13.635 13.2448 13.5367 13.2266 13.445 13.1895C13.3533 13.1525 13.27 13.0973 13.2001 13.0274C13.1301 12.9575 13.075 12.8742 13.0379 12.7824C13.0009 12.6907 12.9827 12.5925 12.9845 12.4936C12.9862 12.3947 13.0078 12.2972 13.0481 12.2068C13.0884 12.1165 13.1464 12.0352 13.2188 11.9677L14.9079 10.2786H6.86495C6.66961 10.2786 6.48227 10.201 6.34414 10.0629C6.20602 9.92479 6.12842 9.73745 6.12842 9.54211C6.12842 9.34677 6.20602 9.15943 6.34414 9.0213C6.48227 8.88317 6.66961 8.80557 6.86495 8.80557H14.9079L13.2188 7.11646Z" fill=${color}/>
</svg>`}
    />
  );
};

export {LogOutIcon};