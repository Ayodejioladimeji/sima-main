import React from 'react';
import {SvgXml} from 'react-native-svg';

// Function to darken a color
const darkenColor = (colorStr, factor = 0.5) => {
  const rgbaMatch = /rgba?\((\d+),\s*(\d+),\s*(\d+),?\s*([\d\.]+)?\)/.exec(
    colorStr,
  );
  const hexMatch = /#([0-9A-Fa-f]{6})/.exec(colorStr);

  if (rgbaMatch) {
    let [r, g, b] = rgbaMatch.slice(1, 4).map(Number);
    let a = rgbaMatch[4] ? parseFloat(rgbaMatch[4]) : 1;

    [r, g, b] = darkenRgb([r, g, b], factor);
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  } else if (hexMatch) {
    let r = parseInt(hexMatch[1].slice(0, 2), 16);
    let g = parseInt(hexMatch[1].slice(2, 4), 16);
    let b = parseInt(hexMatch[1].slice(4, 6), 16);

    [r, g, b] = darkenRgb([r, g, b], factor);
    return `#${r.toString(16).padStart(2, '0')}${g
      .toString(16)
      .padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
  }

  return colorStr; // Default fallback if no match
};

// Helper function to darken RGB values
const darkenRgb = ([r, g, b], factor) => {
  r = Math.round(r * factor);
  g = Math.round(g * factor);
  b = Math.round(b * factor);
  return [r, g, b];
};

const OfficeFolderIcon = ({width, height, color}) => {
  // Darken the color
  const darkenedColor = darkenColor(color, 0.5); // Adjust the factor as needed

  return (
    <SvgXml
      xml={`<svg width="${width}" height="${height}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_3_575)">
          <path d="M23.261 12.2C23.2906 12.0545 23.2876 11.9043 23.252 11.7601C23.2164 11.616 23.1491 11.4816 23.0551 11.3667C22.961 11.2518 22.8426 11.1593 22.7084 11.0958C22.5741 11.0324 22.4274 10.9997 22.279 11H10.42C10.1893 11.0003 9.96555 10.9208 9.78676 10.775C9.60797 10.6292 9.48509 10.426 9.43895 10.2L9.16095 8.8C9.11481 8.57396 8.99194 8.37082 8.81315 8.22502C8.63436 8.07922 8.41066 7.99972 8.17995 8H1.71995C1.57157 7.99982 1.425 8.03267 1.29088 8.09616C1.15676 8.15965 1.03845 8.25219 0.944534 8.36708C0.850616 8.48196 0.783443 8.61631 0.747885 8.76037C0.712327 8.90444 0.709277 9.05461 0.738954 9.2L3.33895 22.2C3.38509 22.426 3.50797 22.6292 3.68676 22.775C3.86555 22.9208 4.08925 23.0003 4.31995 23H20.28C20.5107 23.0003 20.7344 22.9208 20.9131 22.775C21.0919 22.6292 21.2148 22.426 21.261 22.2C21.673 20.132 22.773 14.636 23.261 12.2Z" stroke="${darkenedColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M4.5 6V2C4.5 1.73478 4.60536 1.48043 4.79289 1.29289C4.98043 1.10536 5.23478 1 5.5 1H18.5C18.7652 1 19.0196 1.10536 19.2071 1.29289C19.3946 1.48043 19.5 1.73478 19.5 2V9" stroke="${darkenedColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M7.5 3.99899H16" stroke="${darkenedColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M11.5 6.99899H16" stroke="${darkenedColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
          <clipPath id="clip0_3_575">
            <rect width="24" height="24" fill="white"/>
          </clipPath>
        </defs>
      </svg>`}
    />
  );
};

export {OfficeFolderIcon};
