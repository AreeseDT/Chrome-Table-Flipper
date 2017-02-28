(function() {
    'use strict';
    
    var style = $('<style></style>')
        .attr('id', 'tableFlipper')
        .html('.spin-tables { transition: 2s linear; transform: rotate(360deg); }');
    $('head').append(style);

    function toggleSpin() {
        var tables = $('table');

        tables.each(function() {
            $(this).toggleClass('spin-tables');
        });
    }

    function flipTables() {        
        toggleSpin();
        setTimeout(toggleSpin,2E3);
    }

    // content.js
    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse) {
            if( request.message === "clicked_browser_action" ) {
                flipTables();
            }
        }
    );
})();
