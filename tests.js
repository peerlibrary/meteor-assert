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
  if (Meteor.isServer) {
    console.log("Meteor.isServer");
    test.equal(1, 2);
  }
  else {
    console.log("Meteor.isClient");
    test.equal(1, 3);
  }
});