function formatCurrency(input) {
       // Xóa bỏ các dấu chấm nếu có để tránh rối dữ liệu
       let value = input.value.replace(/[.]/g, '');
       
       // Tạo một mảng từ chuỗi số, đảo ngược mảng đó để dễ dàng thêm dấu chấm
       let reversedValue = value.split('').reverse().join('');
       
       // Thêm dấu chấm sau mỗi 3 ký tự
       let formattedValue = reversedValue.replace(/(\d{3})(?=\d)/g, '$1.');
       
       // Đảo ngược lại chuỗi để trở về dạng ban đầu và cập nhật giá trị của input
       input.value = formattedValue.split('').reverse().join('');
     }
     
function alertshow(){
       Swal.fire({
              position: "top",
              icon: "success",
              title: "Thêm thông tin thành công",
              showConfirmButton: false,
              timer: 2500
            });
}

// const productname = document.getElementById("product-name");
// const quantity = document.getElementById("quantity");
// const age = document.getElementById("age");
// const price = document.getElementById("price");

// submit.addEventListener("click",() =>{
// if (productname.value && quantity.value && age.value && price.value){
//        const data = {
//               productname: productname.value,
//               age:age.value,
//               quantity: quantity.value,
//               price: price.value
//        };
//        postData(data);
// }else{
//        alert("Chưa đủ thông tin.")
// }
// async function postData(data){
//        const formData = new FormData();
//        formData.append("entry.1849378674",data.name);
//        formData.append("entry.1103898366",data.email);
//        formData.append("entry.1089764332",data.password);
//        formData.append("entry.1089764332",data.password);
//        fetch("https://docs.google.com/forms/d/e/1FAIpQLScUy230l4WcOJlC5Zkgge1UYYX7bP9RgBboCxyZ-hJtdWQPow/formResponse",{
//               method: "POST",
//               body: formData,
//               mode:"no-cors"
//        })
// }
// });


