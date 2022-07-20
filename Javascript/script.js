//Search Functionality Script
function searchfunction(){
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("friends-ul");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("div")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
        } else {
        li[i].style.display = "none";
        }
    }
}

//chat fuctionality

function checkboxfunction(){
    var checkbox = document.getElementById('chat-person')
    if (checkbox.checked != true)
    {
        alert("You are now set to be Receiver");
        
    }
}

//Array for storing message
let messArray = [];

function send(){
    let message = document.getElementById('chat-message').value;
   
    if(message == ""){
        alert("Please Type message first!!");
    }
    else{
        var checkbox = document.getElementById('chat-person')
        if(checkbox.checked != true){
            messArray.push({
                message: message,
                receiver : true
            });
            console.log("Receiver:" + " " + message);
            console.log(messArray);
        }
        else{
            messArray.push({
                message : message,
                receiver : false
            });
            console.log("Sender:" + " " + message);
            console.log(messArray);
        }
}
let fetch = ''
let dynamic = document.getElementById('display-message');
messArray.forEach(item =>{
 
    if(item.receiver != true){  
        console.log(item.message);
        fetch =  fetch + "<p class = 'send-message'>"  +item.message+"</p>";
    }
    else{
        fetch =  fetch + "<p class = 'receive-message'>"  +item.message+"</p>";
    }
   
});
dynamic.innerHTML = fetch;
document.getElementById('chat-message').value=''

    
}

