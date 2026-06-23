/* =========================================================
   One Bite — script.js
========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Loader ---------- */
  const loader = document.getElementById('loader');
  window.addEventListener('load', () => {
    setTimeout(() => loader.classList.add('hidden'), 2000);
  });
  // fallback in case load event already fired
  setTimeout(() => loader.classList.add('hidden'), 2500);

  /* ---------- AOS init ---------- */
  if (window.AOS) {
    AOS.init({ duration: 700, once: true, offset: 80 });
  }

  document.getElementById('year').textContent = new Date().getFullYear();

  /* ---------- Navbar scroll state ---------- */
  const navbar = document.getElementById('navbar');
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 30);
    backToTop.classList.toggle('show', window.scrollY > 500);
  };
  window.addEventListener('scroll', onScroll);

  /* ---------- Hamburger ---------- */
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  hamburger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', open);
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      navLinks.querySelectorAll('a').forEach(l => l.classList.remove('active'));
      a.classList.add('active');
    });
  });

  /* ---------- Hero slideshow ---------- */
  const slides = document.querySelectorAll('.hero-slide');
  let slideIndex = 0;
  setInterval(() => {
    slides[slideIndex].classList.remove('active');
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add('active');
  }, 5000);


  /* ---------- Back to top ---------- */
  const backToTop = document.getElementById('backToTop');
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* =========================================================
     MENU DATA
  ========================================================= */
  const FOOD_IMG = {
    burgers: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=500',
    pizza: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=500',
    wraps: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=500',
    sandwiches: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=500',
    pasta: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=500',
    waffles: 'https://images.unsplash.com/photo-1562376552733-1f67e9be3320?q=80&w=500',
    desserts: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=500',
    drinks: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=500',
    bucket: 'https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=500',
    snacks: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?q=80&w=500',
    salads: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=500',
    loaf: 'https://images.unsplash.com/photo-1619985632461-f33748ef8d3d?q=80&w=500'
  };

  const menuData = [
    // BURGERS - Veg
    { name:'OB Street', price:55, cat:'burgers', type:'veg', img:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=500' },
    { name:'OB Amazing Street', price:75, cat:'burgers', type:'veg', img:'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=500' },
    { name:'OB Amazing', price:100, cat:'burgers', type:'veg', img:'burger2.jpg' },
    { name:'OB Peppery', price:110, cat:'burgers', type:'veg', img:'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=500' },
    { name:'OB Cheese Corn', price:130, cat:'burgers', type:'veg', img:'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?q=80&w=500' },
    { name:'OB Paneer Jalapeno', price:150, cat:'burgers', type:'veg', img:'https://images.unsplash.com/photo-1561758033-d89a9ad46330?q=80&w=500' },
    { name:'OB Double Patty', price:165, cat:'burgers', type:'veg', img:'https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=500' },
    // BURGERS - Non-Veg
    { name:'OB Eggy', price:65, cat:'burgers', type:'nonveg', img:'https://images.unsplash.com/photo-1606755962773-d324e0a13086?q=80&w=500' },
    { name:'OB Amazing Eggy', price:80, cat:'burgers', type:'nonveg', img:'https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=500' },
    { name:'OB Chicken', price:100, cat:'burgers', type:'nonveg', img:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=500' },
    { name:'OB Chicken Amazing', price:130, cat:'burgers', type:'nonveg', img:'burger1.jpg' },
    { name:'OB Chicken Peppery', price:140, cat:'burgers', type:'nonveg', img:'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=500' },
    { name:'OB Chicken Jalapeno', price:170, cat:'burgers', type:'nonveg', img:'https://images.unsplash.com/photo-1561758033-d89a9ad46330?q=80&w=500' },
    { name:'OB Chicken Double Patty', price:195, cat:'burgers', type:'nonveg', img:'https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=500' },

    // PIZZA - Veg
    { name:'OB Cheese Pizza', price:100, cat:'pizza', type:'veg', img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=500' },
    { name:'OB Classic Pizza', price:135, cat:'pizza', type:'veg', img:'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=500' },
    { name:'OB Paneer Peppery', price:175, cat:'pizza', type:'veg', img:'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=500' },
    { name:'OB Veggie Corn', price:190, cat:'pizza', type:'veg', img:'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=500' },
    { name:'OB Cheese Mushroom', price:205, cat:'pizza', type:'veg', img:'https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=500' },
    // PIZZA - Non-Veg
    { name:'OB Chicken Classic', price:145, cat:'pizza', type:'nonveg', img:'https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=500' },
    { name:'OB Chicken Peppery', price:185, cat:'pizza', type:'nonveg', img:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=500' },
    { name:'OB Chicken Corn', price:190, cat:'pizza', type:'nonveg', img:'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=500' },
    { name:'OB Chicken Mushroom', price:210, cat:'pizza', type:'nonveg', img:'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=500' },
    { name:'OB Chicken Exotica', price:220, cat:'pizza', type:'nonveg', img:'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=500' },

    // DRINKS
    { name:'Tea', price:25, cat:'drinks', type:'veg', img:'https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=500' },
    { name:'Green Tea', price:40, cat:'drinks', type:'veg', img:'https://images.unsplash.com/photo-1556881286-fc6915169721?q=80&w=500' },
    { name:'Coffee', price:50, cat:'drinks', type:'veg', img:'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=500' },
    { name:'Cold Coffee', price:100, cat:'drinks', type:'veg', img:'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=500' },
    { name:'Lime Soda', price:70, cat:'drinks', type:'veg', img:'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=500' },
    { name:'Mocktails', price:85, cat:'drinks', type:'veg', img:'mok.jpg' },
    { name:'Shakes', price:130, cat:'drinks', type:'veg', img:'shake.jpg' },
    { name:'Oreo Shake', price:140, cat:'drinks', type:'veg', img:'oreo.jpg' },
    { name:'KitKat Shake', price:140, cat:'drinks', type:'veg', img:'shake.jpg' },

    // WAFFLES
    { name:'OB Nutella Waffle', price:90, cat:'waffles', type:'veg', img:'waffel4.jpg' },
    { name:'OB Chocolate Waffle', price:90, cat:'waffles', type:'veg', img:'waffel3.jpg' },
    { name:'OB Oreo Waffle', price:125, cat:'waffles', type:'veg', img:'waffel1.jpg' },
    { name:'OB KitKat Waffle', price:125, cat:'waffles', type:'veg', img:'waffel2.jpg' },
    { name:'Strawberry Chocolate Waffle', price:125, cat:'waffles', type:'veg', img:'waffel.jpg' },

    // DESSERTS
    { name:'Ice Cream', price:65, cat:'desserts', type:'veg', img:'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?q=80&w=500' },
    { name:'Choco Lava Cake', price:70, cat:'desserts', type:'veg', img:'lava.jpg' },
    { name:'Choco Lava with Ice Cream', price:100, cat:'desserts', type:'veg', img:'lava2.jpg' },
    { name:'Hot Chocolate Sundae', price:125, cat:'desserts', type:'veg', img:'lava1.jpg' },

    // WRAPS
    { name:'OB Cheese Potato Wrap', price:120, cat:'wraps', type:'veg', img:'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=500' },
    { name:'OB Paneer Wrap', price:155, cat:'wraps', type:'veg', img:'wrap1.jpg' },
    { name:'OB Chicken Wrap', price:165, cat:'wraps', type:'nonveg', img:'wrap2.jpg' },
    { name:'OB Chicken Special Wrap', price:200, cat:'wraps', type:'nonveg', img:'wrap3.jpg' },

    // SANDWICHES
    { name:'OB Cheese Cottage', price:70, cat:'sandwiches', type:'veg', img:'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=500' },
    { name:'OB Paneer Peppery', price:90, cat:'sandwiches', type:'veg', img:'sandwiche1.jpg' },
    { name:'OB Veggie Spanish', price:105, cat:'sandwiches', type:'veg', img:'sandwiche2.jpg' },
    { name:'OB Chicken Cottage', price:85, cat:'sandwiches', type:'nonveg', img:'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=500' },
    { name:'OB Chicken Peppery', price:105, cat:'sandwiches', type:'nonveg', img:'sandwiche3.jpg' },

    // SNACKS
    { name:'Crazy Masala Fries', price:85, cat:'snacks', type:'veg', img:'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=500' },
    { name:'Cheese Balls', price:100, cat:'snacks', type:'veg', img:'chball.jpg' },
    { name:'Paneer Balls', price:130, cat:'snacks', type:'veg', img:'ball.jpg' },
    { name:'Chicken Balls', price:135, cat:'snacks', type:'nonveg', img:'cball.jpg' },
    { name:'Chicken Nuggets', price:160, cat:'snacks', type:'nonveg', img:'https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=500' },

    // CHICKEN BUCKET
    { name:'2 Pieces', price:195, cat:'bucket', type:'nonveg', img:'2.jpg' },
    { name:'5 Pieces', price:420, cat:'bucket', type:'nonveg', img:'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=500' },
    { name:'9 Pieces', price:699, cat:'bucket', type:'nonveg', img:'9.jpg' },

    // PASTA, SALADS, CHEESY LOAF — placeholder items so every advertised category has dishes
    { name:'OB White Sauce Pasta', price:160, cat:'pasta', type:'veg', img:'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=500' },
    { name:'OB Red Sauce Pasta', price:160, cat:'pasta', type:'veg', img:'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=500' },
    { name:'OB Chicken Pasta', price:190, cat:'pasta', type:'nonveg', img:'pasta.jpg' },
    { name:'OB Garden Salad', price:110, cat:'salads', type:'veg', img:'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=500' },
    { name:'OB Caesar Salad', price:150, cat:'salads', type:'nonveg', img:'https://images.unsplash.com/photo-1546793665-c74683f339c1?q=80&w=500' },
    { name:'OB Cheesy Garlic Loaf', price:140, cat:'loaf', type:'veg', img:'lob1.jpg' },
    { name:'OB Cheesy Chicken Loaf', price:175, cat:'loaf', type:'nonveg', img:'lob2.jpg' },
  ];

  /* ---------- Render menu ---------- */
  const menuGrid = document.getElementById('menuGrid');
  const menuEmpty = document.getElementById('menuEmpty');

  const renderMenu = (items) => {
    menuGrid.innerHTML = '';
    if (!items.length) {
      menuEmpty.hidden = false;
      return;
    }
    menuEmpty.hidden = true;
    items.forEach((item, i) => {
      const card = document.createElement('div');
      card.className = 'menu-card';
      card.dataset.cat = item.cat;
      card.setAttribute('data-aos', 'fade-up');
      card.setAttribute('data-aos-delay', String((i % 4) * 80));
      card.innerHTML = `
        <div class="menu-card-img">
          <img src="${item.img || FOOD_IMG[item.cat] || FOOD_IMG.snacks}" alt="${item.name}" loading="lazy">
          <span class="menu-card-tag ${item.type === 'veg' ? 'tag-veg' : 'tag-nonveg'}">
            ${item.type === 'veg' ? '● Veg' : '● Non-Veg'}
          </span>
        </div>
        <div class="menu-card-body">
          <h3>${item.name}</h3>
          <div class="menu-card-footer">
            <span class="menu-price">₹${item.price}</span>
            <button class="order-btn">Order Now</button>
          </div>
        </div>`;
      menuGrid.appendChild(card);
    });
    if (window.AOS) AOS.refreshHard();
  };

  /* ---------- Menu Sidebar System ---------- */
  const categoryNav = document.getElementById('categoryNav');
  const currentCategoryTitle = document.getElementById('currentCategoryTitle');
  const typeFilters = document.getElementById('typeFilters');
  const mobileCategoryToggle = document.getElementById('mobileCategoryToggle');
  const menuSidebar = document.getElementById('menuSidebar');
  const sidebarClose = document.getElementById('sidebarClose');
  
  let currentCategory = 'burgers';
  let currentTypeFilter = 'all';

  const categoryConfig = {
    burgers: { name: 'Burgers', icon: 'fa-burger', hasSubcategories: true },
    pizza: { name: 'Pizza', icon: 'fa-pizza-slice', hasSubcategories: true },
    wraps: { name: 'Wraps', icon: 'fa-burrito', hasSubcategories: true },
    sandwiches: { name: 'Sandwiches', icon: 'fa-bread-slice', hasSubcategories: true },
    pasta: { name: 'Pasta', icon: 'fa-utensils', hasSubcategories: true },
    waffles: { name: 'Waffles', icon: 'fa-ice-cream', hasSubcategories: false },
    desserts: { name: 'Desserts', icon: 'fa-cookie', hasSubcategories: false },
    drinks: { name: 'Drinks', icon: 'fa-mug-hot', hasSubcategories: false },
    bucket: { name: 'Chicken Bucket', icon: 'fa-drumstick-bite', hasSubcategories: false },
    snacks: { name: 'Snacks', icon: 'fa-fire', hasSubcategories: true },
    salads: { name: 'Salads', icon: 'fa-leaf', hasSubcategories: true },
    loaf: { name: 'Cheesy Loaf', icon: 'fa-cheese', hasSubcategories: true }
  };

  // Count items per category
  const getCategoryCounts = (cat) => {
    const items = menuData.filter(item => item.cat === cat);
    const veg = items.filter(item => item.type === 'veg').length;
    const nonveg = items.filter(item => item.type === 'nonveg').length;
    return { total: items.length, veg, nonveg };
  };

  // Build category sidebar
  const buildCategoryNav = () => {
    categoryNav.innerHTML = '';
    
    Object.keys(categoryConfig).forEach(cat => {
      const config = categoryConfig[cat];
      const counts = getCategoryCounts(cat);
      
      const categoryItem = document.createElement('div');
      categoryItem.className = 'category-item';
      categoryItem.dataset.category = cat;
      
      categoryItem.innerHTML = `
        <div class="category-name">
          <i class="category-icon fa-solid ${config.icon}"></i>
          <span>${config.name}</span>
          <span class="category-count">${counts.total}</span>
        </div>
      `;
      
      // Add subcategories if applicable
      if (config.hasSubcategories && (counts.veg > 0 || counts.nonveg > 0)) {
        const subcategoryList = document.createElement('div');
        subcategoryList.className = 'subcategory-list';
        
        if (counts.veg > 0) {
          const vegItem = document.createElement('div');
          vegItem.className = 'subcategory-item';
          vegItem.dataset.category = cat;
          vegItem.dataset.type = 'veg';
          vegItem.innerHTML = `
            <i class="fa-solid fa-circle" style="font-size: 6px; color: #7FD17A;"></i>
            <span>Veg</span>
            <span class="sub-count">${counts.veg}</span>
          `;
          subcategoryList.appendChild(vegItem);
        }
        
        if (counts.nonveg > 0) {
          const nonvegItem = document.createElement('div');
          nonvegItem.className = 'subcategory-item';
          nonvegItem.dataset.category = cat;
          nonvegItem.dataset.type = 'nonveg';
          nonvegItem.innerHTML = `
            <i class="fa-solid fa-circle" style="font-size: 6px; color: #FF8A65;"></i>
            <span>Non-Veg</span>
            <span class="sub-count">${counts.nonveg}</span>
          `;
          subcategoryList.appendChild(nonvegItem);
        }
        
        categoryItem.appendChild(subcategoryList);
      }
      
      categoryNav.appendChild(categoryItem);
    });
  };

  buildCategoryNav();

  // Category click handler
  categoryNav.addEventListener('click', (e) => {
    const categoryItem = e.target.closest('.category-item');
    const subcategoryItem = e.target.closest('.subcategory-item');
    
    if (subcategoryItem) {
      // Handle subcategory click
      const cat = subcategoryItem.dataset.category;
      const type = subcategoryItem.dataset.type;
      
      // Update active states
      categoryNav.querySelectorAll('.subcategory-item').forEach(item => item.classList.remove('active'));
      subcategoryItem.classList.add('active');
      
      // Update category
      currentCategory = cat;
      currentTypeFilter = type;
      
      // Update title
      currentCategoryTitle.textContent = categoryConfig[cat].name;
      
      // Update filter buttons
      typeFilters.querySelectorAll('.type-filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.type === type);
      });
      
      // Render items with animation
      renderCategoryItems();
      
      // Close sidebar on mobile
      if (window.innerWidth <= 768) {
        menuSidebar.classList.remove('open');
      }
      
      return;
    }
    
    if (categoryItem) {
      // Handle main category click
      const cat = categoryItem.dataset.category;
      const config = categoryConfig[cat];
      
      // Update active states
      categoryNav.querySelectorAll('.category-item').forEach(item => item.classList.remove('active'));
      categoryItem.classList.add('active');
      categoryNav.querySelectorAll('.subcategory-item').forEach(item => item.classList.remove('active'));
      
      // Toggle accordion
      const subcategoryList = categoryItem.querySelector('.subcategory-list');
      if (subcategoryList) {
        const isOpen = subcategoryList.classList.contains('open');
        
        // Close all other accordions
        categoryNav.querySelectorAll('.subcategory-list').forEach(list => list.classList.remove('open'));
        
        if (!isOpen) {
          subcategoryList.classList.add('open');
        }
      }
      
      // Update category
      currentCategory = cat;
      currentTypeFilter = 'all';
      
      // Update title
      currentCategoryTitle.textContent = config.name;
      
      // Update filter buttons
      typeFilters.querySelectorAll('.type-filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.type === 'all');
      });
      
      // Render items with animation
      renderCategoryItems();
      
      // Close sidebar on mobile
      if (window.innerWidth <= 768) {
        menuSidebar.classList.remove('open');
      }
    }
  });

  // Mobile drawer toggle
  mobileCategoryToggle.addEventListener('click', () => {
    menuSidebar.classList.toggle('open');
  });
  
  sidebarClose.addEventListener('click', () => {
    menuSidebar.classList.remove('open');
  });

  // Type filter handlers with GSAP animation
  typeFilters.querySelectorAll('.type-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      typeFilters.querySelectorAll('.type-filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentTypeFilter = btn.dataset.type;
      
      // Update subcategory active states
      categoryNav.querySelectorAll('.subcategory-item').forEach(item => {
        item.classList.toggle('active', item.dataset.type === currentTypeFilter && item.dataset.category === currentCategory);
      });
      
      // Animate menu grid transition
      gsap.to('#menuGrid', {
        opacity: 0,
        y: 20,
        duration: 0.3,
        onComplete: () => {
          renderCategoryItems();
          gsap.to('#menuGrid', {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.05
          });
        }
      });
    });
  });

  const renderCategoryItems = () => {
    const filtered = menuData.filter(item => {
      const matchesCat = item.cat === currentCategory;
      const matchesType = currentTypeFilter === 'all' || item.type === currentTypeFilter;
      return matchesCat && matchesType;
    });
    
    renderMenu(filtered);
  };

  // Initialize with first category
  const firstCategoryItem = categoryNav.querySelector('.category-item');
  if (firstCategoryItem) {
    firstCategoryItem.classList.add('active');
    currentCategoryTitle.textContent = categoryConfig['burgers'].name;
    renderCategoryItems();
  }

  /* ---------- Order button (demo behaviour) ---------- */
  menuGrid.addEventListener('click', (e) => {
    const btn = e.target.closest('.order-btn');
    if (!btn) return;
    const name = btn.closest('.menu-card').querySelector('h3').textContent;
    btn.textContent = 'Added ✓';
    btn.style.background = 'var(--amber)';
    btn.style.color = '#15110D';
    setTimeout(() => {
      btn.textContent = 'Order Now';
      btn.style.background = '';
      btn.style.color = '';
    }, 1500);
    console.log(`Order requested: ${name}`);
  });

  /* =========================================================
     GALLERY
  ========================================================= */
  const galleryImages = [
    { src:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=700', big:true },
    { src:'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=700' },
    { src:'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=700' },
    { src:'waffel3.jpg', big:true },
    { src:'https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=700', big:true },
    { src:'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=700' },
    { src:'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=700' },
    { src:'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=700' },
  ];

  const galleryGrid = document.getElementById('galleryGrid');
  galleryImages.forEach((g, i) => {
    const div = document.createElement('div');
    div.className = `masonry-item ${g.big ? 'span-2' : ''}`;
    div.setAttribute('data-aos', 'zoom-in');
    div.setAttribute('data-aos-delay', String((i % 4) * 70));
    div.innerHTML = `<img src="${g.src}" alt="One Bite dish ${i + 1}" loading="lazy">`;
    galleryGrid.appendChild(div);
  });

  /* ---------- Lightbox ---------- */
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');

  galleryGrid.addEventListener('click', (e) => {
    const item = e.target.closest('.masonry-item');
    if (!item) return;
    const img = item.querySelector('img');
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add('open');
  });

  const closeLightbox = () => lightbox.classList.remove('open');
  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });

  /* ---------- Smooth scroll for in-page links ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const navOffset = navbar.offsetHeight;
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - navOffset + 1,
        behavior: 'smooth'
      });
    });
  });

});
