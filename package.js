Package.describe({
  name: "spacejamio:underscore.string",
  summary: "This package has been renamed to practicalmeteor:underscore.string. Please use the new name instead.",
  version: "2.3.3_3",
  git: "https://github.com/practicalmeteor/meteor-underscore.string.git"
});


Package.onUse(function (api) {
  api.versionsFrom('0.9.3');

  api.use('underscore', {weak: true});

  api.addFiles('lib/underscore.string.js');

  api.export('_s');
});


Package.onTest(function(api) {
  api.use(['spacejamio:underscore.string', 'tinytest']);

  api.addFiles('tests/tinytests.js');
});
