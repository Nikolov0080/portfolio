import firebase from "@firebase/app-compat";
import { format } from 'date-fns';

export default async function addMessage(email, name, message) {
    try {
        const whenWho = "[" + name + "] " + format(new Date(), "dd-MMM-yyyy hh:mm:ss a")
        const ref = firebase.firestore().collection("messages").doc(whenWho)
        ref.set({ email, message })
        return await (await ref.get()).id;
    } catch (error) {
        console.error(error)
        return 'error'
    }

}