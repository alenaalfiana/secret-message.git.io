const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

const images = [
  "img/1.jpg",
  "img/2.jpg",
  "img/3.jpg",
  "img/4.jpg",
  "img/5.jpg",
];

let imageIndex = 0; // Menyimpan urutan gambar yang sudah ditampilkan
let imageElements = []; // Array untuk menyimpan elemen gambar yang ditampilkan

yesBtn.addEventListener("click", () => {
  question.innerHTML = "I miss you too!";
  gif.src =
    "https://media2.giphy.com/media/fvN5KrNcKKUyX7hNIA/giphy.gif?cid=6c09b952fzjqqpctr847tzz2h9w5wihtcy4m88a2rrmrviir&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s";
  noBtn.style.display = "none"; // Menghilangkan tombol "No"

  // Menghapus semua gambar yang muncul
  imageElements.forEach((img) => {
    img.remove();
  });
  imageElements = []; // Reset array gambar
});

noBtn.addEventListener("mouseover", () => {
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.position = "absolute";
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;

  // Jika tombol "No" terus dihindari, gambar akan muncul satu per satu
  if (imageIndex < images.length) {
    setTimeout(() => {
      const newImg = document.createElement("img");
      newImg.src = images[imageIndex];
      newImg.style.position = "absolute";
      newImg.style.left = `${randomX}px`;
      newImg.style.top = `${randomY + 50}px`; // Menampilkan gambar sedikit di bawah posisi tombol "No"
      newImg.style.maxWidth = "200px"; // Membatasi ukuran gambar
      wrapper.appendChild(newImg); // Menambahkan gambar ke dalam wrapper

      // Menyimpan elemen gambar yang baru ditambahkan ke array
      imageElements.push(newImg);

      imageIndex++;
    }, 500); // Menunggu 0,5 detik sebelum menampilkan gambar berikutnya
  }
});
