function pay() {
    // Lưu dữ liệu sản phẩm vào localStorage
    const productData = {
        title: document.getElementById('input-title').value,
        price: document.getElementById('input-price').value,
        quantity: document.getElementById('quantity').value
    };
    localStorage.setItem('product', JSON.stringify(productData));

    // Chuyển hướng sang trang pay.html
    window.location.href = 'pay.html';
}

document.addEventListener("DOMContentLoaded", () => {
    const productData = JSON.parse(localStorage.getItem('product'));
    console.log('Product Data:', productData);

    if (productData) {
        const quantityInput = document.querySelector("#quantity"); // Lấy phần tử input số lượng
        console.log('Quantity Input:', quantityInput);
        let totalCartPrice = productData.price * (productData.quantity || 1);

        // Hiển thị thông tin ban đầu
        document.querySelector('#product-title').textContent = `Tên sản phẩm: ${productData.title}`;
        document.querySelector('#product-price').textContent = `Giá mỗi sản phẩm: ${productData.price}.000 VNĐ`;
        document.querySelector('#product-quantity').textContent = `Số lượng: ${productData.quantity || 1}`;
        document.querySelector('#product-totalPrice').textContent = `Tổng giá: ${totalCartPrice}.000 VNĐ`;

        // Hàm cập nhật tổng giá khi thay đổi số lượng
        const updateTotalPrice = () => {
            const quantity = parseInt(quantityInput.value) || 1; // Lấy số lượng từ input
            console.log('Quantity:', quantity);
            const totalPrice = productData.price * quantity;
            console.log('Total Price:', totalPrice);

            // Cập nhật DOM
            document.querySelector('#product-quantity').textContent = `Số lượng: ${quantity}`;
            document.querySelector('#product-totalPrice').textContent = `Tổng giá: ${totalPrice}.000 VNĐ`;
        };

        // Gắn sự kiện thay đổi số lượng
        quantityInput.addEventListener("input", updateTotalPrice);
    } else {
        alert("Không có sản phẩm nào để thanh toán.");
        window.location.href = "store.html"; // Chuyển hướng nếu không có sản phẩm
    }
});