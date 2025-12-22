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

function createProducts(containerId, products, isDye = false) {
  const container = document.getElementById(containerId);

  products.forEach(product => {
    let selectedColor = null;

    const card = document.createElement("div");
    card.className = "product-card";

    let colorsHTML = "";
    if (isDye) {
      colorsHTML = `
        <div class="colors">
          ${product.colors.map(color =>
            `<div class="color-circle" style="background:${color}" onclick="this.parentElement.querySelectorAll('.color-circle').forEach(c=>c.style.outline='none'); this.style.outline='2px solid black'; this.closest('.product-card').dataset.color='${color}'"></div>`
          ).join("")}
        </div>
      `;
    }

    card.innerHTML = `
      <img src="${product.image}">
      <h4>${product.name}</h4>
      ${product.desc ? `<p>${product.desc}</p>` : ""}
      ${colorsHTML}
      <div class="price">₪${product.price}</div>
      <button class="cart-btn">
        <i class="fa fa-shopping-cart"></i>
      </button>
    `;

    card.querySelector(".cart-btn").onclick = () => {
      if (isDye && !card.dataset.color) {
        alert("Please select a color first 🎨");
        return;
      }

      addToCart({
        name: product.name,
        price: product.price,
        image: product.image,
        color: card.dataset.color || null
      });
    };

    container.appendChild(card);
  });
}

/* ================= PRODUCTS DATA ================= */

/* Hair Oils */
const hairOils = [
  {
    name: "Olive Oil",
    desc: "Moisturizes and reduces breakage",
    price: 10,
    image: "img/Hair Oils/Olive Oil-1.jpg"
  },
  {
    name: "Argan Oil",
    desc: "Adds shine and nourishment",
    price: 20,
    image: "img/Hair Oils/Argan Oil.avif"
  },
  {
    name: "Castor Oil",
    desc: "Stimulates growth and strengthens roots",
    price: 15,
    image: "img/Hair Oils/Castor Oil.avif"
  },
  {
    name: "Coconut Oil",
    desc: "Prevents hair loss and deeply moisturizes",
    price: 10,
    image: "img/Hair Oils/coconut oil.avif"
  },
  {
    name: "Jojoba Oil",
    desc: "Lightweight, similar to natural oils",
    price: 15,
    image: "img/Hair Oils/jojoba oil.avif"
  },
  {
    name: "Rosemary Oil",
    desc: "Supports growth and scalp health",
    price: 17,
    image: "img/Hair Oils/Rosemary Oil.avif"
  },
  {
    name: "Almond Oil",
    desc: "Reduces dryness and frizz",
    price: 15,
    image: "img/Hair Oils/Almond Oil.avif"
  },
  {
    name: "Avocado Oil",
    desc: "Maintains moisture and shine",
    price: 15,
    image: "img/Hair Oils/Avocado Oil.avif"
  },
  {
    name: "Grapeseed Oil",
    desc: "Very lightweight, adds shine",
    price: 10,
    image: "img/Hair Oils/Grapeseed Oil.avif"
  },
  {
    name: "Apricot Oil",
    desc: "Natural softness and shine",
    price: 12,
    image: "img/Hair Oils/Apricot Oil.avif"
  }
];

/* Hair Masks */
const hairMasks = [
  {
    name: "Repair Mask",
    desc: "Repairs damage and strengthens hair",
    price: 18,
    image: "img/Hair Masks/Repair Mask.webp"
  },
  {
    name: "Deep Conditioning Mask",
    desc: "Moisturizes and adds shine",
    price: 20,
    image: "img/Hair Masks/Deep Conditioning Mask.webp"
  },
  {
    name: "Oily Scalp Mask",
    desc: "Reduces oil and dandruff",
    price: 10,
    image: "img/Hair Masks/Oily Scalp Mask.webp"
  },
  {
    name: "Purple Intensive Mask",
    desc: "Treats split ends and frizz",
    price: 18,
    image: "img/Hair Masks/Purple Mask.webp"
  }
];

/* Hair Creams */
const hairCreams = [
  {
    name: "Deep Moisturizing Cream",
    desc: "Treats dryness and split ends",
    price: 18,
    image: "img/Hair Creams/Deep Moisturizing Cream.jpg"
  },
  {
    name: "Keratin & Shea Butter Cream",
    desc: "Repairs split ends and prevents frizz",
    price: 15,
    image: "img/Hair Creams/Keratin & Shea Butter Cream.webp"
  }
];

/* Hair Serums */
const hairSerums = [
  {
    name: "Heat Protection Serum",
    desc: "Apply before blow-drying",
    price: 10,
    image: "img/Hair Serums/Heat Protection Serum.webp"
  },
  {
    name: "Shine & Smooth Serum",
    desc: "Adds shine and reduces frizz",
    price: 12,
    image: "img/Hair Serums/Shine & Smooth Serum.jpg"
  },
  {
    name: "Serum for Colored Hair",
    desc: "Maintains color vibrancy",
    price: 20,
    image: "img/Hair Serums/Serum for Colored Hair.webp"
  }
];

