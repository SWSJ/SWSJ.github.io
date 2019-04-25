$(function() {
    var webview_g = $('#ifr_g');
    var webview_n = $('#ifr_n');

    var version = navigator.appVersion.substr(navigator.appVersion.lastIndexOf('Chrome/') + 7);
    var match = /([0-9]*)\.([0-9]*)\.([0-9]*)\.([0-9]*)/.exec(version);
    var majorVersion = parseInt(match[1]);
    var buildVersion = parseInt(match[3]);

    var AGENT_PC = "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) AppleWebKit/525.13 (KHTML, like Gecko) Chrome/0.2.149.27 Safari/525.13";
    var AGENT_MOBILE = "Mozilla/5.0 (Linux; Android 7.0; SM-G930V Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.125 Mobile Safari/537.36";

    function search() {
        var query = $('#inp_query').val();

        webview_g.attr('src', "https://www.google.co.kr/search?q="+query);
        webview_n.attr('src', "https://search.naver.com/search.naver?query="+query);
    }

    $('#btn_srch').click(search);

    $('#inp_query').keypress(function(event) {
        if (event.which == 13) {
            document.querySelector('#btn_srch').click();
            event.preventDefault();
        }
    });

    $('#ckb_mode').change(function () {
        var checked = $(this).prop('checked');
        if (checked) {
            webview_g.get(0).setUserAgentOverride(AGENT_MOBILE);
            webview_n.get(0).setUserAgentOverride(AGENT_MOBILE);
        } else {
            webview_g.get(0).setUserAgentOverride(AGENT_PC);
            webview_n.get(0).setUserAgentOverride(AGENT_PC);
        }
        search();
    });

    function adjust_height() {
        var height = window.innerHeight - 10;
        webview_g.css('height', height);
        webview_n.css('height', height);
    }
    adjust_height();
    window.onresize = adjust_height;
});