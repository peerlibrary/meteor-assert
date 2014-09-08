Package.describe({
  summary: "Make code assertions to assure your code works as expected",
  version: '0.2.5',
  name: 'mrt:assert',
  git: 'https://github.com/peerlibrary/meteor-assert.git'
});

Package.on_use(function (api) {
  api.imply('peerlibrary:assert@0.2.5');
});
