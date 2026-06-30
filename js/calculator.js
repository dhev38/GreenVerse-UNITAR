function calculatePlastic() {

    // Get the user's input
    const cups = document.getElementById("cups").value;

    // Result element
    const result = document.getElementById("result");

    // Validate input
    if (cups === "" || cups < 0) {
        result.innerHTML = "⚠️ Sila masukkan bilangan yang sah.";
        return;
    }

    // Calculate yearly usage
    const yearly = parseInt(cups) * 365;

    // Display result
    result.innerHTML = `
        🌍 Anda menggunakan <strong>${yearly}</strong> cawan plastik setahun.
        <br><br>
        Dengan mengurangkan hanya <strong>1 cawan sehari</strong>,
        anda boleh menjimatkan <strong>365 cawan plastik</strong> setiap tahun!
    `;
}