/* Hair Dyes */
const hairDyes = [
  {
    name: "L’Oréal Excellence",
    price: 15,
    image: "img/Hair Dye/L’Oréal Excellence hair.png",
    colors: ["black", "#3b2f2f", "#6f4e37", "#8b0000", "#f5deb3", "#fffacd", "#c87533"]
  },
  {
    name: "Garnier Color Naturals",
    price: 12,
    image: "img/Hair Dye/Garnier Color Naturals hair.png",
    colors: ["black", "#3b2f2f", "#6f4e37", "#8b0000", "#f5deb3", "#fffacd", "#c87533"]
  },
  {
    name: "Clairol Nice ’n Easy",
    price: 10,
    image: "img/Hair Dye/Clairol Nice ’n Easy hair.jpg",
    colors: ["black", "#3b2f2f", "#6f4e37", "#8b0000", "#f5deb3", "#fffacd", "#c87533"]
  },
  {
    name: "Schwarzkopf Palette",
    price: 10,
    image: "img/Hair Dye/Schwarzkopf Palette hair.png",
    colors: ["black", "#3b2f2f", "#6f4e37", "#8b0000", "#f5deb3", "#fffacd", "#c87533"]
  }
];

/* Hair Shampoos */
const hairShampoos = [
  {
    name: "Pantene Daily Care Shampoo",
    desc: "Gentle daily cleansing for all hair types",
    price: 10,
    image: "img/Pantene Shampoos/Pantene Daily Care - Classic Clean Shampoo.avif"
  },
  {
    name: "Pantene Anti Hair Fall Shampoo",
    desc: "Reduces hair fall and strengthens roots",
    price: 10,
    image: "img/Pantene Shampoos/Pantene Anti Hair Fall Shampoo.webp"
  },
  {
    name: "Pantene Anti-Dandruff Shampoo",
    desc: "Treats dandruff and cleanses hair",
    price: 10,
    image: "img/Pantene Shampoos/Pantene Anti-Dandruff Shampoo (2-in-1).webp"
  },
  {
    name: "Pantene Smooth & Silky Shampoo",
    desc: "Reduces frizz and adds softness",
    price: 10,
    image: "img/Pantene Shampoos/Pantene Smooth & Silky Shampoo.jpg"
  },
  {
    name: "Pantene Moisture Renewal Shampoo",
    desc: "Moisturizes dry and brittle hair",
    price: 10,
    image: "img/Pantene Shampoos/Pantene Moisture Renewal Shampoo.avif"
  },
  {
    name: "Pantene Colored Hair Repair Shampoo",
    desc: "Maintains color and shine",
    price: 10,
    image: "img/Pantene Shampoos/Pantene Colored Hair Repair Shampoo.avif"
  },
  {
    name: "Pantene Nature Fusion Shampoo",
    desc: "Botanical extracts for nourishment",
    price: 10,
    image: "img/Pantene Shampoos/Pantene Nature Fusion Shampoo.webp"
  },
  {
    name: "Pantene Sheer Volume Shampoo",
    desc: "Adds volume and thickness",
    price: 10,
    image: "img/Pantene Shampoos/Pantene Sheer Volume Shampoo.avif"
  },
  {
    name: "Pantene Milky Damage Repair Shampoo",
    desc: "Repairs damaged hair",
    price: 10,
    image: "img/Pantene Shampoos/Pantene Milky Damage Repair Shampoo.jpg"
  },
  {
    name: "Pantene Micellar Shampoo",
    desc: "Gentle cleansing without stripping oils",
    price: 10,
    image: "img/Pantene Shampoos/Pantene Micellar Gentle Cleansing Shampoo.jpg"
  }
];

/* Hair Tools */
const hairTools = [
  {
    name: "Babyliss Compact Hair Dryer",
    desc: "2400W powerful dryer",
    price: 110,
    image: "img/Babyliss hair care and styling products/Babyliss Compact Hair Dryer (2400 W).jpg"
  },
  {
    name: "Babyliss Ionic Hair Dryer",
    desc: "Reduces frizz with ionic technology",
    price: 90,
    image: "img/Babyliss hair care and styling products/Babyliss Ionic Hair Dryer (2100 W).jpg"
  },
  {
    name: "Babyliss 2-in-1 Straightener",
    desc: "Straightens and curls hair",
    price: 150,
    image: "img/Babyliss hair care and styling products/Babyliss ST482E-ST330E 2-in-1 Straightener.jpg"
  },
  {
    name: "Babyliss Pro Straightener",
    desc: "Professional straightener",
    price: 150,
    image: "img/Babyliss hair care and styling products/Babyliss Pro Professional Straightener.jpg"
  },
  {
    name: "Babyliss Curl & Wave Trio",
    desc: "3 interchangeable heads",
    price: 90,
    image: "img/Babyliss hair care and styling products/Babyliss Curl & Wave Trio Curling and Wave Device.jpg"
  },
  {
    name: "Electric Curling Iron",
    desc: "Traditional curls",
    price: 50,
    image: "img/Babyliss hair care and styling products/Electric Curling Iron-Tong.jpg"
  },
  {
    name: "Babyliss Hot Brush",
    desc: "Smooths and dries hair",
    price: 75,
    image: "img/Babyliss hair care and styling products/Babyliss Hot Brush-Heated Brush.jpg"
  },
  {
    name: "Air Styler",
    desc: "All-in-one styling tool",
    price: 50,
    image: "img/Babyliss hair care and styling products/Air Styler-Hot Air Brush.jpg"
  }
];

/* RENDER */
createProducts("hairOils", hairOils);
createProducts("hairMasks", hairMasks);
createProducts("hairCreams", hairCreams);
createProducts("hairSerums", hairSerums);
createProducts("hairDyes", hairDyes, true);
createProducts("hairShampoos", hairShampoos);
createProducts("hairTools", hairTools);
