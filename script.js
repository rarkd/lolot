document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("logintot");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Dummy authentication (replace this with your actual authentication logic)
        if (username === "rarkd" && password === "rarkd") {
            // Simpan informasi login di session storage
            sessionStorage.setItem("isLoggedIn", "true");

            // Redirect ke halaman tujuan
            alert("Login berhasil!");
            window.location.href = "index.html";
            
        } else {
            alert("Username atau password salah. Silakan coba lagi.");
        }
    });
});
