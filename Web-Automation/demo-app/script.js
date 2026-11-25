const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 2499,
    icon: "🎧",
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    category: "Accessories",
    price: 3599,
    icon: "⌨️",
  },
  {
    id: 3,
    name: "4K Monitor",
    category: "Electronics",
    price: 12999,
    icon: "🖥️",
  },
  { id: 4, name: "Office Chair", category: "Office", price: 7499, icon: "💺" },
  {
    id: 5,
    name: "Wireless Mouse",
    category: "Accessories",
    price: 1299,
    icon: "🖱️",
  },
  {
    id: 6,
    name: "USB-C Hub",
    category: "Accessories",
    price: 1899,
    icon: "🔌",
  },
  { id: 7, name: "Laptop Stand", category: "Office", price: 2199, icon: "💻" },
  { id: 8, name: "Webcam", category: "Electronics", price: 2999, icon: "📷" },
];

const orders = [
  ["#ORD-1001", "Rahul", "Wireless Headphones", 2499, "Delivered"],
  ["#ORD-1002", "Priya", "4K Monitor", 12999, "Processing"],
  ["#ORD-1003", "Amit", "Office Chair", 7499, "Shipped"],
  ["#ORD-1004", "Neha", "Wireless Mouse", 1299, "Delivered"],
  ["#ORD-1005", "Vikas", "USB-C Hub", 1899, "Cancelled"],
  ["#ORD-1006", "Riya", "Webcam", 2999, "Processing"],
  ["#ORD-1007", "Karan", "Keyboard", 3599, "Shipped"],
  ["#ORD-1008", "Pooja", "Laptop Stand", 2199, "Delivered"],
];

const users = [
  ["Rahul Sharma", "rahul@example.com", "Admin", "Active"],
  ["Priya Singh", "priya@example.com", "Manager", "Active"],
  ["Amit Verma", "amit@example.com", "Customer", "Inactive"],
  ["Neha Gupta", "neha@example.com", "Customer", "Active"],
  ["Vikas Kumar", "vikas@example.com", "Manager", "Active"],
  ["Riya Mehta", "riya@example.com", "Customer", "Active"],
  ["Karan Shah", "karan@example.com", "Customer", "Inactive"],
];

let cart = [];
let orderPage = 1;

const $ = (id) => document.getElementById(id);
const money = (n) => "₹" + n.toLocaleString("en-IN");

function showPage(page) {
  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.remove("active-page"));
  $(page).classList.add("active-page");
  document
    .querySelectorAll(".nav-item")
    .forEach((b) => b.classList.toggle("active", b.dataset.page === page));
  $("pageTitle").textContent =
    page === "forms"
      ? "Forms Lab"
      : page === "advanced"
        ? "Advanced Lab"
        : page[0].toUpperCase() + page.slice(1);
}

function toast(message) {
  $("toast").textContent = message;
  $("toast").classList.add("show");
  setTimeout(() => $("toast").classList.remove("show"), 2200);
}

function renderProducts() {
  let list = [...products];
  const q = $("productSearch").value.toLowerCase();
  const cat = $("categoryFilter").value;
  const sort = $("sortProducts").value;
  if (q) list = list.filter((p) => p.name.toLowerCase().includes(q));
  if (cat) list = list.filter((p) => p.category === cat);
  if (sort === "low") list.sort((a, b) => a.price - b.price);
  if (sort === "high") list.sort((a, b) => b.price - a.price);
  if (sort === "name") list.sort((a, b) => a.name.localeCompare(b.name));

  $("productGrid").innerHTML =
    list
      .map(
        (p) => `
    <article class="product-card" data-testid="product-card-${p.id}">
      <div class="product-image">${p.icon}</div>
      <div class="product-info">
        <span class="badge info">${p.category}</span>
        <h3>${p.name}</h3>
        <div class="price">${money(p.price)}</div>
        <div class="product-actions">
          <button class="secondary details-btn" data-id="${p.id}">Details</button>
          <button class="primary add-btn" data-id="${p.id}">Add to Cart</button>
        </div>
      </div>
    </article>`,
      )
      .join("") ||
    `<div class="panel"><h3>No products found</h3><p class="muted">Try another search or filter.</p></div>`;
}

