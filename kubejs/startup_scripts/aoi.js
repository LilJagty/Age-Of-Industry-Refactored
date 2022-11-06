console.info('AOI Startup Scripts Loading...')

onEvent('item.registry', event => {
	// Registering custom items
	// event.create('example_item').displayName('Example Item')

	event.create('refined_brick');

    event.create('refined_alloy').glow(true);

    event.create('magical_mechanism').glow(true);

	event.create('incomplete_processor', 'create:sequenced_assembly');

    event.create('alien_processor').displayName('§aAlien Processor');

    event.create('alien_mechanism').displayName('§aAlien Mechanism');

    event.create('refresh');

})

onEvent('mekanism.infuse_type.registry', event => {
    //event.create("mekanism:alien_knowledge").texture("kubejs:textures/blocks/alien_knowledge");
    event.create("mekanism:alien_knowledge").color(0x44E131);
})

console.info('AOI Startup Scripts Loaded.')