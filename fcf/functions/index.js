let functions = require('firebase-functions');
let admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.newRequest = functions.database.ref('/requests/{userId}/friendRequests/').onWrite(event => {
    let requestStateChanged = false;
    let requestCreated = false;
    let requestData = event.data.val();
    let userId = event.params.userId;

    if (!event.data.previous.exists()) {
        requestCreated = true;
    }
    if (!requestCreated && event.data.changed()) {
        requestStateChanged = true;
    }
    if(requestCreated || requestStateChanged){

    	let dbRef = admin.database().ref('accounts/'+userId);
	    dbRef.once('value', snap => {
	    	console.log(snap.val().pushToken);
	    	let tokens = [];
	    	tokens.push(snap.val().pushToken);
	    	let payload = {
	    		notification: {
	    			title: 'New Friend Request Received',
	    			body: ' you got new friend request',
	    			sound: 'default',
	    		}
	    	};
	    	return admin.messaging().sendToDevice(tokens, payload);
	    });
	}
});

// Send Notification when users is added into new group
exports.newGroupCreation = functions.database.ref('accounts/{userId}/groups/').onWrite( event => {
	let groupCreated = false;
	let groupUpdated = false;
	let userId = event.params.userId;

	if (!event.data.previous.exists()) {
        groupCreated = true;
    }
    if (!groupCreated && event.data.changed()) {
        groupUpdated = true;
    }

    if(groupCreated || groupUpdated){
    	let dbRef = admin.database().ref('accounts/'+userId);
	    dbRef.once('value', snap => {
	    	console.log(snap.val().pushToken);
	    	let tokens = [];
	    	tokens.push(snap.val().pushToken);
	    	let payload = {
	    		notification: {
	    			title: 'You have added into new group',
	    			body: ' you have added into new group',
	    			sound: 'default',
	    		}
	    	};
	    	return admin.messaging().sendToDevice(tokens, payload);
	    });
    }
});

// Send Notification when users is added into new group
exports.friendRequestAccepted = functions.database.ref('accounts/{userId}/friends/').onWrite( event => {
	let friendsCreated = false;
	let friendsUpdated = false;
	let userId = event.params.userId;

	if (!event.data.previous.exists()) {
        friendsCreated = true;
    }
    if (!friendsCreated && event.data.changed()) {
        friendsUpdated = true;
    }

    if(friendsCreated || friendsUpdated){
    	let dbRef = admin.database().ref('accounts/'+userId);
	    dbRef.once('value', snap => {
	    	console.log(snap.val().pushToken);
	    	let tokens = [];
	    	tokens.push(snap.val().pushToken);
	    	let payload = {
	    		notification: {
	    			title: 'Your request has been accepted',
	    			body: 'Your request has been accepted',
	    			sound: 'default',
	    		}
	    	};
	    	return admin.messaging().sendToDevice(tokens, payload);
	    });
    }
});

// Send Notification when users is got new message from group
exports.newGroupMessage = functions.database.ref('accounts/{userId}/groups/{groupMessage}').onWrite( event => {
	let groupMessageCreated = false;
	let groupMessageUpdated = false;
	let userId = event.params.userId;

	if (!event.data.previous.exists()) {
        groupMessageCreated = true;
    }
    if (!groupMessageCreated && event.data.changed()) {
        groupMessageUpdated = true;
    }

    if(groupMessageCreated || groupMessageUpdated){
    	let dbRef = admin.database().ref('accounts/'+userId);
	    dbRef.once('value', snap => {
	    	console.log(snap.val().pushToken);
	    	let tokens = [];
	    	tokens.push(snap.val().pushToken);
	    	let payload = {
	    		notification: {
	    			title: 'New Group Message',
	    			body: 'you got new group messages',
	    			sound: 'default',
	    		}
	    	};
	    	return admin.messaging().sendToDevice(tokens, payload);
	    });
    }
});


// Send Notification when users is got new message from other user
exports.newMessage = functions.database.ref('accounts/{userId}/conversations/{conversationId}').onWrite( event => {
	let conversationCreated = false;
	let conversationUpdated = false;
	let userId = event.params.userId;

	if (!event.data.previous.exists()) {
        conversationCreated = true;
    }
    if (!conversationCreated && event.data.changed()) {
        conversationUpdated = true;
    }

    if(conversationCreated || conversationUpdated){
    	let dbRef = admin.database().ref('accounts/'+userId);
	    dbRef.once('value', snap => {
	    	console.log(snap.val().pushToken);
	    	let tokens = [];
	    	tokens.push(snap.val().pushToken);
	    	let payload = {
	    		notification: {
	    			title: 'You got new message',
	    			body: 'you got new message',
	    			sound: 'default',
	    		}
	    	};
	    	return admin.messaging().sendToDevice(tokens, payload);
	    });
    }
});


function getUserInfo(uid){
	console.log(uid);
	let dbRef = admin.database().ref('accounts/'+uid);
	let defer = new Promise((resolve, reject) => {
		dbRef.once('value', snap => {
			let userInfo = snap.val();
			resolve(userInfo);
		}, err => {
			reject(err);
		});
	});
	return defer;
}