import { addClothing, getAllClothing, updateClothing } from "./clothing.js";
import { closeClient } from "./connectDb.js";


await addClothing();
await getAllClothing();
await updateClothing();






closeClient()
