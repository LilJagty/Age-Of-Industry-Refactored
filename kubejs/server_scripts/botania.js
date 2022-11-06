onEvent('recipes', event => {

	// orechid tweaks
	event.remove({type: 'botania:orechid'});
	const orechid = (stone, output, weight) => {
		event.custom(
			{
				"type": "botania:orechid",
				"input": stone,
				"output": {
					"type": "block",
					"block": output
				},
				"weight": weight
			}
		)
	};
	// stone orechid recipes
	orechid("stone", "coal_ore", 30000);
	orechid("stone", "copper_ore", 35000);
	orechid("stone", "iron_ore", 10000);
	//orechid("stone", "gold_ore", 2647);
	//orechid("stone", "redstone_ore", 2500);
	//orechid("stone", "lapis_ore", 1079);
	//orechid("stone", "diamond_ore", 883);
	//orechid("stone", "emerald_ore", 1239);
	orechid("stone", "create:zinc_ore", 15000);
	orechid("stone", "immersiveengineering:ore_aluminum", 15000);
	//orechid("stone", "immersiveengineering:ore_lead", 1500);
	//orechid("stone", "immersiveengineering:ore_silver", 3000);
	orechid("stone", "immersiveengineering:ore_nickel", 20000);

	//deepslate orechid recipes
	//orechid("deepslate", "deepslate_copper_ore", 25);
	orechid("deepslate", "deepslate_iron_ore", 125);
	orechid("deepslate", "deepslate_gold_ore", 125);
	orechid("deepslate", "deepslate_redstone_ore", 75);
	orechid("deepslate", "deepslate_lapis_ore", 10);
	orechid("deepslate", "deepslate_diamond_ore", 100);
	//orechid("deepslate", "deepslate_emerald_ore", 25);
	orechid("deepslate", "immersiveengineering:deepslate_ore_lead", 175);
	orechid("deepslate", "immersiveengineering:deepslate_ore_silver", 175);
	//orechid("deepslate", "immersiveengineering:deepslate_ore_nickel", 25);
	orechid("deepslate", "immersiveengineering:deepslate_ore_uranium", 175);

	//moon orechid recipes
	orechid("beyond_earth:moon_stone", "beyond_earth:moon_cheese_ore", 1);
	orechid("beyond_earth:moon_stone", "beyond_earth:moon_desh_ore", 1);
	orechid("beyond_earth:moon_stone", "beyond_earth:moon_iron_ore", 1);
	orechid("beyond_earth:moon_stone", "beyond_earth:moon_ice_shard_ore", 1);

	//mars orechid recipes
	orechid("beyond_earth:mars_stone", "beyond_earth:mars_iron_ore", 1);
	orechid("beyond_earth:mars_stone", "beyond_earth:mars_diamond_ore", 1);
	orechid("beyond_earth:mars_stone", "beyond_earth:mars_ostrum_ore", 1);
	orechid("beyond_earth:mars_stone", "beyond_earth:mars_ice_shard_ore", 1);

	//venus orechid recipes
	orechid("beyond_earth:venus_stone", "beyond_earth:venus_coal_ore", 1);
	orechid("beyond_earth:venus_stone", "beyond_earth:venus_gold_ore", 1);
	orechid("beyond_earth:venus_stone", "beyond_earth:venus_diamond_ore", 1);
	orechid("beyond_earth:venus_stone", "beyond_earth:venus_calorite_ore", 1);

	// gaia spirit dupe
	event.custom({
		"type": "botania:mana_infusion",
		"input": {
		  "item": "botania:life_essence"
		},
		"output": {
		  "item": "botania:life_essence",
		  "count": 2
		},
		"mana": 100000,
		"catalyst": {
		  "type": "block",
		  "block": "botania:conjuration_catalyst"
		}
	});

    // gaia pylon recipe reversion
    event.replaceInput({id: 'mythicbotany:gaia_pylon'}, 'mythicbotany:alfsteel_pylon', 'botania:mana_pylon');

	// deepslate recipe for pure daisy to be used with orechid
	event.custom({
		"type": "botania:pure_daisy",
		"input": {
		  "type": "block",
		  "block": "minecraft:infested_stone"
		},
		"output": {
		  "name": "minecraft:deepslate"
		}
	});
})