import { db } from '../services/firebase'

export const createNewMessage = message =>
  new Promise(resolve => {
    db.collection('channel')
      .add(message)
      .then(docRef => {
        docRef.get().then(docSnapshot => {
          const data = { id: docSnapshot.id, ...docSnapshot.data() }
          resolve(data)
        })
      })
  })

export const loadMessages = () =>
  new Promise(resolve => {
    db.collection('channel')
      .get()
      .then(querySnapshot => {
        const docs = querySnapshot.docs.map(doc => {
          return { ...doc.data(), id: doc.id }
        })
        resolve(docs)
      })
  })
