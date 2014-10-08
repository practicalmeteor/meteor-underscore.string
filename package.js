Package.describe({
  name: "spacejamio:underscore.string",
  summary: "String manipulation extensions for underscore.",
  version: "2.3.3_1",
  git: "https://github.com/spacejamio/underscore.string.git"
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
