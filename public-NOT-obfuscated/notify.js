function toast(message, user) {
    if (notifyBool) {
      var x = document.getElementById('toast');
      x.className = 'show';
      document.getElementById('desc').innerText = message;
      document.getElementById('img').innerText = user;
      setTimeout(function () {
        x.className = x.className.replace('show', '');
      }, 5000);
    }
  }
  
  function notify() {
    notifyBool = !notifyBool;
    if (notifyBool) setnotify();
    else unsetnotify();
  }
  
  const setnotify = () => {
    const html = `<i class="fas fa-bell"></i>
    <span>off</span>`;
    document.querySelector('.main__noti_button').innerHTML = html;
  };
  
  const unsetnotify = () => {
    const html = `<i class="fas fa-bell-slash"></i>
    <span>On</span>`;
    document.querySelector('.main__noti_button').innerHTML = html;
  };