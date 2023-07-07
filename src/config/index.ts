import dotenv from "dotenv";
dotenv.config();

const CONFIG = Object({
    MONGO_HOST: process.env.MONGO_HOST || "mongodb://127.0.0.1:27017/",
    MONGO_DB: process.env.MONGO_DB || "class-mng",
    CONNECTION_PORT: process.env.CONNECTION_PORT || 1337,
    MONGO_URI() {
        //return this.MONGO_HOST + this.MONGO_DB
        return "mongodb://akhil:aohANHXUBx6kHWZkNeIfYkshW8QBj6t0eH2sNLJ7JgTrzuUUiRfrFuJRZExnclkipLQYWbH3JmulACDboBzL0w%3D%3D@akhil.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@akhil@";
    }
})
export default CONFIG;