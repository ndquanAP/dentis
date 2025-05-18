let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        header.classList.add("header-hidden");
    } else {
        // Scrolling up
        header.classList.remove("header-hidden");
    }
    lastScrollTop = scrollTop;
});

let timeoutId;
document.addEventListener('mousemove', (e) => {
    if (e.clientY < 50) { // Adjust sensitivity
        header.classList.remove("header-hidden");
        clearTimeout(timeoutId); // Prevent hiding immediately
    } else {
        clearTimeout(timeoutId); // If mouse moves away before timeout
        timeoutId = setTimeout(() => {
            if (window.pageYOffset > 0) {  // Only hide if scrolled
                header.classList.add("header-hidden");
            }
        }, 1000);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebarMenu");
    const overlay = document.getElementById("overlay");
    const openBtn = document.querySelector(".navbar-toggler");
    const closeBtn = document.querySelector(".close-btn");
    const navLinks = document.querySelectorAll("#sidebarMenu .nav-link"); // Chọn tất cả mục menu trong sidebar

    // Mở sidebar khi bấm nút hamburger
    openBtn.addEventListener("click", function () {
        sidebar.classList.add("active");
        overlay.classList.add("active");
    });

    // Đóng sidebar khi bấm nút đóng hoặc overlay
    closeBtn.addEventListener("click", closeSidebar);
    overlay.addEventListener("click", closeSidebar);

    // Đóng sidebar khi click vào một mục trong menu
    navLinks.forEach(link => {
        link.addEventListener("click", closeSidebar);
    });

    // Hàm đóng sidebar
    function closeSidebar() {
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
    }
    window.addEventListener("resize", function () {
        if (window.innerWidth > 991) { // Chỉ khi quay lại màn hình lớn
            closeSidebar(); // Đóng sidebar và ẩn overlay
        }
    });
});


//swiper
document.addEventListener("DOMContentLoaded", function () {
    const imagePaths = [
        "image/anhslidegt2.svg",
        "image/anhslidegt3.svg",
        "image/anhslidegt4.svg",
    ];

    const wrapper = document.getElementById("swiper-wrapper");

    imagePaths.forEach(path => {
        const img = new Image();
        img.src = path;

        img.onload = () => {
            const slide = document.createElement("div");
            slide.className = "swiper-slide";

            const imgTag = document.createElement("img");
            imgTag.src = path;

            slide.appendChild(imgTag);
            wrapper.appendChild(slide);
        };
    });
    setTimeout(() => {
        new Swiper(".mySwiper", {
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    }, 100);
});

// swiper dịch vụ
const services = [
    {
        imgSrc: "image/gt1.jpg",
        name: "Gói điều trị răng sữa",
        title: "Chỉ từ 50.000 - 400.000 VNĐ",
        description: [
            {
                name: 'Nhổ răng sữa', 
                price: '50.000 - 100.000'
            },
            {
                name: 'Trám răng', 
                price: '100.000 - 250.000'
            },
            {
                name: 'Điều trị tuỷ', 
                price: '250.000 - 400.000'
            },
            {
                name: 'Boio SDF làm ngừng tiến triển sâu răng', 
                price: '100.000'
            },
            {
                name: 'Áp gel fluor phòng sâu răng', 
                price: '250.000'
            }
        ],
    },
    {
        imgSrc: "image/gt2.jpg",
        name: "Gói điều trị răng vĩnh viễn",
        title: "Chỉ từ 100.000 VNĐ",
        description: [
            { name: 'Nhổ răng', price: '100.000 - 400.000' },
            { name: 'Nhổ chân răng', price: '100.000 - 400.000' },
            { name: 'Trám răng', price: '200.000 - 350.000' },
            { name: 'Điều trị tủy', price: '500.000 - 1.000.000' },
            { name: 'Chốt thạch anh và tái tạo cùi', price: '500.000 / chốt' },
            { name: 'Lấy cao răng', price: '150.000 - 250.000' },
            { name: 'Che vật liệu sinh học biodentin', price: '600.000' },
            { name: 'Lấy cao răng', price: '150.000 - 250.000' }
        ],
    },
    {
        imgSrc: "image/gt3.jpg",
        name: "Gói chăm sóc răng sứ",
        title: "Chỉ tử 1.200.000 VNĐ",
        description: [
            { name: 'Chụp sứ kim loại thường', price: '1.200.000 - 2.500.000' },
            { name: 'Chụp toàn sứ', price: '3.200.000 - 5.000.000' },
            { name: 'Inlay/onlay toàn sứ zirconia', price: '3.000.000' },
            { name: 'Sứ veneer', price: '5.500.000' }
        ],
    },
    {
        imgSrc: "image/gt2.jpg",
        name: "Chỉnh nha",
        title: "Chỉ từ 2.000.000 VNĐ",
        description: [
            { name: 'Chỉnh nha cố định mắc cài kim loại', price: '20 triệu - 35 triệu' },
            { name: 'Chỉnh nha cố định mắc cài sứ', price: '35 triệu - 40 triệu' },
            { name: 'Chỉnh nha tăng trưởng', price: '2 triệu - 12 triệu' }
        ],
    },
    {
        imgSrc: "image/gt3.jpg",
        name: "Hàm tháo lắp",
        title: "Chỉ từ 100.000 VNĐ",
        description: [
            { name: 'Nền khung', price: '1.000.000 - 3.200.000' },
            { name: 'Lên răng', price: '100.000 - 400.000' }
        ],
    },
    {
        imgSrc: "image/gt2.jpg",
        name: "Tẩy trắng răng",
        title: "Chỉ từ 200.000 VNĐ",
        description: [
            { name: 'Tẩy trắng', price: '1.200.000 - 2.000.000' },
            { name: 'Đính đá lên răng', price: '200.000 - 800.000' }
        ]
        ,
    },
    // Bạn có thể thêm nhiều service hơn ở đây nếu muốn
];

function renderServiceSlides() {
    const container = document.querySelector('#swiper-wrapper-service');
    container.innerHTML = '';

    services.forEach(service => {
        const slideElement = document.createElement('div');
        slideElement.className = 'swiper-slide';

        slideElement.innerHTML = `
            <div class="card">
                <div class="card-image" style="background-image: url(${service.imgSrc})"></div>
                <div class="card-content">
                    <p class="card-name">${service.name}</p>
                    <p class="card-title">${service.title}</p>
                    <!-- <p class="card-description">${service.description}</p> -->

                
                   
                </div>
            </div>
        `;

    //     <button class="btn btn-primary details-btn mt-2"
    //     data-name="${service.name}"
    //     data-title="${service.title}"
    //     data-description="${service.description}">
    //     Xem chi tiết
    // </button>

        const button = document.createElement('button');
        button.className = 'btn btn-primary details-btn mt-2';
        button.textContent = 'Xem chi tiết';
        button.description = service.description; // Gán trực tiếp object
        slideElement.querySelector('.card-content').appendChild(button);

        container.appendChild(slideElement);

        // container.appendChild(slideElement);
    });

    initServiceSwiper();
    addEventListenersForDetails();  // Gán sự kiện cho nút chi tiết
}

let swiperService;
function initServiceSwiper() {
    if (swiperService) swiperService.destroy(true, true);

    swiperService = new Swiper("#mySwiperService", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        freeMode: true,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            // Khi độ rộng màn hình là 756px hoặc nhỏ hơn
            0: {
                slidesPerView: 1, // Chỉ hiển thị 1 slides

            },
            768: {
                slidesPerView: 3, // Chỉ hiển thị 2 slides

            },
            1023: {
                slidesPerView: 4,
            }
        }
    });
}

document.addEventListener("DOMContentLoaded",() => {
    renderServiceSlides(); // render slide

    // xử lý sự kiện dừng autoplay swiper khi hover chuột
    setTimeout(() => {
        const swiperContainer = document.querySelector("#mySwiperService");

        swiperContainer.addEventListener("mouseenter", () => {
            if (swiperService && swiperService.autoplay) {
                swiperService.autoplay.stop();
            }
        });

        swiperContainer.addEventListener("mouseleave", () => {
            if (swiperService && swiperService.autoplay) {
                swiperService.autoplay.start();
            }
        });
    }, 500);
});

// function addEventListenersForDetails() { // thêm các sự kiện vào nút
//     const detailsBtns = document.querySelectorAll('.details-btn');

//     detailsBtns.forEach(btn => {
//         btn.addEventListener('click', function () {
//             const name = btn.getAttribute('data-name');
//             const title = btn.getAttribute('data-title');
//             const description = btn.getAttribute('data-description');

//             // Set nội dung cho modal
//             document.getElementById('modalName').innerText = name;
//             document.getElementById('modalSlideTitle').innerText = title;
//             document.getElementById('modalDescription').innerText = description;

//             // Mở modal
//             $('#detailsModal').modal('show');
//         });
//     });

//     // Dừng Swiper đúng lúc modal hiển thị
//     $('#detailsModal').on('shown.bs.modal', function () {
//         swiperService.autoplay.stop();
//         swiperService.allowTouchMove = false;
//     });

//     // Khi modal đóng thì chạy lại swiper
//     $('#detailsModal').on('hidden.bs.modal', function () {
//         swiperService.allowTouchMove = true;
//         swiperService.autoplay.start();
//     });
// }

function addEventListenersForDetails() {
    const buttons = document.querySelectorAll('.details-btn');

    // detailsBtns.forEach(btn => {
    //         btn.addEventListener('click', function () {
    //             const name = btn.getAttribute('data-name');
    //             const title = btn.getAttribute('data-title');
    //             const description = btn.getAttribute('data-description');
    
    //             // Set nội dung cho modal
    //             document.getElementById('modalName').innerText = name;
    //             document.getElementById('modalSlideTitle').innerText = title;
    //             document.getElementById('modalDescription').innerText = description;
    
    //             // Mở modal
    //             $('#detailsModal').modal('show');
    //         });
    //     });

    buttons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            const description = e.currentTarget.description;


            const tableBody = document.querySelector('#modalTableBody');
            tableBody.innerHTML = ''; // Xóa nội dung cũ

            if (Array.isArray(description)) {
                description.forEach(item => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${item.name}</td>
                        <td>${item.price}</td>
                    `;
                    tableBody.appendChild(row);
                });
            }

            // Hiển thị modal / container
            // document.querySelector('#service-detail-modal').style.display = 'block';
            $('#detailsModal').modal('show');       
        });
    });

    // Dừng Swiper đúng lúc modal hiển thị
    $('#detailsModal').on('shown.bs.modal', function () {
        swiperService.autoplay.stop();
        swiperService.allowTouchMove = false;
    });

    // Khi modal đóng thì chạy lại swiper
    $('#detailsModal').on('hidden.bs.modal', function () {
        swiperService.allowTouchMove = true;
        swiperService.autoplay.start();
    });
}




