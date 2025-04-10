'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const sortSourceString = sourceString;
  const parametr = sortSourceString.split(';');
  const result = {};

  for (let i = 0; i < parametr.length; i++) {
    const kayAndValue = parametr[i].split(':');
    const kay = kayAndValue[0];
    const value = kayAndValue[1];

    if (value !== undefined) {
      result[kay.replace(/^\s+|\s+$/g, '')] = value.replace(/^\s+|\s+$/g, '');
    }
  }

  return result;
}

module.exports = convertToObject;
