export async function NewsApi(){
    let newsKey = "e6220c2e1c3f49919389d2d1d6f60bde";
    let url =`https://newsapi.org/v2/everything?q=Texas&apiKey=${newsKey}`;
    let newsIdElement = document.getElementById("News");
    try{
        const res = await fetch(url);
        const data = await res.json();
        let articles =data.articles;
        const filterTexas = [];
        articles.forEach(element => {
            if(element.title && element.title.toLowerCase().includes("texas")){
                filterTexas.push(element);
            }
        });
        filterTexas.sort((a,b)=> new Date(b.publishedAt)- new Date(a.publishedAt));
        filterTexas.forEach(e=>{
           if(e.title !== null && e.description !== null){
            let title = e.title;
            let descriptionNews = e.description;
            let PD = e.publishedAt;           
            let head = document.createElement("h4");;
            head.textContent =`Date Published: ${PD} Title: ${title}`;      
            let newsContent = `${descriptionNews}`
            let newselement = document.createElement("div");
            newselement.classList.add("container");
            newselement.textContent = newsContent;
            head.appendChild(newselement);
            newsIdElement.appendChild(head);
           }
            

        })
        
    }catch(err){
    console.log(err);
    }
}

