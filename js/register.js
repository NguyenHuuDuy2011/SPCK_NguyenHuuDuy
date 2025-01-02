function register() {
    const form_register = document.getElementById("form-register");

    // Xóa bất kỳ sự kiện nào đã được thêm trước đó
    form_register.removeEventListener("submit", handleRegister);

    // Thêm sự kiện mới
    form_register.addEventListener("submit", handleRegister);
}

function handleRegister(event) {
    event.preventDefault();

    const form_register = event.target; // Lấy form hiện tại
    let newUser = {
        Username: form_register.username.value.trim(),
        Password: form_register.password.value
    };

    const existingUser = JSON.parse(localStorage.getItem(newUser.Username));

    // Kiểm tra xem username đã tồn tại hay chưa
    if (existingUser) {
        alert("Username already exists!");
        return;
    }

    // Kiểm tra độ dài mật khẩu
    if (newUser.Password.length < 8) {
        alert("Mật khẩu không hợp lệ, vui lòng kiểm tra lại!\nLỖI: MẬT KHẨU ÍT HƠN 8 KÍ TỰ");
        return;
    }
    
    let password = form_register.password.value;
    // Kiểm tra khoảng trắng ở đầu/cuối
    if (password !== password.trim()) {
        alert("Mật khẩu không được chứa khoảng trắng ở đầu hoặc cuối!");
        return;
    }


// Kiểm tra khoảng trắng ở đầu/cuối
if (password !== password.trim()) {
    alert("Mật khẩu không được chứa khoảng trắng ở đầu hoặc cuối!");
    return;
}


    // Kiểm tra mật khẩu nhập lại
    const rePassword = form_register.repassword.value;
    if (rePassword !== newUser.Password) {
        alert("Mật khẩu nhập lại không khớp! Vui lòng kiểm tra lại!");
        return;
    }

    // Lưu thông tin người dùng vào localStorage
    localStorage.setItem(newUser.Username, JSON.stringify(newUser));
    alert("Register Successful!");
    window.location.href = "../index.html";
}
