import React from "react";
import QrReader from "react-qr-reader";

function QR(props) {
  const handleScan = (data) => {
    if (data) {
      props.onScan(data);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ maxHeight: "100%", maxWidth: "100%" }}
      />
    </div>
  );
}

export default QR;
