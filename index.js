const google = require('googleapis')
const key = require('./key.json')

const scopes = ['https://www.googleapis.com/auth/androidpublisher']

const jwt = new google.auth.JWT(key.client_email, null, key.private_key, scopes, null)

jwt.authorize((err, tokens) => {
  if (err) {
    return console.log(err)
  }
  google.androidpublisher('v2').reviews.list({ auth: jwt, packageName: 'com.ringcentral.android' }, function (err, resp) {
    if (err) {
      return console.log(err)
    }
    console.log(JSON.stringify(resp))
  })
})
