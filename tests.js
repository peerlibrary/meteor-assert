Tinytest.add('meteor-assert', function (test) {
  var isDefined = false;
  try {
    assert.equal('a', 'a');
    isDefined = true;
  }
  catch (e) {
  }
  test.isTrue(isDefined, "assert is not defined");
  test.throws(function () {
    assert.equal('a', 'b');
  });
});