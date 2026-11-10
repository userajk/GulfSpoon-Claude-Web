import type { Recipe } from "@/lib/schema/recipe";

export const recipe: Recipe = {
  slug: "air-fryer-nachos",
  recipeName: "Air Fryer Nachos",
  archiveTitle: "Air Fryer Nachos",
  pageTitle: "Loaded Air Fryer Nachos With Spiced Beef or Chicken",
  seoTitle: "Air Fryer Nachos: Melted Cheese, No Soggy Chips",
  metaDescription:
    "Air fryer nachos in 3 to 5 minutes at 180°C (350°F): how to layer chips and cheese so nothing goes soggy, with halal beef or chicken and batch tips.",
  shortDescription:
    "Tortilla chips layered with grated cheddar, spiced halal beef and black beans, melted in the air fryer in small batches, then finished with cold salsa, soured cream and avocado. Each batch takes about 4 minutes, so the first plate is ready before the second goes in.",
  quickAnswer:
    "Make air fryer nachos at 180°C (350°F) for 3 to 5 minutes, until the cheese has melted and the chip edges just start to darken. Line the basket with parchment, layer chips with grated cheese and hot cooked meat in no more than two layers, and add cold toppings like salsa and soured cream after cooking.",
  primaryKeyword: "air fryer nachos",
  secondaryKeywords: [
    "air fryer nachos recipe",
    "air fryer nachos temperature",
    "air fryer nachos temp and time",
    "air fryer nachos with ground beef",
    "air fryer nachos with tortillas",
    "how to make air fryer nachos",
    "how to reheat nachos in air fryer",
    "are nachos better in oven or air fryer",
    "air fryer nachos parchment paper",
  ],
  intro: `Nachos suit the air fryer because the job is small: melt cheese and warm the toppings before the chips have time to absorb anything wet. The fan pushes hot air under and around the chips as well as over them, so the bottom layer stays crisp instead of steaming against a hot tray. The trade-off is space. A basket holds one plate's worth at a time, which is why this recipe is built around quick batches of about 4 minutes each.

Moisture is the thing to manage. Wet mince, undrained beans and fresh tomato all turn chips soft within minutes, so the beef is cooked until almost dry, the beans are rinsed and patted off, and everything cold and juicy (salsa, soured cream, guacamole) goes on after the nachos come out. Grated cheese goes on in two places: a thin layer between the chips that acts as glue, and a thicker one on top that holds light chips down against the fan.

For the meat, use halal minced beef or shredded cooked chicken, such as leftover [air fryer chicken thighs](/recipes/air-fryer-chicken-thighs/). If you want rolled, filled tortillas rather than a sharing plate, those are covered on our [taquitos page](/recipes/air-fryer-taquitos/).`,
  author: "omar-hussain",
  publishedAt: "2026-11-25",
  cuisine: "Tex-Mex",
  categories: ["air-fryer", "quick-and-easy"],
  mealTypes: ["Snack", "Appetizer"],
  cookingMethods: ["Air Frying", "Pan Frying"],
  difficulty: "Easy",
  prepTimeMinutes: 20,
  cookTimeMinutes: 8,
  totalTimeMinutes: 28,
  servings: 4,
  estimatedCost: "Medium",
  heroImage: "/images/recipes/air-fryer-nachos.webp",
  imageAlt:
    "A plate of loaded nachos straight from the air fryer, with melted cheddar over tortilla chips, spiced minced beef, black beans and jalapeños, topped with salsa, soured cream, diced avocado and coriander",
  ingredients: [
    {
      title: "Spiced halal beef",
      items: [
        { item: "neutral oil", amount: "1", unit: "tsp", amountNumeric: 1 },
        { item: "onion", amount: "½", unit: "small", note: "finely diced", amountNumeric: 0.5 },
        { item: "halal minced beef", amount: "300", unit: "g", note: "10 to 15% fat (10.5 oz)", amountNumeric: 300 },
        { item: "garlic", amount: "1", unit: "clove", note: "grated", amountNumeric: 1 },
        { item: "ground cumin", amount: "1", unit: "tsp", amountNumeric: 1 },
        { item: "mild chilli powder", amount: "1", unit: "tsp", amountNumeric: 1 },
        { item: "smoked paprika", amount: "½", unit: "tsp", amountNumeric: 0.5 },
        { item: "dried oregano", amount: "½", unit: "tsp", amountNumeric: 0.5 },
        { item: "salt", amount: "½", unit: "tsp", amountNumeric: 0.5 },
        { item: "tomato paste", amount: "1", unit: "tbsp", amountNumeric: 1 },
        { item: "water", amount: "60", unit: "ml", note: "¼ cup", amountNumeric: 60 },
      ],
    },
    {
      title: "Nachos",
      items: [
        { item: "thick tortilla chips", amount: "200", unit: "g", note: "7 oz; sturdy restaurant-style chips", amountNumeric: 200 },
        { item: "mature cheddar", amount: "200", unit: "g", note: "grated from a block (7 oz)", amountNumeric: 200 },
        { item: "Monterey Jack or low-moisture mozzarella", amount: "100", unit: "g", note: "grated (3.5 oz)", amountNumeric: 100 },
        { item: "black beans", amount: "200", unit: "g", note: "½ tin, drained, rinsed and patted dry", amountNumeric: 200 },
        { item: "pickled jalapeño slices", amount: "2", unit: "tbsp", note: "patted dry", amountNumeric: 2 },
        { item: "spring onions", amount: "2", unit: "", note: "thinly sliced", amountNumeric: 2 },
      ],
    },
    {
      title: "Cold toppings (add after cooking)",
      items: [
        { item: "tomato salsa", amount: "120", unit: "ml", note: "½ cup", amountNumeric: 120 },
        { item: "soured cream or thick yoghurt", amount: "120", unit: "ml", note: "½ cup", amountNumeric: 120 },
        { item: "ripe avocado", amount: "1", unit: "", note: "diced, or guacamole", amountNumeric: 1 },
        { item: "fresh coriander", amount: "1", unit: "small handful", note: "chopped", amountNumeric: 1 },
        { item: "lime", amount: "1", unit: "", note: "cut into wedges", amountNumeric: 1 },
      ],
    },
  ],
  instructions: [
    {
      step: 1,
      text: "Cook the beef. Heat the oil in a frying pan over medium-high heat, cook the onion for 3 minutes until soft, then add the mince and break it up. Fry for 5 to 6 minutes until browned with no pink left. Stir in the garlic, spices, salt and tomato paste for 1 minute, add the water and simmer for 3 to 4 minutes until the pan is almost dry.",
      tip: "Minced beef is safe at 71°C (160°F). Tip off any pooled fat before using; fat and liquid soak straight into the chips.",
    },
    {
      step: 2,
      text: "Mix the two grated cheeses. Pat the rinsed beans and the jalapeños dry on kitchen paper.",
    },
    {
      step: 3,
      text: "Cut a round of parchment (baking paper) to fit the floor of your basket with two strips overhanging the sides as handles. Preheat the empty air fryer to 180°C (350°F) for 2 minutes. Never preheat with loose parchment inside; without food on top, the fan can lift it into the heating element.",
    },
    {
      step: 4,
      text: "Build the first batch on the parchment on your worktop: a single layer of chips (about 50g), a quarter of the cheese, half the beef and beans, a second layer of chips, then another quarter of the cheese over the top and half the jalapeños. Leave the chips' edges peeking out at the sides so they stay crunchy.",
    },
    {
      step: 5,
      text: "Lower the loaded parchment into the hot basket using the handles. Air fry at 180°C (350°F) for 3 to 5 minutes, checking at 3. They're ready when the cheese is fully melted and glossy, bubbling at the edges, and the exposed chip tips are deep gold rather than brown.",
    },
    {
      step: 6,
      text: "Lift the nachos out by the parchment and slide them onto a plate. Scatter over spring onions, then spoon on salsa, soured cream and avocado, add coriander and serve with lime wedges straight away.",
    },
    {
      step: 7,
      text: "Build and cook the second batch the same way while the first plate is being eaten.",
    },
  ],
  equipment: [
    "Air fryer (5 to 6 litre basket)",
    "Frying pan",
    "Parchment (baking paper) or a perforated air fryer liner",
    "Box grater",
    "Instant-read thermometer (for the beef)",
  ],
  cookingChart: {
    caption: "Air fryer nachos temperature and time",
    headers: ["What you're cooking", "Temperature", "Time", "Notes"],
    rows: [
      ["Cheese-only nachos, one layer", "180°C (350°F)", "2 to 3 min", "Cheese on top anchors the chips"],
      ["Loaded, one layer, hot meat", "180°C (350°F)", "3 to 4 min", "Fastest loaded option"],
      ["Loaded, two layers, hot meat", "180°C (350°F)", "4 to 5 min", "Maximum for a 5 to 6 litre basket"],
      ["Loaded, toppings straight from the fridge", "170°C (340°F)", "5 to 6 min", "Lower heat lets the centre warm before chip edges brown"],
      ["Homemade tortilla chips", "180°C (350°F)", "5 to 7 min", "Single layer, shake halfway"],
      ["Reheating leftover nachos", "180°C (350°F)", "2 to 3 min", "Scrape off cold toppings first"],
    ],
  },
  sections: [
    {
      id: "not-soggy",
      heading: "How to keep air fryer nachos from going soggy",
      body: `Keep wet ingredients away from the chips until the moment you eat. The usual culprits:

- **Wet meat.** Simmer the mince until the pan is almost dry and drain the fat. Shredded chicken needs a spoonful of salsa at most, not a sauce.
- **Beans and pickles.** Rinse tinned beans, then pat them dry. Do the same with jalapeños; their brine is mostly water and vinegar.
- **Salsa, fresh tomato and soured cream cooked with the chips.** Heat makes them release liquid. Spoon them on after cooking, cold.
- **Thin chips.** Cheap, thin chips go limp under any weight. Choose thick, restaurant-style ones, or make your own as below.

The cheese layer between the chips matters too. Melted cheese is mostly fat and protein, and it forms a seal that slows water moving down from the toppings. Grate it from a block: bagged grated cheese is coated in starch to stop clumping, and it melts slower and grainier.`,
    },
    {
      id: "batch-size",
      heading: "How many nachos fit in an air fryer?",
      body: `About 100g (3.5 oz) of chips per batch in a 5 to 6 litre basket, in two layers. That's one generous plate for two people. Piling higher doesn't work: the top layer burns while the cheese in the middle stays unmelted, and the chips at the bottom go soft under the weight.

For four people, cook two batches back to back; each takes 3 to 5 minutes, so the second is ready by the time the first plate is finished. Dual-basket models do both at once. Oven-style air fryers with flat trays are the most efficient, because the chips spread wide rather than deep.

For a big spread, such as a family iftar table, a sheet-pan of nachos in a regular oven at 200°C (400°F) for 8 to 10 minutes covers more people in one go. The air fryer still wins on crispness for smaller plates, since the air moves under the chips as well as over them.`,
    },
    {
      id: "homemade-chips",
      heading: "Making nachos with tortillas: homemade chips in the air fryer",
      body: `Cut corn or flour tortillas into 6 or 8 wedges, brush both sides lightly with oil and sprinkle with salt. Air fry in a single layer at 180°C (350°F) for 5 to 7 minutes, shaking the basket halfway, until they're golden and firm. They crisp up further as they cool for a minute.

Corn tortillas give the classic crunchy chip. Flour tortillas, which are easier to find in many Gulf supermarkets, puff in places and give a lighter, flakier chip; check them at 4 minutes because they brown faster. Leftover Arabic flatbread works the same way, though it's thinner and needs only 3 to 5 minutes. Homemade chips are sturdier than most bagged ones, so they hold loaded toppings well.`,
    },
    {
      id: "oven-or-air-fryer",
      heading: "Are nachos better in the oven or the air fryer?",
      body: `The air fryer gives crisper nachos faster; the oven feeds more people at once. A plate takes 3 to 5 minutes in the air fryer with almost no preheat, while an oven takes about 10 minutes to heat before an 8 to 10 minute bake.

The microwave is the weakest option. It melts cheese by heating water, and that steam softens the chips within a minute. For something crunchy to add on top, a handful of [roasted chickpeas](/recipes/air-fryer-chickpeas/) survives the heat better than raw vegetables. Melted cheese that drips through the basket is easiest to clean while warm; see our [air fryer cleaning guide](/beyond-the-recipes/how-to-clean-air-fryer/).`,
    },
  ],
  tips: [
    "Make sure the meat is hot when it goes on. Cold meat from the fridge needs longer in the air fryer, and the chip edges will brown before it heats through.",
    "Put cheese on last so it covers the top layer. Bare chips on top are light enough for the fan to lift and blow around.",
    "Check at 3 minutes. Nachos go from melted to scorched quickly because the chips are already cooked.",
    "A perforated air fryer liner works as well as parchment and leaves the air holes open for crisper chips.",
  ],
  substitutions: [
    "Chicken: use 250g (9 oz) shredded cooked chicken tossed with ½ tsp each of cumin and chilli powder.",
    "Vegetarian: replace the beef with the whole tin of black beans plus 150g sweetcorn, both patted dry.",
    "Cheese: any good melting cheese works. A halal-certified pizza blend or a mix of cheddar and mozzarella is easy to find in Gulf supermarkets; check the pack for microbial rennet or a halal mark if that matters to you.",
    "Soured cream: thick Greek-style yoghurt or labneh loosened with a little water.",
    "Spiced beef: use leftover halal beef chilli, simmered until thick.",
  ],
  variations: [
    "Shawarma nachos: top with sliced chicken shawarma, finish with garlic sauce, pickled turnip and parsley instead of salsa.",
    "Halloumi and za'atar: skip the meat, scatter diced halloumi over the chips with the cheese, and finish with za'atar, tomato and cucumber.",
    "Nacho fries: use cooked air fryer chips (fries) in place of tortilla chips, top and melt at 180°C (350°F) for 3 minutes.",
  ],
  servingSuggestions: [
    "With a bowl of guacamole and extra salsa on the side for dipping.",
    "As a sharing starter before tacos or grilled chicken.",
    "With a crunchy cabbage and lime slaw to cut through the cheese.",
  ],
  storage:
    "Nachos don't keep well once assembled. Store leftover spiced beef in the fridge for up to 3 days and leftover chips in a sealed bag at room temperature. If you do have leftover assembled nachos, scrape off the cold toppings and refrigerate the rest for up to 1 day.",
  reheating:
    "Scrape off any salsa, soured cream or avocado, then reheat at 180°C (350°F) for 2 to 3 minutes on parchment until the cheese melts again. The chips won't be as crisp as fresh, but they'll be far better than microwaved.",
  makeAhead:
    "Cook the beef up to 3 days ahead and reheat it in a pan until hot before building the nachos. Grate the cheese and prep the cold toppings a few hours ahead. Assemble only when the air fryer is ready.",
  troubleshooting: [
    "Chips soggy in the middle: wet meat or beans, or salsa that went in with the chips. Dry everything and keep cold toppings for the end.",
    "Cheese melted on top but not in the middle: keep to two layers and put the meat on hot. With cold toppings, drop to 170°C (340°F) and add a minute.",
    "Chip edges burnt: the chips are already cooked, so they only need 3 to 5 minutes at 180°C (350°F). Check at 3.",
    "Chips blew around the basket: finish every batch with a layer of cheese to hold the top chips down.",
    "Cheese greasy and split: overcooked, or from a pre-grated bag. Take the nachos out as soon as the cheese turns glossy.",
  ],
  faqs: [
    {
      question: "Can you make nachos in an air fryer?",
      answer:
        "Yes. Line the basket with parchment, layer tortilla chips with grated cheese and hot cooked meat, and air fry at 180°C (350°F) for 3 to 5 minutes. The circulating air melts the cheese and keeps the bottom chips crisp. Cook in batches of about 100g of chips.",
    },
    {
      question: "What temperature do you cook nachos at in the air fryer?",
      answer:
        "Use 180°C (350°F). It melts cheese in 3 to 5 minutes without scorching chips that are already cooked. If your toppings are cold from the fridge, drop to 170°C (340°F) and add 1 to 2 minutes so the centre warms before the edges brown.",
    },
    {
      question: "How long do nachos take in the air fryer?",
      answer:
        "Three to five minutes at 180°C (350°F) for a loaded two-layer batch, or 2 to 3 minutes for cheese-only nachos. Check at 3 minutes. They're done when the cheese is glossy and bubbling at the edges and the chip tips are deep gold.",
    },
    {
      question: "How do you reheat nachos in the air fryer?",
      answer:
        "Scrape off cold toppings like salsa and soured cream, then air fry at 180°C (350°F) for 2 to 3 minutes on parchment until the cheese melts again. Add fresh cold toppings after. Chips that sat overnight under wet toppings won't fully recover.",
    },
    {
      question: "Are nachos better in the oven or the air fryer?",
      answer:
        "The air fryer makes crisper nachos faster because hot air reaches under the chips, and a batch takes 3 to 5 minutes. The oven is better for a crowd, since one large tray holds several batches. Both beat the microwave, which steams the chips soft.",
    },
    {
      question: "Can you put parchment paper in the air fryer for nachos?",
      answer:
        "Yes, as long as the nachos are sitting on it. Cut it to fit the basket floor, keep it away from the heating element, and never preheat with empty parchment inside, because the fan can lift it. Parchment with overhanging strips also lets you lift the nachos out in one piece.",
    },
    {
      question: "Can you put raw minced beef on nachos in the air fryer?",
      answer:
        "No. Nachos cook for only 3 to 5 minutes, which isn't long enough to bring raw mince to a safe 71°C (160°F), and the raw meat would release fat and water into the chips. Cook and drain the beef in a pan first.",
    },
  ],
  relatedRecipeSlugs: [
    "air-fryer-taquitos",
    "air-fryer-chicken-wings",
    "chicken-shawarma",
  ],
};
