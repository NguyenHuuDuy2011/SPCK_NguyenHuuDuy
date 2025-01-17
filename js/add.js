function add() {
    const form_add = document.getElementById("form-add");

    // Lấy các giá trị từ form
    const title = document.getElementById("title").textContent;
    const price = parseInt(document.getElementById("price").textContent) || 0;
    const quantity = parseInt(document.getElementById("quantity").value);

    // Kiểm tra số lượng hợp lệ
    if (!quantity) {
        alert("Vui lòng chọn số lượng sản phẩm!");
        return;
    }

    // Tạo đối tượng sản phẩm
    const item = {
        title: title,
        price: price,
        quantity: quantity,
        img_path: document.getElementById("img_product").src, // Đường dẫn ảnh
        des: document.getElementById("des").textContent, // Mô tả sản phẩm
    };

    // Lấy danh sách sản phẩm từ localStorage
    let productList = JSON.parse(localStorage.getItem("products")) || [];

    // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng hay chưa
    const existingProductIndex = productList.findIndex(
        (product) => product.title === item.title
    );

    if (existingProductIndex !== -1) {
        // Nếu sản phẩm đã tồn tại, cập nhật số lượng
        productList[existingProductIndex].quantity += item.quantity;
    } else {
        // Nếu sản phẩm chưa tồn tại, thêm mới
        productList.push(item);
    }

    // Cập nhật lại localStorage
    localStorage.setItem("products", JSON.stringify(productList));

    alert("Thêm vào giỏ hàng thành công!");
    window.location.href = "../html/cart.html"; // Chuyển hướng đến trang giỏ hàng
}

