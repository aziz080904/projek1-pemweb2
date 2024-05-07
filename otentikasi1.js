function validateLogin() {

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username === 'adminpuskesmas' & password === 'admin2024') {
        alert('Login berhasil');
        window.location.href = 'admin.php'; 
    } else {
        alert('Login Gagal');
    }
}