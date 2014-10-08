Tinytest.add('underscore.string - environmentalize', function(test) {
  test.equal('LOG_LEVEL', _s.environmentalize('logLevel'));
  test.equal('FB_APP_ID', _s.environmentalize('fb-app-id'));
});
