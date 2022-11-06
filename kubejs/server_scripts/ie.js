onEvent('recipes', event => {

  //redstone engineering block
	event.remove({output: 'immersiveengineering:rs_engineering'});
  let transitional = 'create:andesite_casing'
	event.recipes.createSequencedAssembly([
		'immersiveengineering:rs_engineering',
	], transitional, [
		event.recipes.createDeploying(transitional, [transitional, ('create:electron_tube')]),
		event.recipes.createDeploying(transitional, [transitional, ('#forge:wires/copper')]),
		event.recipes.createDeploying(transitional, [transitional, (Item.of('immersiveengineering:wirecutter').ignoreNBT())])
	]).transitionalItem(transitional)
		.loops(6)
		.id('immersiveengineering:rs_engineering')

  //light engineering block
  event.remove({output: 'immersiveengineering:light_engineering'});
  event.recipes.createMechanicalCrafting('4x immersiveengineering:light_engineering', [
    ' III ',
    'IICII',
    'ICCCI',
    'IICII',
    ' III '
  ], {
    I: '#forge:plates/iron',
    C: 'immersiveengineering:component_iron'
  });

  //heavy engineering block
  event.remove({output: 'immersiveengineering:heavy_engineering'});
  event.recipes.createMechanicalCrafting('4x immersiveengineering:heavy_engineering', [
    ' SSS ',
    'SSCSS',
    'SCCCS',
    'SSCSS',
    ' SSS '
  ], {
    S: '#forge:plates/steel',
    C: 'immersiveengineering:component_steel'
  });
	
  // accumulator tiers
	event.replaceInput({id: 'immersiveengineering:crafting/capacitor_lv'}, '#forge:ingots/iron', '#forge:ingots/silver');
	
  // MV tier
	event.remove({id:'immersiveengineering:crafting/capacitor_mv'});
	event.shaped('immersiveengineering:capacitor_mv', [
    'TNT',
    'SLS',
    'TIT'
  ], {
    T: '#forge:treated_wood',
    S: '#forge:ingots/steel',
	  I: '#forge:plates/iron',
    N: '#forge:plates/nickel',
    L: 'immersiveengineering:capacitor_lv'
  });
	
  // HV tier
	event.remove({id:'immersiveengineering:crafting/capacitor_hv'});
	event.shaped('immersiveengineering:capacitor_hv', [
    'TAT',
    'SMS',
    'TGT'
  ], {
    T: '#forge:treated_wood',
    S: '#forge:ingots/steel',
	  A: '#forge:plates/aluminum',
    G: '#forge:ingots/hop_graphite',
    M: 'immersiveengineering:capacitor_mv'
  });

  //wire tiers
  event.replaceInput({id: 'immersiveengineering:crafting/wirecoil_electrum'}, '#forge:rods/wooden', 'immersiveengineering:wirecoil_copper');
  event.replaceInput({id: 'immersiveengineering:crafting/wirecoil_steel'}, '#forge:rods/wooden', 'immersiveengineering:wirecoil_electrum');

  //blast bricks
  event.remove({id:'immersiveengineering:crafting/blastbrick'});
	event.shaped('3x immersiveengineering:blastbrick', [
    'RRR',
    'RRR',
    'RRR'
  ], {
    R: 'kubejs:refined_brick'
  });

  // \/ ARC FURNACE ORE TRIPLING \/

  //ores that can be tripled
  let materials = [
    'copper',
    'iron',
    'gold',
    'lead',
    'silver',
    'aluminum',
    'nickel',
    'uranium',
    'zinc',
    'platinum',
    'desh',
    'ostrum',
    'calorite',
    'tin',
    'osmium'
  ];

  //raws to add to IE processing
  let raws = [
    'desh',
    'ostrum',
    'calorite'
  ];

  //loops through materials to remove pre-existing ore recipe and add tripled recipe
  materials.forEach(material => {
    event.remove({id: `immersiveengineering:arcfurnace/ore_${material}`});
    event.recipes.immersiveengineeringArcFurnace(`3x #forge:ingots/${material}`, `#forge:ores/${material}`, [], 'immersiveengineering:slag');
  });

  //loops through raws to add IE processing
  raws.forEach(raw => {
    event.recipes.immersiveengineeringArcFurnace([`#forge:ingots/${raw}`, Item.of(`#forge:ingots/${raw}`).withChance(.5)], `#forge:raw_materials/${raw}`);
    event.recipes.immersiveengineeringCrusher(`#forge:dusts/${raw}`, `#forge:raw_materials/${raw}`, [Item.of(`#forge:dusts/${raw}`).withChance(.333)]);
    event.recipes.immersiveengineeringArcFurnace(`#forge:ingots/${raw}`, `#forge:dusts/${raw}`);
  });
  event.recipes.immersiveengineeringCrusher('create:crushed_zinc_ore', '#forge:raw_materials/zinc', [Item.of('create:crushed_zinc_ore').withChance(.333)]);
  event.recipes.immersiveengineeringCrusher('create:crushed_platinum_ore', '#forge:raw_materials/platinum', [Item.of('create:crushed_platinum_ore').withChance(.333)]);

  //removing extra items
  event.remove({output: 'immersiveengineering:plate_uranium'});

  //bug fixing: redstone acid bucket dupe
  event.remove({id: 'immersiveengineering:crafting/redstone_acid'});
  event.recipes.createMixing(Fluid.of('immersiveengineering:redstone_acid', 250), [
    '2x #forge:dusts/redstone',
    Fluid.of('minecraft:water', 250)
  ]);

  //modifying component blueprint precipes
  event.remove({id:'immersiveengineering:crafting/component_steel'});
	event.remove({id:'immersiveengineering:crafting/component_iron'});
  
  event.remove({id: 'immersiveengineering:blueprint/component_iron'});
  event.custom({
    "type": "immersiveengineering:blueprint",
    "inputs": [
      {
        "count": 2,
        "base_ingredient": {
          "tag": "forge:plates/iron"
        }
      },
      {
        "tag": "forge:plates/silver"
      },
      {
        "tag": "forge:ingots/nickel"
      },
      {
        "item": "create:precision_mechanism"
      }
    ],
    "category": "components",
    "result": {
      "item": "immersiveengineering:component_iron"
    }
  });

  //modifying component blueprint precipes
  event.remove({id: 'immersiveengineering:blueprint/component_steel'});
  event.custom({
    "type": "immersiveengineering:blueprint",
    "inputs": [
      {
        "count": 2,
        "base_ingredient": {
          "tag": "forge:plates/steel"
        }
      },
      {
        "tag": "forge:plates/lead"
      },
      {
        "tag": "forge:ingots/uranium"
      },
      {
        "item": "create:precision_mechanism"
      }
    ],
    "category": "components",
    "result": {
      "item": "immersiveengineering:component_steel"
    }
  });

})