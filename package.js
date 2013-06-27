Package.describe({
  summary: "Meteor smart package for assert node.js module"
});

Package.on_use(function (api) {
  api.add_files([
    'server.js'
  ], 'server');

  api.add_files([
    'client/assert.js'
  ], 'client');
});

Package.on_test(function (api) {
  api.use(['assert', 'tinytest', 'test-helpers'], ['client', 'server']);
  api.add_files('tests.js', ['client', 'server']);
});