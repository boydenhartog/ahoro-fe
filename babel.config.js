// const rootImportOpts = {
//   root: __dirname,
//   rootPathPrefix: '~',
//   rootPathSuffix: 'src',
// };

// eslint-disable-next-line func-names
module.exports = function (api) {
  api.cache(true);

  return {
    presets: ['babel-preset-expo', 'module:react-native-dotenv'],
    plugins: [['module-resolver', { root: ['./src'] }]],
  };
};
