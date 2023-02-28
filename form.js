let iletisim = document.getElementById("iletisim")
iletisim.addEventListener("submit", f_gonder);

document.getElementById("cevap").innerHTML = `
Hoşgeldin ${localStorage.getItem("isim1")} ${localStorage.getItem("soyisim1")}. 
Seninle ${localStorage.getItem("telefon1")} numaralı telefonun üzerinden iletişim kuracağız.
Ulaşamadığımız taktirde ${localStorage.getItem("adres1")} adresinden iletişim kuracağız.
` 

function f_gonder(e){
  e.preventDefault();
  console.log("gonder");

  localStorage.setItem("isim1",document.getElementById("isim").value)
  localStorage.setItem("soyisim1",document.getElementById("soyisim").value)
  localStorage.setItem("telefon1",document.getElementById("telefon").value)
  localStorage.setItem("adres1",document.getElementById("adres").value)
  
  document.getElementById("cevap").innerHTML = `
  Hoşgeldin ${document.getElementById("isim").value} ${document.getElementById("soyisim").value}. 
  Seninle ${document.getElementById("telefon").value} numaralı telefonun üzerinden iletişim kuracağız.
  Ulaşamadığımız taktirde ${document.getElementById("adres").value} adresinden iletişim kuracağız.
  `
}





