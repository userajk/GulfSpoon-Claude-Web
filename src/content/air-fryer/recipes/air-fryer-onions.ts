import type { Recipe } from "@/lib/schema/recipe";

export const recipe: Recipe = {
  slug: "air-fryer-onions",
  recipeName: "Air Fryer Roasted Onions",
  archiveTitle: "Air Fryer Onions",
  pageTitle: "Air Fryer Onions: Roasted Wedges, Jammy Slices and Crispy Fried Onions",
  seoTitle: "Air Fryer Onions: Roasted, Jammy or Crispy",
  metaDescription:
    "Air fryer onions three ways: roasted wedges at 190°C (375°F) in 16 minutes, slow jammy onions, and crispy fried onions for biryani. With a time chart.",
  shortDescription:
    "Red onion wedges roasted in the air fryer until the edges char and the layers turn soft and sweet, finished with sumac and a little pomegranate molasses. Below the recipe are two more methods: slow, jammy onions for burgers and sandwiches, and thin crispy fried onions for scattering over rice.",
  quickAnswer:
    "Cut onions into 8 wedges through the root, toss with oil and salt, and air fry at 190°C (375°F) for 14 to 18 minutes, shaking twice. They are done when the outer edges are dark brown, the layers are soft and translucent, and a knife slides into the root end with no resistance.",
  primaryKeyword: "air fryer onions",
  secondaryKeywords: [
    "roasted onions in air fryer",
    "how long to cook onions in air fryer",
    "how to caramelize onions in air fryer",
    "crispy air fryer onions",
    "how to make crispy fried onions in air fryer",
    "air fryer onion wedges",
    "air fryer onions and peppers",
    "can you put raw onions in air fryer",
    "will onions burn in air fryer",
  ],
  intro: `How you cut an onion and how hot you run the air fryer decide what you get. Thick wedges roast, charring outside while the layers go soft and sweet. Thin slices packed into a small tin at low heat turn jammy, close to stovetop caramelised onions, and slices cut paper-thin and dusted in cornflour come out crisp like the fried onions sold in tubs. The roasted wedges are the main recipe here; the other two methods follow it.

Wedges are the easiest and the ones you'll make most. Cut through the root so each wedge holds together, and cook at 190°C (375°F) rather than the usual 200°C (400°F). At the higher heat the thin outer petals blacken before the thick base near the root is cooked, and a few extra minutes at 190°C fixes that.

Roasted onion wedges go with almost anything grilled. Try them with [halal beef bratwurst from the air fryer](/recipes/air-fryer-brats/), or toss them with [garlic mushrooms](/recipes/air-fryer-mushrooms/) for a quick mixed side.`,
  author: "sarah-al-fayed",
  publishedAt: "2026-11-26",
  cuisine: "International",
  categories: ["air-fryer", "quick-and-easy"],
  mealTypes: ["Side Dish"],
  cookingMethods: ["Air Frying"],
  dietaryTags: ["Vegan", "Vegetarian", "Gluten-Free", "Dairy-Free"],
  difficulty: "Easy",
  prepTimeMinutes: 8,
  cookTimeMinutes: 16,
  totalTimeMinutes: 24,
  servings: 4,
  estimatedCost: "Low",
  heroImage: "/images/recipes/air-fryer-onions.webp",
  imageAlt:
    "Red onion wedges with charred brown edges and soft purple layers, dusted with sumac and drizzled with pomegranate molasses on a white platter",
  ingredients: [
    {
      title: "Roasted Onion Wedges",
      items: [
        { item: "red or yellow onions", amount: "2", unit: "large", note: "about 500g (1 lb 2 oz) total", amountNumeric: 2 },
        { item: "olive oil", amount: "1½", unit: "tbsp", amountNumeric: 1.5 },
        { item: "fine salt", amount: "½", unit: "tsp", amountNumeric: 0.5 },
        { item: "black pepper", amount: "¼", unit: "tsp", amountNumeric: 0.25 },
        { item: "dried thyme or oregano", amount: "½", unit: "tsp", note: "optional", amountNumeric: 0.5 },
      ],
    },
    {
      title: "To Finish",
      items: [
        { item: "sumac", amount: "½", unit: "tsp", amountNumeric: 0.5 },
        { item: "pomegranate molasses", amount: "1", unit: "tsp", note: "or honey", amountNumeric: 1 },
        { item: "flat-leaf parsley", amount: "1", unit: "tbsp", note: "chopped, optional", amountNumeric: 1 },
      ],
    },
  ],
  instructions: [
    {
      step: 1,
      text: "Trim the top of each onion and peel it, but leave the hairy root end on. Cut the onion in half from top to root, then cut each half into 4 wedges, keeping a little root on every wedge.",
      tip: "The root is what holds the layers together. Trim it off and the wedge falls apart into loose petals that cook unevenly.",
    },
    {
      step: 2,
      text: "Preheat the air fryer to 190°C (375°F) for 3 minutes.",
    },
    {
      step: 3,
      text: "Toss the wedges in a bowl with the olive oil, salt, pepper and thyme. Use your hands to rub oil between the outer layers.",
    },
    {
      step: 4,
      text: "Lay the wedges in the basket on their cut sides in a single layer. A 5 to 6 litre basket fits two large onions. Air fry for 6 minutes.",
    },
    {
      step: 5,
      text: "Shake the basket or turn the wedges with tongs onto their other cut side. Cook for another 6 minutes.",
    },
    {
      step: 6,
      text: "Check the thickest wedge: push the tip of a knife into the root end. If it meets resistance, cook for 2 to 6 minutes more, checking every 2 minutes. The tips should be dark brown and slightly crisp, and the layers soft and see-through.",
    },
    {
      step: 7,
      text: "Drizzle the pomegranate molasses over the wedges in the basket and cook for 1 minute more to warm it through.",
      tip: "Only add sugary glazes at the very end. Pomegranate molasses and honey burn within 3 or 4 minutes at this heat.",
    },
    {
      step: 8,
      text: "Transfer to a platter, sprinkle with sumac and parsley and serve warm. Snip off any tough root pieces as you eat.",
    },
  ],
  equipment: ["Air fryer", "Sharp knife", "Mixing bowl", "Tongs", "Small metal cake tin or foil tin (for jammy onions)"],
  cookingChart: {
    caption: "How long to cook onions in the air fryer, by cut and result (preheated, 5–6 litre basket, 2 large onions)",
    headers: ["Cut and result", "Temperature", "Time", "Done when"],
    rows: [
      ["Wedges, 8 per onion, roasted", "190°C (375°F)", "14–18 min", "Tips dark brown, knife slides into root end"],
      ["Separated petals, roasted", "190°C (375°F)", "9–12 min", "Edges charred, petals soft but still cupped"],
      ["Thick 1cm slices or rounds, roasted", "190°C (375°F)", "10–13 min", "Soft and browned at the edges"],
      ["Thin 5mm slices, softened (sautéed-style)", "180°C (350°F)", "10–12 min, stir twice", "Limp, translucent, golden in places"],
      ["Thin 5mm slices in a tin, jammy and caramelised-style", "150°C (300°F)", "30–40 min, stir every 8 min", "Deep amber, jammy, sweet"],
      ["Very thin 2mm slices in cornflour, crispy fried onions", "170°C (340°F)", "12–16 min, shake every 3–4 min", "Mahogany brown, crisp once cooled"],
      ["Small onions, halved", "190°C (375°F)", "18–22 min", "Soft right through when pierced"],
      ["Strips with sliced peppers", "200°C (400°F)", "10–12 min", "Peppers blistered, onions soft"],
    ],
  },
  sections: [
    {
      id: "jammy-onions",
      heading: "How to caramelise onions in the air fryer",
      body: `Proper caramelised onions need long, gentle heat in a layer of their own juices, and an open basket dries them out before they get there. Cook them in a small metal cake tin, a foil tin or the pan insert that comes with some air fryers, which holds the moisture in.

1. Thinly slice 2 large onions (about 5mm), toss with 1½ tbsp oil and ½ tsp salt and pack into a tin that fits the basket.
2. Air fry at 150°C (300°F) for 30 to 40 minutes, stirring every 8 minutes and scraping the sides.
3. If the edges start to catch before the middle softens, add 1 tbsp water and stir.
4. Pull them when they are deep amber and jammy. Stir in a pinch of sugar or 1 tsp pomegranate molasses in the last 5 minutes if you want them sweeter.

They come out close to stovetop caramelised onions, a little less even in colour, and you only stir every 8 minutes. In a Gulf summer, that beats 45 minutes over a hot hob. They keep for 5 days in the fridge and go on burgers, in grilled cheese sandwiches and over hummus.`,
    },
    {
      id: "crispy-fried-onions",
      heading: "How to make crispy fried onions in the air fryer",
      body: `Crispy fried onions, the birista used on biryani and scattered over rice dishes like [chicken machboos](/recipes/chicken-machboos/), are usually deep fried. The air fryer gets close with a tablespoon of oil.

1. Slice 2 large onions as thinly as you can, about 2mm. A mandoline helps.
2. Separate the rings, toss with 1 tbsp cornflour and ¼ tsp salt, then with 1 tbsp oil.
3. Spread in the basket no more than 2cm deep and air fry at 170°C (340°F) for 12 to 16 minutes, shaking every 3 to 4 minutes so the edges do not burn while the centre stays pale.
4. Stop when they are an even mahogany brown. They will still feel slightly soft in the basket and crisp up within 5 minutes on a plate.

The cornflour absorbs surface moisture and forms a thin, crisp shell. Watch the last 3 minutes closely, because onions go from brown to burnt quickly once the water is gone. Stored in an airtight jar once completely cool, they stay crisp for about a week.`,
    },
    {
      id: "why-burnt",
      heading: "Why do onions burn in the air fryer?",
      body: `Onions burn when thin pieces sit next to thick ones, or when the fan blows loose pieces up against the heating element. Cut evenly, keep the root on wedges so they hold together, and do not cook very thin slices loose at 200°C (400°F). For thin slices, lower the heat and shake often.

Very light pieces such as separated petals and thin rings can be lifted by the fan in some models. If you see this, weigh them down with a metal trivet or cook them in a tin.

Onions take longer than most quick-cooking vegetables, so if you are mixing them with mushrooms or peppers, give the onions a 5-minute head start. Potatoes are the opposite case: when roasting [cubed air fryer potatoes](/recipes/air-fryer-potatoes/) with onion, add the wedges when the potatoes have about 15 minutes left. Our [vegetable time and temperature chart](/beyond-the-recipes/air-fryer-vegetable-recipes/) sorts vegetables into slow, medium and fast groups, so you can see what goes in first.`,
    },
  ],
  tips: [
    "Red onions turn the sweetest and look best on a platter. Yellow and white onions roast well too and hold their shape slightly better.",
    "Sweet onions such as Vidalia-style varieties brown faster because of their higher sugar content. Check them 2 minutes early.",
    "Rub oil between the layers of each wedge, not just on the outside. Dry inner layers stay papery.",
    "If your air fryer has a small 3 to 4 litre basket, cook one large onion at a time and start checking at 12 minutes.",
    "Save trimmed onion ends and skins in a bag in the freezer for making stock.",
  ],
  substitutions: [
    "Pomegranate molasses can be replaced with honey, date syrup or a squeeze of lemon.",
    "Swap sumac for a pinch of smoked paprika or chilli flakes.",
    "Shallots work the same way: halve them through the root and cook at 190°C (375°F) for 10 to 12 minutes.",
    "Use avocado or sunflower oil instead of olive oil if you prefer a neutral flavour.",
  ],
  variations: [
    "Onions and peppers: slice 1 onion and 2 peppers into 1cm strips, toss with oil, cumin and salt and cook at 200°C (400°F) for 10 to 12 minutes. Good in wraps or with grilled meat.",
    "Za'atar onions: toss the cooked wedges with 1 tsp za'atar and a little extra virgin olive oil.",
    "Spring onions: trim and oil whole spring onions and cook at 200°C (400°F) for 4 to 5 minutes until charred and soft.",
    "Balsamic-style glaze without the vinegar: whisk 1 tsp date syrup with 1 tsp lemon juice and brush on for the final minute.",
  ],
  servingSuggestions: [
    "With grilled kofta, lamb chops or chicken thighs and a bowl of garlic yoghurt.",
    "Piled onto burgers or into a steak sandwich.",
    "Tossed with roasted potatoes, rocket and a lemon dressing for a warm salad.",
    "Next to rice, salad and pickles as part of a weekend spread.",
  ],
  storage:
    "Keep roasted wedges and jammy onions in an airtight container in the fridge for up to 5 days. Crispy fried onions keep in an airtight jar at room temperature for about a week, provided they were completely cool and crisp before going in. Jammy onions freeze well for up to 3 months in small portions.",
  reheating:
    "Reheat roasted wedges in the air fryer at 180°C (350°F) for 3 to 4 minutes. Warm jammy onions in a small pan or in the microwave. Refresh crispy fried onions at 160°C (320°F) for 1 to 2 minutes if they soften.",
  makeAhead:
    "Cut the wedges up to a day ahead and keep them covered in the fridge, oiled and seasoned. Jammy onions can be made several days ahead, and a big batch of crispy fried onions made on the weekend will cover a week of rice dishes.",
  troubleshooting: [
    "Outside burnt, inside raw: too hot for the thickness. Cook wedges at 190°C (375°F) and give them longer.",
    "Wedges fell apart into loose petals: the root was trimmed off. Leave it on and cut through it.",
    "Jammy onions dried out and went crunchy: an open basket can't hold the moisture. Use a tin, and add a spoonful of water if they catch.",
    "Crispy fried onions are chewy: usually cut thicker than 2mm or piled too deep. Also give them the full 5 minutes to cool before you judge.",
    "Glaze turned black: pomegranate molasses and honey only need the final minute.",
  ],
  faqs: [
    {
      question: "How long do you cook onions in the air fryer?",
      answer:
        "Onion wedges take 14 to 18 minutes at 190°C (375°F). Thin slices soften in 10 to 12 minutes at 180°C (350°F). Jammy, caramelised-style onions need 30 to 40 minutes at 150°C (300°F) in a tin, and crispy fried onions 12 to 16 minutes at 170°C (340°F).",
    },
    {
      question: "Can you put raw onions in the air fryer?",
      answer:
        "Yes. Raw onions cook well in the air fryer with a little oil. Cut them evenly, keep wedges attached at the root, and avoid very thin loose slices at high heat, which can burn or blow around the basket.",
    },
    {
      question: "Can you caramelise onions in an air fryer?",
      answer:
        "Yes, if you use a tin. Pack thinly sliced onions with oil and salt into a small metal tin and cook at 150°C (300°F) for 30 to 40 minutes, stirring every 8 minutes. In the open basket they dry and crisp instead of turning jammy.",
    },
    {
      question: "How do you make crispy onions in the air fryer?",
      answer:
        "Slice onions about 2mm thick, toss with cornflour, salt and a tablespoon of oil, and air fry at 170°C (340°F) for 12 to 16 minutes, shaking every 3 to 4 minutes. They finish crisping as they cool on a plate.",
    },
    {
      question: "Which onions are best for the air fryer?",
      answer:
        "Red onions are best for roasting because they turn sweet and keep their colour. Yellow onions are the best all-rounder and the best choice for crispy fried onions. Sweet onions brown fastest, so check them a couple of minutes early.",
    },
    {
      question: "Can you make onion rings in the air fryer?",
      answer:
        "Yes, but they need a coating. Plain onion rings soften and char rather than crisp. For classic rings, dip thick slices in flour, egg and breadcrumbs, spray with oil and cook at 200°C (400°F) for 8 to 10 minutes, turning once.",
    },
  ],
  relatedRecipeSlugs: ["air-fryer-brats", "air-fryer-mushrooms", "chicken-machboos"],
};
