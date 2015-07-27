App.NewController = Ember.Controller.extend({
  actions: {
    saveBook: function() {
      var controller = this
      this.get('model').save().then(function() {
        controller.transitionToRoute('/books/'+controller.get('model.id'))
      })
    },
    setupAWS: function() {
      AWS.config.update({
        accessKeyId: "AKIAISACLVAPASXDMUAA",
        secretAccessKey: "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",
        region: "us-east-1"
      });
        var bucketName = 'wikitongues';
        var bucket = new AWS.S3({
            params: {
                Bucket: bucketName
            }
        });
        var fileChooser = document.getElementById('file-chooser');
        var button = document.getElementById('upload-button');
        var results = document.getElementById('results');

        button.addEventListener('click', function () {
            var file = fileChooser.files[0];
            if (file) {
                results.innerHTML = '';
                var objKey = file.name;
                var params = {
                    Key: objKey,
                    ContentType: file.type,
                    Body: file,
                    ACL: 'public-read'
                };
                bucket.putObject(params, function (err, data) {
                    if (err) {
                      results.innerHTML = 'ERROR: ' + err;
                    } else {
                      bucket.getObject(data)
                      console.log(data)
                    }
                });
            } else {
                results.innerHTML = 'Nothing to upload.';
            }
        }, false);
    }
  }
})
