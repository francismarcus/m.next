const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const withOffline = require('next-offline');

module.exports = withOffline({
	target: 'serverless',
	webpack: (config, options) => {
		if (config.resolve.plugins) {
			config.resolve.plugins.push(new TsconfigPathsPlugin());
		} else {
			config.resolve.plugins = [new TsconfigPathsPlugin()];
		}
		return config;
	}
});
