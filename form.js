document.querySelector('.tampilkanBtn').onclick = function() {
    var nama = document.getElementById('nama').value || "-";
    var kelas = document.getElementById('kelas').value || "-"; 

    var gender = document.querySelector('input[name="gender"]:checked')?.value || "-";
    var jadwal = document.querySelector('input[name="jadwal"]:checked')?.value || "-";

    var ekskul = [];
    document.getElementsByName('ekskul').forEach(cb => {
        if(cb.checked) ekskul.push(cb.value);
    });

    document.querySelector('.hasil').innerText = 
        "Nama Lengkap: " + nama + 
        "\nKelas: " + kelas + 
        "\nJenis Kelamin: " + gender + 
        "\nEkstrakurikuler yang diminati: " + (ekskul.join(", ") || "-") + 
        "\nPilih jadwal belajar: " + jadwal;
};

document.querySelector('.resetBtn').onclick = function() {
 
    document.getElementById('nama').value = "";
    document.getElementById('kelas').value = "";

    var inputs = document.querySelectorAll('input[type="radio"], input[type="checkbox"]');
    inputs.forEach(input => input.checked = false);

    document.querySelector('.hasil').innerText = "Data akan muncul di sini...";
};