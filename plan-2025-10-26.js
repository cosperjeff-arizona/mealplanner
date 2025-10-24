// Weekly plan with integrated Daily Fuel (momDaily) for breastfeeding mom.
// Week of October 26, 2025

const planData = {
  title: "Weekly Plan",
  meta: {
    weekOf: "2025-10-26",
    notes: "6 dinners including one crockpot meal for Halloween; Daily Fuel active; chicken broth to be used for rice/pan sauce."
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
      title: "Baked Chicken & Rice Casserole",
      recipe: {
        summary: "Chicken thighs baked in a creamy chicken broth rice mix with onion, garlic, and thyme.",
        yield: "Serves 4",
        prepTime: "10 min",
        cookTime: "45–50 min",
        ingredients: [
          "1 lb chicken thighs",
          "1 cup uncooked rice",
          "2 cups chicken broth",
          "1/2 cup milk",
          "1/2 onion, diced",
          "2 cloves garlic, minced",
          "1 tsp thyme",
          "Salt & pepper"
        ],
        steps: [
          "Combine all ingredients in a greased 9x13" + '"' + " dish.",
          "Cover tightly with foil; bake 45–50 min at 375°F.",
          "Remove cover for last 10 min to brown slightly."
        ],
        equipment: ["9x13 baking dish", "Foil"]
      }
    },
    monday: {
      id: "monday",
      title: "Pork Chops with Roasted Sweet Potatoes & Broccoli",
      recipe: {
        summary: "Pan-seared pork chops finished in oven; served with roasted sweet potatoes and broccoli.",
        ingredients: [
          "2 pork chops",
          "2 sweet potatoes, cubed",
          "2 cups broccoli florets",
          "2 tbsp olive oil",
          "1/2 cup chicken broth",
          "Salt, pepper"
        ],
        steps: [
          "Roast sweet potatoes 20 min at 425°F.",
          "Add broccoli to pan; roast another 15 min.",
          "Meanwhile, sear pork chops 3–4 min/side.",
          "Deglaze pan with chicken broth to make light sauce."
        ],
        equipment: ["Sheet pan", "Skillet"]
      }
    },
    tuesday: {
      id: "tuesday",
      title: "Chicken, Spinach & Mushroom Alfredo Bake",
      recipe: {
        summary: "Prep-ahead casserole with chicken, spinach, mushrooms, and pasta in light Alfredo sauce.",
        prepTime: "15 min",
        cookTime: "30 min",
        ingredients: [
          "2 cups cooked pasta",
          "1 cup cooked chicken",
          "1 cup baby spinach",
          "1/2 cup mushrooms, sliced",
          "1 cup Alfredo sauce",
          "1/4 cup Parmesan"
        ],
        steps: [
          "Combine ingredients in baking dish; cover and refrigerate overnight.",
          "Bake covered 30 min at 350°F.",
          "Uncover and bake 5 min more to brown top."
        ],
        equipment: ["Baking dish", "Foil"]
      }
    },
    wednesday: { id: "wednesday", title: "Swim Lessons (Out)", recipe: { summary: "No home cook." } },
    thursday: {
      id: "thursday",
      title: "Ground Beef & Veggie Stir-Fry with Garlic Rice",
      recipe: {
        summary: "Quick stovetop stir-fry over rice cooked in chicken broth.",
        prepTime: "10 min",
        cookTime: "20 min",
        ingredients: [
          "1 lb ground beef",
          "2 cups mixed veggies (bell peppers, snap peas)",
          "2 cups cooked rice (use chicken broth for liquid)",
          "2 cloves garlic, minced",
          "2 tbsp soy sauce",
          "1 tbsp oil"
        ],
        steps: [
          "Cook rice using chicken broth instead of water.",
          "Brown ground beef; drain excess fat.",
          "Add garlic and veggies; stir-fry until tender.",
          "Add soy sauce; serve over rice."
        ],
        equipment: ["12" + '"' + " skillet", "Rice cooker"]
      }
    },
    friday: {
      id: "friday",
      title: "Slow Cooker Chicken Tortilla Soup",
      recipe: {
        summary: "Cozy crockpot meal with chicken, broth, beans, corn, and spices.",
        cookTime: "6–8 hrs (low)",
        ingredients: [
          "1 lb chicken thighs",
          "4 cups chicken broth",
          "1 (15 oz) can crushed tomatoes",
          "1 can black beans",
          "1 cup corn",
          "1 onion, chopped",
          "2 tsp chili powder",
          "1 tsp cumin",
          "Salt & pepper"
        ],
        steps: [
          "Combine all ingredients in slow cooker; stir.",
          "Cook 6–8 hrs on low or 3–4 hrs on high.",
          "Shred chicken before serving; top with avocado, lime, cheese."
        ],
        equipment: ["Slow cooker"]
      }
    },
    saturday: {
      id: "saturday",
      title: "Smashburgers & Oven Fries",
      recipe: {
        summary: "Indoor smashburgers with cheddar, served with oven fries.",
        ingredients: [
          "1 lb ground beef (85/15)",
          "Burger buns",
          "Cheddar cheese",
          "Frozen fries",
          "Salt & pepper"
        ],
        steps: [
          "Bake fries according to package.",
          "Form small beef balls; smash on hot skillet.",
          "Top with cheese and cover briefly.",
          "Assemble burgers and serve."
        ],
        equipment: ["12" + '"' + " skillet", "Oven"]
      }
    }
  },

  momDaily: {
    sunday: { breakfast: "Overnight oats + blueberries", lunch: "Leftover chicken & rice casserole", snackAM: "Boiled eggs + cucumber", snackPM: "Apple + peanut butter", kcalEstimate: 2200, proteinEstimate: "100–120 g" },
    monday: { breakfast: "SEC sandwich", lunch: "Turkey wrap + spinach + avocado", snackAM: "Cottage cheese + pineapple", snackPM: "Trail mix + string cheese", kcalEstimate: 2250, proteinEstimate: "100–120 g" },
    tuesday: { breakfast: "SEC sandwich", lunch: "Greek yogurt bowl + granola + berries", snackAM: "Hummus + baby carrots", snackPM: "Lactation bites + Premier Protein shake", kcalEstimate: 2150, proteinEstimate: "95–115 g" },
    wednesday: { breakfast: "Quinoa cup + rotisserie chicken", lunch: "Tuna salad + crackers", snackAM: "Cheese + fruit", snackPM: "Nuts + kefir", kcalEstimate: 2200, proteinEstimate: "100–120 g" },
    thursday: { breakfast: "SEC sandwich", lunch: "Leftover stir-fry bowl", snackAM: "Orange + pistachios", snackPM: "Yogurt + honey", kcalEstimate: 2300, proteinEstimate: "100–120 g" },
    friday: { breakfast: "SEC sandwich", lunch: "Chicken tortilla soup leftovers", snackAM: "Banana + almonds", snackPM: "Popcorn + Premier Protein shake", kcalEstimate: 2200, proteinEstimate: "95–115 g" },
    saturday: { breakfast: "French toast + berries", lunch: "Turkey sandwich + apple", snackAM: "Smoothie (milk, oats, berries, flax)", snackPM: "Veg sticks + ranch", kcalEstimate: 2350, proteinEstimate: "100–120 g" }
  },

  shopping: {
    "🛒 Consolidated Shopping List": {
      lists: {
        "Dairy & Eggs": [
          { text: "Eggs, 2 dozen", checked: false },
          { text: "Cheddar slices", checked: false },
          { text: "Cottage cheese (24–32 oz)", checked: false },
          { text: "Milk (for oats/smoothies)", checked: false },
          { text: "Greek yogurt, 32 oz (plain)", checked: false },
          { text: "Parmesan wedge", checked: false }
        ],
        "Produce": [
          { text: "Berries (2–3 clamshells)", checked: false },
          { text: "Bananas (6–7)", checked: false },
          { text: "Apples (4)", checked: false },
          { text: "Oranges (4)", checked: false },
          { text: "Avocados (3)", checked: false },
          { text: "Baby carrots (2 bags)", checked: false },
          { text: "Cucumbers (2)", checked: false },
          { text: "Bell peppers (3)", checked: false },
          { text: "Spinach (1 large clamshell)", checked: false },
          { text: "Broccoli florets (2–3 cups)", checked: false },
          { text: "Sweet potatoes (2)", checked: false },
          { text: "Onion + garlic", checked: false },
          { text: "Limes (2)", checked: false }
        ],
        "Bakery & Grains": [
          { text: "Whole-wheat English muffins (2 packs)", checked: false },
          { text: "Sandwich bread (whole-grain)", checked: false },
          { text: "Whole-grain wraps", checked: false },
          { text: "Rice (long grain or jasmine)", checked: false },
          { text: "Pasta (penne)", checked: false },
          { text: "Burger buns", checked: false }
        ],
        "Meat & Deli": [
          { text: "Chicken thighs (2 lbs total)", checked: false },
          { text: "Pork chops (2)", checked: false },
          { text: "Ground beef (1 lb, 85/15)", checked: false },
          { text: "Deli turkey", checked: false },
          { text: "Rotisserie chicken (1)", checked: false }
        ],
        "Pantry": [
          { text: "Chicken broth (have 1; add 1 extra carton)", checked: false },
          { text: "Crushed tomatoes (28 oz)", checked: false },
          { text: "Black beans (1 can)", checked: false },
          { text: "Corn (1 can or frozen)", checked: false },
          { text: "Alfredo sauce (1 jar)", checked: false },
          { text: "Soy sauce", checked: false },
          { text: "Olive oil", checked: false },
          { text: "Peanut butter", checked: false },
          { text: "Honey & maple syrup", checked: false },
          { text: "Spices: chili powder, cumin, thyme", checked: false },
          { text: "Trail mix", checked: false },
          { text: "Lactation bites (on hand)", checked: false },
          { text: "Premier Protein shakes (on hand)", checked: false }
        ]
      }
    }
  },

  prep: {
    ingredients: ["12 eggs (for boiling)", "Breakfast sausage patties (cook ahead)", "Overnight oats jars (3)", "Cut vegetables for snacks", "Cook rice in broth for stir-fry"],
    steps: [
      "Boil 12 eggs; peel half for snacks.",
      "Cook breakfast sausage patties for SEC sandwiches.",
      "Assemble overnight oats jars.",
      "Cut carrots, cucumbers, bell peppers for snacks.",
      "Cook a batch of rice with chicken broth; refrigerate for Thursday."
    ]
  }
};

window.planData = planData;
