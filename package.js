Package.describe({
  summary: "Meteor smart package for assert node.js module"
});

Package.on_use(function (api) {
  api.use('coffeescript', 'server');

  api.add_files([
    'server.coffee'
  ], 'server');

  api.add_files([
    'client/assert.js'
  ], 'client');
});
