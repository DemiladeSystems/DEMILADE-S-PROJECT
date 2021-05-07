import React from 'react';
import './App.css';
import HelloWorld10 from './components/URL.QRcode';
import HelloWorld12 from './components/mail.QRcode';
import HelloWorld11 from './components/SMS.QRcode';

const App: React.FC = () => {
 return (
 <div className="Container">
 <div className="Column1">
 <HelloWorld10 />
 </div>
 <div className="Column2">
 <HelloWorld11 />
 </div>
 <div className="Column3">
 <HelloWorld12 />
 </div>
 </div>
 );
}
export default App;