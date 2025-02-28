// DOM Elements
const welcomeOverlay = document.querySelector('.welcome-overlay');
const featuredRecipesGrid = document.getElementById('featuredRecipes');
const aboutLink = document.querySelector('a[href="#about"]');
const recipesLink = document.querySelector('.recipes-link');
const aboutSection = document.getElementById('about');

// Check if the user has already seen the welcome animation
const hasSeenWelcome = localStorage.getItem('hasSeenWelcome');

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Only show the welcome animation if the user hasn't seen it before
    if (!hasSeenWelcome && welcomeOverlay) {
        welcomeOverlay.style.display = 'flex';
        setTimeout(() => {
            welcomeOverlay.style.animation = 'welcomeOverlayFade 1.5s ease-in-out forwards';
        }, 500);

        // Set the flag in local storage to indicate the user has seen the animation
        localStorage.setItem('hasSeenWelcome', 'true');
    } else {
        // If the user has already seen the animation, hide the overlay immediately
        if (welcomeOverlay) {
            welcomeOverlay.style.display = 'none';
        }
    }

    // Other initialization logic
    displayFeaturedRecipes();
    setupScrollBehavior();
    setupScrollAnimations();
    setupRecipesTransition();
});

// Setup Smooth Scroll
function setupScrollBehavior() {
    if (aboutLink) {
        aboutLink.addEventListener('click', (e) => {
            e.preventDefault();
            const aboutSection = document.querySelector('#about');
            const headerHeight = document.querySelector('header').offsetHeight;
            const aboutPosition = aboutSection.offsetTop - headerHeight;

            window.scrollTo({
                top: aboutPosition,
                behavior: 'smooth'
            });
        });
    }
}

// Setup Scroll Animations
function setupScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Add initial styles for fade-in elements
    const fadeElements = document.querySelectorAll('.about-content, .feature, .recipe-card');
    fadeElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(element);
    });
}

// Display Featured Recipes
function displayFeaturedRecipes() {
    if (featuredRecipesGrid) {
        // Select 3 featured recipes (you can modify this logic to feature specific recipes)
        const featuredRecipes = recipes.slice(0, 3);

        featuredRecipes.forEach((recipe, index) => {
            const recipeCard = createRecipeCard(recipe);
            recipeCard.style.animationDelay = `${index * 0.2}s`;
            featuredRecipesGrid.appendChild(recipeCard);
        });
    }
}

// Create Recipe Card
function createRecipeCard(recipe) {
    const card = document.createElement('div');
    card.className = 'recipe-card';

    const ratingStars = '★'.repeat(Math.floor(recipe.rating)) + 
                       '☆'.repeat(5 - Math.floor(recipe.rating));

    card.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image">
        <div class="recipe-content">
            <h3 class="recipe-title">${recipe.title}</h3>
            <div class="recipe-info">
                <span>${recipe.category} • ${recipe.cookingTime} mins • ${recipe.cuisine}</span>
                <span class="recipe-rating" title="${recipe.rating} out of 5 stars">
                    ${ratingStars}
                </span>
            </div>
            <p class="recipe-description">${recipe.description}</p>
        </div>
    `;

    // Add click event to show recipe details
    card.addEventListener('click', () => showRecipeDetails(recipe));

    return card;
}

// Show Recipe Details
function showRecipeDetails(recipe) {
    const modal = document.createElement('div');
    modal.className = 'recipe-modal';

    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <img src="${recipe.image}" alt="${recipe.title}" class="modal-image">
            <h2>${recipe.title}</h2>
            <div class="recipe-rating">${'★'.repeat(Math.floor(recipe.rating))}${'☆'.repeat(5 - Math.floor(recipe.rating))}</div>
            <div class="recipe-meta">
                <span>Category: ${recipe.category}</span>
                <span>Cooking Time: ${recipe.cookingTime} mins</span>
            </div>
            <div class="recipe-sections">
                <div class="ingredients">
                    <h3>Ingredients</h3>
                    <ul>${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}</ul>
                </div>
                <div class="instructions">
                    <h3>Instructions</h3>
                    <ol>${recipe.instructions.map(step => `<li>${step}</li>`).join('')}</ol>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Add modal styles dynamically
    const modalStyles = document.createElement('style');
    modalStyles.textContent = `
        .recipe-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
            backdrop-filter: blur(5px);
        }
        .modal-content {
            background-color: white;
            padding: 2rem;
            border-radius: 12px;
            max-width: 800px;
            width: 90%;
            max-height: 90vh;
            overflow-y: auto;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            animation: fadeInUp 0.5s ease-out;
        }
        .close-modal {
            float: right;
            font-size: 1.5rem;
            cursor: pointer;
        }
        .close-modal:hover {
            color: #333;
        }
        .modal-image {
            width: 100%;
            height: 300px;
            object-fit: cover;
            border-radius: 8px;
            margin-bottom: 1.5rem;
        }
        .modal-content h2 {
            font-size: 2rem;
            margin-bottom: 1rem;
            color: #2c3e50;
        }
        .recipe-rating {
            font-size: 1.2rem;
            color: #f1c40f;
            margin-bottom: 1rem;
        }
        .recipe-meta {
            display: flex;
            gap: 1rem;
            margin-bottom: 1.5rem;
            color: #666;
            font-size: 0.9rem;
        }
        .recipe-sections {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            margin-top: 1.5rem;
        }
        .recipe-sections h3 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
            color: #2c3e50;
        }
        .ingredients ul,
        .instructions ol {
            padding-left: 1.5rem;
            color: #444;
        }
        .ingredients li,
        .instructions li {
            margin-bottom: 0.5rem;
            line-height: 1.6;
        }
        @media (max-width: 768px) {
            .recipe-sections {
                grid-template-columns: 1fr;
            }
            .modal-content {
                padding: 1.5rem;
            }
            .modal-image {
                height: 200px;
            }
            .modal-content h2 {
                font-size: 1.8rem;
            }
            .recipe-sections h3 {
                font-size: 1.3rem;
            }
        }
    `;
    document.head.appendChild(modalStyles);

    // Close modal functionality
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(modal);
        document.head.removeChild(modalStyles);
    });

    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
            document.head.removeChild(modalStyles);
        }
    });
}

// Disable animations during page transitions
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.add('no-animations');
    });
});

// Remove the no-animations class once the page has loaded
window.addEventListener('load', () => {
    document.body.classList.remove('no-animations');
});