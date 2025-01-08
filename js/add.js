function add() {
    const form_add = document.getElementById("form-add");

    form_add.removeEventListener("submit", handleAdd);

    // Thêm sự kiện mới
    form_add.addEventListener("submit", handleAdd);
}

function handleAdd(event) {
    event.preventDefault();

    const form_add = event.target;
    const item = {
        Title: form_add.content.value,
        Price: form_add.price.value
    }
        const existingItem = JSON.parse(localStorage.getItem(item.Title));

    // Kiểm tra xem sản phẩm đã thêm từ trước hay chưa
    if (existingUser) {
        alert("Sản phẩm đã được thêm vào giỏ hàng!");
        return;
    }
    localStorage.setItem(item.Title, JSON.stringify(item));
    alert("Thêm vào giỏ hàng thành công!");
    window.location.href = "../html/cart.html";
}