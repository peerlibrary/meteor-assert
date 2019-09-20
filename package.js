Package.describe({
  summary: "Make code assertions to assure your code works as expected",
  version: '0.3.0',
  name: 'peerlibrary:assert',
  git: 'https://github.com/peerlibrary/meteor-assert.git'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.8.1');

  api.export('assert');

  api.addFiles([
    'server.js'
  ], 'server');

  api.addFiles([
    'client/assert.js',
    'export-assert.js'
  ], 'client');
});

Package.onTest(function (api) {
  api.versionsFrom('METEOR@1.8.1');

  api.use([
    'peerlibrary:assert',
    'tinytest',
    'test-helpers'
  ], ['client', 'server']);

  api.addFiles([
    'tests.js'
  ], ['client', 'server']);
});
