'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Products', [{
      product_name: "The evil within",
      product_price: 200.00,
      product_description: 'The Evil Within is a survival horror video game developed by Tango Gameworks and published by Bethesda Softworks.The game was directed by Resident Evil series creator Shinji Mikami and was released worldwide in October 2014 for PlayStation 3, PlayStation 4, Windows, Xbox 360, and Xbox One.',
      discount_percent: 0
    }, {
      product_name: "Mortal Kombat 11",
      product_price: 349.99,
      product_description: "MK is back and better than ever in the next evolution of the iconic franchise. The all new Custom Character Variations give you unprecedented control of your fighters to make them your own.The new graphics engine showcases every skull- shattering, eye - popping moment, bringing you so close to the fight you can feel it.Featuring a roster of new and returning Klassic Fighters, Mortal Kombat's best-in-class cinematic story mode continues the epic saga over 25 years in the making.",
      discount_percent: 0
    }, {
      product_name: "God of war Ragnarok",
      product_price: 2499.99,
      product_description: "Kratos and Atreus must journey to each of the Nine Realms in search of answers as Asgardian forces prepare for a prophesied battle that will end the world. Along the way they will explore stunning, mythical landscapes, and face fearsome enemies in the form of Norse gods and monsters.",
    }, {
      product_name: "Resident evil 7",
      product_price: 120.00,
      product_description: "Resident Evil 7 biohazard is the next major entry in the renowned Resident Evil series and sets a new course for the franchise as it leverages its roots and opens the door to a truly terrifying horror experience. A dramatic new shift for the series to first person view in a photorealistic style powered by Capcom’s new RE Engine, Resident Evil 7 delivers an unprecedented level of immersion that brings the thrilling horror up close and personal.",
    }, {
      product_name: "Jedi Fallen Order",
      product_price: 99.99,
      product_description: "A galaxy-spanning adventure awaits in Star Wars Jedi: Fallen Order, a 3rd person action-adventure title from Respawn. An abandoned Padawan must complete his training, develop new powerful Force abilities, and master the art of the lightsaber - all while staying one step ahead of the Empire",
    }, {
      product_name: "Call of Duty WWII",
      product_price: 159.99,
      product_description: "Call of Duty® returns to its roots with Call of Duty®: WWII - a breathtaking experience that redefines World War II for a new gaming generation. Land in Normandy on D-Day and battle across Europe through iconic locations in history’s most monumental war. Experience classic Call of Duty combat, the bonds of camaraderie, and the unforgiving nature of war against a global power throwing the world into tyranny.",
    }, {
      product_name: "Mario odyssey",
      product_price: 350.00,
      product_description: "Super Mario Odyssey is a platform game in which players control Mario as he travels across many different worlds, known as " / Kingdoms / " within the game, on the hat-shaped ship Odyssey, to rescue Princess Peach from Bowser, who plans to forcibly marry her.",
    }, {
      product_name: "Rogue legacy",
      product_price: 59.99,
      product_description: "Rogue Legacy is a genealogical rogue-" / LITE / " where anyone can be a hero. Each time you die, your child will succeed you. Every child is unique. One child might be colorblind, another might have vertigo-- they could even be a dwarf.",
    }, {
      product_name: "Hades",
      product_price: 87.37,
      product_description: "Defy the god of the dead as you hack and slash out of the Underworld in this rogue-like dungeon crawler from the creators of Bastion, Transistor, and Pyre.",
    }, {
      product_name: "Nintendo switch",
      product_price: 2134.99,
      product_description: "The Nintendo Switch is a hybrid video game console, consisting of a console unit, a dock, and two Joy-Con controllers. Although it is a hybrid console, Nintendo classifies it as " * /a home console that you can take with you on the go "."*/,
    }, {
      product_name: "Playstation 4",
      product_price: 1999.99,
      product_description: "The PlayStation 4 (PS4) is a home video game console developed by Sony Interactive Entertainment. Announced as the successor to the PlayStation 3 in February 2013, it was launched on November 15, 2013, in North America, November 29, 2013 in Europe, South America and Australia, and on February 22, 2014 in Japan.",
    }, {
      product_name: "Playstation 5",
      product_price: 4500.00,
      product_description: "Supporting a 120Hz video refresh, the PS5 is considerably more powerful than the PS4 and PS4 Pro. Rather than GDDR5 memory, GDDR6 is supported with capacity doubled from 8 to 16GB. Storage is an NVMe 825GB SSD rather than a hard drive, and expandable NVMe storage is supported.",
    }, {
      product_name: "Xbox One",
      product_price: 1899.99,
      product_description: "Third Generation (Xbox One/S/X) The Third Generation of Xbox consoles was mainly titled the Xbox One.",
    }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
