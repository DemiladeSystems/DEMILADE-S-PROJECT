import React, { useState } from 'react';
//import QRCode from 'qrcode-react'; //This declaration could have been used if qrcode-react is ES6 module feature compliant

const HelloWorld11: React.FC = () => {
    const QRCode = require('qrcode.react'); //qrcode-react is not yet ES6 module feature compliant, hence this approach to declaration.

    const [phoneno, setPhoneno] = useState(0);

    const changePhoneno = (event: any) => {
        setPhoneno(event.target.value);
    }

    const [Message, setMessage] = useState('');

    const changeMessage = (event: any) => {
        setMessage(event.target.value);
    }
    // conditions above are met based on what is set up below,
    return (

        <div className="tile is-parent">
      <article className="tile is-child notification is-sucessful">
        <p className="title">SMS myQRcode</p>
        <p className="subtitle">Try it out!!</p>
        <div className="content">
        <div>
            <div className="field">
                <label className="label">Phone Number:</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Enter Phone number" onInput={changePhoneno} />
                </div>
            </div>

            <div>
                <div className="field">
                    <label className="label">Message: </label>
                    <div className="control">
                        <textarea className="textarea"  placeholder="Enter Message here" onInput={changeMessage} />
                    </div>
                </div>
            </div>
            <div>
                <br>
                </br>
            </div>
            <div>
                <QRCode value={`SMS: ${phoneno}:${Message}`} size={256} fgColor="black" />
            </div>
                
                

        </div>
        </div>
      </article>
    </div>

        
    )
}
export default HelloWorld11;

