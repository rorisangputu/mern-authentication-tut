import mongoose from "mongoose"

export const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CON)
        console.log("Db Connected")
    } catch (error) {
        console.error('Db Connection Error: ', error)
        process.exit(1);
    }
}