document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');

    searchInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Ngăn chặn hành động mặc định của phím Enter
            const query = searchInput.value.toLowerCase();
            console.log('Search query:', query);

            // Thực hiện logic tìm kiếm ở đây
            const products = document.querySelectorAll('.product-item'); // Giả sử các sản phẩm có class 'product-item'
            products.forEach(product => {
                const title = product.querySelector('.product-title').textContent.toLowerCase();
                if (title.includes(query)) {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
            });
        }
    });
});