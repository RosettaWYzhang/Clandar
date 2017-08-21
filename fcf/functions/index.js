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

exports.newEventRequest = functions.database.ref('/requests/{userId}/eventRequests/').onWrite(event => {
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
	    			title: 'New Event Invitation Received',
	    			body: ' you got a new event invitation',
	    			sound: 'default',
	    		}
	    	};
	    	return admin.messaging().sendToDevice(tokens, payload);
	    });
	}
});

exports.eventRequestAccepted = functions.database.ref('accounts/{userId}/events/').onWrite( event => {
	let eventsCreated = false;
	let eventsUpdated = false;
	let userId = event.params.userId;

	if (!event.data.previous.exists()) {
        eventsCreated = true;
    }
    if (!eventsCreated && event.data.changed()) {
        eventsUpdated = true;
    }

    if(eventsCreated || eventsUpdated){
    	let dbRef = admin.database().ref('accounts/'+userId);
	    dbRef.once('value', snap => {
	    	console.log(snap.val().pushToken);
	    	let tokens = [];
	    	tokens.push(snap.val().pushToken);
	    	let payload = {
	    		notification: {
	    			title: 'Your invitation has been accepted',
	    			body: 'Your invitation has been accepted',
	    			sound: 'default',
	    		}
	    	};
	    	return admin.messaging().sendToDevice(tokens, payload);
	    });
    }
});

// Send Notification when users is added into new club
exports.newClubCreation = functions.database.ref('accounts/{userId}/clubs/').onWrite( event => {
	let clubCreated = false;
	let clubUpdated = false;
	let userId = event.params.userId;

	if (!event.data.previous.exists()) {
        clubCreated = true;
    }
    if (!clubCreated && event.data.changed()) {
        clubUpdated = true;
    }

    if(clubCreated || clubUpdated){
    	let dbRef = admin.database().ref('accounts/'+userId);
	    dbRef.once('value', snap => {
	    	console.log(snap.val().pushToken);
	    	let tokens = [];
	    	tokens.push(snap.val().pushToken);
	    	let payload = {
	    		notification: {
	    			title: 'You have added into new club',
	    			body: ' you have added into new club',
	    			sound: 'default',
	    		}
	    	};
	    	return admin.messaging().sendToDevice(tokens, payload);
	    });
    }
});

// Send Notification when users is added into new club
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

// Send Notification when users is got new message from club
exports.newClubMessage = functions.database.ref('accounts/{userId}/clubs/{clubMessage}').onWrite( event => {
	let clubMessageCreated = false;
	let clubMessageUpdated = false;
	let userId = event.params.userId;

	if (!event.data.previous.exists()) {
        clubMessageCreated = true;
    }
    if (!clubMessageCreated && event.data.changed()) {
        clubMessageUpdated = true;
    }

    if(clubMessageCreated || clubMessageUpdated){
    	let dbRef = admin.database().ref('accounts/'+userId);
	    dbRef.once('value', snap => {
	    	console.log(snap.val().pushToken);
	    	let tokens = [];
	    	tokens.push(snap.val().pushToken);
	    	let payload = {
	    		notification: {
	    			title: 'New Club Message',
	    			body: 'you got new club messages',
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