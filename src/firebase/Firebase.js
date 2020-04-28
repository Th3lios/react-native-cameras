import firebase from '@react-native-firebase/app'
import firestore from '@react-native-firebase/firestore';

export function addUser(user, addComplete){
    firebase.firestore()
    .collection('users')
    .add({
        name: user.name,
        lastname: user.lastname,
        email: user.email,
        username: user.username,
        password: user.password,
        createAt: firebase.firestore.FieldValue.serverTimestamp()
    }).then((data) => addComplete(data))
    .catch((error) => console.log(error))
}

export async function getUsers(userRetreived){
    var userList= []
    var snapshot = await firebase.firestore()
    .collection('users')
    .orderBy('createAt')
    .get()

    snapshot.forEach((doc) => {
        userList.push(doc.data())
    });

    userRetreived(userList);
}