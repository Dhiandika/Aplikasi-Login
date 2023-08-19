	1. /* Comment : Membuat variabel untuk setiap elemen view. */
	2. const loginFormElement = document.querySelector('#loginForm');
	3. const inputEmailElement = document.querySelector('#inputEmail');
	4. const inputPasswordElement = document.querySelector('#inputPassword');
	5.  
	6. /* Comment : Membuat variabel untuk menyimpan informasi email dan password. */
	7. const expectedEmail = 'admin@dicoding.com';
	8. const expectedPassword = 'superpassword';
	9.  
	10. /* Comment :  Menambahkan aksi klik pada button. */
	11. loginFormElement.addEventListener('submit', function(event) {
	12.   event.preventDefault();
	13.   
	14.   /* Comment : Mendapatkan nilai dari masing-masing input (email dan password) ketika tombol ditekan. */
	15.   const email = inputEmailElement.value;
	16.   const password = inputPasswordElement.value;
	17.  
	18.   /* Comment : Memastikan bahwa nilai email dan password sesuai dengan nilai yang tersimpan. */
	19.   if (email == expectedEmail && password == expectedPassword) {
	20.  
	21.     /* Comment : Jika sesuai maka program akan berpindah ke halaman home. */
	22.     goToHome();
	23.  
	24.   } else {
	25.  
	26.     /* Comment : Namun jika tidak sesuai maka akan menampilkan informasi bahwa input salah. */
	27.     showPopUp();
	28.  
	29.   }
});
