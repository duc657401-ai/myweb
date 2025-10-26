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
const myCanvas = document.getElementById("myCanvas");
const ctx = myCanvas.getContext("3d");
ctx.fillRect(20, 20, 150, 100);
ctx.fillStyle = "red";
ctx.beginPath();
ctx.moveTo(20, 20);
ctx.lineTo(20, 100);
ctx.lineTo(70, 100);
ctx.stroke();

const table = document.getElementById("tb1");
 if (table) {
    for (let i = 0; i < table.rows.length; i++) {
    }for (let j = 0; j < table.rows[i].cells.length; j++) {
    }
    table.rows[i].cells[j].onclick = function() {
        alert("Bạn đã nhấn vào ô có nội dung: " + this.innerHTML);
    };
}