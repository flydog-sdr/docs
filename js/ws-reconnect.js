function open_websocket(stream, open_cb, open_cb_param, msg_cb, recv_cb, error_cb) {
    if (!("WebSocket" in window) || !("CLOSING" in WebSocket)) {
        console.log('WEBSOCKET TEST');
        kiwi_serious_error("Your browser does not support WebSocket, which is required for OpenWebRX to run. <br> Please use an HTML5 compatible browser.");
        return null;
    }

    // replace http:// with ws:// on the URL that includes the port number
    var ws_url = kiwi_url_origin().split("://")[1];

    // evaluate ws protocol
    var ws_protocol = 'ws://';

    if (window.location.protocol === "https:") {
        ws_protocol = 'wss://';
    }

    var no_wf = (window.location.href.includes('?no_wf') || window.location.href.includes('&no_wf'));
    ws_url = ws_protocol + ws_url + '/' + (no_wf ? 'no_wf/' : 'kiwi/') + timestamp + '/' + stream;
    if (no_wf) wf.no_wf = true;

    //console.log('open_websocket '+ ws_url);
    var ws = new WebSocket(ws_url);
    wsockets.push({
        'ws': ws,
        'name': stream
    });
    ws.up = false;
    ws.stream = stream;

    ws.open_cb = open_cb;
    ws.open_cb_param = open_cb_param;
    ws.msg_cb = msg_cb;
    ws.recv_cb = recv_cb;
    ws.error_cb = error_cb;

    // There is a delay between a "new WebSocket()" and it being able to perform a ws.send(),
    // so must wait for the ws.onopen() to occur before sending any init commands.
    ws.onopen = function() {
        ws.up = true;

        if (ws.open_cb) {
            try {
                ws.open_cb(ws.open_cb_param);
            } catch (ex) {
                console.log(ex);
            }
        }
    };

    ws.onmessage = function(evt) {
        // We've seen a case where, if uncaught, an "undefined" error in this callback code
        // is never reported in the console. The callback just silently exits!
        // So add a try/catch to all web socket callbacks as a safety net.
        //try {
        on_ws_recv(evt, ws);
        //} catch(ex) { console.log(ex); }
    };

    ws.onclose = function(evt) {
        ws.up = false;
        console.log('WS-CLOSE: ' + ws.stream);
        setTimeout(function(){
            location.reload();
        }, 1000)
    };

    ws.binaryType = "arraybuffer";

    ws.onerror = function(evt) {
        if (ws.error_cb) {
            try {
                ws.error_cb(evt, ws);
            } catch (ex) {
                console.log(ex);
            }
        }
    };

    return ws;
}