function renderOrders() {
  const q = $("orderSearch").value.toLowerCase();
  const status = $("orderStatusFilter").value;
  let list = orders.filter(
    (o) =>
      (!q || o.join(" ").toLowerCase().includes(q)) &&
      (!status || o[4] === status),
  );
  const pageSize = 4;
  const pages = Math.max(1, Math.ceil(list.length / pageSize));
  orderPage = Math.min(orderPage, pages);
  const pageItems = list.slice(
    (orderPage - 1) * pageSize,
    orderPage * pageSize,
  );
  $("ordersBody").innerHTML = pageItems
    .map(
      (o) => `
    <tr>
      <td>${o[0]}</td><td>${o[1]}</td><td>${o[2]}</td><td>${money(o[3])}</td>
      <td><span class="badge ${o[4] === "Delivered" ? "success" : o[4] === "Cancelled" ? "danger" : o[4] === "Processing" ? "warning" : "info"}">${o[4]}</span></td>
      <td><button class="secondary order-action" data-order="${o[0]}">View</button></td>
    </tr>`,
    )
    .join("");
  $("orderPagination").innerHTML = Array.from(
    { length: pages },
    (_, i) =>
      `<button class="${i + 1 === orderPage ? "active" : ""}" data-page="${i + 1}">${i + 1}</button>`,
  ).join("");
}

function renderUsers() {
  const q = $("userSearch").value.toLowerCase();
  const role = $("roleFilter").value;
  const status = $("userStatusFilter").value;
  const list = users.filter(
    (u) =>
      (!q || u.join(" ").toLowerCase().includes(q)) &&
      (!role || u[2] === role) &&
      (!status || u[3] === status),
  );
  $("usersBody").innerHTML = list
    .map(
      (u) => `
    <tr><td>${u[0]}</td><td>${u[1]}</td><td>${u[2]}</td>
    <td><span class="badge ${u[3] === "Active" ? "success" : "danger"}">${u[3]}</span></td>
    <td><button class="secondary user-action" data-user="${u[1]}">Edit</button></td></tr>`,
    )
    .join("");
}

function renderCart() {
  $("cartCount").textContent = cart.reduce((s, x) => s + x.qty, 0);
  $("cartItems").innerHTML = cart.length
    ? cart
        .map(
          (item) => `
    <div class="cart-item">
      <div><strong>${item.name}</strong><br><small>${money(item.price)}</small></div>
      <div class="qty">
        <button class="qty-btn" data-id="${item.id}" data-change="-1">−</button>
        <span>${item.qty}</span>
        <button class="qty-btn" data-id="${item.id}" data-change="1">+</button>
        <button class="secondary remove-btn" data-id="${item.id}">Remove</button>
      </div>
    </div>`,
        )
        .join("")
    : `<p class="muted">Your cart is empty.</p>`;
  const total = cart.reduce((s, x) => s + x.price * x.qty, 0);
  $("cartTotal").textContent = money(total);
  $("checkoutBtn").disabled = !cart.length;
}

document
  .querySelectorAll(".nav-item")
  .forEach((btn) =>
    btn.addEventListener("click", () => showPage(btn.dataset.page)),
  );
document
  .querySelectorAll("[data-page-link]")
  .forEach((btn) =>
    btn.addEventListener("click", () => showPage(btn.dataset.pageLink)),
  );
$("heroProductsBtn").onclick = () => showPage("products");
$("loginBtn").onclick = () => {
  if (
    $("loginUsername").value === "admin" &&
    $("loginPassword").value === "admin123"
  ) {
    $("loginPage").classList.add("hidden");
    $("app").classList.remove("hidden");
    toast("Login successful");
  } else $("loginMessage").textContent = "Invalid username or password";
};
$("logoutBtn").onclick = () => {
  $("app").classList.add("hidden");
  $("loginPage").classList.remove("hidden");
};
$("productSearch").oninput = renderProducts;
$("categoryFilter").onchange = renderProducts;
$("sortProducts").onchange = renderProducts;
$("clearFiltersBtn").onclick = () => {
  $("productSearch").value = "";
  $("categoryFilter").value = "";
  $("sortProducts").value = "";
  renderProducts();
};
$("productGrid").addEventListener("click", (e) => {
  const id = Number(e.target.dataset.id);
  if (!id) return;
  const p = products.find((x) => x.id === id);
  if (e.target.classList.contains("add-btn")) {
    const item = cart.find((x) => x.id === id);
    item ? item.qty++ : cart.push({ ...p, qty: 1 });
    renderCart();
    toast(`${p.name} added to cart`);
  }
  if (e.target.classList.contains("details-btn")) {
    $("productModalContent").innerHTML =
      `<h2>${p.icon} ${p.name}</h2><p>Category: <strong>${p.category}</strong></p><p>Price: <strong>${money(p.price)}</strong></p><p>This is a practice product details modal.</p><button class="primary" id="modalAddBtn">Add to Cart</button>`;
    $("productModal").classList.remove("hidden");
    $("modalAddBtn").onclick = () => {
      const item = cart.find((x) => x.id === id);
      item ? item.qty++ : cart.push({ ...p, qty: 1 });
      renderCart();
      toast("Added to cart");
    };
  }
});
$("cartBtn").onclick = () => {
  $("cartModal").classList.remove("hidden");
  renderCart();
};
$("cartItems").addEventListener("click", (e) => {
  const id = Number(e.target.dataset.id);
  if (!id) return;
  if (e.target.classList.contains("qty-btn")) {
    const item = cart.find((x) => x.id === id);
    item.qty += Number(e.target.dataset.change);
    if (item.qty <= 0) cart = cart.filter((x) => x.id !== id);
  }
  if (e.target.classList.contains("remove-btn"))
    cart = cart.filter((x) => x.id !== id);
  renderCart();
});
$("checkoutBtn").onclick = () => {
  cart = [];
  renderCart();
  $("cartModal").classList.add("hidden");
  toast("Order placed successfully");
  showPage("orders");
};

