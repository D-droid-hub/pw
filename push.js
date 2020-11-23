var push = require('web-push');

let vapidKeys=  {
    publicKey: 'BF15PhRfzZkCvwanZJOxD2oFoB28jDNAaCXsvetg9IunoKZD_DcZo_vrVkVzgrEG_x6bambA0oRpD9a4-v9MuO4',
    privateKey: 'u8oE2BlRlZwEWDj5iUg4ck2TkNKeK_4ZoxjZc-t5u7M'
  }

  push.setVapidDetails('mailto:test@code.co.uk', vapidKeys.publicKey, vapidKeys.privateKey)

  let sub= {};
  
  push.sendNotification(sub, 'test message')