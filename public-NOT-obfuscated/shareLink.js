function share() {
    var x = document.getElementById('shareLink').style.display;
    if (x == 'none')
        document.getElementById('shareLink').style.display = 'block';
    else
        document.getElementById('shareLink').style.display = 'none';
}

function copyLink() {
    navigator.clipboard.writeText(window.location.href);
}

function waLink() {
    var url = window.location.href;
    let x = 'JOIN THE NEXT GEN MEETING USING LINK%0a'; //%0a is used to insert new line in whatsapp message
    x = x + `${url}`;
    window.open(`https://api.whatsapp.com/send?text=${x}`);
}
function mailLink() {
    var url = window.location.href;
    let x = 'JOIN THE NEXT GEN MEETING USING LINK%0a'; //%0a is used to insert new line in whatsapp message
    x = x + `${url}`;

    let url2 =
        'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=&su="PROMEET MEETING LINK"&body=' +
        x +
        '&ui=2&tf=1&pli=1';

    window.open(url2);
}

function mailLinkd() {
    var url = window.location.href;
    let x = 'JOIN THE NEXT GEN MEETING USING LINK%0a'; //%0a is used to insert new line in whatsapp message
    x = x + `${url}`;
    window.open(`mailto:?subject="PROMEET MEETING LINK"&amp;body=${x}`);
}

function teleLink() {
    var url = window.location.href;
    let x = 'JOIN THE NEXT GEN MEETING USING LINK%0a'; //%0a is used to insert new line in whatsapp message
    x = x + `${url}`;
    // window.open(`https://api.whatsapp.com/send?text=${x}`);
    window.open(
        `https://t.me/share/url?url="https://gate.appliedroots.com/"&text=${x}`
    );
}