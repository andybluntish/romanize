# Romanize.js

Convert Arabic numerals into Roman numerals.

## Usage

Romanize comes in two flavours, jQuery plugin or vanilla JavaScript.

### jQuery

Call `romanize()` on a jQuery object to convert from Arabic to Roman numerals.

    $('.roman').romanize();

Call `deromanize()` on a jQuery object to convert from Roman to Arabic numerals.

    $('.roman').deromanize();

### JavaScript

Call `Roman.encode()` and pass in a query selector (calls `document.querySelectorAll()` internally) to convert from Arabic to Roman numerals.

    Roman.encode('p');

Call `Roman.decode()` and pass in a query selector (calls `document.querySelectorAll()` internally) to convert from Roman to Arabic numerals.

    Roman.decode('p');
