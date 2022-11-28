onEvent('recipes', event => {
    /*milling recipes */
    event.recipes.createMilling(
        [
            Item.of('alltheores:iron_dust'),
            Item.of('alltheores:iron_dust').withChance(0.15),
            Item.of('alltheores:iron_dust').withChance(0.05)
        ],
        'minecraft:raw_iron'
    );
    event.recipes.createMilling(
        [
            Item.of('alltheores:gold_dust'),
            Item.of('alltheores:gold_dust').withChance(0.15),
            Item.of('alltheores:gold_dust').withChance(0.05)
        ],
        'minecraft:raw_gold'
    );
    event.recipes.createMilling(
        [
            Item.of('alltheores:copper_dust'),
            Item.of('alltheores:copper_dust').withChance(0.15),
            Item.of('alltheores:copper_dust').withChance(0.05)
        ],
        'minecraft:raw_copper'
    );
    event.recipes.createMilling(
        [
            Item.of('alltheores:aluminum_dust'),
            Item.of('alltheores:aluminum_dust').withChance(0.15),
            Item.of('alltheores:aluminum_dust').withChance(0.05)
        ],
        '#forge:raw_materials/aluminum'
    );
    event.recipes.createMilling(
        [
            Item.of('alltheores:lead_dust'),
            Item.of('alltheores:lead_dust').withChance(0.15),
            Item.of('alltheores:lead_dust').withChance(0.05)
        ],
        '#forge:raw_materials/lead'
    );
    event.recipes.createMilling(
        [
            Item.of('alltheores:nickel_dust'),
            Item.of('alltheores:nickel_dust').withChance(0.15),
            Item.of('alltheores:nickel_dust').withChance(0.05)
        ],
        '#forge:raw_materials/nickel'
    );
    event.recipes.createMilling(
        [
            Item.of('alltheores:osmium_dust'),
            Item.of('alltheores:osmium_dust').withChance(0.15),
            Item.of('alltheores:osmium_dust').withChance(0.05)
        ],
        '#forge:raw_materials/osmium'
    );
    event.recipes.createMilling(
        [
            Item.of('alltheores:platinum_dust'),
            Item.of('alltheores:platinum_dust').withChance(0.15),
            Item.of('alltheores:platinum_dust').withChance(0.05)
        ],
        '#forge:raw_materials/platinum'
    );
    event.recipes.createMilling(
        [
            Item.of('alltheores:silver_dust'),
            Item.of('alltheores:silver_dust').withChance(0.15),
            Item.of('alltheores:silver_dust').withChance(0.05)
        ],
        '#forge:raw_materials/silver'
    );
    event.recipes.createMilling(
        [
            Item.of('alltheores:tin_dust'),
            Item.of('alltheores:tin_dust').withChance(0.15),
            Item.of('alltheores:tin_dust').withChance(0.05)
        ],
        '#forge:raw_materials/tin'
    );
    event.recipes.createMilling(
        [
            Item.of('alltheores:uranium_dust'),
            Item.of('alltheores:uranium_dust').withChance(0.15),
            Item.of('alltheores:uranium_dust').withChance(0.05)
        ],
        '#forge:raw_materials/uranium'
    );
    event.recipes.createMilling(
        [
            Item.of('alltheores:zinc_dust'),
            Item.of('alltheores:zinc_dust').withChance(0.15),
            Item.of('alltheores:zinc_dust').withChance(0.05)
        ],
        '#forge:raw_materials/zinc'
    );
    event.recipes.createMilling(
        [
            Item.of('alltheores:iridium_dust'),
            Item.of('alltheores:iridium_dust').withChance(0.15),
            Item.of('alltheores:iridium_dust').withChance(0.05)
        ],
        '#forge:raw_materials/iridium'
    );
    event.recipes.createMilling(
        [
            Item.of('alltheores:diamond_dust'),
            Item.of('alltheores:diamond_dust').withChance(0.15),
            Item.of('alltheores:diamond_dust').withChance(0.05)
        ],
        'minecraft:diamond'
    );

    /*smelting recipe */
    let multiSmelt = (output, input, includeBlasting) => {
        event.smelting(output, input)

        if (includeBlasting) {
            event.blasting(output, input)
        }
    }
    multiSmelt('#forge:ingots/iron', 'alltheores:iron_dust', true)
    multiSmelt('#forge:ingots/gold', 'alltheores:gold_dust', true)
    multiSmelt('#forge:ingots/copper', 'alltheores:copper_dust', true)
    multiSmelt('#forge:ingots/aluminum', 'alltheores:aluminum_dust', true)
    multiSmelt('#forge:ingots/lead', 'alltheores:lead_dust', true)
    multiSmelt('#forge:ingots/nickel', 'alltheores:nickel_dust', true)
    multiSmelt('#forge:ingots/osmium', 'alltheores:osmium_dust', true)
    multiSmelt('#forge:ingots/platinum', 'alltheores:platinum_dust', true)
    multiSmelt('#forge:ingots/silver', 'alltheores:silver_dust', true)
    multiSmelt('#forge:ingots/tin', 'alltheores:tin_dust', true)
    multiSmelt('#forge:ingots/uranium', 'alltheores:uranium_dust', true)
    multiSmelt('#forge:ingots/zinc', 'alltheores:zinc_dust', true)
    multiSmelt('#forge:ingots/iridium', 'alltheores:iridium_dust', true)
    multiSmelt('#forge:ingots/brass', 'alltheores:brass_dust', true)

    /*mixing recipes 
    used to re-add the mixed aluminumerials */
    event.recipes.createMixing('alltheores:brass_dust', [
        'alltheores:copper_dust',
        'alltheores:zinc_dust'
    ]);
})