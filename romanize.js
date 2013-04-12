/**
 * Romanize.js
 * Convert Arabic numerals into Roman numerals.
 */

var Roman = {
  encode: function(selector) {
    var lookup = { 'M': 1000, 'CM': 900, 'D': 500, 'CD': 400, 'C': 100, 'XC': 90, 'L': 50, 'XL': 40, 'X': 10, 'IX': 9, 'V': 5, 'IV':4, 'I': 1 },
        elements = document.querySelectorAll(selector),
        length = elements.length, i, j;

    for ( i = 0; i < length; ++i ) {
      var el = elements[i],
          original = parseInt(el.innerHTML, 10),
          arabic = original,
          roman = '';

      for ( j in lookup ) {
        while ( arabic >= lookup[j] ) {
          roman += j;
          arabic -= lookup[j];
        }
      }
      el.innerHTML = roman;
      el.setAttribute( 'data-original-value', original );
    }
  },

  decode: function(selector) {
    var lookup = { 'M': 1000, 'D': 500, 'C': 100, 'L': 50, 'X': 10, 'V': 5, 'I': 1 },
        elements = document.querySelectorAll(selector),
        length = elements.length;

    for ( i = 0; i < length; ++i ) {
      var el = elements[i],
          original = el.innerHTML,
          roman = original.toUpperCase(),
          arabic = 0,
          j = roman.length;

      while ( j-- ) {
        if ( lookup[roman[j]] < lookup[roman[j+1]] ) {
          arabic -= lookup[roman[j]];
        } else {
          arabic += lookup[roman[j]];
        }
      }
      el.innerHTML = arabic;
      el.setAttribute( 'data-original-value', original);
    }
  }
};
