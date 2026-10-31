let spincontainer = document.querySelector(".spincontainer");
let btn = document.getElementById("spin");
let number = Math.ceil(Math.random() * 1000);
let hasSpun = false;  // Flag to check if the user has already spun

btn.onclick = function(){
    if(!hasSpun) {
        spincontainer.style.transform = "rotate(" + number + "deg)";
        number += Math.ceil(Math.random() * 1000);

     
        setTimeout(function(){
           
            let totalDegrees = number % 360; 
            let segmentSize = 360 / 8; 
            let segmentNumber = Math.ceil(totalDegrees / segmentSize);

            switch(segmentNumber) {
                case 0:
                    alert("It's so pity!!You will surely win next time");
                    break;
                default:
                    alert("Congratulations!! Welcome to our store to spend this coupon.");
                    break;
            }
        }, 5000);  

        hasSpun = true; 
    } else {
        alert("You've already spun!");
    }
}
