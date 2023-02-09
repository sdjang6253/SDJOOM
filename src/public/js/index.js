const userName = document.getElementById('userName');
const nickname = document.getElementById('nickname');
const password = document.getElementById('password');
const enterBtn = document.getElementById('enterBtn');

userName.addEventListener('blur' , e => {
    if(userName.value.trim() === ''){
        document.getElementById('userNameReq').hidden = false;
    }
})

userName.addEventListener('focus' , e => {
    document.getElementById('userNameReq').hidden = true;
})

nickname.addEventListener('blur' , e => {
    if(nickname.value.trim() === ''){
        document.getElementById('nicknameReq').hidden = false;
    }
})

nickname.addEventListener('focus' , e => {
    document.getElementById('nicknameReq').hidden = true;
})

password.addEventListener('blur' , e => {
    if(password.value.trim() === ''){
        document.getElementById('passwordReq').hidden = false;
    }
})

password.addEventListener('focus' , e => {
    document.getElementById('passwordReq').hidden = true;
})

enterBtn.addEventListener('click' , (e) => {
    e.preventDefault();
    
} )