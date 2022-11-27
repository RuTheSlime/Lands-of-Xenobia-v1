onEvent('recipes', event => {
    event.shaped('apotheosis:salvaging_table', [
        'GDG',
        'HSH',
        'DLD'
        ], {
        D:'minecraft:diamond',
        S:'minecraft:smithing_table',
        G:'apotheosis:gem_dust',
        H:'stalwart_dungeons:diamond_hammer',
        L:'minecraft:lava_bucket'
        })

    event.shaped('apotheosis:reforging_table', [
        ' N ',
        'PEP',
        'GMG'
    ], {
        E:'minecraft:enchanting_table',
        P:'pyromancer:molten_pyrowood',
        N:'minecraft:netherite_ingot',
        G:'aquaculture:neptunium_ingot',
        M: Item.of('bloodmagic:masterbloodorb').ignoreNBT()
    }).replaceIngredient('bloodmagic:masterbloodorb', 'bloodmagic:masterbloodorb')

    event.recipes.bloodmagic.alchemytable('apotheosis:sigil_of_socketing', ['apotheosis:gem_dust', 'apotheosis:gem_dust', 'apotheosis:gem_dust', 'minecraft:diamond', 'apotheosis:mythic_material']).syphon(1000).ticks(100).upgradeLevel(4)
})