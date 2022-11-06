onEvent('recipes', event => {
    // Electron tubes alternate crafting
    event.recipes.createSequencedAssembly(
        Item.of('create:electron_tube'), '#forge:storage_blocks/redstone', [
            event.recipes.createCutting('minecraft:redstone_block', 'create:rose_quartz').processingTime(50),
            event.recipes.createDeploying('create:rose_quartz', ['create:rose_quartz', '#forge:nuggets/iron']),
            event.recipes.createPressing('create:rose_quartz', 'create:rose_quartz')
        ]).transitionalItem('create:rose_quartz').loops(1);
    
    event.remove({id: 'create:crushing/netherrack'});

    // Casing easier recipes
    event.remove({output:'create:andesite_casing'});
	event.shaped('4x create:andesite_casing', [
    'WA'
  ], {
    W: '#minecraft:logs',
	A: 'create:andesite_alloy'
  });

    event.remove({output:'create:brass_casing'});
	event.shaped('4x create:brass_casing', [
    'WP'
  ], {
    W: '#minecraft:logs',
	P: '#forge:plates/brass'
  });

    event.remove({output:'create:copper_casing'});
	event.shaped('4x create:copper_casing', [
    'WP'
  ], {
    W: '#minecraft:logs',
	P: '#forge:plates/copper'
  });

  // Easier andesite alloy recipe
  event.recipes.createMixing('create:andesite_alloy', [
    'minecraft:cobblestone',
    '#forge:nuggets/zinc',
    '#forge:clay'
  ]);
  
})