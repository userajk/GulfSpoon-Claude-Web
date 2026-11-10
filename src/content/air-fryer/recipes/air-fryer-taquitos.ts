import type { Recipe } from "@/lib/schema/recipe";

export const recipe: Recipe = {
  slug: "air-fryer-taquitos",
  recipeName: "Air Fryer Chicken Taquitos",
  archiveTitle: "Air Fryer Taquitos",
  pageTitle: "Air Fryer Taquitos (Chicken or Beef, Plus Frozen Times)",
  seoTitle: "Air Fryer Taquitos: Homemade or Frozen",
  metaDescription:
    "Air fryer taquitos with a halal chicken or beef filling, crisp in 8 minutes at 200°C (400°F). Plus frozen taquito times and how to stop tortillas cracking.",
  shortDescription:
    "Tightly rolled tortillas filled with spiced, cheesy halal chicken (or beef), brushed with oil and air fried until blistered and crunchy. Homemade taquitos take about 8 minutes per batch, and the chart covers frozen store-bought ones too.",
  quickAnswer:
    "Air fry homemade taquitos at 200°C (400°F) for 7 to 9 minutes, seam-side down and brushed with oil, turning once at 5 minutes, until the tortillas are golden and blistered and the filling is hot. Frozen store-bought taquitos need 7 to 10 minutes at 200°C straight from the freezer, with no thawing.",
  primaryKeyword: "air fryer taquitos",
  secondaryKeywords: [
    "air fryer taquitos recipe",
    "homemade air fryer taquitos",
    "air fryer taquitos frozen",
    "how long to cook frozen taquitos in air fryer",
    "air fryer chicken taquitos",
    "air fryer taquitos beef",
    "air fryer taquitos flour tortillas",
    "air fryer taquitos corn tortillas",
    "are taquitos better in the oven or air fryer",
    "are taquitos already cooked",
  ],
  intro: `Taquitos are rolled tortillas with a savoury filling, traditionally deep-fried. The air fryer gets them close to that crunch with 1½ tablespoons of oil for a dozen, because the fan blows hot air all the way round each roll. The tortilla blisters and crisps while the filling, which is already cooked, just has to heat through.

This recipe uses shredded halal chicken bound with cream cheese, cheddar and salsa, with a beef version below. The cream cheese matters: it holds the filling together so it doesn't fall out of the ends, and it stays creamy instead of drying out in the hot air. Leftover roast chicken or [air fryer chicken thighs](/recipes/air-fryer-chicken-thighs/) shredded with two forks work well, and so does leftover [chicken shawarma](/recipes/chicken-shawarma/) for a Gulf-style filling.

Homemade taquitos usually go wrong in one of two ways: the tortillas crack as you roll them, or the rolls open up in the basket. Warm tortillas don't crack, and a tight roll laid seam-side down stays shut.`,
  author: "omar-hussain",
  publishedAt: "2026-11-24",
  cuisine: "Mexican",
  categories: ["air-fryer", "ramadan"],
  mealTypes: ["Snack", "Lunch", "Dinner"],
  cookingMethods: ["Air Frying"],
  difficulty: "Easy",
  prepTimeMinutes: 20,
  cookTimeMinutes: 16,
  totalTimeMinutes: 36,
  servings: 4,
  estimatedCost: "Low",
  heroImage: "/images/recipes/air-fryer-taquitos.webp",
  imageAlt:
    "A dozen golden, blistered chicken taquitos stacked on a board with small bowls of tomato salsa, guacamole and sour cream, one taquito cut open to show the creamy chicken filling",
  ingredients: [
    {
      title: "Chicken Filling",
      items: [
        { item: "cooked halal chicken", amount: "350", unit: "g", note: "12 oz, about 2½ cups, shredded (breast, thigh or a mix)", amountNumeric: 350 },
        { item: "cream cheese", amount: "60", unit: "g", note: "2 oz, softened", amountNumeric: 60 },
        { item: "cheddar or Monterey Jack", amount: "80", unit: "g", note: "¾ cup, grated", amountNumeric: 80 },
        { item: "tomato salsa", amount: "60", unit: "ml", note: "¼ cup, thick, drained of excess liquid", amountNumeric: 60 },
        { item: "ground cumin", amount: "1", unit: "tsp", amountNumeric: 1 },
        { item: "chilli powder or paprika", amount: "1", unit: "tsp", amountNumeric: 1 },
        { item: "garlic powder", amount: "½", unit: "tsp", amountNumeric: 0.5 },
        { item: "salt", amount: "½", unit: "tsp", note: "less if the chicken is already seasoned", amountNumeric: 0.5 },
        { item: "lime", amount: "½", unit: "", note: "juiced", amountNumeric: 0.5 },
        { item: "fresh coriander", amount: "2", unit: "tbsp", note: "chopped", amountNumeric: 2 },
      ],
    },
    {
      title: "Wrapping",
      items: [
        { item: "corn tortillas", amount: "12", unit: "", note: "15cm (6 inch); or 10 flour tortillas, 20cm (8 inch)", amountNumeric: 12 },
        { item: "neutral oil", amount: "1½", unit: "tbsp", note: "for brushing", amountNumeric: 1.5 },
      ],
    },
    {
      title: "Beef Filling (Alternative)",
      items: [
        { item: "halal minced beef", amount: "400", unit: "g", note: "14 oz, 15–20% fat", amountNumeric: 400 },
        { item: "onion", amount: "1", unit: "small", note: "finely chopped", amountNumeric: 1 },
        { item: "tomato paste", amount: "1", unit: "tbsp", amountNumeric: 1 },
        { item: "ground cumin", amount: "1", unit: "tsp", amountNumeric: 1 },
        { item: "chilli powder", amount: "1", unit: "tsp", amountNumeric: 1 },
        { item: "dried oregano", amount: "½", unit: "tsp", amountNumeric: 0.5 },
        { item: "salt", amount: "½", unit: "tsp", amountNumeric: 0.5 },
        { item: "water", amount: "60", unit: "ml", note: "¼ cup", amountNumeric: 60 },
        { item: "cheddar", amount: "60", unit: "g", note: "½ cup, grated", amountNumeric: 60 },
      ],
    },
    {
      title: "To Serve",
      items: [
        { item: "sour cream or thick yoghurt", amount: "", unit: "", note: "for dipping" },
        { item: "guacamole and salsa", amount: "", unit: "", note: "for dipping" },
        { item: "shredded lettuce", amount: "", unit: "", note: "optional" },
      ],
    },
  ],
  instructions: [
    { step: 1, text: "Make the filling. Mash the cream cheese with the cumin, chilli powder, garlic powder, salt and lime juice, then stir in the chicken, grated cheese, salsa and coriander until evenly combined. It should be thick enough to hold its shape on a spoon.", tip: "For beef: fry the mince and onion in a dry pan over medium-high heat for 6 to 8 minutes, breaking it up, until no pink remains (71°C/160°F). Add the spices, tomato paste and water and cook for 3 minutes until the liquid has gone. Cool for 5 minutes, then stir in the cheese." },
    { step: 2, text: "Warm the tortillas so they bend without cracking. Wrap 6 at a time in a damp paper towel and microwave for 30 to 45 seconds until soft and floppy. Keep them covered with a tea towel while you roll.", tip: "Cold corn tortillas always crack. Flour tortillas are more forgiving but still roll tighter when warm." },
    { step: 3, text: "Spoon about 2 heaped tablespoons (40g) of filling in a line along the lower third of a tortilla, leaving 1cm clear at each end. Roll up tightly from the filled edge and place seam-side down on a tray. Repeat with the rest." },
    { step: 4, text: "Preheat the air fryer to 200°C (400°F) for 3 minutes. Use 190°C (375°F) if you're using flour tortillas, which brown faster." },
    { step: 5, text: "Brush the taquitos lightly all over with oil. The oil is what makes the tortilla blister and crunch; without it the surface dries out and turns leathery." },
    { step: 6, text: "Lay 6 to 8 taquitos in the basket, seam-side down, with 1cm between them. Air fry for 5 minutes." },
    { step: 7, text: "Turn them with tongs and cook for another 2 to 4 minutes, until golden with darker blistered spots, the ends are crisp and the filling is steaming hot (74°C/165°F if you check). Flour tortillas take 8 to 10 minutes in total at 190°C." },
    { step: 8, text: "Rest for 2 minutes before serving; the filling is very hot. Cook the second batch while you eat the first." },
  ],
  equipment: ["Air fryer (5–6 litre basket)", "Mixing bowl", "Microwave", "Pastry brush", "Tongs"],
  cookingChart: {
    caption: "Air fryer taquito times in a preheated 5–6 litre basket air fryer, single layer, turned halfway",
    headers: ["Type", "Temperature", "Time", "Notes"],
    rows: [
      ["Homemade, corn tortillas", "200°C (400°F)", "7–9 min", "Brush with oil; seam-side down"],
      ["Homemade, flour tortillas", "190°C (375°F)", "8–10 min", "Browns faster, so lower heat"],
      ["Homemade, frozen uncooked", "190°C (375°F)", "12–15 min", "No thawing; filling must reach 74°C (165°F)"],
      ["Store-bought frozen, regular", "200°C (400°F)", "7–10 min", "No thawing or oil needed"],
      ["Store-bought frozen, mini", "200°C (400°F)", "5–7 min", "Shake rather than turn"],
      ["Store-bought frozen, flour tortilla", "190°C (375°F)", "9–11 min", "Check ends for scorching"],
      ["Reheating cooked leftovers", "180°C (350°F)", "3–4 min (5–6 from frozen)", "Until hot in the centre"],
    ],
  },
  sections: [
    {
      id: "frozen-taquitos",
      heading: "How long to cook frozen taquitos in the air fryer",
      body: `Cook frozen store-bought taquitos at 200°C (400°F) for 7 to 10 minutes, straight from the freezer, turning or shaking once halfway. Mini taquitos need 5 to 7 minutes. Don't thaw them first: a thawed taquito softens and the tortilla can split before it crisps.

Most frozen taquitos are sold fully cooked (often par-fried), so they already carry enough oil to crisp and you're mainly heating the filling. Check the box. If it says "cook thoroughly" rather than "fully cooked", or if you're unsure, check that the filling reaches 74°C (165°F) in the centre. With a fully cooked product, look for a filling that is steaming hot when you break one open.

Keep them in a single layer. A full basket of frozen taquitos stacked two deep steams in the middle and stays soft; if you must pile them up, add 2 minutes and shake twice.

**On halal frozen taquitos:** many imported frozen taquito brands are made for the US market and aren't halal-certified, and the filling can include non-halal meat. In the Gulf, frozen taquitos are less common than frozen samosas and spring rolls; where you find them, check for a halal mark. Making your own freezer batch (below) is the reliable route. For times on other frozen snacks, see our [frozen food cooking times chart](/beyond-the-recipes/air-fryer-frozen-food-cooking-times/).`,
    },
    {
      id: "corn-or-flour-tortillas",
      heading: "Corn or flour tortillas for taquitos?",
      body: `Corn tortillas give the classic taquito: a thin shell that shatters when you bite it, with a toasted corn flavour. They crack when rolled cold, so always warm them first. Small 15cm (6 inch) corn tortillas are the traditional size.

Flour tortillas are easier to find in most Gulf supermarkets, roll without cracking and give a thicker, flakier crust, closer to a crisp wrap. They contain fat and sometimes sugar, so they brown faster: drop the temperature to 190°C (375°F) and allow 8 to 10 minutes. Use the 20cm (8 inch) size and slightly more filling, about 3 tablespoons each.

Large 25cm wrap-style tortillas are too big; the inner layers stay soft. If that's all you have, cut them in half and roll each half from the cut edge.`,
    },
    {
      id: "make-ahead-freezer-taquitos",
      heading: "Making a freezer batch of homemade taquitos",
      body: `Taquitos freeze well uncooked, so a bag in the freezer covers iftar starters in Ramadan or after-school snacks. Roll them as usual, but don't brush them with oil. Freeze them on a lined tray, not touching, for 2 hours until solid, then pack them into a freezer bag. They keep for up to 3 months.

To cook from frozen, brush or spray with oil and air fry at 190°C (375°F) for 12 to 15 minutes, turning halfway. The lower temperature gives the filling time to heat through before the tortilla over-browns. Check that the centre reaches 74°C (165°F).

The same freezer method works for a tray of cheesy beef taquitos to go alongside a plate of [loaded nachos](/recipes/air-fryer-nachos/) for a crowd. After a few batches, wipe the basket while it's warm; cheese that leaks from the ends bakes on hard, and our [air fryer cleaning guide](/beyond-the-recipes/how-to-clean-air-fryer/) covers how to shift it.`,
    },
  ],
  tips: [
    "Keep the filling thick. Wet filling soaks the tortilla from the inside and it steams instead of crisping. Drain watery salsa in a sieve first.",
    "Leave the ends 1cm clear when you spread the filling. Overfilled ends leak cheese, which burns on the basket.",
    "If a taquito won't stay closed, push a cocktail stick through the seam and remove it before serving.",
    "Brush oil on every surface, including the ends. Dry patches stay pale and chewy.",
    "Cook in batches with gaps between taquitos. They need air on all sides to crisp evenly.",
  ],
  substitutions: [
    "Use shredded leftover roast chicken, poached chicken breast or a halal rotisserie chicken.",
    "Swap the cream cheese for labneh or thick strained yoghurt; the filling will be slightly looser.",
    "Replace cheddar with mozzarella or a grated cheese blend.",
    "No salsa? Use 2 tbsp tomato paste loosened with 2 tbsp water, plus a chopped green chilli.",
  ],
  variations: [
    "Shawarma taquitos: fill with chopped chicken shawarma and a little garlic sauce, and serve with pickles and tahini.",
    "Bean and cheese: replace the meat with 1 can (400g) of black beans or pinto beans, drained and lightly mashed.",
    "Spicy: add 1 finely chopped jalapeño or green chilli and ½ tsp chipotle powder to the filling.",
    "Za'atar beef: season the beef filling with 1 tsp za'atar and ½ tsp sumac instead of oregano and cumin.",
  ],
  servingSuggestions: [
    "Serve with guacamole, salsa and sour cream for dipping.",
    "Lay on shredded lettuce, top with crumbled feta or queso fresco and a drizzle of lime crema.",
    "Pair with a bowl of rice and beans or a corn salad for a full meal.",
    "Put them on an iftar table beside samosas and dates; they hold their crunch for about 10 minutes.",
  ],
  storage:
    "Refrigerate cooked taquitos in an airtight container for up to 3 days. Freeze cooked taquitos on a tray, then bag them, for up to 2 months. Uncooked homemade taquitos freeze for up to 3 months.",
  reheating:
    "Reheat in the air fryer at 180°C (350°F) for 3 to 4 minutes from the fridge, or 5 to 6 minutes from frozen, turning once, until hot in the centre. The microwave makes the tortilla soft.",
  makeAhead:
    "Make the filling up to 2 days ahead and keep it covered in the fridge. Roll the taquitos up to 4 hours before cooking and keep them covered and chilled, seam-side down, or freeze them uncooked as described above.",
  troubleshooting: [
    "Tortillas crack when rolling: they're too cold or dry. Microwave them wrapped in a damp paper towel for 30 to 45 seconds and roll while warm.",
    "Taquitos unroll in the basket: they weren't seam-side down, or the fan lifted the edge. Roll tighter, place seam-down and use a cocktail stick if needed.",
    "Pale and leathery: no oil, or not enough. Brush every surface lightly.",
    "Burnt ends, cold middle: the heat was too high for flour tortillas or for frozen homemade taquitos. Use 190°C (375°F) and cook longer.",
    "Filling leaking out: overfilled or filling too wet. Use about 40g per corn tortilla and keep the ends clear.",
  ],
  faqs: [
    { question: "How long do you cook taquitos in the air fryer?", answer: "Cook homemade taquitos at 200°C (400°F) for 7 to 9 minutes, turning once at 5 minutes. Frozen store-bought taquitos take 7 to 10 minutes at 200°C from frozen, and mini ones 5 to 7 minutes. They're done when golden, blistered and hot in the centre." },
    { question: "Do you need to thaw frozen taquitos before air frying?", answer: "No. Cook them straight from the freezer. Thawed taquitos go soft and the tortilla can split before it crisps. Lay them in a single layer and cook at 200°C (400°F) for 7 to 10 minutes, turning halfway." },
    { question: "Are taquitos better in the oven or the air fryer?", answer: "The air fryer gives crisper taquitos in less time. It takes about 7 to 10 minutes against roughly 15 to 20 minutes in a conventional oven, and the strong fan crisps all sides evenly. An oven is better only when you need to cook a large tray at once." },
    { question: "Are frozen taquitos already cooked?", answer: "Most are sold fully cooked or par-fried, so you only need to heat them through and crisp the shell. Check the packaging. If it doesn't say fully cooked, make sure the filling reaches 74°C (165°F) in the centre before eating." },
    { question: "How do you keep taquitos from cracking?", answer: "Warm the tortillas before rolling. Wrap them in a damp paper towel and microwave for 30 to 45 seconds until they are soft and floppy, then roll them while they're still warm. Corn tortillas crack almost every time if they're rolled cold." },
    { question: "Do you need oil for air fryer taquitos?", answer: "Homemade taquitos need a light brush of oil, about 1½ tablespoons for a dozen, or the tortillas turn dry and leathery. Frozen store-bought taquitos are usually pre-fried, so they crisp without any extra oil." },
    { question: "Can you use flour tortillas for taquitos?", answer: "Yes. Flour tortillas roll without cracking and make a thicker, flakier shell. Use the 20cm (8 inch) size, and cook at 190°C (375°F) for 8 to 10 minutes, because they brown faster than corn tortillas." },
  ],
  relatedRecipeSlugs: ["air-fryer-nachos", "chicken-shawarma", "air-fryer-chicken-thighs"],
};
