onEvent('recipes', event => {
	//machine frame recipe
	event.remove({output: 'rftoolsbase:machine_frame'});
	event.custom({
		"type": "botania:terra_plate",
		"ingredients": [
			{
			  "item": "refinedstorage:machine_casing"
			},
			{
			  "item": "extrastorage:neural_processor"
			},
			{
			  "item": "immersiveengineering:heavy_engineering"
			},
			{
			  "item": "botania:gaia_ingot"
			}
		  ],
		"mana": 250000,
		"result": {
		  "item": "rftoolsbase:machine_frame"
		}
	});
	event.custom({
		"type": "mythicbotany:infusion",
		"group": "infuser",
		"output": {
		  "item": "rftoolsbase:machine_frame",
		  "count": 1
		},
		"mana": 250000,
		"ingredients": [
			{
			  "item": "refinedstorage:machine_casing"
			},
			{
			  "item": "extrastorage:neural_processor"
			},
			{
			  "item": "immersiveengineering:heavy_engineering"
			},
			{
			  "item": "botania:gaia_ingot"
			}
		],
		"fromColor": 255,
		"toColor": 65280
	});

    // Tweak builder recipe
    event.replaceInput({id: 'rftoolsbuilder:builder'}, 'minecraft:bricks', 'minecraft:netherite_scrap');
    event.replaceInput({id: 'rftoolsbuilder:builder'}, 'minecraft:ender_pearl', 'modularrouters:breaker_module');
    event.replaceInput({id: 'rftoolsbuilder:builder'}, 'minecraft:redstone', 'minecraft:ender_pearl');

    // Dimension builder
    event.remove({output: 'rftoolsdim:dimension_builder'});
    event.custom({
		"type": "mythicbotany:infusion",
		"group": "infuser",
		"output": {
		  "item": "rftoolsdim:dimension_builder",
		  "count": 1
		},
		"mana": 500000,
		"ingredients": [
			{
			  "item": "rftoolsbase:machine_frame"
			},
			{
			  "item": "kubejs:alien_processor"
			},
			{
			  "item": "mythicbotany:alfsteel_ingot"
			}
		],
		"fromColor": 255,
		"toColor": 65280
	});

	//machine base recipe
    event.remove({output: 'rftoolsbase:machine_base'});
	event.stonecutting('4x rftoolsbase:machine_base', 'computercraft:computer_normal');
})