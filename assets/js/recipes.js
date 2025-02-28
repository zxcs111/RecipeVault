const recipes = [
    {
        id: 1,
        title: "Classic Spaghetti Carbonara",
        category: "Dinner",
        cuisine: "Italian",
        cookingTime: 45,
        image: "assets/images/classic-spag.jpg",
        rating: 4.8,
        description: "A creamy and indulgent Italian pasta dish made with eggs, cheese, pancetta, and black pepper. Perfect for a cozy dinner!".padEnd(150, " ").substring(0, 150),
        ingredients: [
            "400g spaghetti",
            "200g pancetta",
            "4 large eggs",
            "100g Pecorino Romano",
            "100g Parmigiano Reggiano",
            "Black pepper"
        ],
        instructions: [
            "Cook pasta in salted water",
            "Fry pancetta until crispy",
            "Mix eggs and cheese",
            "Combine all ingredients"
        ]
    },
    {
        id: 2,
        title: "Avocado Toast",
        category: "Breakfast",
        cuisine: "American",
        cookingTime: 10,
        image: "assets/images/avocado-toast.png",
        rating: 4.5,
        description: "A simple yet delicious breakfast option featuring creamy avocado on toasted bread, seasoned with salt, egg, pepper, and a dash of red pepper flakes.".padEnd(150, " ").substring(0, 150),
        ingredients: [
            "2 slices bread",
            "1 ripe avocado",
            "Salt and pepper",
            "Red pepper flakes",
            "Olive oil"
        ],
        instructions: [
            "Toast bread",
            "Mash avocado",
            "Season and spread on toast"
        ]
    },
    {
        id: 3,
        title: "Chocolate Chip Cookies",
        category: "Dessert",
        cuisine: "American",
        cookingTime: 30,
        image: "assets/images/cookies.png",
        rating: 4.9,
        description: "Soft and chewy cookies loaded with chocolate chips. A classic treat that's perfect for any occasion!".padEnd(150, " ").substring(0, 150),
        ingredients: [
            "2 1/4 cups flour",
            "1 cup butter",
            "3/4 cup sugar",
            "3/4 cup brown sugar",
            "2 eggs",
            "Chocolate chips"
        ],
        instructions: [
            "Cream butter and sugars",
            "Add eggs and vanilla",
            "Mix in dry ingredients",
            "Bake at 375°F"
        ]
    },
    {
        id: 4,
        title: "Chicken Caesar Salad",
        category: "Lunch",
        cuisine: "American",
        cookingTime: 20,
        image: "assets/images/chicken-caesar-salad.jpg", // Updated path
        rating: 4.6,
        description: "A refreshing and protein-packed salad featuring grilled chicken, crisp romaine lettuce, Parmesan cheese, and crunchy croutons, all tossed in a creamy Caesar dressing.".padEnd(150, " ").substring(0, 150),
        ingredients: [
            "Romaine lettuce",
            "Grilled chicken breast",
            "Parmesan cheese",
            "Croutons",
            "Caesar dressing"
        ],
        instructions: [
            "Grill chicken and slice",
            "Chop lettuce",
            "Combine ingredients",
            "Toss with dressing"
        ]
    },
    {
        id: 5,
        title: "Beef Tacos",
        category: "Dinner",
        cuisine: "Mexican",
        cookingTime: 25,
        image: "assets/images/beef-tacos.jpg", // Updated path
        rating: 4.7,
        description: "Flavorful beef tacos with seasoned ground beef, fresh veggies, and a squeeze of lime. Perfect for a quick and tasty dinner!".padEnd(150, " ").substring(0, 150),
        ingredients: [
            "500g ground beef",
            "1 packet taco seasoning",
            "8 small tortillas",
            "1 cup shredded lettuce",
            "1 cup diced tomatoes",
            "1/2 cup shredded cheese",
            "1/4 cup sour cream",
            "Lime wedges"
        ],
        instructions: [
            "Cook ground beef in a skillet",
            "Add taco seasoning and water, simmer",
            "Warm tortillas",
            "Assemble tacos with beef, lettuce, tomatoes, cheese, and sour cream",
            "Serve with lime wedges"
        ]
    },
    {
        id: 6,
        title: "Pancakes",
        category: "Breakfast",
        cuisine: "American",
        cookingTime: 20,
        image: "assets/images/pancake.jpeg", // Updated path
        rating: 4.8,
        description: "Fluffy and golden pancakes served with maple syrup and butter. A classic breakfast favorite for the whole family!".padEnd(150, " ").substring(0, 150),
        ingredients: [
            "1 1/2 cups flour",
            "3 1/2 tsp baking powder",
            "1 tsp salt",
            "1 tbsp sugar",
            "1 1/4 cups milk",
            "1 egg",
            "3 tbsp melted butter",
            "Maple syrup and butter for serving"
        ],
        instructions: [
            "Mix dry ingredients in a bowl",
            "Add milk, egg, and melted butter, whisk until smooth",
            "Heat a griddle or skillet over medium heat",
            "Pour batter onto the griddle, cook until bubbles form",
            "Flip and cook until golden brown",
            "Serve with maple syrup and butter"
        ]
    },
    {
        id: 7,
        title: "Cheesecake",
        category: "Dessert",
        cuisine: "American",
        cookingTime: 60,
        image: "assets/images/cheesecake.jpg", // Updated path
        rating: 4.9,
        description: "Creamy and decadent cheesecake with a graham cracker crust. A perfect dessert for any special occasion!".padEnd(150, " ").substring(0, 150),
        ingredients: [
            "2 cups graham cracker crumbs",
            "1/2 cup melted butter",
            "4 packages cream cheese",
            "1 cup sugar",
            "1 tsp vanilla extract",
            "4 eggs",
            "1 cup sour cream"
        ],
        instructions: [
            "Mix graham cracker crumbs and butter, press into a pan",
            "Beat cream cheese, sugar, and vanilla until smooth",
            "Add eggs one at a time, then mix in sour cream",
            "Pour filling into crust",
            "Bake at 325°F for 50-60 minutes",
            "Chill before serving"
        ]
    },
    {
        id: 8,
        title: "Grilled Salmon",
        category: "Dinner",
        cuisine: "Mediterranean",
        cookingTime: 20,
        image: "assets/images/grilled-salmon.jpg", // Updated path
        rating: 4.7,
        description: "Juicy grilled salmon fillets with a lemon-butter glaze. A healthy and delicious dinner option!".padEnd(150, " ").substring(0, 150),
        ingredients: [
            "4 salmon fillets",
            "2 tbsp olive oil",
            "2 tbsp lemon juice",
            "2 cloves garlic, minced",
            "Salt and pepper",
            "Fresh dill for garnish"
        ],
        instructions: [
            "Preheat grill to medium-high heat",
            "Mix olive oil, lemon juice, garlic, salt, and pepper",
            "Brush mixture onto salmon fillets",
            "Grill salmon for 4-5 minutes per side",
            "Garnish with fresh dill and serve"
        ]
    },
    {
        id: 9,
        title: "Beef Bulgogi",
        category: "Dinner",
        cuisine: "Asian",
        cookingTime: 25,
        image: "assets/images/beef-bulgogi.jpg", // Updated path
        rating: 4.7,
        description: "Korean marinated beef with sweet-savory flavors, grilled to perfection. Traditionally served with lettuce wraps and ssamjang.".padEnd(150, " ").substring(0, 150),
        ingredients: [
            "500g ribeye steak",
            "1/2 Asian pear (grated)",
            "4 tbsp soy sauce",
            "2 tbsp sesame oil",
            "1 tbsp gochujang",
            "2 tbsp brown sugar",
            "1 tbsp sesame seeds",
            "4 garlic cloves (minced)"
        ],
        instructions: [
            "Slice beef thinly against the grain",
            "Mix marinade ingredients",
            "Marinate beef for 1 hour",
            "Grill or pan-fry until caramelized",
            "Garnish with sesame seeds"
        ]
    },
    {
        id: 10,
        title: "Sushi Rolls",
        category: "Lunch",
        cuisine: "Asian",
        cookingTime: 45,
        image: "assets/images/sushi-rolls.jpg", // Updated path
        rating: 4.9,
        description: "Classic Japanese maki rolls with fresh fish, crisp vegetables, and seasoned sushi rice. Perfect with pickled ginger and wasabi.".padEnd(150, " ").substring(0, 150),
        ingredients: [
            "2 cups sushi rice",
            "4 nori sheets",
            "200g fresh tuna/salmon",
            "1 cucumber (julienned)",
            "1 avocado (sliced)",
            "Rice vinegar",
            "Soy sauce",
            "Wasabi"
        ],
        instructions: [
            "Cook and season sushi rice",
            "Spread rice on nori sheet",
            "Add fillings and roll tightly",
            "Slice with sharp knife",
            "Serve with soy sauce and wasabi"
        ]
    },
    {
        id: 11,
        title: "Pork Adobo",
        category: "Dinner",
        cuisine: "Asian",
        cookingTime: 90,
        image: "assets/images/pork-adobo.jpg", // Updated path
        rating: 4.8,
        description: "A classic Filipino dish made with chicken or pork marinated in soy sauce, vinegar, garlic, and spices. Slow-cooked to perfection for a savory and tangy flavor.".padEnd(150, " ").substring(0, 150),
        ingredients: [
            "1 kg chicken or pork",
            "1/2 cup soy sauce",
            "1/2 cup vinegar",
            "6 cloves garlic (minced)",
            "2 bay leaves",
            "1 tsp black peppercorns",
            "1 cup water"
        ],
        instructions: [
            "Marinate meat in soy sauce, vinegar, garlic, and spices for 30 minutes",
            "Transfer to a pot and add water",
            "Simmer on low heat for 1 hour or until tender",
            "Serve with steamed rice"
        ]
    },
    {
        id: 12,
        title: "Sinigang",
        category: "Dinner",
        cuisine: "Asian",
        cookingTime: 75,
        image: "assets/images/sinigang.jpg", // Updated path
        rating: 4.7,
        description: "A sour and savory Filipino soup made with tamarind, vegetables, and your choice of meat (pork, shrimp, or fish). A comforting dish perfect for rainy days.".padEnd(150, " ").substring(0, 150),
        ingredients: [
            "500g pork ribs or shrimp",
            "1 packet tamarind soup base",
            "1 radish (sliced)",
            "1 eggplant (sliced)",
            "1 bunch kangkong (water spinach)",
            "2 tomatoes (quartered)",
            "1 onion (sliced)",
            "2 green chilies"
        ],
        instructions: [
            "Boil meat in water until tender",
            "Add tamarind soup base and vegetables",
            "Simmer until vegetables are cooked",
            "Serve hot with steamed rice"
        ]
    },
    {
        id: 13,
        title: "Beef Bourguignon",
        category: "Dinner",
        cuisine: "French",
        cookingTime: 180,
        image: "assets/images/beef-bourguignon.jpg", // Updated path
        rating: 4.9,
        description: "A rich and hearty French stew made with beef, red wine, mushrooms, and onions. Slow-cooked for hours to develop deep, complex flavors.".padEnd(150, " ").substring(0, 150),
        ingredients: [
            "1 kg beef chuck (cubed)",
            "2 cups red wine",
            "2 cups beef broth",
            "200g bacon (diced)",
            "200g mushrooms (sliced)",
            "2 onions (sliced)",
            "4 carrots (sliced)",
            "4 garlic cloves (minced)",
            "2 tbsp tomato paste",
            "2 tbsp flour",
            "2 bay leaves",
            "1 tsp thyme"
        ],
        instructions: [
            "Brown beef and bacon in a pot",
            "Add onions, garlic, and carrots, cook until softened",
            "Stir in flour and tomato paste",
            "Add wine, broth, and herbs, bring to a simmer",
            "Cook in the oven at 325°F for 2-3 hours",
            "Add mushrooms and cook for another 30 minutes",
            "Serve with crusty bread or mashed potatoes"
        ]
    },
    {
        id: 14,
        title: "Lasagna",
        category: "Dinner",
        cuisine: "Italian",
        cookingTime: 90,
        image: "assets/images/lasagna.png", // Updated path
        rating: 4.8,
        description: "Layers of pasta, rich meat sauce, creamy béchamel, and melted cheese baked to perfection. A crowd-pleasing Italian classic!".padEnd(150, " ").substring(0, 150),
        ingredients: [
            "12 lasagna sheets",
            "500g ground beef",
            "1 onion (chopped)",
            "4 garlic cloves (minced)",
            "2 cups tomato sauce",
            "2 cups béchamel sauce",
            "2 cups mozzarella cheese",
            "1/2 cup Parmesan cheese",
            "1 tsp oregano",
            "1 tsp basil",
            "Salt and pepper"
        ],
        instructions: [
            "Cook lasagna sheets according to package instructions",
            "Brown beef with onions and garlic, add tomato sauce and herbs",
            "Layer lasagna sheets, meat sauce, béchamel, and cheese in a baking dish",
            "Repeat layers and top with cheese",
            "Bake at 375°F for 45 minutes or until golden and bubbly",
            "Let rest for 10 minutes before serving"
        ]
    },
    {
        id: 15,
        title: "Bibimbap",
        category: "Lunch",
        cuisine: "Korean",
        cookingTime: 60,
        image: "assets/images/bibimbap.jpg", // Updated path
        rating: 4.7,
        description: "A colorful Korean rice bowl topped with assorted vegetables, marinated beef, and a fried egg, served with spicy gochujang sauce.".padEnd(150, " ").substring(0, 150),
        ingredients: [
            "2 cups cooked rice",
            "200g beef (thinly sliced)",
            "1 carrot (julienned)",
            "1 zucchini (julienned)",
            "1 cup spinach",
            "1 cup bean sprouts",
            "2 eggs",
            "2 tbsp gochujang",
            "1 tbsp sesame oil",
            "1 tbsp soy sauce",
            "1 tbsp sesame seeds"
        ],
        instructions: [
            "Marinate beef in soy sauce, sesame oil, and garlic",
            "Sauté vegetables separately",
            "Cook beef until caramelized",
            "Fry eggs sunny-side up",
            "Assemble rice, vegetables, beef, and egg in a bowl",
            "Top with gochujang and sesame seeds",
            "Mix well before eating"
        ]
    }
];