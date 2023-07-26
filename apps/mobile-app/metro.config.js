const { withNxMetro } = require("@nrwl/react-native");
const { getDefaultConfig } = require("metro-config");
const exclusionList = require("metro-config/src/defaults/exclusionList");

const path = require('path');

const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, '../..');

const monorepoPackages = {
  '@package/ui-heading': path.resolve(workspaceRoot, 'libs/ui-heading'),
};

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig();
  return withNxMetro(
    {
      transformer: {
        getTransformOptions: async () => ({
          transform: {
            experimentalImportSupport: false,
            inlineRequires: false,
          },
        }),
        babelTransformerPath: require.resolve("react-native-svg-transformer"),
      },
      resolver: {
        extraNodeModules: monorepoPackages,
        assetExts: assetExts.filter((ext) => ext !== "svg"),
        sourceExts: [...sourceExts, "svg"],
        blockList: exclusionList([/^(?!.*node_modules).*\/dist\/.*/]),
      },
    },
    {
      // Change this to true to see debugging info.
      // Useful if you have issues resolving modules
      debug: false,
      // all the file extensions used for imports other than 'ts', 'tsx', 'js', 'jsx', 'json'
      extensions: [],
      // the project root to start the metro server
      projectRoot: workspaceRoot,
      // Specify folders to watch, in addition to Nx defaults (workspace libraries and node_modules)
      watchFolders: [
        path.resolve(__dirname, "../../libs/ui-heading"),
      ],
    }
  );
})();
