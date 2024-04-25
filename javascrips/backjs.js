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
     

     const curtomername = document.getElementById("curtomer")
     const productname = document.getElementById("product-name");
     const quantity = document.getElementById("quantity");
     const age = document.getElementById("age");
     const price = document.getElementById("price");
     const gender = document.getElementById("gender");
     const submit = document.getElementById("submit");  // Assuming the button has an id="submit"
     
     submit.addEventListener("click", async () => {
         if (productname.value && quantity.value && age.value && price.value && curtomername.value) {
             function alertshow() {
                 Swal.fire({
                     position: "top",
                     icon: "success",
                     title: "Thêm thông tin thành công",
                     showConfirmButton: false,
                     timer: 2500
                 });
             }
     
             const data = {
                     curtomername:curtomername.value,
                     productname: productname.value,
                     quantity: quantity.value,
                     price: price.value,
                     age: age.value,
                     gender:gender.value
             };
     
             await postData(data);  // Call postData and await its completion before showing the alert
             alertshow();  // Show success alert after data is posted
         } else {
             alert("Chưa đủ thông tin.");
         }
     });
     
     async function postData(data) {
         const formData = new FormData();
         formData.append("entry.940897630", data.curtomername);
         formData.append("entry.1057344757", data.productname);
         formData.append("entry.555358468", data.quantity);
         formData.append("entry.950744414", data.price);  // Assuming you have the correct entry number for the price field
         formData.append("entry.1829443234", data.age);
         formData.append("entry.345603231", data.gender);
     
         try {
             await fetch("https://docs.google.com/forms/d/e/1FAIpQLScu1uRJPiVcJqZepagGEsYnUeLnFnC3zW8wIxpgzidNTo-zmA/formResponse", {
                 method: "POST",
                 body: formData,
                 mode: "no-cors"
             });
         } catch (error) {
             console.error('Error posting data: ', error);
         }
     }
     