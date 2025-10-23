// data/plan-2025-10-19.js
// Weekly plan with integrated Daily Fuel (momDaily) for a breastfeeding mom.
// Focus: whole foods, low effort, no big deficits; SEC breakfast 4x this week.

const planData = {
  title: "Weekly Plan",
  meta: {
    weekOf: "2025-10-19",
    notes: "Daily Fuel added; SEC breakfast 4x this week; easy lunches & snacks; kcal targets maintain supply."
  },

  // Config that your generator can read if needed
  dailyFuelConfig: {
    enabled: true,
    kcalMode: "auto",                   // allow generator to compute ~2,150–2,350 kcal/day
    userTarget: null,
    proteinTargetGPerKg: 1.3,           // helpful range 1.1–1.5 g/kg while breastfeeding
    breakfastPreference: {
      sausageEggCheeseEnglishMuffin: { enabled: true, targetPerWeek: 4 } // SEC 4x
    }
  },

  // Dinners (unchanged from your working week; adjust as needed)
  meals: {
    sunday:    { id:"sunday",    title:"Air Fryer Nuggets + Veg", recipe:{ summary:"Ultra low-effort Sunday catch-up" } },
    monday:    { id:"monday",    title:"Chicken & Broccoli Rice Bowls", recipe:{
      title:"Chicken & Broccoli Rice Bowls",
      summary:"Pan-seared thighs, garlicky rice",
      yield:"Serves 4",
      prepTime:"10 min", cookTime:"20 min",
      ingredients:[
        "1 lb chicken thighs","2 cups broccoli florets","2 cups cooked rice",
        "2 cloves garlic, minced","1 tbsp oil","Salt & pepper"
      ],
      steps:[
        "Season and sear chicken 5–6 min/side.",
        "Steam broccoli until tender-crisp.",
        "Sauté garlic briefly; toss with rice.",
        "Slice chicken, assemble bowls."
      ],
      equipment:["12\" skillet","Steamer basket","Saucepan"]
    }},
    tuesday:   { id:"tuesday",   title:"Team Dinner (out)",  recipe:{ summary:"No home cook" } },
    wednesday: { id:"wednesday", title:"Swim Night (out)",    recipe:{ summary:"No home cook" } },
    thursday:  { id:"thursday",  title:"Ground Beef Pasta",   recipe:{
      title:"Ground Beef Pasta with Quick Homemade Marinara",
      summary:"Weeknight beef pasta with a simple crushed-tomato marinara.",
      yield:"Serves 4",
      prepTime:"10 min", cookTime:"30–35 min",
      ingredients:[
        { section:"Pasta", items:[
          "12 oz penne",
          "Kosher salt for pasta water"
        ]},
        { section:"Marinara", items:[
          "2 tbsp olive oil",
          "1 small onion, finely diced",
          "4 cloves garlic, minced",
          "1/2 tsp red pepper flakes (optional)",
          "1 (28 oz) can crushed tomatoes",
          "1 tsp sugar (to balance acidity)",
          "1 tsp dried oregano",
          "1 tsp dried basil (or a few fresh sprigs)",
          "Salt & pepper, to taste"
        ]},
        { section:"Beef", items:[
          "1 lb ground beef (85–90%)"
        ]},
        { section:"Finish", items:[
          "1/2 cup pasta water, as needed",
          "Grated Parmesan, to serve",
          "Fresh basil, to serve"
        ]}
      ],
      steps:[
        { text:"Boil pasta in well-salted water until al dente. Reserve 1/2 cup pasta water; drain.", time:"10–11 min" },
        { text:"Sauce: heat oil, soften onion with a pinch of salt until translucent.", time:"5–6 min" },
        { text:"Add garlic and red pepper flakes; cook just until fragrant.", time:"30–45 sec" },
        { text:"Stir in crushed tomatoes, sugar, oregano, basil; simmer uncovered until slightly thickened.", time:"12–15 min" },
        { text:"In a separate pan, brown beef; season with salt and pepper. Drain excess fat.", time:"8–10 min" },
        { text:"Combine beef with marinara. Loosen with pasta water if needed. Toss with pasta.", time:"2–3 min" },
        { text:"Serve with Parmesan and basil." }
      ],
      equipment:["12\" skillet","Saucepan","Stock pot","Colander"]
    }},
    friday:    { id:"friday",    title:"Out of Town",         recipe:null },
    saturday:  { id:"saturday",  title:"Out of Town",         recipe:null }
  },

  // DAILY FUEL — Breakfast / Lunch / Snacks for Mom (breastfeeding)
  // Targets: simple whole-food choices, low effort; ~2,150–2,350 kcal/day; 95–120 g protein/day
  momDaily: {
    sunday: {
      breakfast: "Overnight oats (milk, oats, chia) + mixed berries",
      lunch: "Leftover chicken & broccoli bowl",
      snackAM: "2 boiled eggs + cucumber sticks",
      snackPM: "Apple + 2 tbsp peanut butter",
      kcalEstimate: 2200, proteinEstimate: "100–120 g",
      notes: "Hydrate; add ground flax to oats for ALA."
    },
    monday: {
      breakfast: "SEC sandwich (whole-wheat English muffin, egg, cheddar, breakfast sausage) — sandwich maker",
      lunch: "Turkey & spinach wrap + avocado; side carrots",
      snackAM: "Cottage cheese (3/4 cup) + pineapple",
      snackPM: "Trail mix + string cheese",
      kcalEstimate: 2250, proteinEstimate: "100–120 g",
      notes: "Use iodized salt; prep 2 extra SEC patties for later."
    },
    tuesday: {
      breakfast: "SEC sandwich (whole-wheat English muffin)",
      lunch: "Greek yogurt bowl + granola + berries",
      snackAM: "Hummus + baby carrots",
      snackPM: "Banana + roasted almonds",
      kcalEstimate: 2150, proteinEstimate: "95–115 g",
      notes: "Team dinner out — keep lunch lighter."
    },
    wednesday: {
      breakfast: "Quinoa cup + rotisserie chicken + olive oil drizzle",
      lunch: "Tuna salad on whole-grain crackers; side grapes",
      snackAM: "2 boiled eggs + bell pepper slices",
      snackPM: "Crackers + cheddar slices",
      kcalEstimate: 2200, proteinEstimate: "100–120 g",
      notes: "Swim night; keep dinner plan light."
    },
    thursday: {
      breakfast: "SEC sandwich (whole-wheat English muffin)",
      lunch: "Leftover pasta + side salad (olive oil + balsamic)",
      snackAM: "Orange + pistachios",
      snackPM: "Greek yogurt + honey",
      kcalEstimate: 2300, proteinEstimate: "100–120 g",
      notes: "Higher-energy day; pasta lunch ok."
    },
    friday: {
      breakfast: "SEC sandwich (whole-wheat English muffin)",
      lunch: "Deli chicken bowl (microwave rice cup + chicken + salsa)",
      snackAM: "Pear + walnuts",
      snackPM: "Popcorn + kefir",
      kcalEstimate: 2200, proteinEstimate: "95–115 g",
      notes: "Pack snacks if out of town later."
    },
    saturday: {
      breakfast: "French toast (omega-3 eggs) + berries + maple",
      lunch: "Rotisserie chicken & avocado sandwich (whole-grain)",
      snackAM: "Smoothie (milk, oats, frozen berries, flax)",
      snackPM: "Veg sticks + ranch",
      kcalEstimate: 2350, proteinEstimate: "100–120 g",
      notes: "Relaxed day; emphasize hydration."
    }
  },

  // Shopping reflects Daily Fuel adds (dairy/eggs, produce, grains, pantry, deli)
  shopping: {
    "🛒 Consolidated Shopping List": {
      lists: {
        "Dairy & Eggs": [
          { text: "Eggs, 2 dozen", checked: false },
          { text: "Cheddar slices", checked: false },
          { text: "Cottage cheese (24–32 oz)", checked: false },
          { text: "Greek yogurt, 32 oz (plain)", checked: false },
          { text: "Milk (for oats/smoothies)", checked: false },
          { text: "Parmesan wedge", checked: false }
        ],
        "Produce": [
          { text: "Berries (2–3 clamshells)", checked: false },
          { text: "Bananas (7)", checked: false },
          { text: "Apples (4)", checked: false },
          { text: "Oranges (4)", checked: false },
          { text: "Grapes (1 bag)", checked: false },
          { text: "Avocados (3)", checked: false },
          { text: "Baby carrots (2 bags)", checked: false },
          { text: "Cucumbers (2)", checked: false },
          { text: "Bell peppers (3)", checked: false },
          { text: "Spinach (1 large clamshell)", checked: false },
          { text: "Fresh basil (optional)", checked: false },
          { text: "Onion + garlic", checked: false }
        ],
        "Bakery & Grains": [
          { text: "Whole-wheat English muffins (2 packs)", checked: false },
          { text: "Whole-grain wraps", checked: false },
          { text: "Sandwich bread (whole-grain)", checked: false },
          { text: "Granola", checked: false },
          { text: "Old-fashioned oats", checked: false },
          { text: "Microwave quinoa/rice cups", checked: false },
          { text: "Penne (12 oz)", checked: false },
          { text: "Crackers (whole-grain)", checked: false },
          { text: "Popcorn kernels or bags", checked: false }
        ],
        "Meat & Deli": [
          { text: "Breakfast sausage patties", checked: false },
          { text: "Deli turkey", checked: false },
          { text: "Rotisserie chicken (1–2)", checked: false },
          { text: "Ground beef (1 lb, 85–90%)", checked: false },
          { text: "Chicken thighs (1 lb)", checked: false }
        ],
        "Pantry": [
          { text: "Peanut butter", checked: false },
          { text: "Almonds & pistachios", checked: false },
          { text: "Hummus", checked: false },
          { text: "Honey & maple syrup", checked: false },
          { text: "Olive oil, salt (iodized), pepper", checked: false },
          { text: "Crushed tomatoes (28 oz)", checked: false },
          { text: "Oregano, basil, red pepper flakes", checked: false },
          { text: "Sugar (for marinara acidity balance)", checked: false }
        ]
      }
    }
  },

  // Simple Sunday prep to reduce weekday friction
  prep: {
    ingredients: [
      "12 eggs (for boiling)",
      "Breakfast sausage patties (cook ahead)",
      "Overnight oats jars (3)",
      "Veg sticks (carrot, cucumber, bell pepper)",
      "Wash/portion berries (3 containers)"
    ],
    steps: [
      "Boil a dozen eggs; peel 6 for early-week snacks; store the rest in shell.",
      "Cook a batch of breakfast sausage patties; chill for quick SEC assembly.",
      "Assemble 3 jars overnight oats (oats, milk, chia/ground flax).",
      "Cut carrot/cucumber/bell pepper sticks; store in sealed containers.",
      "Wash & portion berries for quick yogurt bowls/snacks."
    ]
  }
};
