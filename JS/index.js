$(document).ready(function() {
    var i = 1; 
    $("#btn2").click(function() {
        $("#myModal").modal();
    });


    function KiemTraTen(){
        var i = 1;
        let mauKT = /([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/;
        if ($("#Name").val()== ""){
            $("#tbName").html("Không để trống");
            return false
        }
        if (!mauKT.test($("#Name").val())){
            $("tbName").html("Mỗi kí tự đầu viết hoa không sử dụng số");
            return true;
        }
        $("#tbName").html("*");
        return true;
    }
    $("#Name").blur(KiemTraTen);

    function KiemTraSoAo() {
        var mauKT = /^\d*$/;
        if ($("Ao").val()==""){
            $("tbAo").html("Không để trống");
            return false;
        }   
        if (!mauKT.test($("#Ao").val())) {
            $("#tbAo").html("Dùng số từ 1 đến 20");
            return true;
        } else{
            var soAo = $("#Ao").val();
            if (soAo < 1 || soAo > 20){
                $("#tbAo").html("Từ 1 đến 20");
            } else{
                $("#tbAo").html("*");
                return true;    
            }
        }
    }
    $("#Ao").blur(KiemTraSoAo)

    function KiemTraCauLacBo() {
        var mauKT = /^[A-Z0-9][a-z0-9]*(\s[A-Z0-9][a-z0-9]*)*$/;
        if($("#CLB").val()=="") {
            $("#tbCLB").html("Không được để trống");
            return false;
        }
        if(!mauKT.test($("#CLB").val())) {
            $("tbCLB").html("Mỗi kí tự đầu viết hoa không sử dụng số");
            return true;
        }
        $("#tbCLB").html("*")
        return true;
    }
    $("#CLB").blur(KiemTraCauLacBo);

    function KiemTraNTT() {
        if ($("#NTT").val()==""){
            $("#tbNTT").html("Không được để trống");
            return false;
        }
        var today = new Date();
        var ntt = new Date($("#NTT").val());
        today = todat.setDate(today.getDate()+30);
        if(today>ntt) {
            $("#tbNTT").html("Phải sau ngày hiện tại 1 thang");
            return false;
        }
        $("#tbNTT").html("*");
        return true;
    }
    $("#NTT").blur(KiemTraNTT);

    function KiemTraSDT(){
        var mauKT = /^0\d{3}-\d{3}-\d{3}$/
        if($("#SDT").val() == ""){
            $("#tbSDT").html("Không được để trống");
            return false;
        }
        if(!mauKT.test($("#SDT").val())) {
            $("#tbSDT").html("Theo dạng 0xxx-xxx-xxx trong đó x là số");
            return true;
        }
        $("#tbSDT").html("*");
        return true;
    }
    $("#SDT").blur(KiemTraSDT);

    $("#Save").click(function(){
        if(KiemTraTen() == true && KiemTraSoAo() == true && KiemTraNTT() == true && KiemTraSDT() == true && KiemTraDiaChi() == true) {
            row = "<tr>";
            row += "<th>" + (i++) + "</th>";
            row += "<th>" + $("Name").val() + "</th>"
            row += "<th>" + $("Ao").val() + "</th>"
            row += "<th>" + $("DC").val() + "</th>"
            row += "<th>" + $("NTT").val() + "</th>"
            row += "<th>" + $("SDT").val() + "</th>"
            row += "<th>" + $("ADD").val() + "</th>"
            $("#danhSach").append(row);
            $("#myModal").modal("hide");
        }
    })
})