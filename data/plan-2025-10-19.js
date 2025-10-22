const planData = {
  dailyFuelConfig: {
    enabled: true,
    kcalMode: "auto",
    userTarget: null,
    proteinTargetGPerKg: 1.3,
    breakfastPreference: {
      sausageEggCheeseEnglishMuffin: { enabled: true, targetPerWeek: 4 }
    }
  },
  meals: {
    sunday:   { id:"sunday",   title:"Air Fryer Nuggets + Veg", recipe:{summary:"Ultra low effort Sunday catch-up"} },
    monday:   { id:"monday",   title:"Chicken & Broccoli Rice Bowls", recipe:{
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
    tuesday:  { id:"tuesday",  title:"Team Dinner (out)", recipe:{summary:"No home cook"} },
    wednesday:{ id:"wednesday",title:"Swim Night (out)",  recipe:{summary:"No home cook"} },
    thursday: { id:"thursday", title:"Ground Beef Pasta", recipe:{
      title:"Ground Beef Pasta",
      summary:"Weeknight classic",
      ingredients:[
        {section:"Pasta", items:["12 oz penne","Salted water"]},
        {section:"Sauce", items:["1 lb ground beef","1 jar marinara","1/2 cup pasta water"]}
      ],
      steps:[
        {text:"Boil pasta in salted water until al dente.", time:"10 min"},
        {text:"Brown beef; drain fat.", time:"8 min"},
        {text:"Add marinara + pasta water; simmer.", time:"5 min"}
      ]
    }},
    friday:   { id:"friday",   title:"Out of Town" },
    saturday: { id:"saturday", title:"Out of Town" }
  },
  momDaily: {
    sunday:    {breakfast:"SEC muffin on whole-wheat", lunch:"Leftover chicken bowl", snackAM:"Boiled eggs", snackPM:"Apple + PB", kcalEstimate:2150, proteinEstimate:"100–120 g", notes:"Use iodized salt"},
    monday:    {breakfast:"Overnight oats + berries", lunch:"Turkey-spinach wrap", snackAM:"Cottage cheese + pineapple", snackPM:"Trail mix + string cheese", kcalEstimate:2200, proteinEstimate:"95–115 g", notes:"Add ground flax"},
    tuesday:   {breakfast:"SEC muffin", lunch:"Greek yogurt bowl + granola", snackAM:"Hummus + carrots", snackPM:"Banana + almonds", kcalEstimate:2100, proteinEstimate:"90–110 g", notes:"Team dinner tonight"},
    wednesday: {breakfast:"SEC muffin", lunch:"Quinoa cup + rotisserie chicken", snackAM:"Eggs + cucumber", snackPM:"Crackers + cheese", kcalEstimate:2150, proteinEstimate:"95–115 g", notes:"Swim night"},
    thursday:  {breakfast:"SEC muffin", lunch:"Pasta leftovers + side salad", snackAM:"Orange + pistachios", snackPM:"Yogurt + honey", kcalEstimate:2200, proteinEstimate:"95–115 g", notes:""},
    friday:    {breakfast:"SEC muffin", lunch:"Deli chicken bowl", snackAM:"Pear + walnuts", snackPM:"Popcorn + kefir", kcalEstimate:2150, proteinEstimate:"90–110 g", notes:""},
    saturday:  {breakfast:"French toast (omega-3 eggs)", lunch:"Tuna salad on crackers", snackAM:"Smoothie (milk+oats+berries)", snackPM:"Veg sticks + ranch", kcalEstimate:2300, proteinEstimate:"100–120 g", notes:""}
  },
  shopping: {
    "🛒 Consolidated Shopping List": {
      lists: {
        "Dairy & Eggs": [
          { text: "Greek yogurt, 32 oz (plain)", checked: false },
          { text: "Cottage cheese", checked: false },
          { text: "Eggs, 1–2 dozen", checked: false },
          { text: "Cheddar slices", checked: false }
        ],
        "Produce": [
          { text: "Berries (2 clamshells)", checked: false },
          { text: "Bananas (7)", checked: false },
          { text: "Avocados (3)", checked: false },
          { text: "Cucumbers", checked: false }
        ],
        "Bakery & Grains": [
          { text: "Whole-wheat English muffins", checked: false },
          { text: "Granola", checked: false },
          { text: "Quinoa cups (microwaveable)", checked: false }
        ],
        "Meat & Deli": [
          { text: "Breakfast sausage patties", checked: false },
          { text: "Deli turkey", checked: false },
          { text: "Rotisserie chicken", checked: false }
        ],
        "Pantry": [
          { text: "Peanut butter", checked: false },
          { text: "Trail mix", checked: false },
          { text: "Pistachios", checked: false }
        ]
      }
    }
  },
  prep: {
    ingredients: [
      "12 eggs (for boiling)",
      "3 jars overnight oats (oats, milk, chia)",
      "Veg sticks (carrot, cucumber)",
      "Wash berries"
    ],
    steps: [
      "Boil eggs, cool, peel 6; store others in shell.",
      "Assemble 3 jars of overnight oats.",
      "Cut carrot & cucumber sticks; store in crispers.",
      "Wash & portion berries into 3 containers."
    ]
  }
};
