/*global $tooltip:true */
$(function(){
    "use strict";
    $tooltip = $('<div id="tooltip"></div>').appendTo("body");
    $('#bugs-table').tablesorter({sortList: [[7,0]]});
    $('td.ttip').tooltip();
});
