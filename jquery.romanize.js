/**
 * Romanize.js
 * Convert Arabic numerals into Roman numerals.
 */

// Plugin template - http://jqueryboilerplate.com

// Romanize
;(function ( $, window, document, undefined ) {

  var pluginName = "romanize",
      defaults = {
        lookup: { 'M': 1000, 'CM': 900, 'D': 500, 'CD': 400, 'C': 100, 'XC': 90, 'L': 50, 'XL': 40, 'X': 10, 'IX': 9, 'V': 5, 'IV':4, 'I': 1 }
      };

  function Plugin( element, options ) {
    this.element = element;
    this.$element = $(this.element);
    this.options = $.extend( {}, defaults, options );
    this._defaults = defaults;
    this._name = pluginName;
    this.init();
  }

  Plugin.prototype = {
    init: function() {
      var original = parseInt(this.$element.html(), 10),
          arabic = original,
          roman = '', i;

      for ( i in this.options.lookup ) {
        while ( arabic >= this.options.lookup[i] ) {
          roman += i;
          arabic -= this.options.lookup[i];
        }
      }

      this.$element.html( roman ).attr('data-original-value', original);
    }
  };

  $.fn[pluginName] = function ( options ) {
    return this.each(function () {
      if (!$.data(this, "plugin_" + pluginName)) {
        $.data(this, "plugin_" + pluginName, new Plugin( this, options ));
      }
    });
  };

})( jQuery, window, document );


// Deromanize
;(function ( $, window, document, undefined ) {

  var pluginName = "deromanize",
      defaults = {
        lookup: { 'M': 1000, 'D': 500, 'C': 100, 'L': 50, 'X': 10, 'V': 5, 'I': 1 }
      };

  function Plugin( element, options ) {
    this.element = element;
    this.$element = $(this.element);
    this.options = $.extend( {}, defaults, options );
    this._defaults = defaults;
    this._name = pluginName;
    this.init();
  }

  Plugin.prototype = {
    init: function() {
      var original = this.$element.html(),
          roman = original.toUpperCase(),
          arabic = 0,
          i = roman.length;

      while ( i-- ) {
        if ( this.options.lookup[roman[i]] < this.options.lookup[roman[i+1]] ) {
          arabic -= this.options.lookup[roman[i]];
        } else {
          arabic += this.options.lookup[roman[i]];
        }
      }
      this.$element.html(arabic).attr('data-original-value', original);
    }
  };

  $.fn[pluginName] = function ( options ) {
    return this.each(function () {
      if (!$.data(this, "plugin_" + pluginName)) {
        $.data(this, "plugin_" + pluginName, new Plugin( this, options ));
      }
    });
  };

})( jQuery, window, document );
