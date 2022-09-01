const scrollToBottom = () => {
    let d = $('.main__chat_window');
    d.scrollTop(d.prop('scrollHeight'));
};

function hideChat() {
    var x = document.querySelector('.main__right').style.display;

    if (x == 'none') {
        document.querySelector('.main__right').style.display = 'flex';
        document.querySelector('.main__left').style.flex = 0.8;
        document.querySelector(".Chat_Button").style.color = "#1597BB";//Highlight

        // document.getElementById("parti").style.display="none";
        // document.querySelector(".main__right__participants").style.display="none";
    } else {
        document.querySelector('.main__right').style.display = 'none';
        document.querySelector('.main__left').style.flex = 1;
        document.querySelector(".Chat_Button").style.color = "white";//Highlight
    }
}


let text = document.getElementById('chat_message').value;
$('html').keydown(function (e) {
    if (e.which == 13) {
        let text = document.getElementById('chat_message').value;
        console.log('i send');
        if (text.length != 0) {
            socket.emit('message', text, userName);
            document.getElementById('chat_message').value = '';
        }
    }
});

socket.on('createMessage', (message, user) => {
    // console.log("message received "+message);
    // if(document.querySelector(".main__chat_window").style.display=="none")
    var message_stored = `${user} : ${message}`;
    chats.push(message_stored);
    toast(message, user);
    console.log('105:js message received ' + message);
    $('.messages').append(
        `<li class="messages_list"><b>${user}</b><br/>${message}</li>`
    );
    console.log('107:js message received ' + message);
    scrollToBottom();
});