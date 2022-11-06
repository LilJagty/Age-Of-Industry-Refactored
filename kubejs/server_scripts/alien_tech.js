// Alien Mechanism and Processor
onEvent('item.entity_interact', event => {

    // Ensure entity is alien villager
    if (event.target.type != 'beyond_earth:alien') return;

    // Ensure player holding a valid input
	if (event.item.id != 'create:precision_mechanism' && event.item.id != 'extrastorage:neural_processor') return;

    // Success, execute trade
    if (event.item.id == 'create:precision_mechanism') {
        event.player.setHeldItem(event.hand, Item.of('kubejs:alien_mechanism', event.item.count));
    } else {
        event.player.setHeldItem(event.hand, Item.of('kubejs:alien_processor', event.item.count));
    }
    event.server.runCommandSilent(`execute at ${event.entity} as ${event.entity} run playsound minecraft:ambient.cave neutral @s ~ ~ ~ 0.22`);

    // Close the trading window
    event.cancel();

})

// Alien components custom recipes
onEvent('recipes', event => {

    // Fabricating alien knowledge
    event.custom({"type": "mekanism:infusion_conversion",
        "input": {"ingredient": {"item": "kubejs:alien_mechanism"}},
        "output": {"infuse_type": "mekanism:alien_knowledge", "amount": 20}
    })
    event.custom({"type": "mekanism:infusion_conversion",
        "input": {"ingredient": {"item": "kubejs:alien_processor"}},
        "output": {"infuse_type": "mekanism:alien_knowledge", "amount": 40}
    })

    // Infusing basic components
    event.recipes.mekanismMetallurgicInfusing('kubejs:alien_mechanism', 'create:precision_mechanism', '10x mekanism:alien_knowledge');
    event.recipes.mekanismMetallurgicInfusing('kubejs:alien_processor', 'extrastorage:neural_processor', '20x mekanism:alien_knowledge');

})