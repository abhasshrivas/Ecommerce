//var currentPage = 1;
//var itemsPerPage = 4;
var container1 = document.getElementById("productContainer");
var products = [
    {
        id: 1,
        name: "Rolex watch",
        price: 2.456,
        category: "watch",
        image: "https://cdn.thewatchpages.com/app/uploads/2025/04/30204058/rolex-sky-dweller-m336938-0008.jpeg?width=400",
        rating: 5.89,
    },
    {
        id: 2,
        name: "shoes",
        price: 800,
        category: "shoes",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwwPx721wlOx39Jcu1BMXcbXKqQ-lOnJ4M0Q&s",
        rating: 10.99,
    },
    {
        id: 3,
        name: "Titain",
        price: 10000,
        category: "watch",
        image: "https://media.rolex.com/image/upload/q_auto:eco/f_auto/t_v7-grid/c_limit,w_1920/v1/catalogue/2025/upright-bba-with-shadow/m126234-0051",
        rating: 4.69,
    },
    {
        id: 4,
        name: "Shoes",
        price: 500,
        category: "shoes",
        image: "https://mynicefootwear.com/wp-content/uploads/2023/03/1678358423675-01.jpeg",
        rating: 10.99,
    },
    {
        id: 5,
        name: "laptop",
        price: 15000,
        category: "laptop",
        image: "https://media.wired.com/photos/67e5bd328eceed9f2cae96f3/4:3/w_640%2Cc_limit/Razer-Blade-16-2025-Laptop-(front)-Reviewer-Photo-SOURCE-Luke-Larsen.jpg",
        rating: 11.9,
    },
    {
        id: 6,
        name: "watch",
        price: 4000,
        category: "watch",
        image: "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwefbf6d54/images/Fastrack/Catalog/3319NL01_1.jpg?sw=600&sh=600width=400",
        rating: 2.89,
    },
    {
        id: 7,
        name: "smart watch",
        price: 4.999,
        category: "watch",
        image: "https://www.titan.co.in/on/demandware.static/-/Sites-titan-master-catalog/default/dw66fe4c98/images/Titan/Catalog/90188AP06_1.jpg?width=400",
        rating: 6.41,
    },
    {
        id: 8,
        name: "Rolex black watch",
        price: 100000,
        category: "watch",
        image: "https://i0.wp.com/haute24.com/wp-content/uploads/2025/11/Catalog-BG-Remover_-_2024-12-06T132348.975__36450.1760177839.386.513.pngc1_.png?fit=385%2C513&ssl=1width=400",
        rating: 12.99,
    },
    {
        id: 9,
        name: "blusher",
        price: 300,
        category: "cosmetic",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi_EhfB3LXdY8-u-ymxym9c2erJtATaG4qBg&s",
        rating: 6.61,
    },
    {
        id: 10,
        name: "lipstick",
        price: 90,
        category: "cosmetic",
        image: "https://ibacosmetics.com/cdn/shop/products/iba-pure-lips-long-stay-matte-lipstick---m10-red-brick_1_1_5afdccac-f502-4175-8f48-78333af01203.png?v=1630580106",
        rating: 1.49,
    },
    {
        id: 11,
        name: "eyeliner",
        price: 400,
        category: "cosmetic",
        image: "https://goodchoiceindia.com/cdn/shop/files/EL05_30b2a7ac-eec3-4e7d-b050-c57554fb7d1f.jpg?v=1736945263",
        rating: 7.75,
    },
    {
        id: 12,
        name: "Smart Watch",
        price: 5000,
        category: "watch",
        image: "https://img.freepik.com/free-vector/smart-watch-realistic-image-black_1284-11873.jpg?semt=ais_rp_progressive&w=740&q=80",
        rating: 2.09,
    },
    {
        id: 13,
        name: "iPhone",
        price: 17000,
        category: "mobile",
        image: "https://inspireonline.in/cdn/shop/files/iPhone_15_Blue_PDP_Image_Position-1__en-IN.jpg?v=1694605147",
        rating: 3.26,
    },
    {
        id: 14,
        name: "glow beauty",
        price: 70,
        category: "beauty",
        image: "https://akm-img-a-in.tosshub.com/sites/gloss99/resources/202212/1301222021106.png",
        rating: 5.15,
    },
    {
        id: 15,
        name: "makeup beauty",
        price: 90,
        category: "beauty",
        image: "https://images-static.nykaa.com/media/catalog/product/d/8/d8067e0ELFCO00000600pdp_1.jpg?tr=cm-pad_resize,w-200,h-200",
        rating: 7.85,
    },
    {
        id: 16,
        name: "Sofa",
        price: 20000,
        category: "furniutues",
        image: "https://craftsmill.in/cdn/shop/files/sofas-accent-chairs-cider-orange-soft-velvet-touch-fabric-emily-flared-arm-2-seater-sofa-60-46567514931491.jpg?v=1725047510",
        rating: 3.76,
    },
    {
        id: 17,
        name: "Double Bed",
        price: 50000,
        category: "furniutues",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGTSe5GddlmiBvkHVc3ub9g9c7ZMUb1rveZw&s",
        rating: 12.85,
    },
    {
        id: 18,
        name: "perfume vector",
        price: 600,
        category: "perfume",
        image: "https://static.vecteezy.com/system/resources/thumbnails/013/732/904/small/perfume-bottle-glass-bottle-for-perfume-and-perfumery-illustration-realistic-3d-mockup-vector.jpg",
        rating: 2.56,
    },
    {
        id: 19,
        name: "Wilde Stone",
        price: 700,
        category: "perfume",
        image: "https://m.media-amazon.com/images/I/61TYei9ZnlL._AC_UF350,350_QL80_.jpg",
        rating: 2.66,
    },
    {
        id: 20,
        name: "TATA Salt",
        price: 120,
        category: "groseries",
        image: "https://m.media-amazon.com/images/I/5136Y63Lq4L._SL500_.jpg",
        rating: 1.56,
    },
    {
        id: 21,
        name: "Sun Butter",
        price: 700,
        category: "groseries",
        image: "https://5.imimg.com/data5/SELLER/Default/2020/12/OW/RT/WF/51068474/grocery-items-photography-500x500.png",
        rating: 1.42,
    },
];
var container1 = document.getElementById("productContainer");
function displayProducts(productList) {
    container1.innerHTML = "";
    productList.forEach(function (product) {
        container1.innerHTML += "\n      <div class=\"card\">\n        <img src=\"".concat(product.image, "\" />\n        <h4>").concat(product.name, "</h4>\n        <p>\u20B9").concat(product.price, "</p>\n      </div>\n    ");
    });
}
displayProducts(products);
var sortSelect = document.getElementById("sort");
sortSelect.addEventListener("change", function () {
    var value = sortSelect.value;
    if (value === "cheap") {
        displayProducts(products);
    }
    else {
        var filtered = products.filter(function (product) { return product.category === value; });
        displayProducts(filtered);
    }
});
var searchInput = document.getElementById("search");
searchInput.addEventListener("input", function () {
    var searchvalue = searchInput.value.toLowerCase();
    var filteredProducts = products.filter(function (product) {
        return product.name.toLowerCase().includes(searchvalue);
    });
    displayProducts(filteredProducts);
});
var minInput = document.getElementById("minPrice");
var maxInput = document.getElementById("maxPrice");
function filterByPrice() {
    var minvalue = Number(minInput.value);
    var maxvalue = Number(maxInput.value);
    var filterd = products.filter(function (product) {
        var matchmin = minvalue ? product.price >= minvalue : true;
        var matchmax = maxvalue ? product.price <= maxvalue : true;
        return matchmin && matchmax;
    });
    displayProducts(filterd);
}
minInput.addEventListener("input", filterByPrice);
maxInput.addEventListener("input", filterByPrice);
var keywords = document.querySelectorAll(".keyword");
keywords.forEach(function (box) {
    box.addEventListener("click", function () {
        keywords.forEach(function (k) { return k.classList.remove("active"); });
        box.classList.add("active");
        var category = box.getAttribute("data-category");
        if (category === "all") {
            displayProducts(products);
        }
        else {
            var filtered = products.filter(function (product) { return product.category === category; });
            displayProducts(filtered);
        }
    });
});
function displayProducts(productList) {
    container1.innerHTML = "";
    productList.forEach(function (product) {
        container1.innerHTML += "\n      <div class=\"card\" onclick=\"showProduct('".concat(product.name, "')\">\n        <img src=\"").concat(product.image, "\">\n        <h4>").concat(product.name, "</h4>\n        <p>\u20B9").concat(product.price, "</p>\n      </div>\n    ");
    });
}
function showProduct(productName) {
    var product = products.find(function (p) { return p.name === productName; });
    if (!product)
        return;
    container1.innerHTML = "\n  \n    <div class=\"product-details\">\n    \n      <img src=\"".concat(product.image, "\" style=\"width:300px\">\n      \n      <h2>").concat(product.name, "</h2>\n      \n      <p>Price: \u20B9").concat(product.price, "</p>\n      \n      <p>Rating: \u2B50\u2B50\u2B50 ").concat(product.rating, "</p>\n      \n      <p>Lorem ipsum product description here.\n      Lorem ipsum product description here.\n      Lorem ipsum product description here.\n          </p>\n\n      <button onclick=\"displayProducts(products)\">Back</button>\n\n    </div>\n  \n  ");
}
/*function displayProducts(productList: Product[]) {
    container1.innerHTML = "";

    productList.forEach((product) => {
        container1.innerHTML += `
        <div class="card">
        <img src ="${product.image}">
        <h4>${product.name}</h4>
        <p>₹${product.price}</p>
                </div>
          
        `;
    });
}
displayProducts(products);*/
var radios = document.querySelectorAll('input[name="category"]');
radios.forEach(function (radio) {
    radio.addEventListener("change", function () {
        var selectedCategory = radio.value;
        if (selectedCategory === "all") {
            displayProducts(products.slice(0, 8));
            return;
        }
        else {
            var filtered = products.filter(function (product) { return product.category === selectedCategory; });
            displayProducts(filtered);
        }
    });
});
displayProducts(products.slice(0, 8));
