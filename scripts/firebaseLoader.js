window.onload = main;
let p1,p2,p3,a,id,database;
const project = "homepage";

function main()
{
    // Main logic goes here
    initVariables()
    initFirebase()
    logInfo();
}

function initVariables()
{
    p1 = "AIzaSyA2-R-S3WayRd";
    p2 = "tFteSuvfd";
    p3 = "G7q6GM12tbc";
    a = p1 + 6 +  p2 + p3;
    id = "ca5b6";
}

function initFirebase()
{
    firebase.initializeApp({
        apiKey: a,
        authDomain: "websitelogger-"+ id + ".firebaseapp.com",
        projectId: "websitelogger-" + id,
    });

    // Initialize Cloud Firestore through Firebase
    database = firebase.firestore();

    // Disable deprecated features
    database.settings({
        timestampsInSnapshots: true
    });
}

function logInfo()
{
    database.collection("users-" + project).add
    (
        {
            date: new Date().toJSON()
        }
    ).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    ;
}