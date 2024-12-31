import React from 'react';
import {SvgXml} from 'react-native-svg';

const WarningIcon = ({width, height, color}) => {
  return (
    <SvgXml
      xml={`<svg height=${height} width=${width} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
	 viewBox="0 0 24 24" xml:space="preserve">
<g>
	<path style="fill:${color};" d="M12,0C5.373,0,0,5.373,0,12s5.373,12,12,12s12-5.373,12-12S18.627,0,12,0z M12,19.66
		c-0.938,0-1.58-0.723-1.58-1.66c0-0.964,0.669-1.66,1.58-1.66c0.963,0,1.58,0.696,1.58,1.66C13.58,18.938,12.963,19.66,12,19.66z
		 M12.622,13.321c-0.239,0.815-0.992,0.829-1.243,0c-0.289-0.956-1.316-4.585-1.316-6.942c0-3.11,3.891-3.125,3.891,0
		C13.953,8.75,12.871,12.473,12.622,13.321z"/>
</g>
</svg>`}
    />
  );
};

export {WarningIcon};
