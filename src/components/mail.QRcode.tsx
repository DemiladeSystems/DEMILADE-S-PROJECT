import React, { useState } from 'react';
//import QRCode from 'qrcode-react'; //This declaration could have been used if qrcode-react is ES6 module feature compliant

const HelloWorld11: React.FC = () => {
    const QRCode = require('qrcode.react'); //qrcode-react is not yet ES6 module feature compliant, hence this approach to declaration.

    const [email, setemail] = useState('');

    const changeemail = (event: any) => {
        setemail(event.target.value);
    }

    const [Topic, setsub] = useState('');

    const changesub = (event: any) => {
        setsub(event.target.value);
    }


    const [body, setBody] = useState('');

    const changeBody = (event: any) => {
        setBody(event.target.value);
    }

    // the empty string is filled based on setup
    return (
        <div className="tile is-parent">
            <article className="tile is-child notification is-successful">
                <p className="title">Mail myQRcode</p>
                <p className="subtitle">Try it out!!</p>
                <div className="content">
                    <div>
                        <div className="field">
                            <label className="label">Mail To:</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Enter Receipient" onInput={changeemail} />
                            </div>
                        </div>

                        <div>
                            <div className="field">
                                <label className="label">Topic: </label>
                                <div className="control">
                                    <input className="input" type="text" placeholder="Enter Subject" onInput={changesub} />
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="field">
                                <label className="label"> Body: </label>
                                <div className="control">
                                    <textarea className="textarea" placeholder="Enter Mail" onInput={changeBody} />
                                </div>
                            </div>
                        </div>
                        <div>
                            <br></br>
                        </div>

                        <div>
                            {<QRCode value={`mailto: ${email}?subject=${Topic}&body=${body}`} size={256} fgColor="black" />}
                        </div>

                    </div>

                </div>
            </article>
        </div>

    )
}
export default HelloWorld11;

