// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('jei.hide.items', event => {

	// Extrastorage cleanup
    event.hide('extrastorage:iron_crafter');
    event.hide('extrastorage:gold_crafter');
    event.hide('extrastorage:diamond_crafter');

	// Waystones cleanup
	event.hide('waystones:return_scroll');
	event.hide('waystones:bound_scroll');
	event.hide('waystones:warp_scroll');

	// Rods & Plates
	event.hide('immersiveengineering:plate_copper');
	event.hide('immersiveengineering:plate_iron');
	event.hide('immersiveengineering:plate_gold');
    event.hide('immersiveengineering:plate_uranium');
    event.hide('beyond_earth:iron_stick');

	// Quark bloat
	event.hide(/quark:.*stool/);
	event.hide(/quark:.*azalea.*/);
	
	// Refined Storage color variants
	event.hide(/(refinedstorage):(white|light_gray|gray|black|brown|red|orange|yellow|lime|green|cyan|blue|magenta|pink)_.*/);

	// Dummy items
	event.hide('kubejs:dummy_fluid_item');
    event.hide('kubejs:magical_mechanism');

	// Duplicates
	event.hide('buzzier_bees:honey_apple');

    // Inaccesible Content
    event.hide('delightful:enderite_knife');
    event.hide('delightful:invar_knife');
    event.hide('delightful:black_opal_knife');

	// More Mekanism Processing tweaks
    let trashMats = [
		'amethyst',
		'apatite',
		'azure_silver',
		'bismuth',
		'bort',
		'cinnabar',
		'cobalt',
		'crimson_iron',
		'dilithium',
		'draconium',
		'electrotine',
		'green_sapphire',
		'iridium',
		'lithium',
		'niter',
		'peridot',
		'ruby',
		'sapphire',
		'sulfur',
		'titanium',
		'tungsten',
		'platinum'
	  ];
	  
	  // Remove EVERYTHING in the more mekanism mod that isn't in keepMats
	  // Also: remove everything to do with the end ingots
	  trashMats.forEach(mat => {
		event.hide(`/moremekanismprocessing:.*${mat}/`);
	  });

})

onEvent('jei.information', event => {
	let alienMats = [
		['kubejs:alien_mechanism', 'Alien Mechanism', 'Precision Mechanism'],
		['kubejs:alien_processor', 'Alien Processor', 'Neural Processor']
	];
	alienMats.forEach(mat => {
		event.add(mat[0], ['You can obtain an ' + mat[1] + ' by right-clicking on an Alien Villager with a ' + mat[2] + '.']);
	})
})