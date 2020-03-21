import React from "react";
import QRCode from "qrcode.react";
import "../App.css";

function QRScript () {
    return (
        <div className="QRDisp">
            <QRCode value="https://nakayama-portfolio.web.app" />
        </div>
    );
}

export default QRScript;