/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

<<<<<<< HEAD
// Note: import explicitly to use the types shiped with jest.
=======
// Note: import explicitly to use the types shipped with jest.
>>>>>>> 6fcaa3b (Initial commit)
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});
