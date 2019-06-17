
    downloadQRCode(){
      let storageLocation = '';
      alert(device.platform);
      switch (device.platform) {
        case "Android":
          storageLocation = 'file:///storage/emulated/0/';
          break;
        case "iOS":
          storageLocation = cordova.file.documentsDirectory;
          break;
      }
      let fileTransfer = new FileTransfer();
      let uri = encodeURI("http://chart.apis.google.com/chart?cht=qr&chl={\"UserId\":\"4\",\"UserAccNo\":75}&chs=300");
      // let fileURL =  "cdvfile://localhost/persistent/path/to/QRCode.png";
      // let fileURL = storageLocation + 'Download'
      let fileURL = cordova.file.externalRootDirectory + 'Download/' + 'QRCode.png'
      alert(fileURL)

      fileTransfer.download(
        uri, fileURL, function(entry) {
          alert("download complete: " + entry.toURL());
        },

        function(error) {
          alert(error)
          alert("download error source " + error.source);
          alert("download error target " + error.target);
          alert("download error code" + error.code);
        },

        false, {
          headers: {
            "Authorization": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA=="
          }
        }
      );
    },
