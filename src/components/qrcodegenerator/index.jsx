import { useState } from "react";
import QRCode from "react-qr-code"

export default function QRCodeGenerator(){
    
    const [qrCode,setQrCode] = useState('');
    const [input,setInput] = useState('');

    function handleGenerateQRCode(){
        setQrCode(input);
        setInput('');
    }

    function handleResetQRCode(){
        setQrCode('');
        setInput('');
    }

    return(
        <div>
        <h1>QR Code Generator</h1>
        <div>
            <input onChange={(e) => setInput(e.target.value)} type="text" name="qr-code" value={input} placeholder="Enter your value here"/>
            <button style={{margin: "10px"}} disabled={input && input.trim() !== "" ? false : true} onClick={handleGenerateQRCode}>Generate</button>
            <button disabled={qrCode ? false : true} onClick={handleResetQRCode}>Reset</button>
        </div>
        <div style={{marginTop: "40px"}}>
            <QRCode
            id="qr-code-value"
            value={qrCode}
            size={400}
            bgColor="#ffffff"
            />
        </div>
        <div>
            <p>{qrCode?"QR Value - ":null} {qrCode}</p>
        </div>
        </div>
    )
}