Package.describe({
  name: "spacejamio:underscore.string",
  summary: "Minimal lightweight logging library with output that preserves line numbers.",
  version: "1.1.0_1",
  git: "https://github.com/spacejamio/underscore.string.git"
});


Package.onUse(function (api) {
  api.versionsFrom('0.9.3');

  api.use(['meteor', 'underscore']);

  api.addFiles('lib/underscore.string.js');

  api.export('_s');
});


Package.onTest(function(api) {
  api.use(['spacejamio:underscore.string', 'tinytest']);
  api.addFiles('tests/tinytests.js');
});
