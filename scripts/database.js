function load(database, node)
{
    let collection = [];
    database.collection(node).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            let value = doc.data().date;
            let thisDate = new Date(value);
            collection.push(thisDate);
        });
    });
    return collection;
}