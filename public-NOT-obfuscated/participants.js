function put_in_partcipant_list(user) {
    // $(".participants").append(`<li class="messages"><b>${user}</b><br/></li>`)
    $('.participants').append(
        `<li class="participant_list"><b>${user}</b><br></li>`
    );
    students.push(user);
}

function showParticipantsList() {
    var x = document.querySelector('.main__right__participants').style.display;

    if (x == 'none') {
        document.querySelector('.main__right__participants').style.display = 'flex';
        document.querySelector('.main__left').style.flex = 0.8;
        document.querySelector(".Participants_Button").style.color = "#1597BB";//Highlight
    } else {
        document.querySelector('.main__right__participants').style.display = 'none';
        document.querySelector('.main__left').style.flex = 1;
        document.querySelector(".Participants_Button").style.color = "white";//Highlight
    }
}

socket.on('already_present_user', (receiver_name) => {
    if (!students.includes(receiver_name)) {
        // $(".participants").append(`<li class="messages"><b>${receiver_name}</b><br/></li>`)
        $('.participants').append(
            `<li class="participant_list"><b>${receiver_name}</b><br></li>`
        );
        students.push(receiver_name);
    }
});

