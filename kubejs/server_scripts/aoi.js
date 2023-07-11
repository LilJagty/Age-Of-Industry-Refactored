// Ore Unification Tags
onEvent('item.tags', event => {

    let keepMats = [
        'aluminum',
        'nickel',
        'silver',
        'zinc',
        'desh',
        'ostrum',
        'calorite'
      ];
    // Remove EVERYTHING in the more mekanism mod that isn't in keepMats
    // Also: remove everything to do with the end ingots
    keepMats.forEach(mat => {
        event.get('forge:ingots/' + mat).remove('moremekanismprocessing:' + mat + '_ingot');
    });

    // Allow alternate steel plate
    event.get('forge:plates/steel').add('create:sturdy_sheet');

    // Crab meat unification
    event.add('forge:raw_crab').add('ecologics:crab_meat');
    event.add('forge:raw_crab').add('quark:crab_leg');

    // Andesite alloy nugget tag
    event.add('create:andesite_nugget').add('#forge:nuggets/iron');
    event.add('create:andesite_nugget').add('#forge:nuggets/zinc');
})

// Add Doggy Talents dogs to FD Dog Food
onEvent('tags.entity_types', event => {
  event.add("farmersdelight:dog_food_users", "doggytalents:dog");
})

onEvent('recipes', event => {

	// Refined Bricks recipe
    event.recipes.createMixing(['kubejs:refined_brick', 'create:cinder_flour'], [
        'minecraft:nether_brick',
        Fluid.of('immersiveengineering:redstone_acid', 500)
    ]);

    // Refined Alloy recipe
    event.recipes.createMixing('kubejs:refined_alloy', [
        'kubejs:refined_brick',
        'refinedstorage:quartz_enriched_iron'
    ]).superheated();

    // Easy redstone with weeping_vines
    event.recipes.createMixing('2x minecraft:redstone', [
        'minecraft:weeping_vines',
        'minecraft:sugar'
    ]);

    // Lategame easy ender pearls with warp dust
    event.smelting('minecraft:ender_pearl', 'waystones:warp_dust');
    event.blasting('minecraft:ender_pearl', 'waystones:warp_dust');

    // End gating recipes (eye of ender)
	event.remove({id: 'minecraft:ender_eye'})
	event.shapeless('minecraft:ender_eye', ['#forge:ender_pearls', 'minecraft:blaze_powder', '#forge:dusts/sulfur']);

    // Waystones recipes

    // Warp dust
    event.remove({output: 'waystones:warp_dust'})
    event.recipes.createMixing('waystones:warp_dust', [
        'minecraft:popped_chorus_fruit',
        '#forge:dusts/glowstone',
        '#forge:gems/amethyst'
    ]);

    // Crying obsidian
    event.shaped('minecraft:crying_obsidian', [
        'WWW',
        'WOW',
        'WWW'
      ], {
        O: '#forge:obsidian',
        W: 'waystones:warp_dust'
      });

    // Warp stone
    event.replaceInput({id: 'waystones:warp_stone'}, '#forge:dyes/purple', 'waystones:warp_dust');
    event.replaceInput({id: 'waystones:warp_stone'}, '#forge:gems/emerald', 'minecraft:crying_obsidian');

    // EnderStorage tweaks \/

    // Ender tank
    event.remove({output: 'enderstorage:ender_tank'});
    event.shaped('enderstorage:ender_tank', [
        'BWB',
        'GSG',
        'BOB'
      ], {
        B: '#forge:rods/blaze',
        O: '#forge:obsidian',
        G: '#forge:glass',
        S: 'waystones:warp_stone',
        W: '#forge:wool'
      });

    // Ender chest
    event.remove({output: 'enderstorage:ender_chest'});
    event.shaped('enderstorage:ender_chest', [
        'GWG',
        'OSO',
        'GOG'
      ], {
        G: '#forge:plates/gold',
        O: '#forge:obsidian',
        S: 'waystones:warp_stone',
        W: '#forge:wool'
      });

    //                  ^^

    // ComputerCraft normal computer
    event.remove({output: 'computercraft:computer_normal'});
	event.shaped('computercraft:computer_normal', [
    'IPI',
    'IRG',
    'IPI'
    ], {
    R: 'immersiveengineering:rs_engineering',
	P: 'refinedstorage:basic_processor',
    G: '#forge:glass_panes',
    I: '#forge:plates/iron'
    });

    // ComputerCraft advanced computer
    event.remove({output: 'computercraft:computer_advanced'});
    event.remove({id: 'computercraft:turtle_advanced_upgrade'});
    event.shaped('computercraft:computer_advanced', [
    'GPG',
    'GCG',
    'GPG'
    ], {
    C: 'computercraft:computer_normal',
    P: 'refinedstorage:improved_processor',
    G: '#forge:plates/gold'
    });

    // Easy villagers changes
    event.replaceInput({id: 'easy_villagers:auto_trader'}, 'minecraft:redstone', 'refinedstorage:machine_casing');

    event.replaceInput({id: 'easy_villagers:iron_farm'}, 'minecraft:lava_bucket', 'refinedstorage:machine_casing');
    event.replaceInput({id: 'easy_villagers:iron_farm'}, 'minecraft:stone', 'minecraft:lava_bucket');

    event.replaceInput({id: 'easy_villagers:farmer'}, 'minecraft:water_bucket', 'refinedstorage:machine_casing');
    event.replaceInput({id: 'easy_villagers:farmer'}, 'minecraft:dirt', 'minecraft:water_bucket');
    event.replaceInput({id: 'easy_villagers:farmer'}, 'minecraft:iron_ingot', 'minecraft:dirt');

    // Remove questing item recipes
    event.remove({output: 'explorerscompass:explorerscompass'});
    event.remove({output: 'naturescompass:naturescompass'});
    event.remove({id: 'tiab:time_in_a_bottle'});
    event.remove({id: 'scannable:scanner'});
    event.remove({id: 'buildinggadgets:gadget_building'});
    event.remove({id: 'buildinggadgets:gadget_exchanging'});
    event.remove({id: 'buildinggadgets:gadget_copy_paste'});
    event.remove({id: 'buildinggadgets:gadget_destruction'});
    event.remove({id: 'rsinfinitybooster:dimension_card'});

    // Chunk loader recipes
    event.replaceInput({id: 'chunkloaders:advanced_chunk_loader'}, '#forge:ingots/gold', '#forge:storage_blocks/gold');
    event.replaceInput({id: 'chunkloaders:advanced_chunk_loader'}, 'minecraft:blaze_powder', 'minecraft:blaze_rod');

    // Matrix enchanting
    event.shaped('quark:matrix_enchanter', [
        ' B ',
        'DRD',
        'OOO'
        ], {
        B: 'minecraft:book',
        R: 'botania:red_petal_block',
        D: '#forge:gems/diamond',
        O: '#forge:obsidian'
    });

    // Water strainer recipes
    event.replaceInput({id: 'waterstrainer:strainer_base'}, '#forge:chests/wooden', 'create:andesite_casing');

    event.remove({output: 'waterstrainer:obsidian_mesh'});
    event.remove({output: 'waterstrainer:strainer_survivalist_reinforced'});
    event.remove({output: 'waterstrainer:strainer_fisherman_reinforced'});
    event.smithing('waterstrainer:strainer_survivalist_reinforced', 'waterstrainer:strainer_survivalist_solid', 'minecraft:netherite_scrap');
    event.smithing('waterstrainer:strainer_fisherman_reinforced', 'waterstrainer:strainer_fisherman_solid', 'minecraft:netherite_scrap');

    event.remove({output: 'waterstrainer:iron_mesh'});
    event.shaped('waterstrainer:iron_mesh', [
        'ISI',
        'SMS',
        'ISI'
        ], {
        M: 'waterstrainer:string_mesh',
        I: '#forge:rods/iron',
        S: 'botania:mana_string'
    });
    event.replaceInput({id: 'waterstrainer:strainer_survivalist_solid'}, '#forge:ingots/iron', '#forge:plates/iron');

    // Modular router tweaks
    event.remove({output: 'modularrouters:blank_module'});
    event.stonecutting('10x modularrouters:blank_module', 'rftoolsbase:machine_frame');

    // Woodcutting scripts
    event.replaceInput({id: /corail_woodcutter:.*_woodcutter/}, '#forge:ingots/iron', 'immersiveengineering:sawblade');
    const woodcutting = (modid, wood, result) => {
        event.custom({
                "type": "corail_woodcutter:woodcutting",
                "ingredient": {
                "tag": modid + ":" + wood
                },
                "result": result[0],
                "count": result[1],
                "conditions": [
                {
                "type": "forge:mod_loaded",
                "modid": "corail_woodcutter"
                },{
                "type": "forge:mod_loaded",
                "modid": modid
                }
                ]
        })
    }
    let woods = [
        ['enhanced_mushrooms', 'brown_mushroom', '_stems'],
        ['enhanced_mushrooms', 'red_mushroom', '_stems'],
        ['ecologics', 'coconut', '_logs'],
        ['ecologics', 'walnut', '_logs'],
        ['ecologics', 'azalea', '_logs'],
        ['ecologics', 'flowering_azalea', '_logs'],
        ['botania', 'livingwood', '_logs'],
        ['botania', 'dreamwood', '_logs'],
        ['wildbackport', 'mangrove', '_logs']
    ]
    woods.forEach(wood => {
        if ('botania'.equals(wood[0])) {
            //wood
            woodcutting(wood[0], wood[1] + wood[2], [wood[0] + ':' + wood[1] + '_planks', 4]);
            woodcutting(wood[0], wood[1] + wood[2], [wood[0] + ':' + wood[1] + '_stairs', 1]);
            woodcutting(wood[0], wood[1] + wood[2], [wood[0] + ':' + wood[1] + '_slab', 2]);
            woodcutting(wood[0], wood[1] + wood[2], [wood[0] + ':' + wood[1] + '_wall', 2]);
            //planks
            woodcutting(wood[0], wood[1] + wood[2], [wood[0] + ':' + wood[1] + '_fence', 4]);
            woodcutting(wood[0], wood[1] + wood[2], [wood[0] + ':' + wood[1] + '_fence_gate', 1]);
            woodcutting(wood[0], wood[1] + wood[2], [wood[0] + ':framed_' + wood[1], 4]);
            woodcutting(wood[0], wood[1] + wood[2], [wood[0] + ':pattern_framed_' + wood[1], 4]);
            woodcutting(wood[0], wood[1] + wood[2], [wood[0] + ':' + wood[1] + '_planks_stairs', 4]);
            woodcutting(wood[0], wood[1] + wood[2], [wood[0] + ':' + wood[1] + '_planks_slab', 8]);
            //stripped
            woodcutting(wood[0], wood[1] + wood[2], [wood[0] + ':stripped_' + wood[1] + '_stairs', 1]);
            woodcutting(wood[0], wood[1] + wood[2], [wood[0] + ':stripped_' + wood[1] + '_slab', 2]);
            woodcutting(wood[0], wood[1] + wood[2], [wood[0] + ':stripped_' + wood[1] + '_wall', 2]);
        } else {
            //common features
            woodcutting(wood[0], wood[1] + wood[2], [wood[0] + ':' + wood[1] + '_door', 4]);
            woodcutting(wood[0], wood[1] + wood[2], [wood[0] + ':' + wood[1] + '_fence', 4]);
            woodcutting(wood[0], wood[1] + wood[2], [wood[0] + ':' + wood[1] + '_fence_gate', 1]);
            woodcutting(wood[0], wood[1] + wood[2], [wood[0] + ':' + wood[1] + '_planks', 4]);
            woodcutting(wood[0], wood[1] + wood[2], [wood[0] + ':' + wood[1] + '_pressure_plate', 4]);
            woodcutting(wood[0], wood[1] + wood[2], [wood[0] + ':' + wood[1] + '_button', 4]);
            woodcutting(wood[0], wood[1] + wood[2], [wood[0] + ':' + wood[1] + '_sign', 4]);
            woodcutting(wood[0], wood[1] + wood[2], [wood[0] + ':' + wood[1] + '_slab', 8]);
            woodcutting(wood[0], wood[1] + wood[2], [wood[0] + ':' + wood[1] + '_stairs', 4]);
            woodcutting(wood[0], wood[1] + wood[2], [wood[0] + ':' + wood[1] + '_trapdoor', 4]);
            woodcutting(wood[0], wood[1] + wood[2], [wood[0] + ':' + wood[1] + '_cabinet', 1]);
            woodcutting(wood[0], wood[1] + wood[2], [wood[0] + ':' + wood[1] + '_boat', 1]);
            //quark-specific ecologics features
            if ('ecologics'.equals(wood[0])) {
                woodcutting(wood[0], wood[1] + wood[2], [wood[0] + ':' + wood[1] + '_ladder', 4]);
                woodcutting(wood[0], wood[1] + wood[2], [wood[0] + ':' + wood[1] + '_post', 4]);
                woodcutting(wood[0], wood[1] + wood[2], [wood[0] + ':stripped_' + wood[1] + '_post', 4]);
                woodcutting(wood[0], wood[1] + wood[2], [wood[0] + ':vertical_' + wood[1] + '_planks', 4]);
                woodcutting(wood[0], wood[1] + wood[2], [wood[0] + ':' + wood[1] + '_vertical_slab', 8]);
            }
        }
    })

    // Travel anchors
    event.replaceInput({id: 'travel_anchors:travel_staff'}, '#forge:ingots/iron', '#forge:rods/steel');
    event.replaceInput({id: 'travel_anchors:travel_staff'}, '#forge:ender_pearls', 'waystones:warp_stone');

    event.replaceInput({id: 'travel_anchors:travel_anchor'}, '#forge:ingots/iron', '#forge:plates/steel');
    event.replaceInput({id: 'travel_anchors:travel_anchor'}, '#forge:ender_pearls', 'waystones:warp_stone');
    event.replaceInput({id: 'travel_anchors:travel_anchor'}, '#forge:storage_blocks/iron', '#forge:plates/steel');

    // Budding geode blocks
    const budding = (source, product, output) => {
		event.custom({
            "input": [
              {
                "item": source
              },
              {
                "item": product
              },
              {
                "item": product
              },
              {
                "item": product
              },
              {
                "item": product
              },
              {
                "item": product
              },
              {
                "item": product
              },
              {
                "item": product
              }
            ],
            "inputFluid": "{FluidName:\"immersiveengineering:redstone_acid\",Amount:500}",
            "processingTime": 300,
            "output": {
              "item": output,
              "count": 1
            },
            "type": "industrialforegoing:dissolution_chamber"
        })
	};
  budding('amethyst_block', 'amethyst_cluster', 'budding_amethyst');
  budding('geode:wrappist_block', 'geode:wrappist_cluster', 'geode:budding_wrappist');
  budding('blackstone', 'geode:quartz_crystal', 'geode:budding_blackstone_quartz');
  budding('blackstone', 'geode:glowstone_cluster', 'geode:budding_blackstone_glowstone');
  budding('netherrack', 'geode:quartz_crystal', 'geode:budding_nether_quartz');
  budding('netherrack', 'geode:glowstone_cluster', 'geode:budding_glowstone');
  budding('basalt', 'geode:quartz_crystal', 'geode:budding_basalt_quartz');
  budding('basalt', 'geode:glowstone_cluster', 'geode:budding_basalt_glowstone');
  
  // Duplicates
  event.remove({output: 'buzzier_bees:honey_apple'});
  event.remove({output: 'buzzier_bees:honey_bread'});
  event.recipes.createFilling('buzzier_bees:honey_bread', [
    '#forge:bread',
    Fluid.of('create:honey', 250)
  ]);
  event.remove({output: 'buzzier_bees:glazed_porkchop'});
  event.recipes.createFilling('buzzier_bees:glazed_porkchop', [
    'minecraft:cooked_porkchop',
    Fluid.of('create:honey', 250)
  ]);
  event.remove({output: 'delightful:honey_glazed_walnut'});
  event.recipes.createFilling('delightful:honey_glazed_walnut', [
    'ecologics:walnut',
    Fluid.of('create:honey', 250)
  ]);

})