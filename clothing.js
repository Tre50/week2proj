import { ObjectId } from 'mongodb'
import { db } from './connectDb.js'
    const clothingDb = db.collection('clothing');

const theclothing = {
    gender: 'male',
    size: 'large',
    color: 'red',


}

export async function addClothing() {
    const addClothing = await clothingDb.insertOne (theclothing)
                                .catch(err => console.err(err))
        console.log('addClothing ->', addClothing)
}

export async function getAllClothing() {
    const listClothing = await clothingDb.find({}).toArray()
                        .catch(err => console.err(err))
    console.table(listClothing)
}

export async function updateClothing() {
    const cleanId = new ObjectId ('652985c76ab9d56fc0cefce4')
    const dataToUpdate = { color: 'red' }
    const updateClothing = await clothingDb.findOneAndUpdate ({  _id:cleanid}, {$set: dataToUpdate})
    console.log ('updateClothing ->',updateClothing )
   
    // find the item whose id matches the id in the d
    // update that item


}
