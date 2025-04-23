
    // Carousel
    const track = document.querySelector('.carousel-track');
    let slideIndex = 0;

    function moveCarousel() {
      slideIndex = (slideIndex + 1) % 2;
      track.style.transform = `translateX(-${slideIndex * 100}%)`;
    }

    setInterval(moveCarousel, 4000);

    // Search toggle
    const searchBtn = document.getElementById('search-btn');
    const searchInput = document.getElementById('search-input');

    searchBtn.addEventListener('click', () => {
      searchInput.style.display = searchInput.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener("DOMContentLoaded", function () {
      const products = document.querySelectorAll(".all_products");
      const productsPerPage = 6;
      const totalPages = Math.ceil(products.length / productsPerPage);
      const pagination = document.getElementById("pagination");
  
      function showPage(page) {
        products.forEach((product, index) => {
          product.style.display =
            index >= (page - 1) * productsPerPage && index < page * productsPerPage
              ? "block"
              : "none";
        });
      }
  
      function createPagination() {
        for (let i = 1; i <= totalPages; i++) {
          const btn = document.createElement("button");
          btn.innerText = i;
          btn.classList.add("page-btn");
          btn.addEventListener("click", () => {
            showPage(i);
            document.querySelectorAll('.page-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
          });
          pagination.appendChild(btn);
        }
      }
  
      createPagination();
      showPage(1); // Initial page
      document.querySelector(".page-btn").classList.add("active");
    });