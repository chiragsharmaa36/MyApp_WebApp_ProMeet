socket.on('user-disconnected', (userId, user) => {
    var x = document.querySelector('.participants');
    x.innerHTML = '';
    var element = document.getElementById(`${user}`);
  // element.parentNode.removeChild(element);
  element.remove();
  
    const index = students.indexOf(user);
    students.splice(index, 1);
    for (var i = 0; i < students.length; i++) {
      // $(".participants").append(`<li class="messages"><b>${students[i]}</b><br/></li>`)
      $('.participants').append(
        `<li class="participant_list"><b>${students[i]}</b><br></li>`
      );
    }
    if (peers[userId]) peers[userId].close();
    var current = new Date();
    var date = current.toLocaleDateString();
    var time = current.toLocaleTimeString();
    var participant_stored = `LEAVE: ${user} : Date: ${date}, Time: ${time} `;
    timingofcomingleavinglist.push(participant_stored);
  });