onEvent('recipes', event => {

	// IE / Create Plate compat
	event.shapeless('create:copper_sheet', 'immersiveengineering:plate_copper');
	event.shapeless('create:iron_sheet', 'immersiveengineering:plate_iron');
	event.shapeless('create:golden_sheet', 'immersiveengineering:plate_gold');

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