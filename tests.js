Tinytest.add('assert', function (test) {
  var isDefined = false;
  try {
    assert;
    isDefined = true;
  }
  catch (e) {
  }
  test.isTrue(isDefined, "assert is not defined");
  test.isTrue(Package.assert.assert, "Package.assert.assert is not defined");

  test.throws(function () {
    assert.equal('a', 'b', 'message');
  }, /message/);
});
