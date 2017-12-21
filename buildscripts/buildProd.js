const webpack = require('webpack');
const config = require('./webpack.config.prod');
const chalk = require('chalk');

process.env.NODE_ENV = 'production';

console.log(chalk.blue('Generating minified production build...'));

webpack(config).run((err, stats) => {
  if (err) {
    console.log(chalk.red(String(err)));
    return 1;
  }
  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    console.log(chalk.bgRed('Webpack generated the following errors:'))
    return jsonStats.errors.map((err) => console.log(chalk.red(err)));
  }

  if (jsonStats.hasWarnings) {
    console.log(chalk.bgYellow('Webpack generated the following warnings:'))
    return jsonStats.warnings.map((err) => console.log(chalk.yellow(err)));
  }

  console.log(`Webpack stats: ${stats}`);
  console.log(chalk.green('Your prod build is in /dist.'));

  return 0;
});
