onEvent('recipes', event => {

    // Completely removing steel
    event.remove({output: 'beyond_earth:steel_nugget'});
    event.remove({output: 'beyond_earth:steel_ingot'});
    event.remove({output: 'beyond_earth:steel_block'});

    // Gate workbench behind rftools
    event.replaceInput({id: 'beyond_earth:nasa_workbench'}, '#forge:ingots/steel', 'rftoolsbase:machine_frame');

    // Gate other machines behind computers
    event.replaceInput({id: 'beyond_earth:fuel_refinery'}, 'minecraft:furnace', 'computercraft:computer_normal');
    event.replaceInput({id: 'beyond_earth:oxygen_loader'}, 'minecraft:furnace', 'computercraft:computer_normal');
    event.replaceInput({id: 'beyond_earth_giselle_addon:crafting/fuel_loader'}, 'minecraft:bucket', 'computercraft:computer_normal');
    event.replaceInput({id: 'beyond_earth_giselle_addon:crafting/electric_blast_furnace'}, 'minecraft:redstone', 'computercraft:computer_normal');
    event.replaceInput({id: 'beyond_earth_giselle_addon:crafting/advanced_compressor'}, 'minecraft:redstone', 'computercraft:computer_normal');
    event.replaceInput({id: 'beyond_earth_giselle_addon:crafting/gravity_normalizer'}, 'beyond_earth:space_boots', 'computercraft:computer_normal');
    event.replaceInput({id: 'beyond_earth_giselle_addon:crafting/gravity_normalizer'}, '#forge:plates/iron', 'beyond_earth:space_boots');

    // Tweak rocket/vehicle recipes
    event.replaceInput({id: 'beyond_earth:rover'}, 'minecraft:furnace', 'computercraft:computer_normal');

    // Engine script
    let engines = [
        'iron',
        'gold',
        'diamond',
        'calorite'
    ];
    engines.forEach(engine => {
        event.replaceInput({id: `beyond_earth:${engine}_engine`}, 'minecraft:redstone', 'immersiveengineering:rs_engineering')
    });

})