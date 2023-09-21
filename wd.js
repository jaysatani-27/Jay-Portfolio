const hamburger=document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu=document.querySelector('.header .nav-bar .nav-list ul');
const menu_item=document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header=document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll',()=>{
    var scroll_position=window.scrollY;
    if(scroll_position > 250){
        header.style.backgroundColor = '#29323c';
    }
    else{
        header.style.backgroundColor = 'transparent';
    }
});

menu_item.forEach((item)=>{
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});

function validation(){
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    var errorm = document.getElementById("errorm");
    var text;

    errorm.style.padding="10px";

    if(name.length <4){
        text="Please Enter More Than 4 Char";
        // let a=alert("name is more than 4 char")
        errorm.innerHTML = text;
        return false;
    }

    if(isNaN(phone) || phone.length != 10){
        text="Please Enter 10 Digit Number";
        errorm.innerHTML=text;
        return false;
    }

    if(email.indexOf("@") == -1 || email.length < 6){
        text="Please Enter Valid Email";
        errorm.innerHTML=text;
        return false;
    }

    if(subject.length <8){
        text="Please Enter Subject More Than 8 Characters";
        errorm.innerHTML=text;
        return false;
    }

    if(message.length <50){
        text="Please Enter More Than 50 Character Message";
        errorm.innerHTML=text;
        return false;
    }
    text = "Form Submitted Succesfully";
    errorm.innerHTML=text;
    return true;
}
