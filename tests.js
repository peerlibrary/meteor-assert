Tinytest.add('meteor-assert', function (test) {
  var isDefined = false;
  try {
    assert;
    isDefined = true;
  }
  catch (e) {
  }
  test.isTrue(isDefined, "assert is not defined");
  test.throws(function () {
    assert.equal('a', 'b');
  });
});