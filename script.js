// Data menu dengan foto
const menuData = [
    {
        id: 1,
        name: "Es Teh Manis",
        price: 3000,
        category: "Minuman",
        status: "tersedia",
        image: "https://images.unsplash.com/photo-1561047029-3000c68339ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 2,
        name: "Nasi Putih Biasa",
        price: 4000,
        category: "Makanan",
        status: "tersedia",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 3,
        name: "Es Kopyor",
        price: 8000,
        category: "Minuman",
        status: "tersedia",
        image: "https://images.unsplash.com/photo-1561047029-3000c68339ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 4,
        name: "Smoothie Mangga",
        price: 12000,
        category: "Minuman",
        status: "tersedia",
        image: "https://images.unsplash.com/photo-1577805947697-89e18249d767?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 5,
        name: "Strawberry Ice Tea",
        price: 10000,
        category: "Minuman",
        status: "tersedia",
        image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 6,
        name: "Rainbow Juice",
        price: 15000,
        category: "Minuman",
        status: "tersedia",
        image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 7,
        name: "Kopi Latte",
        price: 18000,
        category: "Minuman",
        status: "tersedia",
        image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 8,
        name: "Mie Goreng Special",
        price: 25000,
        category: "Makanan",
        status: "tersedia",
        image: "https://images.unsplash.com/photo-1557872943-16a5ac26437e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 9,
        name: "Ayam Goreng Kremes",
        price: 22000,
        category: "Makanan",
        status: "tersedia",
        image: "https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 10,
        name: "Nasi Campur",
        price: 20000,
        category: "Makanan",
        status: "tersedia",
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
    }
];

// State aplikasi
let currentUser = null;
let cart = [];
let filteredMenu = [...menuData];

// DOM Elements
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const mainApp = document.getElementById('mainApp');
const loginFormElement = document.getElementById('loginFormElement');
const registerFormElement = document.getElementById('registerFormElement');
const showRegisterLink = document.getElementById('showRegister');
const showLoginLink = document.getElementById('showLogin');
const logoutBtn = document.getElementById('logoutBtn');
const currentUserElement = document.getElementById('currentUser');
const searchInput = document.getElementById('searchInput');
const customerNameInput = document.getElementById('customerName');
const menuItemsContainer = document.getElementById('menuItems');
const cartItemsContainer = document.getElementById('cartItems');
const subtotalElement = document.getElementById('subtotal');
const taxElement = document.getElementById('tax');
const totalElement = document.getElementById('total');
const clearCartBtn = document.getElementById('clearCartBtn');
const checkoutBtn = document.getElementById('checkoutBtn');
const paymentModal = document.getElementById('paymentModal');
const closeModalBtn = document.querySelector('.close-modal');
const paymentCustomerName = document.getElementById('paymentCustomerName');
const paymentTotal = document.getElementById('paymentTotal');
const paymentMethod = document.getElementById('paymentMethod');
const paymentAmount = document.getElementById('paymentAmount');
const paymentChange = document.getElementById('paymentChange');
const confirmPaymentBtn = document.getElementById('confirmPaymentBtn');
const notification = document.getElementById('notification');

// Format harga ke Rupiah
function formatRupiah(amount) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(amount);
}

// Tampilkan notifikasi
function showNotification(message, type = 'success') {
    notification.textContent = message;
    notification.className = `notification ${type}`;
    notification.style.display = 'block';
    
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}

// Simpan data ke localStorage
function saveToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// Ambil data dari localStorage
function getFromLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

// Cek apakah user sudah login
function checkLoginStatus() {
    const user = getFromLocalStorage('currentUser');
    if (user) {
        currentUser = user;
        showMainApp();
    }
}

// Tampilkan form register
showRegisterLink.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.style.display = 'none';
    registerForm.style.display = 'flex';
});

// Tampilkan form login
showLoginLink.addEventListener('click', (e) => {
    e.preventDefault();
    registerForm.style.display = 'none';
    loginForm.style.display = 'flex';
});

