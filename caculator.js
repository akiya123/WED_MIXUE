document.addEventListener("submit", function(e) {

    e.preventDefault();
    //Lấy dữ liệu
        //Bán
            var tS = parseInt(document.getElementById("tS").value) || 0;
            var tHQ = parseInt(document.getElementById("tHQ").value) || 0;
            var kem = parseInt(document.getElementById("kem").value) || 0;
            var oC = parseInt(document.getElementById("oC").value) || 0;
            var dC = parseInt(document.getElementById("dC").value) || 0;
            var cafe = parseInt(document.getElementById("cafe").value) || 0;
            var bV = parseInt(document.getElementById("bV").value) || 0;
            var sL = parseInt(document.getElementById("sL").value) || 0;

        //Hôm qua
            var  tOC1 = parseInt(document.getElementById("tOC1").value) || 0;
            var  dOC1 = parseInt(document.getElementById("dOC1").value) || 0;
            var  cOC1 = parseInt(document.getElementById("cOC1").value) || 0;

            var  t7001 = parseInt(document.getElementById("t7001").value) || 0;
            var  d7001 = parseInt(document.getElementById("d7001").value) || 0;
            var  c7001 = parseInt(document.getElementById("c7001").value) || 0;

            var  t5001 = parseInt(document.getElementById("t5001").value) || 0;
            var  d5001 = parseInt(document.getElementById("d5001").value) || 0;
            var  c5001 = parseInt(document.getElementById("c5001").value) || 0;

            var  t4001 = parseInt(document.getElementById("t4001").value) || 0;
            var  d4001 = parseInt(document.getElementById("d4001").value) || 0;
            var  c4001 = parseInt(document.getElementById("c4001").value) || 0;

        //Hôm nay
            var  tOC2 = parseInt(document.getElementById("tOC2").value) || 0;
            var  dOC2 = parseInt(document.getElementById("dOC2").value) || 0;
            var  cOC2 = parseInt(document.getElementById("cOC2").value) || 0;

            var  t7002 = parseInt(document.getElementById("t7002").value) || 0;
            var  d7002 = parseInt(document.getElementById("d7002").value) || 0;
            var  c7002 = parseInt(document.getElementById("c7002").value) || 0;

            var  t5002 = parseInt(document.getElementById("t5002").value) || 0;
            var  d5002 = parseInt(document.getElementById("d5002").value) || 0;
            var  c5002 = parseInt(document.getElementById("c5002").value) || 0;

            var  t4002 = parseInt(document.getElementById("t4002").value) || 0;
            var  d4002 = parseInt(document.getElementById("d4002").value) || 0;
            var  c4002 = parseInt(document.getElementById("c4002").value) || 0;


    //Tính
        //bán
            var b500 = tS - bV - sL + cafe + dC;
            var b700 = tHQ - dC + bV + sL;
            var b400 = kem - oC;
        //dùng
            var d500 = (t5001 - t5002) * 20 * 50 + (d5001 - d5002) * 50 + c5001 - c5002 ;
            var d700 = (t7001 - t7002) * 20 * 50 + (d7001 - d7002) * 50 + c7001 - c4002 ;
            var d400 = (t4001 - t4002) * 20 * 50 + (d4001 - d4002) * 50 + c4001 - c7002 ;
            var dOC = (tOC1 - tOC2) * 16 * 25 + (dOC1 - dOC2) * 25 + cOC1 - cOC2;

    //Âm dương
    document.getElementById("sLOC").value = dOC;
    document.getElementById("bOC").value = oC;
    document.getElementById("lOC").value = oC - dOC;

    document.getElementById("s500").value = d500;
    document.getElementById("b500").value = b500;
    document.getElementById("l500").value = b500 - d500;

    document.getElementById("sL700").value = d700;
    document.getElementById("b700").value = b700;
    document.getElementById("l700").value = b700 - d700;

    document.getElementById("s400").value = d400;
    document.getElementById("b400").value = b400;
    document.getElementById("l400").value = b400 - d400;
});
    