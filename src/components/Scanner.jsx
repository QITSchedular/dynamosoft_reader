import React, { useEffect, useRef } from 'react';
import "../dbr";
import { BarcodeScanner } from "dynamsoft-javascript-barcode";

const Scanner = () => {
  const scannerRef = useRef(null);
  useEffect(() => {
    (async () => {
      let scanner = await BarcodeScanner.createInstance();
      try {
        
        await scanner.setUIElement(scannerRef.current);
        await scanner.open();
      } catch (error) {
        console.log(error)
      }
    })();
  }, []);
  return (
    <div className="fullscreen-container d-flex justify-content-center align-items-center" style={{
      backgroundColor: 'transparent',
      width: '80vh', 
      height: '80vh',
      }}>
      <div 
      className="scanner-area dce-video-container" 
      style={{
        position:"relative",
        width: '200px', 
        height: '200px', 
        border: '2px solid black', 
        margin: 'auto'
        
        }}
        ref={scannerRef}
        >
          {/* <div className="dce-video-container" style={{width: '100px', height: '100px', border: '2px solid red', position: 'absolute'}} ></div> */}
        </div>
    </div>
  );
}

export default Scanner;
