//audio
// select all input elemts inside elements with class input-data'
let formAudio = document.querySelectorAll(".input-data input, .input-data textarea");
let audio_1 = document.getElementById("audioOnFocus");
//using const as we don't want the value to be reassigned
const formAnimation = document.querySelectorAll('.input-data input, .input-data textarea');
let submitBTN = document.getElementById("submitBTN");
let confirmBox = document.getElementById("confirmation");
let closeBTN = document.getElementById("confirmationClose");
let inputForms = document.querySelectorAll(".input-data input, .input-data textarea");
let confirmText = document.getElementById("confirmationText");
let navLinks = document.querySelectorAll(".navigation");
let contact = document.getElementById("contactPage");
let about = document.getElementById("aboutPage");
let work = document.getElementById("workPage");
const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".mainNav");
let photoframes = document.querySelectorAll(".photoFrame");

formAudio.forEach( audioInput =>
    audioInput.addEventListener("focus" , function(){
        audio_1.play();
    })    
);

inputForms.forEach( inputHighlight =>
    inputHighlight.addEventListener("focus" , function(){
        inputHighlight.style.background = "#f1e900";
    })
);

inputForms.forEach ( inputHighlight =>
    inputHighlight.addEventListener("blur", function(){
        inputHighlight.style.background= "";
    })

);


//input animation

// ARROW function '() => {}'
// do not have their own 'this', they instead INHERIT whatever context they are surrounded by
// this is good when you are trying to callback an option
// it inherits other ARGUMENTS
// wheras with the 'function() {}'
// has its own ARGUMENTS and is undefined 
// trying to use one or other depends on the context and what you want to happen

formAnimation.forEach(aniInput => {
    //add event listener for FOCUS event
    aniInput.addEventListener('focus', () => {
        const label = aniInput.parentElement.querySelector('label');
        // styles 
        label.style.transform = 'translateY(-23px)';
        label.style.fontSize = '14px';
        label.style.color = '#f49915';
        label.style.background = "#f1e900";
    });

    // add event listener for BLUR event (when input loses focus)
    aniInput.addEventListener('blur', () => {
        const label = aniInput.parentElement.querySelector('label');
        //  In JavaScript, the exclamation mark (!) is the logical NOT operator. When applied to a value, it negates the truthiness of that value.
        if (!aniInput.value) { 
            label.style.transform = '';
            label.style.fontSize = '';
            label.style.color = '';
            label.style.background = '';
        }

    });

    // add event listener for INPUT event (when input value changes)
    aniInput.addEventListener('aniInput' , () => {
        const label = aniInput.parentElement.querySelector('label');
        // checks if the input is valid
        if (aniInput.validty.valid) {
            label.style.transform = 'translateY(-23px)';
            label.style.fontSize = '14px';
            label.style.color = '#f49915';
            label.style.background = "#f1e900";
        }
        //reset colour if the input is invalid
        else {
            label.style.color = '';
        }

    });
});


// Submit button
// task: when user clicks on the submit btn 
// prevent the default 
// console.log() a message 

submitBTN.addEventListener("click", function(event){
    event.preventDefault();
    if (inputForms[0].value !== "" &&
        inputForms[1].value !== "" &&
        inputForms[2].value !== "" &&
        inputForms[3].value !== "" 
    ) {
        // personalized message 
        let personalizedMessage = `Hi ${inputForms[0].value}!<br/> <br/> 
         I have received your message and I will get back to you on ${inputForms[2].value} within the next 48 hours. 
         I'm excited to talk and connect with you soon. <br/> <br/>
         Nadine Nuguid <br/>
         aka nudon :]`;

        //inject the html 
        confirmText.innerHTML = personalizedMessage;
        // pop up a box 
        confirmBox.style.display = "block";
        
        //freeze scrolling
        document.body.classList.add("freeze-scrolling");
    }
});

closeBTN.addEventListener("click", function(event){
    closeBTN.style.cursor = "pointer";
    confirmBox.style.display = "none";
});

// Task When user clocks on the navigation links (pages) show the correct page
// about, work, contact, about, work, contact

navLinks.forEach (function (thisLink) {
    thisLink.addEventListener("click", function(){

        // about.classList.remove("slideOut");
        // work.classList.remove("slideIn");
        // contact.classList.remove("slideIn");
        
        about.style.display = "block";
        contact.style.display = "block";
        work.style.display = "flex";
    
        if (thisLink === navLinks[0] || thisLink === navLinks[3]) {
            // if user clicks on about show ..... ABOUT PAGE
            // IF THE LINK IS 0 OR 3
            about.style.display = "block";
            setTimeout(function(){about.classList.add("slideOut");}, 100)
            
            
            contact.classList.remove("slideIn");
            work.classList.remove("slideIn");

            setTimeout( function(){
                work.style.display = "none";
                contact.style.display = "none";
            }, 800)

        } else if (thisLink === navLinks[1] || thisLink === navLinks[4]) {
            // ... WORK PAGE
            // IF THE LINK IS 1 OR 4
            work.style.display = "flex";
            setTimeout(function(){work.classList.add("slideIn");}, 100)
            

            about.classList.remove("slideOut");
            contact.classList.remove("slideIn");

            setTimeout( function(){
                about.style.display = "none";
                contact.style.display = "none";
            }, 800)

        } else {
            // ... CONTACT PAGE
            // IF THIS LINK IS 2 OR 5
            contact.style.display = "block";
            setTimeout(function(){contact.classList.add("slideIn");}, 100)
            

            setTimeout( function(){
                about.style.display = "none";
                work.style.display = "none";
            }, 800)
        };

    });
});

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".navigation").forEach(n => n.
    addEventListener("click", () => {
        burger.classList.remove("active");
        navMenu.classList.remove("active");
    }
));

// Photos

photoframes.forEach( thisFrame => thisFrame.addEventListener("mouseover", function(){
    let image = thisFrame.firstElementChild;
    image.classList.add("scale");
    
    image.nextElementSibling.classList.add("active");

    image.nextElementSibling.nextElementSibling.classList.add("active");
}))

photoframes.forEach( thisFrame => thisFrame.addEventListener("mouseout", function(){
    let image = thisFrame.firstElementChild;
    image.classList.remove("scale");
    
    image.nextElementSibling.classList.remove("active");

    image.nextElementSibling.nextElementSibling.classList.remove("active");
}))
