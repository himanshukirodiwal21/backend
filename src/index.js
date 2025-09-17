// require('dotenv').config({path: './env'});
import dotenv from "dotenv";
dotenv.config({ path: "./env" });

import connectDB from "./db/index.js";

console.log("MONGO_URI from env:", process.env.MONGO_URI);
console.log("Loaded MONGO_URI:", process.env.MONGO_URI);

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(` Server is running at port: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("mondo db connection failed!!", err);
  });

  














/*
import express from 'express';
const app = express();



( async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
            app.on("error", (error) => {
                console.log("ERROR", error);
                throw error
            })

            app.listen(process.env.PORT, () => {
                console.log(`app is listening on port${process.env.PORT}`);
            })
    }
    catch (error) {
        catch (error) {
            console.log("ERROR", error);
        }
    }
})()
*/
