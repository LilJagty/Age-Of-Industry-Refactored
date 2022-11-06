onEvent('recipes', event => {
    // Metallurgic infuser
    event.replaceInput({id: 'mekanism:metallurgic_infuser'}, '#forge:ingots/osmium', 'rftoolsbase:machine_frame');

    // Steel casing
    event.remove({output: 'mekanism:steel_casing'});
    event.custom({
        "input": [
          {
            "tag": "forge:alloys/advanced"
          },
          {
            "tag": "industrialforegoing:machine_frame/simple"
          },
          {
            "item": "kubejs:alien_processor"
          },
          {
            "tag": "forge:storage_blocks/osmium"
          },
          {
            "tag": "forge:rods/steel"
          },
          {
            "tag": "forge:rods/steel"
          },
          {
            "tag": "forge:rods/steel"
          },
          {
            "tag": "forge:rods/steel"
          }
        ],
        "inputFluid": "{FluidName:\"immersiveengineering:redstone_acid\",Amount:500}",
        "processingTime": 300,
        "output": {
          "item": "mekanism:steel_casing",
          "count": 2
        },
        "type": "industrialforegoing:dissolution_chamber"
    })

    // More Mekanism Processing tweaks
    let keepMats = [
      'aluminum',
      'nickel',
      'silver',
      'zinc',
      'platinum',
      'desh',
      'ostrum',
      'calorite'
    ];

    // Remove EVERYTHING in the more mekanism mod that isn't in keepMats
    // Also: remove everything to do with the end ingots
    keepMats.forEach(mat => {
      event.remove({output: 'moremekanismprocessing:' + mat + '_ingot'});
      event.smelting('#forge:ingots/' + mat, '#forge:dusts/' + mat);
      event.blasting('#forge:ingots/' + mat, '#forge:dusts/' + mat);
    });

    // Adjusting transmitters
    event.replaceInput({id: 'mekanism:transmitter/universal_cable/basic'}, '#forge:dusts/redstone', '#forge:alloys/advanced');
    
})