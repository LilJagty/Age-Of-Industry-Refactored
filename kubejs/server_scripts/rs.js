onEvent('recipes', event => {

    //machine casing crafting: IMPORTANT
    event.remove({output: 'refinedstorage:machine_casing'})
	event.shaped('refinedstorage:machine_casing', [
    'RRR',
    'RCR',
    'RRR'
  ], {
    C: 'computercraft:computer_normal',
	R: 'kubejs:refined_alloy'
  });

    //CHANGING PROCESSOR RECIPES
    let processors = [
        'basic',
        'improved',
        'advanced'
    ];
    let transitional = 'kubejs:incomplete_processor';

    event.remove({output: 'extrastorage:raw_neural_processor'});
    event.shapeless('extrastorage:raw_neural_processor', ['refinedstorage:processor_binding', '#forge:silicon', 'waystones:warp_stone', 'easy_villagers:villager']);
    event.remove({output: 'extrastorage:neural_processor'});
    event.recipes.createSequencedAssembly(
        Item.of('2x extrastorage:neural_processor'), 'immersiveengineering:component_iron', [
            event.recipes.createDeploying(transitional, [transitional, 'extrastorage:raw_neural_processor']),
            event.recipes.createPressing(transitional, transitional),
            event.recipes.createCutting(transitional, transitional).processingTime(50)
        ]).transitionalItem(transitional).loops(2);

    processors.forEach(processor => {
        event.remove({output: `refinedstorage:${processor}_processor`});
        event.recipes.createSequencedAssembly(
            Item.of(`2x refinedstorage:${processor}_processor`), 'immersiveengineering:component_iron', [
                event.recipes.createDeploying(transitional, [transitional, `refinedstorage:raw_${processor}_processor`]),
                event.recipes.createPressing(transitional, transitional),
                event.recipes.createCutting(transitional, transitional).processingTime(50)
            ]).transitionalItem(transitional).loops(2);
    });
    
    //Changing quartz-enhance iron recipe to require IE gating
    event.remove({id: 'refinedstorage:quartz_enriched_iron'});
    event.recipes.immersiveengineeringAlloy('refinedstorage:quartz_enriched_iron', '#forge:ingots/iron', '#forge:gems/quartz');
    event.recipes.immersiveengineeringArcFurnace('4x refinedstorage:quartz_enriched_iron', '3x #forge:ingots/iron', ['#forge:gems/quartz']);

    //removing unwanted crafters from addon
	event.remove({output: 'extrastorage:iron_crafter'});
    event.remove({output: 'extrastorage:gold_crafter'});
    event.remove({output: 'extrastorage:diamond_crafter'});
    event.replaceInput({id: 'extrastorage:netherite_crafter'}, 'extrastorage:diamond_crafter', 'refinedstorage:crafter');
    event.replaceInput({id: 'extrastorage:netherite_crafter'}, 'minecraft:netherite_block', '#forge:ingots/netherite');
	
});