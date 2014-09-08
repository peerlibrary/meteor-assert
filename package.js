Package.describe({
  summary: "Make code assertions to assure your code works as expected",
  version: '0.2.5',
  name: 'peerlibrary:assert',
  git: 'https://github.com/peerlibrary/meteor-assert.git'
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@0.9.1');
  api.export('assert');

  api.add_files([
    'server.js'
  ], 'server');

  api.add_files([
    'client/assert.js',
    'export-assert.js'
  ], 'client');
});

Package.on_test(function (api) {
  api.use(['peerlibrary:assert', 'tinytest', 'test-helpers'], ['client', 'server']);
  api.add_files('tests.js', ['client', 'server']);
});
