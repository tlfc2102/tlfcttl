const faqHeaders = document.querySelectorAll(".faq-container .faq-header");
faqHeaders.forEach((header, i) => {
    header.addEventListener("click", () => {
        header.nextElementSibling.classList.toggle("active");

        const open = header.querySelector(".open");
        const close = header.querySelector(".close");

        if (header.nextElementSibling.classList.contains
            ("active")){
                open.classList.remove("active");
                close.classList.add("active");
            }else{
                open.classList.add("active");
                close.classList.remove("active");
            }
    });
});

// live chat
// chat.js
class InteractiveChatbox {
    constructor(a, b, c) {
        this.args = {
            button: a,
            chatbox: b
        }
        this.icons = c;
        this.state = false; 
    }

    display() {
        const {button, chatbox} = this.args;
        
        button.addEventListener('click', () => this.toggleState(chatbox))
    }

    toggleState(chatbox) {
        this.state = !this.state;
        this.showOrHideChatBox(chatbox, this.args.button);
    }

    showOrHideChatBox(chatbox, button) {
        if(this.state) {
            chatbox.classList.add('chatbox--active')
            this.toggleIcon(true, button);
        } else if (!this.state) {
            chatbox.classList.remove('chatbox--active')
            this.toggleIcon(false, button);
        }
    }

    toggleIcon(state, button) {
        const { isClicked, isNotClicked } = this.icons;
        let b = button.children[0].innerHTML;

        if(state) {
            button.children[0].innerHTML = isClicked; 
        } else if(!state) {
            button.children[0].innerHTML = isNotClicked;
        }
    }
    
    
}
// app.js
//Icon
const chatButton = document.querySelector('.chatbox__button');
const chatContent = document.querySelector('.chatbox__support');
const icons = {
    // Icon If click will be change the image.
    isClicked: '<img src="images/faq/chaticon2.png" width="80px" height="80px" style="border-radius: 50%;">',
    //Default Icon
    isNotClicked: '<img src="images/faq/chaticon1.png" width="80px" height="80px"  style="border-radius: 50%;">',
}
const chatbox = new InteractiveChatbox(chatButton, chatContent, icons);
chatbox.display();
chatbox.toggleIcon(false, chatButton);

//Button

function button_1(){
    document.getElementById("Answer").innerHTML = "You can call us at ----- 011-55512188";
}

function button_2(){
    document.getElementById("Answer").innerHTML = "We are near Taruc Penang.";
}

function button_3(){
    document.getElementById("Answer").innerHTML = "You contact us via contact us website to further payment.  ";
}

function button_4(){
    document.getElementById("Answer").innerHTML = "We had served over than 1 million guest with high rating.";
}

function button_5(){
    document.getElementById("Answer").innerHTML = "Christmas have a great promotion.";
}


