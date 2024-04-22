function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var result   = document.getElementById("result")

    // Memeriksa apakah username dan password telah diisi
    if (username === "" || password === "") {
        result.innerText = ('Username dan Password harus diisi');
        return false;
    } else {
        // Menggunakan contoh kondisi sederhana untuk memvalidasi login
        if (username === "raka maulana" && password === "alhamdulillah") {
            result.innerText = ("Login berhasil!")
            window.location.href = "home/index.html";
            return true;
        } else {
            result.innerText = ('Username atau Password salah. Silakan coba lagi.');
            return false;
        }
    }
}
