function setEncryptDataForBank(){
      var text = document.getElementById("aadharId").value;
      var secret = document.getElementById("secretKey").value;
      var encrypted = CryptoJS.AES.encrypt(text, secret);
      document.getElementById("encryptAadharId").value = encrypted.toString();
}
