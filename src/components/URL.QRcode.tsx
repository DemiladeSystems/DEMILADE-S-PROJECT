import React, { useState } from 'react';
//import QRCode from 'qrcode-react'; //This declaration could have been used if qrcode-react is ES6 module feature compliant

const HelloWorld10: React.FC = () => {
    const QRCode = require('qrcode.react'); //qrcode-react is not yet ES6 module feature compliant, hence this approach to declaration.

    const [thelink, settheLink] = useState('');

    const changetheLink = (event: any) => {
        settheLink(event.target.value);
    }
    // setmylink changes the empty string based on what we set it to
    return (

        <div className="tile is-parent">
      <article className="tile is-child notification is-sucessful">
        <p className="title">Url myQRcode</p>
        <p className="subtitle">Try it out!!</p>
        <div className="content">
        <div>
            <div className="field">
                <label className="label">URL:</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Enter Url" onInput= {changetheLink} />
                </div>
            </div>
            


                {/* Besides size, you can set more properties for QRCode, including logo image overlay. See  https://www.npmjs.com/package/qrcode.react*/}
                <QRCode value={thelink} size={256} fgColor="black" />

                {/* Additional useful reference: https://github.com/zxing/zxing/wiki/Barcode-Contents */}

            </div>
        </div>
      </article>
    </div>
  

        
       
    )
}
export default HelloWorld10;

