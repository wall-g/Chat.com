import mongoose from 'mongoose';

const MongoConnection = async (URL) => {        
    try {
        await mongoose.connect(URL, {}); 
        console.log(`mongoDB connected successfully`);
    } catch (error) {
        console.error(`ERROR: ${error}`);
    }
}

export default MongoConnection;