document
  .querySelectorAll(".modal-close")
  .forEach(
    (b) => (b.onclick = () => $(b.dataset.close).classList.add("hidden")),
  );
document.querySelectorAll(".modal").forEach((m) =>
  m.addEventListener("click", (e) => {
    if (e.target === m) m.classList.add("hidden");
  }),
);

$("orderSearch").oninput = () => {
  orderPage = 1;
  renderOrders();
};
$("orderStatusFilter").onchange = () => {
  orderPage = 1;
  renderOrders();
};
$("orderPagination").onclick = (e) => {
  if (e.target.dataset.page) {
    orderPage = Number(e.target.dataset.page);
    renderOrders();
  }
};
$("ordersBody").onclick = (e) => {
  if (e.target.classList.contains("order-action"))
    toast("Opening " + e.target.dataset.order);
};

$("userSearch").oninput = renderUsers;
$("roleFilter").onchange = renderUsers;
$("userStatusFilter").onchange = renderUsers;
$("usersBody").onclick = (e) => {
  if (e.target.classList.contains("user-action"))
    toast("Editing " + e.target.dataset.user);
};

$("experienceRange").oninput = (e) =>
  ($("rangeValue").textContent = e.target.value);
$("saveProfileBtn").onclick = () => {
  const skills = [...$("skills").selectedOptions].map((o) => o.value);
  const interests = [...document.querySelectorAll(".interest:checked")].map(
    (x) => x.value,
  );
  const level =
    document.querySelector('input[name="level"]:checked')?.value ||
    "Not selected";
  $("savedProfile").textContent =
    `Name: ${$("fullName").value}\nEmail: ${$("email").value}\nAge: ${$("age").value}\nDOB: ${$("dob").value}\nDepartment: ${$("department").value}\nSkills: ${skills.join(", ")}\nLevel: ${level}\nInterests: ${interests.join(", ")}\nBio: ${$("bio").value}\nExperience: ${$("experienceRange").value} years`;
  toast("Profile saved");
};

$("modalBtn").onclick = () => $("genericModal").classList.remove("hidden");
$("modalConfirmBtn").onclick = () => {
  $("genericModal").classList.add("hidden");
  toast("Modal confirmed");
};
$("toastBtn").onclick = () => toast("This is a practice toast notification");
$("loadingBtn").onclick = () => {
  $("loadingBtn").disabled = true;
  $("loadingBtn").textContent = "Loading...";
  $("loadingResult").textContent = "Please wait...";
  setTimeout(() => {
    $("loadingBtn").disabled = false;
    $("loadingBtn").textContent = "Load Data";
    $("loadingResult").textContent = "Data loaded successfully";
    toast("Loading complete");
  }, 2000);
};
$("alertBtn").onclick = () => alert("This is a JavaScript alert");
$("confirmBtn").onclick = () => {
  const result = confirm("Do you want to continue?");
  toast(result ? "You clicked OK" : "You clicked Cancel");
};
$("fileUpload").onchange = (e) =>
  ($("fileName").textContent = e.target.files.length
    ? `Selected: ${e.target.files[0].name}`
    : "No file selected.");
$("downloadBtn").onclick = () => {
  const blob = new Blob(["QA Shop Practice Report\nStatus: PASS\n"], {
    type: "text/plain",
  });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "qa-practice-report.txt";
  a.click();
  URL.revokeObjectURL(a.href);
};
$("newTabBtn").onclick = () => window.open("help.html", "_blank");
$("keyboardInput").onkeydown = (e) => {
  if (e.key === "Enter")
    $("keyboardResult").textContent = `You pressed Enter: ${e.target.value}`;
};

renderProducts();
renderOrders();
renderUsers();
renderCart();
