var SweetSelector = function() {
  return {
    select: function(selector) {
      return document.querySelector(selector);
    }
  }
}();
