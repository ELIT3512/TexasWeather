require("dotenv").config();
const fetch = require("node-fetch")
const weahterKey = process.env.weahterKey;
console.log("weatherKey: ",weahterKey);

    async function texasApi(){
        let url =`htts & query = Texas`;
        try{
            const res = await fetch(url);
            const data = await res.json();
            console.log("data",data);
        }catch(err){
        console.log(err);
        }
        console.log("data",data);
    }

texasApi()