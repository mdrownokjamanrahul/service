const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.notifyNewOrder = functions.database
  .ref('/orders/{orderId}')
  .onCreate(async (snapshot, context) => {
    const order = snapshot.val();

    const tokensSnap = await admin.database()
       .ref('fcmTokens/adminUid').once('value');
    const adminToken = tokensSnap.val();

    const payload = {
      notification: {
        title: 'নতুন অর্ডার',
        body: `${order.serviceName} এর নতুন অর্ডার এসেছে`
      }
    };

    await admin.messaging().sendToDevice(adminToken, payload);
});
