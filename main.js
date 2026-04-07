function generateQR() {
    let text = document.getElementById("qrText").value.trim();

    if(!text) {
        alert("الرجاء إدخال رابط صحيح!");
        return;
    }

    // مسح أي QR موجود
    document.getElementById("qrcode").innerHTML = "";

    new QRCode(document.getElementById("qrcode"), {
        text: text,
        width: 250,
        height: 250,
        colorDark: "#4c1d95",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
  }