/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/

/* jslint esnext: true */

"use strict";
exports.extend = extend, exports.stringify = stringify, exports.flatMap = flatMap;
var hop = Object.prototype.hasOwnProperty;

function extend(obj) {
    var sources = Array.prototype.slice.call(arguments, 1),
        i, len, source, key;

    for (i = 0, len = sources.length; i < len; i += 1) {
        source = sources[i];
        if (!source) { continue; }

        for (key in source) {
            if (hop.call(source, key)) {
                obj[key] = source[key];
            }
        }
    }

    return obj;
}

function stringify(value) {
  if (!value && typeof value !== 'number') {
      return '';
  }

  return typeof value === 'string' ? value : String(value);
}

function flatMap(arr, fn, result) {
  for (var i = 0; i < arr.length; i++) {
    var item = arr[i];

    if (item instanceof Array) {
      flatMap(item, fn, result);
    } else {
      result.push(fn(item));
    }
  }

  return result;
}
exports.hop = hop;

//# sourceMappingURL=utils.js.map