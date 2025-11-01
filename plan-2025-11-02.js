// Weekly plan with integrated Daily Fuel (momDaily) for breastfeeding mom.
// Week of November 2, 2025

const planData = {
  title: "Weekly Plan",
  meta: {
    weekOf: "2025-11-02",
    notes:
      "7 dinners including weekend split for camping; chai-spiced pumpkin tiramisu test; Daily Fuel active; chicken broth used in multiple meals."
  },

  dailyFuelConfig: {
    enabled: true,
    kcalMode: "auto",
    proteinTargetGPerKg: 1.3,
    breakfastPreference: {
      sausageEggCheeseEnglishMuffin: { enabled: true, targetPerWeek: 4 }
    }
  },

  meals: {
    sunday: {
      id: "sunday",
      title: "Pasta alla Boscaiola (Creamy Mushroom & Sausage Pasta)",
      recipe: {
        summary:
          "Italian sausage, mushrooms, garlic, and Parmesan in a rich cream sauce tossed with rigatoni.",
        yield: "Serves 4",
        prepTime: "10 min",
        cookTime: "25 min",
        ingredients: [
          "8 oz rigatoni or penne",
          "8 oz Italian sausage (casings removed)",
          "8 oz cremini mushrooms, sliced",
          "1 small onion, diced",
          "2 cloves garlic, minced",
          "1/2 cup chicken broth or white wine",
          "3/4 cup heavy cream",
          "1/2 cup grated Parmesan",
          "Olive oil, butter, parsley, salt & pepper"
        ],
        steps: [
          "Cook pasta; reserve 1/2 cup cooking water.",
          "Brown sausage in olive oil; add onion, garlic, and mushrooms.",
          "Deglaze with broth or wine; simmer briefly.",
          "Stir in cream and Parmesan; season to taste.",
          "Toss pasta with sauce, butter, and parsley. Add pasta water if needed."
        ],
        equipment: ["12\" skillet", "Pasta pot"]
      }
    },

    monday: {
      id: "monday",
      title:
        "Pork Chops with Brown Butter Pan Sauce & Roasted Sweet Potatoes + Chai-Spiced Pumpkin Tiramisu Prep",
      recipe: {
        summary:
          "Seared pork chops with thyme-Dijon brown butter sauce, served with roasted sweet potatoes and broccoli.",
        prepTime: "10 min",
        cookTime: "35 min",
        ingredients: [
          "2 pork chops (bone-in)",
          "2 sweet potatoes, cubed",
          "2 cups broccoli florets",
          "1 shallot, minced",
          "1/2 cup chicken broth",
          "2 tbsp butter",
          "1 tsp Dijon mustard",
          "Thyme, olive oil, salt, pepper"
        ],
        steps: [
          "Roast sweet potatoes 20 min at 425°F; add broccoli for last 15 min.",
          "Sear pork chops 3–4 min/side; remove.",
          "Add butter and shallot to pan until fragrant and nutty.",
          "Deglaze with broth and Dijon; reduce slightly.",
          "Return chops to pan to coat in sauce."
        ],
        equipment: ["Sheet pan", "Skillet"]
      },
      dessert: {
        title: "Chai-Spiced Pumpkin Tiramisu (Prep Night)",
        summary:
          "Prepare dessert layers and chill overnight. Enjoy Tuesday evening.",
        ingredients: [
          "1 cup pumpkin purée",
          "1/2 cup mascarpone",
          "1/4 cup sugar",
          "1/2 tsp each cinnamon, ginger, cardamom, clove",
          "Ladyfingers (1 package)",
          "2 cups brewed chai tea (cooled)",
          "Cocoa + nutmeg for dusting"
        ],
        steps: [
          "Whisk pumpkin, mascarpone, sugar, and spices until smooth.",
          "Dip ladyfingers in chai tea; layer with pumpkin cream in dish.",
          "Repeat layers; dust with cocoa + nutmeg. Chill overnight."
        ]
      }
    },

    tuesday: {
      id: "tuesday",
      title: "Creamy Chicken, Spinach & Rice Bake",
      recipe: {
        summary:
          "Comforting baked dish with chicken, spinach, rice, and Parmesan cream sauce.",
        prepTime: "15 min",
        cookTime: "35 min",
        ingredients: [
          "2 cups cooked rice",
          "1 lb chicken thighs, diced",
          "1 small onion, diced",
          "2 cloves garlic, minced",
          "1 cup spinach",
          "1/2 cup mushrooms, optional",
          "1 cup chicken broth",
          "1/2 cup cream",
          "1/4 cup Parmesan"
        ],
        steps: [
          "Sauté onion, garlic, and mushrooms; add broth and cream.",
          "Combine with rice, chicken, spinach, and Parmesan.",
          "Bake 30–35 min at 375°F until bubbly and golden."
        ],
        equipment: ["Skillet", "Baking dish"]
      },
      dessert: {
        title: "Chai-Spiced Pumpkin Tiramisu (Enjoy Night)",
        summary:
          "Serve chilled tiramisu topped with a light dusting of cocoa and nutmeg."
      }
    },

    wednesday: {
      id: "wednesday",
      title: "Swim Lessons (Out)",
      recipe: { summary: "No home cook." }
    },

    thursday: {
      id: "thursday",
      title: "Ground Beef & Veggie Stir-Fry with Garlic-Ginger Rice",
      recipe: {
        summary:
          "Fast stir-fry with ground beef, bell peppers, and snap peas over garlic-ginger rice.",
        prepTime: "10 min",
        cookTime: "20 min",
        ingredients: [
          "1 lb ground beef",
          "2 cups mixed veggies (bell peppers, snap peas)",
          "2 cups cooked rice (in chicken broth)",
          "2 cloves garlic, minced",
          "1 tbsp grated ginger",
          "2 tbsp soy sauce",
          "1 tsp sesame oil"
        ],
        steps: [
          "Cook rice in broth; set aside.",
          "Brown beef; add garlic, ginger, and veggies.",
          "Stir in soy and sesame oil; serve over rice."
        ],
        equipment: ["12\" skillet", "Rice cooker"]
      }
    },

    friday: {
      id: "friday",
      title: "Garlic-Herb Chicken Thighs with Roasted Potatoes & Carrots",
      recipe: {
        summary:
          "Boneless chicken thighs roasted with baby potatoes and carrots in a lemon-herb marinade.",
        prepTime: "10 min",
        cookTime: "35 min",
        ingredients: [
          "1 lb boneless chicken thighs",
          "1 lb baby potatoes, halved",
          "3 carrots, sliced",
          "2 cloves garlic, minced",
          "1 lemon (juice & zest)",
          "2 tbsp olive oil",
          "1 tsp dried herbs (rosemary, thyme, oregano)"
        ],
        steps: [
          "Toss chicken and vegetables in oil, lemon, garlic, and herbs.",
          "Roast 30–35 min at 400°F until golden and cooked through.",
          "Optional: Deglaze with broth for a quick pan sauce."
        ],
        equipment: ["Sheet pan"]
      }
    },

    saturday: {
      id: "saturday",
      title: "Split: Chicken Fajita Soup (Family) / Campfire Steak with Foil Packet Potatoes & Onions (You)",
      recipe: {
        summary:
          "Two-part day: slow cooker soup for home, campfire steak meal for camping trip.",
        familyMeal: {
          title: "Slow Cooker Chicken Fajita Soup",
          ingredients: [
            "1 lb chicken thighs",
            "1 can fire-roasted tomatoes",
            "1 can black beans",
            "1 cup corn",
            "1 bell pepper, sliced",
            "1 onion, diced",
            "4 cups chicken broth",
            "1 tsp chili powder",
            "1 tsp cumin",
            "1/2 tsp smoked paprika",
            "Salt, pepper, lime"
          ],
          steps: [
            "Add all ingredients to slow cooker.",
            "Cook on low 6–8 hrs.",
            "Shred chicken before serving; add lime and toppings."
          ]
        },
        campingMeal: {
          title: "Campfire Steak with Foil Packet Potatoes & Onions",
          ingredients: [
            "1 steak (ribeye or strip, ~8 oz)",
            "2 potatoes, thinly sliced",
            "1/2 onion, sliced",
            "1 tbsp olive oil",
            "Beef seasoning, salt & pepper"
          ],
          steps: [
            "Toss potatoes/onion with oil and seasoning; seal in foil.",
            "Cook foil pack in coals 25–30 min, flipping halfway.",
            "Grill steak over fire to desired doneness; rest and serve together."
          ]
        }
      }
    },

    sunday: {
      id: "sunday",
      title: "Split: Takeout Night (Family) / Cajun Chicken & Rice Foil Packets (You)",
      recipe: {
        summary:
          "Takeout for home; simple foil-packet Cajun meal for camping night two.",
        campingMeal: {
          title: "Cajun Chicken & Rice Foil Packets",
          ingredients: [
            "2 boneless chicken thighs",
            "1/2 cup parboiled rice",
            "1/4 onion, sliced",
            "1/4 bell pepper, sliced",
            "1 tbsp butter or olive oil",
            "1 tsp Cajun seasoning",
            "1/4 tsp garlic powder",
            "Salt & pepper, lime wedge"
          ],
          steps: [
            "Combine all ingredients on foil; seal tightly.",
            "Cook in campfire coals 25–30 min, flipping halfway.",
            "Check rice doneness; serve with lime or drizzle of ranch."
          ]
        }
      }
    }
  },

  momDaily: {
    sunday: { breakfast: "SEC sandwich", lunch: "Turkey sandwich + apple", snackAM: "Boiled eggs + cucumber", snackPM: "Greek yogurt + nuts", kcalEstimate: 2250, proteinEstimate: "100–120 g" },
    monday: { breakfast: "Overnight oats (maple-apple)", lunch: "Leftover pasta", snackAM: "Trail mix + fruit", snackPM: "Cheese stick + lactation bite", kcalEstimate: 2300, proteinEstimate: "95–115 g" },
    tuesday: { breakfast: "SEC sandwich", lunch: "Greek chicken wrap", snackAM: "Cottage cheese + pineapple", snackPM: "Premier Protein shake + popcorn", kcalEstimate: 2150, proteinEstimate: "100–115 g" },
    wednesday: { breakfast: "Overnight oats (cinnamon-pear)", lunch: "Turkey sandwich", snackAM: "Fruit + nuts", snackPM: "Yogurt + granola", kcalEstimate: 2200, proteinEstimate: "95–115 g" },
    thursday: { breakfast: "SEC sandwich", lunch: "Leftover stir-fry", snackAM: "Banana + almonds", snackPM: "Cheese + lactation bites", kcalEstimate: 2250, proteinEstimate: "100–120 g" },
    friday: { breakfast: "Greek yogurt parfait", lunch: "Turkey sandwich", snackAM: "Orange + pistachios", snackPM: "Premier Protein shake + popcorn", kcalEstimate: 2300, proteinEstimate: "100–120 g" },
    saturday: { breakfast: "SEC sandwich", lunch: "Leftover fajita soup", snackAM: "Trail mix + apple", snackPM: "Yogurt + honey", kcalEstimate: 2200, proteinEstimate: "95–115 g" }
  },

  shopping: {
    "🛒 Consolidated Shopping List": {
      lists: {
        "Dairy & Eggs": [
          { text: "Eggs, 2 dozen", checked: false },
          { text: "Butter", checked: false },
          { text: "Heavy cream (1 pint)", checked: false },
          { text: "Mascarpone (1 container)", checked: false },
          { text: "Parmesan wedge", checked: false },
          { text: "Greek yogurt, plain (32 oz)", checked: false },
          { text: "Cheddar slices", checked: false },
          { text: "Cottage cheese (24–32 oz)", checked: false }
        ],
        "Produce": [
          { text: "Mushrooms (8 oz cremini)", checked: false },
          { text: "Sweet potatoes (2)", checked: false },
          { text: "Broccoli florets (2–3 cups)", checked: false },
          { text: "Carrots (3)", checked: false },
          { text: "Bell peppers (3–4)", checked: false },
          { text: "Onions (3–4)", checked: false },
          { text: "Garlic (1 head)", checked: false },
          { text: "Lemons (2)", checked: false },
          { text: "Parsley + thyme", checked: false },
          { text: "Apples (4)", checked: false },
          { text: "Bananas (6)", checked: false },
          { text: "Oranges (4)", checked: false }
        ],
        "Bakery & Grains": [
          { text: "Rigatoni or penne pasta", checked: false },
          { text: "Whole-wheat English muffins", checked: false },
          { text: "Whole-grain sandwich bread", checked: false },
          { text: "Rice (long-grain or jasmine)", checked: false },
          { text: "Ladyfingers (for tiramisu)", checked: false },
          { text: "Burger buns", checked: false }
        ],
        "Meat & Deli": [
          { text: "Chicken thighs (2 lbs total)", checked: false },
          { text: "Pork chops (2)", checked: false },
          { text: "Italian sausage (8 oz)", checked: false },
          { text: "Ground beef (1 lb, 85/15)", checked: false },
          { text: "Steak (ribeye or strip)", checked: false },
          { text: "Deli turkey", checked: false }
        ],
        "Pantry": [
          { text: "Chicken broth (2 cartons)", checked: false },
          { text: "Canned fire-roasted tomatoes", checked: false },
          { text: "Black beans (1 can)", checked: false },
          { text: "Corn (1 cup or can)", checked: false },
          { text: "Chai tea bags", checked: false },
          { text: "Pumpkin purée (1 can)", checked: false },
          { text: "Soy sauce", checked: false },
          { text: "Olive oil", checked: false },
          { text: "Peanut butter", checked: false },
          { text: "Trail mix", checked: false },
          { text: "Spices: chili powder, cumin, paprika, Cajun seasoning, cardamom, cinnamon, clove, nutmeg", checked: false },
          { text: "Premier Protein shakes (on hand)", checked: false }
        ]
      }
    }
  },

  prep: {
    ingredients: [
      "Parboil rice for Cajun packets",
      "Slice peppers/onions for fajita soup & stir-fry",
      "Cook sausage patties for SEC sandwiches",
      "Prepare chai tea and tiramisu layers Monday night",
      "Boil eggs for snacks"
    ],
    steps: [
      "Boil 12 eggs; peel half for snacks.",
      "Cook breakfast sausage patties for SECs.",
      "Prepare tiramisu Monday night; chill overnight.",
      "Cut vegetables for fajita soup & snacks.",
      "Parboil rice; pack for camping foil packets."
    ]
  }
};

window.planData = planData;
