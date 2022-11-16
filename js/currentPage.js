(function(){
    //setting current page
    let url = window.location.href;
    let fileName = url.split("/").pop();
    let allLinks = document.querySelectorAll("nav ul li a");
    for(let i = 0; i < allLinks.length; i++){
        if(allLinks[i].getAttribute("href") === fileName){
            allLinks[i].parentElement.setAttribute("class", "currentPage");
            break;
        }
    }
})()