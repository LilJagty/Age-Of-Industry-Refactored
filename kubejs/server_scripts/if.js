onEvent('recipes', event => {

    // Pity machine frame
    event.replaceInput({id: 'industrialforegoing:machine_frame_pity'}, '#forge:storage_blocks/redstone', 'rftoolsbase:machine_frame');

    // Simple machine frame
    event.replaceInput({id: 'industrialforegoing:dissolution_chamber/simple_machine_frame'}, '#forge:gears/gold', 'kubejs:alien_mechanism');
    event.replaceInput({id: 'industrialforegoing:dissolution_chamber/simple_machine_frame'}, '#forge:ingots/nether_brick', 'kubejs:refined_brick');
    event.replaceInput({id: 'industrialforegoing:dissolution_chamber/simple_machine_frame'}, '#forge:ingots/iron', 'beyond_earth:compressed_desh');

    // Advanced machine frame
    event.replaceInput({id: 'industrialforegoing:dissolution_chamber/advanced_machine_frame'}, '#forge:gears/diamond', 'kubejs:alien_processor');
    event.replaceInput({id: 'industrialforegoing:dissolution_chamber/advanced_machine_frame'}, '#forge:ingots/gold', 'beyond_earth:compressed_ostrum');

    // Supreme
    event.replaceInput({id: 'industrialforegoing:dissolution_chamber/supreme_machine_frame'}, '#forge:gears/diamond', 'mythicbotany:alfsteel_ingot');
    event.replaceInput({id: 'industrialforegoing:dissolution_chamber/supreme_machine_frame'}, '#forge:gems/diamond', 'beyond_earth:compressed_calorite');

    // Mining laser adjustments
    event.remove({id: 'industrialforegoing:laser_drill_ore/raw_materials/yellorium'});


})