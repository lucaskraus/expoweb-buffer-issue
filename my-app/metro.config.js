const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require("nativewind/metro");

module.exports = (() => {
  // eslint-disable-next-line no-undef
  const config = getDefaultConfig(__dirname);

  const { transformer, resolver } = config;

  config.resetCache = true;

  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
  };

  config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...resolver.sourceExts, "svg", "mjs", "cjs"],
  };

  return withNativeWind(config, { input: "./global.css" });
})();
