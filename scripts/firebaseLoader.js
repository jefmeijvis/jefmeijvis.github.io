firebase.initializeApp({
    apiKey: "AIzaSyA2-R-S3WayRd6tFteSuvfdG7q6GM12tbc",
    authDomain: "websitelogger-ca5b6.firebaseapp.com",
    projectId: "websitelogger-ca5b6",
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

// Disable deprecated features
db.settings({
    timestampsInSnapshots: true
});


getUserIP(logInfo);


function logInfo(ip)
{
    console.log(getToday());
    db.collection("users-kerstbomen").add({
        date: getToday(),
        ip: ip
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
});

}