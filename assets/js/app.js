// DOM Elements
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const recipesGrid = document.getElementById('recipesGrid');
const categoryFilter = document.getElementById('categoryFilter');
const cuisineFilter = document.getElementById('cuisineFilter');
const timeFilter = document.getElementById('timeFilter');

// State
let filteredRecipes = [...recipes];
let activeFilters = {
    category: '',
    cuisine: '',
    time: ''
};

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    displayRecipes(recipes);
    setupEventListeners();
});

// Event Listeners
function setupEventListeners() {
    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') handleSearch();
    });

    // Add event listeners for select elements
    categoryFilter.addEventListener('change', handleFilters);
    cuisineFilter.addEventListener('change', handleFilters);
    timeFilter.addEventListener('change', handleFilters);
}

// Search Handler
function handleSearch() {
    applyFilters();
}

// Filter Handler
function handleFilters() {
    activeFilters.category = categoryFilter.value;
    activeFilters.cuisine = cuisineFilter.value;
    activeFilters.time = timeFilter.value;

    applyFilters();
}

// Apply Filters
function applyFilters() {
    let results = [...recipes];

    // Apply search filter if search term exists
    const searchTerm = searchInput.value.toLowerCase().trim();
    if (searchTerm) {
        results = results.filter(recipe => {
            return recipe.title.toLowerCase().includes(searchTerm) ||
                   recipe.ingredients.some(ingredient => 
                       ingredient.toLowerCase().includes(searchTerm)
                   );
        });
    }

    // Apply category filter
    if (activeFilters.category) {
        results = results.filter(recipe => 
            recipe.category === activeFilters.category
        );
    }

    // Apply cuisine filter
    if (activeFilters.cuisine) {
        results = results.filter(recipe => 
            recipe.cuisine === activeFilters.cuisine
        );
    }

    // Apply time filter
    if (activeFilters.time) {
        switch (activeFilters.time) {
            case 'quick': // 30 mins
                results = results.filter(recipe => recipe.cookingTime <= 30);
                break;
            case 'medium': // 30-60 mins
                results = results.filter(recipe => recipe.cookingTime > 30 && recipe.cookingTime <= 60);
                break;
            case 'long': // 60 mins and above
                results = results.filter(recipe => recipe.cookingTime > 60);
                break;
            default:
                // No time filter applied
                break;
        }
    }

    displayRecipes(results);
}

// Display Recipes
function displayRecipes(recipesToShow) {
    recipesGrid.innerHTML = '';
    
    if (recipesToShow.length === 0) {
        recipesGrid.innerHTML = '<div class="no-results">No recipes found. Try different search terms or filters.</div>';
        return;
    }

    recipesToShow.forEach(recipe => {
        const recipeCard = createRecipeCard(recipe);
        recipesGrid.appendChild(recipeCard);
    });
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
            <p class="recipe-description">${recipe.description}</p>
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
            background-color: rgba(0, 0, 0, 0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
        }
        .modal-content {
            background-color: white;
            padding: 2rem;
            border-radius: 8px;
            max-width: 800px;
            width: 90%;
            max-height: 90vh;
            overflow-y: auto;
        }
        .close-modal {
            float: right;
            font-size: 1.5rem;
            cursor: pointer;
        }
        .modal-image {
            width: 100%;
            height: 300px;
            object-fit: cover;
            border-radius: 8px;
            margin-bottom: 1rem;
        }
        .recipe-meta {
            display: flex;
            gap: 1rem;
            margin: 1rem 0;
            color: #666;
        }
        .recipe-description {
            margin: 1rem 0;
            color: #444;
            font-style: italic;
        }
        .recipe-sections {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            margin-top: 2rem;
        }
        @media (max-width: 768px) {
            .recipe-sections {
                grid-template-columns: 1fr;
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