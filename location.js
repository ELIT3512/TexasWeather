    import {texasApi} from "./weather.js";
    import {NewsApi} from "./new.js";
    document.addEventListener("DOMContentLoaded",function(){
        let buttonE = document.getElementById("infoClick");
        let infoE = document.getElementById("info");
        buttonE.addEventListener("click",function(){
            texasApi();
            NewsApi();
            infoE.style.display="block"
        })
    })