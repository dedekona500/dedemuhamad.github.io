document.getElementById("dataForm").addEventListener("submit", function(e){
    e.preventDefault();

    let nama = nama.value.trim();
    let email = email.value.trim();
    let hp = hp.value.trim();
    let kelas = kelas.value.trim();

    if(nama === "" || email === "" || hp === "" || kelas === ""){
        formMessage.style.color = "red";
        formMessage.innerHTML = "Semua field wajib diisi!";
        return;
    }

    formMessage.style.color = "green";
    formMessage.innerHTML = "Form berhasil dikirim!";
});
// === DARK MODE ===
function toggleDarkMode() {
    document.body.classList.toggle("dark");
    localStorage.setItem("darkMode", document.body.classList.contains("dark"));
}

// Saat halaman dibuka ulang, cek localStorage
window.onload = function(){
    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark");
    }
};