// Proses login
loginFormElement.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    
    // Validasi sederhana
    if (username === 'admin' && password === 'admin123') {
        currentUser = { name: 'Admin', username: 'admin' };
        saveToLocalStorage('currentUser', currentUser);
        showMainApp();
        showNotification('Login berhasil!', 'success');
    } else {
        // Cek dari localStorage (untuk user yang sudah register)
        const users = getFromLocalStorage('users') || [];
        const user = users.find(u => u.username === username && u.password === password);
        
        if (user) {
            currentUser = user;
            saveToLocalStorage('currentUser', currentUser);
            showMainApp();
            showNotification('Login berhasil!', 'success');
        } else {
            showNotification('Username atau password salah!', 'error');
        }
    }
});

// Proses register
registerFormElement.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('registerName').value;
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;
    
    // Validasi
    if (password !== confirmPassword) {
        showNotification('Password tidak cocok!', 'error');
        return;
    }
    
    if (password.length < 6) {
        showNotification('Password minimal 6 karakter!', 'error');
        return;
    }
    
    // Simpan user baru
    const users = getFromLocalStorage('users') || [];
    
    // Cek apakah username sudah ada
    if (users.some(u => u.username === username)) {
        showNotification('Username sudah digunakan!', 'error');
        return;
    }
    
    const newUser = {
        name,
        username,
        password // Dalam aplikasi nyata, password harus di-hash
    };
    
    users.push(newUser);
    saveToLocalStorage('users', users);
    
    showNotification('Pendaftaran berhasil! Silakan login.', 'success');
    
    // Kembali ke form login
    registerForm.style.display = 'none';
    loginForm.style.display = 'flex';
    
    // Reset form
    registerFormElement.reset();
});

// Logout
logoutBtn.addEventListener('click', () => {
    currentUser = null;
    localStorage.removeItem('currentUser');
    loginForm.style.display = 'flex';
    registerForm.style.display = 'none';
    mainApp.style.display = 'none';
    cart = [];
    updateCart();
    showNotification('Logout berhasil!', 'success');
});

// Tampilkan aplikasi utama
function showMainApp() {
    loginForm.style.display = 'none';
    registerForm.style.display = 'none';
    mainApp.style.display = 'block';
    
    if (currentUser) {
        currentUserElement.textContent = currentUser.name;
    }
    
    renderMenuItems();
    updateCart();
}

// Render menu items dengan foto
function renderMenuItems() {
    menuItemsContainer.innerHTML = '';
    
    filteredMenu.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `
            <div class="menu-item-image">
                ${item.image ? 
                    `<img src="${item.image}" alt="${item.name}" loading="lazy">` : 
                    `<div class="image-placeholder">
                        <i class="fas fa-image"></i>
                        <span>Tidak ada foto</span>
                    </div>`
                }
            </div>
            <div class="item-header">
                <div class="item-name">${item.name}</div>
                <div class="item-price">${formatRupiah(item.price)}</div>
            </div>
            <div class="item-category">${item.category}</div>
            <div class="item-status">
                Status: <span class="status-available">${item.status}</span>
            </div>
            <div class="quantity-control">
                <button class="decrease-btn" data-id="${item.id}">-</button>
                <input type="number" min="0" value="0" class="quantity-input" data-id="${item.id}">
                <button class="increase-btn" data-id="${item.id}">+</button>
            </div>
            <button class="add-to-cart" data-id="${item.id}">Tambah ke Pesanan</button>
        `;
        
        menuItemsContainer.appendChild(menuItem);
    });
    
    // Tambahkan event listeners untuk button
    document.querySelectorAll('.decrease-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.target.dataset.id);
            const input = document.querySelector(`.quantity-input[data-id="${id}"]`);
            let value = parseInt(input.value);
            if (value > 0) {
                input.value = value - 1;
            }
        });
    });
    
    document.querySelectorAll('.increase-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.target.dataset.id);
            const input = document.querySelector(`.quantity-input[data-id="${id}"]`);
            let value = parseInt(input.value);
            input.value = value + 1;
        });
    });
    
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.target.dataset.id);
            const input = document.querySelector(`.quantity-input[data-id="${id}"]`);
            const quantity = parseInt(input.value);
            
            if (quantity > 0) {
                addToCart(id, quantity);
                input.value = 0;
            } else {
                showNotification('Masukkan jumlah terlebih dahulu!', 'warning');
            }
        });
    });
}

