(function (w, d, ns) {

    var sendBtn = d.getElementById('sendBtn');
    var textRadioChosen = d.getElementById('text');
    var jsonRadioChosen = d.getElementById('json');
    var selectContentBtn = d.getElementById('selectContentBtn');
    var contentOptions = d.getElementById('contentOptions');
    var selectQuickRepliesBtn = d.getElementById('selectQuickRepliesBtn');
    var quickRepliesOptions = d.getElementById('quickRepliesOptions');
    var clearLogBtn = d.getElementById('clearLogBtn');
    var increaseFontSizeBtn = d.getElementById('increaseFontSizeBtn');
    var decreaseFontSizeBtn = d.getElementById('decreaseFontSizeBtn');

    function bindCommand(el, cmd) {
        el.addEventListener('click', ns.commands[cmd]);
    }

    function initSdk() {
        lpTag.agentSDK.init({});
    }
    
    function getFunction() {
       lpTag.agentSDK.get('chatInfo.accountId', function (accid) {
           accountId = accid;  
           console.log("Retrieved Account Id " + accountId);
       }, function (err) {
        console.log('Failed to retrieve ' + accountId);
        //getProperty(propName, callback)
       });
    }

    function init() {

        //ns.commands.populateContentListByType('text');
        //ns.commands.populateQuickReplies();

        //bindCommand(sendBtn, 'send');
        //bindCommand(textRadioChosen, 'changeContentType');
        //bindCommand(jsonRadioChosen, 'changeContentType');
        //bindCommand(selectContentBtn, 'toggleContentOptionsList');
        //bindCommand(contentOptions, 'addContent');
        //bindCommand(selectQuickRepliesBtn, 'toggleQuickRepliesList');
        //bindCommand(quickRepliesOptions, 'addQuickReplies');
       // bindCommand(clearLogBtn, 'clearLog');
       // bindCommand(increaseFontSizeBtn, 'increaseFontSize');
       // bindCommand(decreaseFontSizeBtn, 'decreaseFontSize');

        initSdk();
        getFunction();
    }

    init();

})(window, document, window.quickRepliesWidget = window.quickRepliesWidget || {});
