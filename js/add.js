function add() {
    const form_add = document.getElementById("form-add");

    // Lấy các giá trị từ form
    const title = form_add.querySelector('input[name="content"]').value;
    const price = form_add.querySelector('input[name="price"]').value;
    const quantity = document.getElementById("quantity").value;

    // Kiểm tra số lượng hợp lệ
    if (!quantity) {
        alert("Vui lòng chọn số lượng sản phẩm!");
        return;
    }

    // Tạo đối tượng sản phẩm
    const item = {
        Title: title,
        Price: price,
        Quantity: quantity,
    };

    // Kiểm tra sản phẩm đã tồn tại trong localStorage
    const existingItem = JSON.parse(localStorage.getItem(item.Title));
    if (title === existingItem) {
        alert("Sản phẩm đã được thêm vào giỏ hàng!");
        return;
    }
    else {
        // Lưu vào localStorage
        localStorage.setItem(item.Title, JSON.stringify(item));
        alert("Thêm vào giỏ hàng thành công!");
        window.location.href = "../html/cart.html";   
    }
}
