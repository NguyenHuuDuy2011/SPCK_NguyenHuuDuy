function login() {
    const form_login = document.getElementById("form-login");

    // Kiểm tra và xóa bất kỳ event listener nào đã được thêm trước đó
    form_login.removeEventListener("submit", handleSubmit);

    // Thêm event listener mới
    form_login.addEventListener("submit", handleSubmit);
}

function handleSubmit(event) {
    event.preventDefault();

    const form_login = event.target; // Lấy form hiện tại
    let user = {
        Username: form_login.username.value,
        Password: form_login.password.value
    };
    const get_user = JSON.parse(localStorage.getItem(form_login.username.value));
    
    if (get_user) {
        if (get_user.Username === user.Username && get_user.Password === user.Password) {
            alert("Đăng nhập thành công!");
            window.location.href = "../index.html";
            return;
        } 
        if (get_user.Password !== user.Password) {
            alert("Sai thông tin: Mật Khẩu bị sai");
            return;
        }
    } else {
        alert("Sai thông tin: Tên Đăng Nhập bị sai hoặc không tồn tại");
        return;
    }
}
