function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  showToast("Product added to cart 🛒");
}

function createProducts(containerId, products) {
  const container = document.getElementById(containerId);

  products.forEach(product => {
    let selectedColor = null;

    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${product.image}">
      <h4>${product.name}</h4>
      ${product.desc ? `<p>${product.desc}</p>` : ""}
      <div class="price">₪${product.price}</div>
      <button class="cart-btn">
        <i class="fa fa-shopping-cart"></i>
      </button>
    `;

    card.querySelector(".cart-btn").onclick = () => addToCart(product);

    container.appendChild(card);
  });
}

/* ================= PRODUCTS DATA ================= */

/* Cleansers */
const cleansers = [
    { 
        name:"Morning Gel Cleanser", 
        desc:"A gentle daily gel cleanser with excellent moisture,Low pH Good , suitable for most skin types, including sensitive, combination, and oily skin. It cleanses without drying out the skin.", 
        price:18, 
        image:"img/Cleansers/Morning Gel Cleanser.webp" 
    },
    { 
        name:"Hydrium Moisturizing Cleanser", 
        desc:"A deeply moisturizing cleanser for dry or sensitive skin, as it contains hyaluronic acid to boost hydration.", 
        price:18, 
        image:"img/Cleansers/Hydrium Moisturizing Cleanser.jpg" 
    },
    { 
        name:"Calming Foam Cleanser", 
        desc:"A cleanser suitable for irritated or sensitive skin with redness or inflammation, to soothe and reduce oiliness and breakouts.", 
        price:18, 
        image:"img/Cleansers/Calming Foam Cleanser.jpg" 
    },
    { 
        name:"Advanced Gel Cleanser", 
        desc:"A cleanser with snail mucin extract to moisturize and soften the skin while cleansing—beneficial for dry or tired skin.", 
        price:18, 
        image:"img/Cleansers/Advanced Gel Cleanser.jpg" 
    },
    { 
        name:"Pure Fit Cica Cleanser / Creamy Foam / Cleansing Oil", 
        desc:"The Cica (Centella) line is for very sensitive or easily irritated skin, suitable for skin that reacts quickly.", 
        price:60, 
        image:"img/Cleansers/The Cica (Centella).jpg" 
    }
];

/* Moisturizers */
const moisturizers = [
    { 
        name:"Dove Beauty Cream", 
        desc:"Deeply moisturizes the skin (face + hands + body), leaving it soft and supple.", 
        price:10, 
        image:"img/Moisturizers/Dove Beauty Cream.jpeg"
    },
    { 
        name:"Dove Intensive Nourishing Cream", 
        desc:"Intensive and deep hydration for very dry areas.", 
        price:12, 
        image:"img/Moisturizers/Dove Intensive Nourishing Cream.jpg" 
    },
    { 
        name:"Dove Body Love Beauty Cream", 
        desc:"A lightweight, all-purpose moisturizer for face and body, suitable for daily use.", 
        price:15, 
        image:"img/Moisturizers/Dove Body Love Beauty Cream.webp" 
    }
];

/* Serums */
const serums = [
    { 
        name:"Advanced Snail Serums", 
        desc:"Deeply hydrates, helps repair damage, improves skin elasticity, and reduces signs of fatigue and fine lines.", 
        price:28, 
        image:"img/Serums/Advanced Snail Serums.webp" },
    { 
        name:"The 6 Peptide Skin Boosting Serum", 
        desc:"Helps boost skin elasticity, reduce wrinkles, improve texture, and minimize the appearance of pores.", 
        price:30, 
        image:"img/Serums/The 6 Peptide Skin Boosting Serum.jpg" },
    { 
        name:"Hyaluronic Acid Serum", 
        desc:"Deeply hydrates and plumps fine lines caused by dryness.", 
        price:22, 
        image:"img/Serums/Hyaluronic Acid Serum.jpg" 
    },
    { 
        name:"Vitamin C Serum", 
        desc:"Vitamin C serum helps brighten and even skin tone, and fight pigmentation and dark spots.", 
        price:25, 
        image:"img/Serums/Vitamin C Serum.jpg" 
    }
];

/* Toners */
const toners = [
    { 
        name:"Clarifying Treatment Toner",
        desc:"A gentle exfoliating toner that gently cleanses the skin's surface and deeply cleanses pores to remove dead skin cells, refine pores, and regulate oil", 
        price:20, 
        image:"img/Toner/Clarifying Treatment Toner.jpg" 
    },
    { 
        name:"Centella Water Alcohol-Free Toner", 
        desc:"A hydrating and soothing toner for sensitive or irritated skin",
        price:20, 
        image:"img/Toner/Centella Water Alcohol-Free Toner.jpg" 
    },
    { 
        name:"Pure Fit Cica Alcohol-Free Toner", 
        desc:"A very soothing toner for sensitive and irritated skin",
        price:25, 
        image:"img/Toner/Pure Fit Cica Alcohol-Free Toner.jpg" 
    },
    { 
        name:"AC Toner", 
        desc:"AC Collection Calming Liquid , Helps soothe inflammation and regulate oil before moisturizer",
        price:24, 
        image:"img/Toner/AC Toner.jpg" 
    },
    { 
        name:"Niacinamide Toner", 
        desc:"To regulate oil, smooth skin, and refine pores",
        price:28, 
        image:"img/Toner/Niacinamide Toner.webp" 
    }
];

/* Exfoliators */
const exfoliators = [
    { 
        name:"One Step Original Clear Pad", 
        desc:"Removes dead skin cells, dirt, excess oil, and unclogs pores. Reduces blackheads, evens skin tone, and improves texture",
        price:25, 
        image:"img/Exfoliators/One Step Original Clear Pad.jpg" 
    },
    { 
        name:"BHA Blackhead Power Liquid", 
        desc:"An exfoliating liquid (BHA) that focuses on deep pore cleansing and reducing oil and blackheads",
        price:25, 
        image:"img/Exfoliators/BHA Blackhead Power Liquid.jpg" 
    },
    { 
        name:"AHA 7 Whitehead Power Liquid", 
        desc:"An exfoliating liquid (AHA) that helps exfoliate the skin's surface and improve the appearance of whiteheads and dull skin",
        price:25, 
        image:"img/Exfoliators/AHA 7 Whitehead Power Liquid.jpg" 
    },
    { 
        name:"Two in One Poreless Power Liquid (Exfoliating)",
        desc: "A light liquid with exfoliating properties. A gentle formula that combines a mild exfoliator to help unclog pores and smooth skin without a harsh feeling", 
        price:30, 
        image:"img/Exfoliators/Two in One Poreless Power Liquid (Exfoliating).jpg" 
    }
];

/* Masks */
const masks = [
    { 
        name:"Sheet Mask with Snail Mucin Extract", 
        desc:"Helps deeply hydrate, rejuvenate the skin, reduce fine lines, and brighten the complexion",
        price:5, 
        image:"img/Mask/Sheet Mask with Snail Mucin Extract.jpg" 
    },
    { 
        name:"Ceramide Soft Mask", 
        desc:"Helps strengthen the skin barrier, lock in moisture, deeply hydrate, and leave skin feeling soft and plump",
        price:5, 
        image:"img/Mask/Ceramide Soft Mask.jpg" 
    },
    { 
        name:"Pink Charcoal Pore Refining Mask", 
        desc:"Helps deeply cleanse pores, remove impurities, and reduce excess oil",
        price:18, 
        image:"img/Mask/Pink Charcoal Pore Refining Mask.jpg" 
    },
    {
        name:"Propolis & Royal Jelly Sheet Mask",
        desc:"Helps deeply hydrate, nourish the skin, and improve its healthy texture",
        price:7,
        image:"img/Mask/Propolis & Royal Jelly Sheet Mask.jpg"
    },
    { 
        name:"Honey Propolis Overnight Mask", 
        desc:"An anti-inflammatory overnight mask that helps soothe the skin, deeply hydrate, and accelerate healing of irritations",
        price:25, 
        image:"img/Mask/Honey Propolis Overnight Mask.jpg" 
    },
    {
        name:"Nourishing Rice Overnight Mask",
        desc:"Helps to subtly brighten and even skin tone + beautifully moisturized upon waking",
        price:25,
        image:"img/Mask/Nourishing Rice Overnight Mask.jpg"
    }
];

/* Sunscreens */
const sunscreens = [
    { 
        name:"Ultra-Light Invisible Sunscreen SPF50 PA+++", 
        desc:"An ultra-light sunscreen that provides strong protection against UVA and UVB rays",
        price:22, 
        image:"img/Sunscreen/Ultra-Light Invisible Sunscreen SPF50 PA+++.jpg" 
    },
    { 
        name:"Aloe Soothing Sun Cream SPF50+ PA+++", 
        desc:"An aloe vera sunscreen that moisturizes and soothes the skin, providing light hydration and reducing redness",
        price:22, 
        image:"img/Sunscreen/Aloe Soothing Sun Cream SPF50+ PA+++.jpg" 
    }
];

/* Eye Creams */
const eyecreams = [
    { 
        name:"Eye Repair Cream", 
        desc:"Reduces dark circles and puffiness and moisturizes under the eyes",
        price:22, 
        image:"img/Eye Creams/CeraVe Eye Repair Cream.jpg" 
    },
    { 
        name:"Skin Renewing Eye Cream", 
        desc:"Moisturizes, treats wrinkles and fine lines, and reduces puffiness",
        price:25, 
        image:"img/Eye Creams/CeraVe Skin Renewing Eye Cream.jpg" 
    }
];

/* RENDER */
createProducts("cleanserProducts", cleansers);
createProducts("moisturizerProducts", moisturizers);
createProducts("serumProducts", serums);
createProducts("tonerProducts", toners);
createProducts("exfoliatorProducts", exfoliators);
createProducts("maskProducts", masks);
createProducts("sunscreenProducts", sunscreens);
createProducts("eyeCreamProducts", eyecreams);
