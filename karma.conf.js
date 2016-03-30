module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['browserify', 'jasmine'],
    files: [
      'tests/**/*.js'
    ],
    preprocessors: {
      'tests/**/*.js': ['babel', 'browserify']
    },
    babelPreprocessor: {
      options: {
        presets: ['es2015', 'stage-0', 'react']
      }
    },
    browserify: {
      debug: true,
      transform: [
        ['babelify', { presets: ['es2015', 'stage-0', 'react'] }]
      ],
      configure: function(bundle) {
        bundle.on('prebundle', function() {
          bundle.external('react/lib/ReactContext');
          bundle.external('react/lib/ExecutionEnvironment');
        });
      }
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
  })
};
