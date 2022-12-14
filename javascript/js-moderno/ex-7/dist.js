//fazendo a conversão de um arquivo


"use strict";

var average = function average() {
  for (var _len = arguments.length, num = new Array(_len), _key = 0; _key < _len; _key++) {
    num[_key] = arguments[_key];
  }
  var sum = num.reduce(function (acc, n) {
    return acc + n;
  }, 0);
  var md = sum / num.length;
  return md;
};
console.log(average(1, 4, 5, 9, 10));
var weightedAverage = function weightedAverage() {
  for (var _len2 = arguments.length, entries = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    entries[_key2] = arguments[_key2];
  }
  var sum = entries.reduce(function (acc, _ref) {
    var num = _ref.num,
      weight = _ref.weight;
    return acc + num * (weight !== null && weight !== void 0 ? weight : 1);
  }, 0);
  var weightSum = entries.reduce(function (acc, entry) {
    var _entry$weight;
    return acc + ((_entry$weight = entry.weight) !== null && _entry$weight !== void 0 ? _entry$weight : 1);
  }, 0);
  return sum / weightSum;
};
console.log(weightedAverage({
  num: 9,
  weight: 3
}, {
  num: 7
}, {
  num: 10,
  weight: 1
}));
var median = function median(num) {
  var cnt = num.length % 2;
  if (cnt === 0) {
    var middle1 = num[Math.floor(num.length / 2)];
    var middle = num[Math.floor((num.length - 1) / 2)];
    var arr = [middle, middle1];
    return average.apply(void 0, arr);
  } else {
    var _middle = num[Math.floor(num.length / 2)];
    return _middle;
  }
};
console.log(median([2, 4, 5, 7, 42, 99])); //par

function mode() {
  var counts = {};
  var maxCount = 0;
  var maxKey;
  for (var i = 0; i < arguments.length; i++) {
    var key = i < 0 || arguments.length <= i ? undefined : arguments[i];
    var count = counts[key] = (counts[key] || 0) + 1;
    if (count > maxCount) {
      maxCount = count;
      maxKey = key;
    }
  }
  return maxKey;
}
console.log(mode(1, 1, 2, 3, 5));
