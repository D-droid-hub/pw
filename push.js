var push = require('web-push');

let vapidKeys = {
    publicKey: 'BF15PhRfzZkCvwanZJOxD2oFoB28jDNAaCXsvetg9IunoKZD_DcZo_vrVkVzgrEG_x6bambA0oRpD9a4-v9MuO4',
    privateKey: 'u8oE2BlRlZwEWDj5iUg4ck2TkNKeK_4ZoxjZc-t5u7M'
}

push.setVapidDetails('mailto:adishu.deo@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey)

let sub ={"endpoint":"https://fcm.googleapis.com/fcm/send/czlwwhxnENY:APA91bFmKIikrPkVIyqNK7w7is2uruTAmtPIYM_Pgqw3eUPshVgsc0-VB7IBuy8hNBWTAIw3W952zQfRhot2jAecCDH70rRb_CpzQkQOKLNSSukk6k7D4lmub_OllDjNfp34tf1svckf",
"expirationTime":null,
"keys":{"p256dh":"BJovBQ7yPyn5jIywUTY1S1qEsKJScbZp9Hnb0feGFcwwV8PNxhknAJ5QPIhRlR0_k5gWNHl0Yqwnl6LiCcwKnts",
"auth":"JK5uUic6jmOI6DJ7bo8AyA"}};

push.sendNotification(sub, 'test message')