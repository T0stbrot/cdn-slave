exports.config = {
  port: 88,
  host: 'localhost', //set to 0.0.0.0 if you want the website to be public
  timezone: 'America/Los_Angeles'
  token: 'BOT TOKEN',
  fileChannel: 'ID OF CHANNEL TO SEND FILES',
  maxFileSize: {
    human: "25mb", //this is the default discord limit
    byte: 26214400 //if you have a nitro boosted server multiply these by 4
  }
}
