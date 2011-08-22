(function($) {
    $.QueryString = (function(a) {
        if (a == "") return {};
        var b = {};
        for (var i = 0; i < a.length; ++i)
        {
            var p=a[i].split('=');
            if (p.length != 2) continue;
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
        }
        return b;
    })(window.location.search.substr(1).split('&'))
})(jQuery);

$(document).ready(function() {
  var full = $.QueryString["full"] || false;
  if( full ) {
    $('.public').css({"display":"none"});
  } else {
    $('.linkedin').css({"display":"none"});
  }
});

