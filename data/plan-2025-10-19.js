const planData = {
  "title": "October 19, 2025",
  "meta": "5 meals • 2 adults + 1 toddler",
  
  // FIXED: Shopping should be directly under planData
  "shopping": {
    "🛒 Consolidated Shopping List": {
      "cols": 2,
      "lists": {
        "Produce": [
          { "text": "1 large head broccoli", "checked": false },
          { "text": "3–4 cloves garlic", "checked": false },
          { "text": "1 bunch parsley or basil (for pasta garnish, optional)", "checked": false }
        ],
        "Meat & Seafood": [
          { "text": "1.5 lb boneless, skinless chicken thighs (Monday)", "checked": false },
          { "text": "1 lb chicken (thighs or breasts) for Tuesday casserole", "checked": false },
          { "text": "1 lb ground beef (85/15)", "checked": false },
          { "text": "1 package chicken nuggets (frozen or fresh)", "checked": false }
        ],
        "Dairy & Eggs": [
          { "text": "Parmesan cheese (for pasta garnish)", "checked": false },
          { "text": "Butter", "checked": false },
          { "text": "Shredded cheese (for casserole topping, optional)", "checked": false }
        ],
        "Bakery": [
          { "text": "1 pack high-quality hamburger or sandwich rolls (optional, for easy sides)", "checked": false }
        ],
        "Rice, Pasta & Grains": [
          { "text": "Jasmine or sushi rice (restock if needed)", "checked": false },
          { "text": "1 lb pasta (penne, rigatoni, or spaghetti)", "checked": false },
          { "text": "Long-grain white rice (ensure at least 1 cup for casserole if not using above)", "checked": false }
        ],
        "Frozen": [
          { "text": "1 bag sweet potato fries", "checked": false },
          { "text": "1 bag of frozen veggies (e.g., peas, mixed veg, or green beans)", "checked": false }
        ],
        "Pantry & Condiments": [
          { "text": "1 can cream of chicken soup", "checked": false },
          { "text": "1 can cream of mushroom soup (or use a second cream of chicken)", "checked": false },
          { "text": "Garlic powder", "checked": false },
          { "text": "Onion powder", "checked": false },
          { "text": "Olive oil", "checked": false },
          { "text": "Neutral oil (for searing)", "checked": false },
          { "text": "Salt & black pepper", "checked": false },
          { "text": "Dried Italian seasoning or oregano", "checked": false },
          { "text": "1 jar or can of good-quality tomato sauce or crushed tomatoes", "checked": false }
        ]
      }
    }
  },
  
  "prep": {
    "title": "Pre-Week Prep (30–45 minutes)",
    "intro": "A focused prep session to make weeknight cooking faster and easier.",
    "ingredients": [
      { "text": "Cook 3 cups rice (~9 cups cooked) and store in a sealed container for easy scooping.", "checked": false },
      { "text": "Wash and chop broccoli for Monday.", "checked": false },
      { "text": "Assemble Tuesday's Chicken & Rice Bake (stir together rice, soups, broth/water, seasonings; nestle chicken; cover and refrigerate).", "checked": false }
    ],
    "steps": []
  },
  
  // FIXED: Changed from array to object with day keys
  "meals": {
    "sunday": {
      "title": "Air Fryer Chicken Nuggets with Sweet Potato Fries & Veggies",
      "recipe": {
        "title": "Air Fryer Chicken Nuggets with Sweet Potato Fries & Veggies",
        "summary": "A no-stress dinner after returning from Flagstaff. Minimal active time.",
        "notes": "Everything can be prepped or purchased ahead; ready in 15 minutes or less.",
        "prep": "5 min",
        "cook": "15–20 min",
        "ingredients": [
          "1 package chicken nuggets",
          "1 bag sweet potato fries",
          "1 bag frozen veggies (or fresh, prepped ahead)",
          "Optional dipping sauces: ketchup, honey mustard, BBQ"
        ],
        "steps": [
          "Preheat air fryer or oven to 400°F.",
          "Cook nuggets and fries according to package directions, flipping halfway for crispness.",
          "Microwave or steam frozen veggies until hot.",
          "Serve everything on a tray for easy cleanup."
        ]
      }
    },
    
    "monday": {
      "title": "Seared Chicken Thighs with Roasted Broccoli & Rice",
      "recipe": {
        "title": "Seared Chicken Thighs with Roasted Broccoli & Rice",
        "summary": "A quick and classic protein bowl with a simple pan sauce.",
        "notes": "Straightforward weeknight meal; ~30 minutes start to finish.",
        "prep": "10 min",
        "cook": "25–30 min",
        "ingredients": [
          "1.5 lb boneless, skinless chicken thighs",
          "1 large head broccoli, cut into florets",
          "4 cups cooked rice, warmed",
          "2 tbsp olive oil, divided",
          "1–2 cloves garlic, minced",
          "1/4 cup chicken broth",
          "Salt & black pepper"
        ],
        "steps": [
          "Preheat oven to 425°F (convection if available). Toss broccoli with 1 tbsp olive oil, salt, and pepper. Roast 15–20 minutes.",
          "Pat chicken thighs dry and season generously. Sear in 1 tbsp oil over medium-high heat for 4–5 minutes per side until cooked through.",
          "Remove chicken. Lower heat, add garlic, sauté briefly, then deglaze with chicken broth. Simmer for 1 minute.",
          "Serve chicken over rice with roasted broccoli, spooning sauce over top."
        ]
      }
    },
    
    "tuesday": {
      "title": "Make-Ahead Chicken & Rice Bake",
      "recipe": {
        "title": "Make-Ahead Chicken & Rice Bake",
        "summary": "A comforting, fully hands-off casserole that Kathryn can bake while managing the kids. Assembled Monday night for an easy Tuesday dinner.",
        "notes": "Quartermaster away for work function (development day). Prep the casserole Monday night; refrigerate covered. Kathryn just bakes it Tuesday evening.",
        "prep": "10 min (night before)",
        "cook": "1 hr",
        "ingredients": [
          "1 lb boneless, skinless chicken thighs or breasts (uncooked)",
          "1 cup long-grain white rice (uncooked)",
          "1 can cream of chicken soup",
          "1 can cream of mushroom soup (or double chicken if preferred)",
          "1½ cups water or chicken broth",
          "1 tsp garlic powder",
          "½ tsp onion powder",
          "Salt & black pepper to taste",
          "Optional: ½ cup frozen peas or green beans",
          "½ cup shredded cheese (for topping, optional)"
        ],
        "steps": [
          "Lightly grease a 9x13 casserole dish.",
          "Add uncooked rice, both soups, water or broth, garlic powder, onion powder, salt, and pepper. Stir until evenly combined.",
          "Nestle the chicken pieces into the mixture and spoon a bit of sauce over each.",
          "Cover tightly with foil and refrigerate overnight.",
          "On Tuesday evening, bake covered at 375°F for 1 hour. Uncover, sprinkle cheese on top, and bake 5–10 minutes more until melted and bubbly.",
          "Serve with microwaved or steamable veggies and bread, if desired."
        ]
      }
    },
    
    "wednesday": {
      "title": "Eating Out",
      "recipe": null
    },
    
    "thursday": {
      "title": "Ground Beef Pasta with Simple Tomato Sauce",
      "recipe": {
        "title": "Ground Beef Pasta with Simple Tomato Sauce",
        "summary": "A comforting, classic weeknight pasta dish.",
        "notes": "Quick to make and always a crowd-pleaser.",
        "prep": "10 min",
        "cook": "20–25 min",
        "ingredients": [
          "1 lb ground beef (85/15)",
          "1 lb pasta (penne, rigatoni, or spaghetti)",
          "1 jar or can tomato sauce or crushed tomatoes",
          "3 cloves garlic, minced",
          "1 tsp dried Italian seasoning",
          "2 tbsp olive oil",
          "Salt & black pepper",
          "Parmesan cheese and chopped herbs for garnish (optional)"
        ],
        "steps": [
          "Boil salted water and cook pasta according to package directions.",
          "Meanwhile, heat olive oil in a skillet. Add garlic and sauté 30 seconds. Add ground beef and cook until browned; season with salt, pepper, and Italian seasoning.",
          "Add tomato sauce and simmer for 10 minutes.",
          "Drain pasta and toss with sauce. Garnish with Parmesan and herbs."
        ]
      }
    },
    
    "friday": {
      "title": "No meal planned"
    },
    
    "saturday": {
      "title": "No meal planned"
    }
  },
  
  // ADDED: momDaily structure for Daily Fuel sections
  "momDaily": {
    "sunday": {
      "breakfast": "TBD",
      "lunch": "TBD",
      "snackAM": "TBD",
      "snackPM": "TBD",
      "kcalEstimate": "1600",
      "proteinEstimate": "80g",
      "notes": ""
    },
    "monday": {
      "breakfast": "TBD",
      "lunch": "TBD",
      "snackAM": "TBD",
      "snackPM": "TBD",
      "kcalEstimate": "1600",
      "proteinEstimate": "80g",
      "notes": ""
    },
    "tuesday": {
      "breakfast": "TBD",
      "lunch": "TBD",
      "snackAM": "TBD",
      "snackPM": "TBD",
      "kcalEstimate": "1600",
      "proteinEstimate": "80g",
      "notes": ""
    },
    "wednesday": {
      "breakfast": "TBD",
      "lunch": "TBD",
      "snackAM": "TBD",
      "snackPM": "TBD",
      "kcalEstimate": "1600",
      "proteinEstimate": "80g",
      "notes": ""
    },
    "thursday": {
      "breakfast": "TBD",
      "lunch": "TBD",
      "snackAM": "TBD",
      "snackPM": "TBD",
      "kcalEstimate": "1600",
      "proteinEstimate": "80g",
      "notes": ""
    },
    "friday": {
      "breakfast": "TBD",
      "lunch": "TBD",
      "snackAM": "TBD",
      "snackPM": "TBD",
      "kcalEstimate": "1600",
      "proteinEstimate": "80g",
      "notes": ""
    },
    "saturday": {
      "breakfast": "TBD",
      "lunch": "TBD",
      "snackAM": "TBD",
      "snackPM": "TBD",
      "kcalEstimate": "1600",
      "proteinEstimate": "80g",
      "notes": ""
    }
  }
};