// Filter menu berdasarkan pencarian
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    
    if (searchTerm.trim() === '') {
        filteredMenu = [...menuData];
    } else {
        filteredMenu = menuData.filter(item => 
            item.name.toLowerCase().includes(searchTerm) || 
            item.category.toLowerCase().includes(searchTerm)
        );
    }
    
    renderMenuItems();
});

// Tambahkan item ke keranjang
function addToCart(id, quantity) {
    const menuItem = menuData.find(item => item.id === id);
    
    if (!menuItem) return;
    
    // Cek apakah item sudah ada di keranjang
    const existingItem = cart.find(item => item.id === id);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            ...menuItem,
            quantity
        });
    }
    
    updateCart();
    showNotification(`${quantity} ${menuItem.name} ditambahkan ke keranjang!`, 'success');
}

// Update tampilan keranjang
function updateCart() {
    cartItemsContainer.innerHTML = '';
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p style="text-align: center; color: var(--gray);">Keranjang kosong</p>';
    } else {
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <div class="item-price">${formatRupiah(item.price)}</div>
                </div>
                <div class="cart-item-quantity">
                    <button class="decrease-cart-btn" data-id="${item.id}">-</button>
                    <span>${item.quantity}</span>
                    <button class="increase-cart-btn" data-id="${item.id}">+</button>
                </div>
                <div class="cart-item-total">
                    ${formatRupiah(item.price * item.quantity)}
                </div>
                <button class="cart-item-remove" data-id="${item.id}">
                    <i class="fas fa-trash"></i>
                </button>
            `;
            
            cartItemsContainer.appendChild(cartItem);
        });
        
        // Tambahkan event listeners untuk button di keranjang
        document.querySelectorAll('.decrease-cart-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = parseInt(e.target.dataset.id);
                updateCartItemQuantity(id, -1);
            });
        });
        
        document.querySelectorAll('.increase-cart-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = parseInt(e.target.dataset.id);
                updateCartItemQuantity(id, 1);
            });
        });
        
        document.querySelectorAll('.cart-item-remove').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = parseInt(e.target.closest('button').dataset.id);
                removeFromCart(id);
            });
        });
    }
    
    // Hitung total
    calculateTotal();
}

// Update jumlah item di keranjang
function updateCartItemQuantity(id, change) {
    const item = cart.find(item => item.id === id);
    
    if (item) {
        item.quantity += change;
        
        if (item.quantity <= 0) {
            removeFromCart(id);
        } else {
            updateCart();
        }
    }
}

// Hapus item dari keranjang
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCart();
    showNotification('Item dihapus dari keranjang!', 'warning');
}

// Hitung total pembayaran
function calculateTotal() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.1; // Pajak 10%
    const total = subtotal + tax;
    
    subtotalElement.textContent = formatRupiah(subtotal);
    taxElement.textContent = formatRupiah(tax);
    totalElement.textContent = formatRupiah(total);
    
    return total;
}

// Hapus semua item di keranjang
clearCartBtn.addEventListener('click', () => {
    if (cart.length > 0) {
        cart = [];
        updateCart();
        showNotification('Semua item dihapus dari keranjang!', 'warning');
    }
});

// Proses checkout
checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        showNotification('Keranjang kosong! Tambahkan item terlebih dahulu.', 'warning');
        return;
    }
    
    const customerName = customerNameInput.value.trim();
    if (customerName === '') {
        showNotification('Masukkan nama pelanggan terlebih dahulu!', 'error');
        customerNameInput.focus();
        return;
    }
    
    const total = calculateTotal();
    
    paymentCustomerName.textContent = customerName;
    paymentTotal.textContent = formatRupiah(total);
    paymentAmount.value = '';
    paymentChange.textContent = formatRupiah(0);
    
    paymentModal.style.display = 'flex';
});

// Tutup modal
closeModalBtn.addEventListener('click', () => {
    paymentModal.style.display = 'none';
});

// Hitung kembalian
paymentAmount.addEventListener('input', () => {
    const total = parseFloat(paymentTotal.textContent.replace(/[^\d]/g, ''));
    const amount = parseFloat(paymentAmount.value) || 0;
    
    if (amount >= total) {
        const change = amount - total;
        paymentChange.textContent = formatRupiah(change);
    } else {
        paymentChange.textContent = formatRupiah(0);
    }
});

// Konfirmasi pembayaran
confirmPaymentBtn.addEventListener('click', () => {
    const total = parseFloat(paymentTotal.textContent.replace(/[^\d]/g, ''));
    const amount = parseFloat(paymentAmount.value) || 0;
    
    if (amount < total) {
        showNotification('Jumlah uang kurang!', 'error');
        return;
    }
    
    // Simpan transaksi ke localStorage
    const transactions = getFromLocalStorage('transactions') || [];
    const transaction = {
        id: Date.now(),
        date: new Date().toLocaleString(),
        customerName: customerNameInput.value,
        items: [...cart],
        total: total,
        paymentMethod: paymentMethod.value,
        amountPaid: amount,
        change: amount - total,
        kasir: currentUser.name
    };
    
    transactions.push(transaction);
    saveToLocalStorage('transactions', transactions);
    
    // Reset keranjang
    cart = [];
    updateCart();
    customerNameInput.value = '';
    
    // Tutup modal
    paymentModal.style.display = 'none';
    
    // Tampilkan struk
    showReceipt(transaction);
    
    showNotification('Pembayaran berhasil! Struk telah dicetak.', 'success');
});

// Tampilkan struk dengan foto mini
function showReceipt(transaction) {
    let receiptContent = `
        <div style="text-align: center; margin-bottom: 20px;">
            <h2>Restoran 3</h2>
            <p>Terima kasih telah berbelanja!</p>
        </div>
        <div style="margin-bottom: 15px;">
            <p><strong>Tanggal:</strong> ${transaction.date}</p>
            <p><strong>Pelanggan:</strong> ${transaction.customerName}</p>
            <p><strong>Kasir:</strong> ${transaction.kasir}</p>
        </div>
        <hr>
        <div style="margin-bottom: 15px;">
    `;
    
    transaction.items.forEach(item => {
        receiptContent += `
            <div style="display: flex; align-items: center; margin-bottom: 10px;">
                <div style="width: 40px; height: 40px; border-radius: 5px; overflow: hidden; margin-right: 10px; background-color: #f0f0f0;">
                    ${item.image ? `<img src="${item.image}" style="width: 100%; height: 100%; object-fit: cover;" alt="${item.name}">` : '<div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; color: #999;">-</div>'}
                </div>
                <div style="flex: 1;">
                    <div style="font-weight: 500;">${item.name} x${item.quantity}</div>
                    <div style="font-size: 14px; color: #666;">${formatRupiah(item.price * item.quantity)}</div>
                </div>
            </div>
        `;
    });
    
    receiptContent += `
        </div>
        <hr>
        <div style="margin-bottom: 15px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                <span>Subtotal:</span>
                <span>${formatRupiah(transaction.total / 1.1)}</span>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                <span>Pajak (10%):</span>
                <span>${formatRupiah(transaction.total * 0.1)}</span>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 5px; font-weight: bold;">
                <span>Total:</span>
                <span>${formatRupiah(transaction.total)}</span>
            </div>
        </div>
        <div style="margin-bottom: 15px;">
            <p><strong>Metode Pembayaran:</strong> ${transaction.paymentMethod}</p>
            <p><strong>Jumlah Bayar:</strong> ${formatRupiah(transaction.amountPaid)}</p>
            <p><strong>Kembalian:</strong> ${formatRupiah(transaction.change)}</p>
        </div>
        <hr>
        <div style="text-align: center; margin-top: 20px;">
            <p>Terima kasih atas kunjungan Anda!</p>
        </div>
    `;
    
    // Buat window baru untuk struk
    const receiptWindow = window.open('', '_blank', 'width=400,height=600');
    receiptWindow.document.write(`
        <html>
        <head>
            <title>Struk Restoran 3</title>
            <style>
                body { font-family: 'Courier New', monospace; padding: 20px; }
                hr { border: none; border-top: 1px dashed #000; margin: 15px 0; }
                img { max-width: 100%; }
            </style>
        </head>
        <body>
            ${receiptContent}
            <script>
                window.onload = function() {
                    window.print();
                };
            </script>
        </body>
        </html>
    `);
}

// Inisialisasi aplikasi
window.addEventListener('DOMContentLoaded', () => {
    checkLoginStatus();
    
    // Tutup modal jika klik di luar modal
    window.addEventListener('click', (e) => {
        if (e.target === paymentModal) {
            paymentModal.style.display = 'none';
        }
    });
});
