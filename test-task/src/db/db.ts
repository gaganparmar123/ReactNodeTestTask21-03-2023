import mongoose from 'mongoose';

export async function connect() {
    try {
        mongoose.connect('mongodb://127.0.0.1:27017/dataset');

    } catch (error) {
        console.log('Something goes wrong!');
        console.log(error);
        
    }


}