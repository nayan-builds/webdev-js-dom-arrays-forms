(function(){
    //start
    document.getElementById("myHeading").innerHTML = "Nayan";

    let eventBtn = document.getElementById("myTestEvent");
    eventBtn.addEventListener("click", (ev) => {
        console.info(ev.target);
    })

    let colorBtns = document.querySelectorAll(".colPicker")
    //background colour selector
    for(let i = 0; i< colorBtns.length; i++){
        colorBtns[i].addEventListener("click", chgColor)
    }

    function chgColor(ev){
        document.body.setAttribute("class", ev.target.classList[0]+"Back");
    }
    
    let imageAr = ['images/view1.jpg', 'images/view2.jpg', 'images/view3.jpg',
                   'images/view4.jpg', 'images/view5.jpg', 'images/view6.jpg'];

    let imgIndex = 1;
    let imageInterval = setInterval(chgImage, 4000);

    document.getElementById("myImages").addEventListener("click", () => {
        //Reset timer
        chgImage();
        clearInterval(imageInterval);
        imageInterval = setInterval(chgImage, 4000);
    });
    function chgImage(){
        document.getElementById("myImages").setAttribute("src", imageAr[imgIndex])
        if (imgIndex === imageAr.length - 1){
            imgIndex = 0;
        } else {
            imgIndex++;
        }
    }


    //end
})()

