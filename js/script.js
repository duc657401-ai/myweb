function kiemTraMucTieu() {
    let diemHienTai = 4;
    const diemCanDat = 7;
    let soLanCoGang = 0;
    console.log("Bắt đầu hành trình đạt 7 điểm:");
    while (diemHienTai < diemCanDat) {
        diemHienTai++;
        soLanCoGang++;
        console.log("Cố gắng lần " + soLanCoGang + ". Điểm hiện tại: " + diemHienTai);
    }
    alert("Logic thành công: Đã đạt " + diemCanDat + " điểm sau " + soLanCoGang + " lần cố gắng!");
}
function ltt() {
    const theLoiToTinh = document.getElementById("dieu-uoc");
    if (theLoiToTinh.style.display === "none" || theLoiToTinh.style.display === "") {
        theLoiToTinh.style.display = "block";
        document.getElementById("dieu-uoc").innerText = "Đã xem Lời Cam Kết";       
        alert("Này Lớp Phó, đã đến lúc rồi!");
    } else {
        theLoiToTinh.style.display = "none";
        document.getElementById("dieu-uoc").innerText = "Nhấn vào đây để xem Lời Cam Kết";
    }
}