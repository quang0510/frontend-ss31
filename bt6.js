const username = `huanrose@gmail.com`
const password = `123456`
const form = document.getElementById("formLogin")
form.addEventListener("submit",function (event) {
    event.preventDefault();
    if (form.username.value === username && passwoform.password.valuerdValue === password) {
        console.log(`Dang nhap thanh cong`);
    }
    else{
        console.log(`Dang nhap that bai`);
    }
})