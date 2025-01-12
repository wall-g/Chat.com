import mongoose from 'mongoose';

const connection = async (URL) => {    
    try {
        await mongoose.connect(URL, {}); 
        console.log(`mongoDB connected successfully`);
    } catch (error) {
        console.error(error);
    }
}

export default connection;