onEvent('recipes', event => {

    // ---- FIXING RODS AND PLATES ----
    // Rods
    event.remove({output: 'beyond_earth:iron_stick'});
    let sticks = [
        'aluminum',
        'iron',
        'steel'
    ];
    sticks.forEach(stick => {
        event.remove({id: 'immersiveengineering:crafting/stick_' + stick});
        event.shaped('immersiveengineering:stick_' + stick, [
            'I',
            'I',
            'I'
            ], {
            I: '#forge:ingots/' + stick
        });
    });
    // Plates
    event.remove({id: 'beyond_earth:iron_plate'});
    event.remove({output: 'immersiveengineering:plate_copper'});
    event.shapeless('create:copper_sheet', 'immersiveengineering:plate_copper');
    event.recipes.immersiveengineeringMetalPress('create:copper_sheet', '#forge:ingots/copper', 'immersiveengineering:mold_plate');
    event.remove({output: 'immersiveengineering:plate_iron'});
    event.shapeless('create:iron_sheet', 'immersiveengineering:plate_iron');
    event.recipes.immersiveengineeringMetalPress('create:iron_sheet', '#forge:ingots/iron', 'immersiveengineering:mold_plate');
    event.remove({output: 'immersiveengineering:plate_gold'});
    event.shapeless('create:golden_sheet', 'immersiveengineering:plate_gold');
    event.recipes.immersiveengineeringMetalPress('create:golden_sheet', '#forge:ingots/gold', 'immersiveengineering:mold_plate');

	// waystones cleanup
	event.remove({output: 'waystones:return_scroll'});
	event.remove({output: 'waystones:bound_scroll'});
	event.remove({output: 'waystones:warp_scroll'});

	// IE plates Create pressing compat
	event.recipes.createPressing('immersiveengineering:plate_uranium', '#forge:ingots/uranium');
	event.recipes.createPressing('immersiveengineering:plate_steel', '#forge:ingots/steel');
	event.recipes.createPressing('immersiveengineering:plate_electrum', '#forge:ingots/electrum');
	event.recipes.createPressing('immersiveengineering:plate_constantan', '#forge:ingots/constantan');
	event.recipes.createPressing('immersiveengineering:plate_nickel', '#forge:ingots/nickel');
	event.recipes.createPressing('immersiveengineering:plate_silver', '#forge:ingots/silver');
	event.recipes.createPressing('immersiveengineering:plate_lead', '#forge:ingots/lead');
	event.recipes.createPressing('immersiveengineering:plate_aluminum', '#forge:ingots/aluminum');

})