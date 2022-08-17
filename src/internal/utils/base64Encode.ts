/**
 *
 * @private
 * @description An isomorphic Base64 function, provides browser and server support.
 * @param {string} input - A string to encode with base64
 */
function base64Encode(input: string):string {
  // Browser
  let encodedResult = '';

  encodedResult = btoa(encodeURI(decodeURI(input)));

  return encodedResult
    .replace(/\+/g, '-') // Convert '+' to '-'
    .replace(/\//g, '_'); // Convert '/' to '_';
}

export {base64Encode};
