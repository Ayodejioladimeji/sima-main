const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
<<<<<<< HEAD
 * https://facebook.github.io/metro/docs/configuration
=======
 * https://reactnative.dev/docs/metro
>>>>>>> 6fcaa3b (Initial commit)
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
