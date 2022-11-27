onEvent('recipes', event => {
    event.shaped('minecraft:spawner', [
        'SSS',
        'SDS',
        'SSS',
    ], {
        D:'forbidden_arcanus:dark_soul',
        S:'forbidden_arcanus:spawner_scrap'
    })
    event.shaped('minecraft:saddle', [
        'LIL',
        'LAL'
    ], {
        L:'minecraft:leather',
        I:'minecraft:iron_ingot',
        A:'minecraft:air'
    })
    event.blasting('9x minecraft:iron_ingot', '#forge:storage_blocks/raw_iron')
    event.blasting('9x minecraft:copper_ingot', '#forge:storage_blocks/raw_copper')
    event.blasting('9x minecraft:gold_ingot', '#forge:storage_blocks/raw_gold')
    event.blasting('9x byg:pendorite_scraps', 'byg:raw_pendorite_block')
    event.blasting('9x blue_skies:falsite_ingot', 'blue_skies:raw_falsite_block')
    event.blasting('9x blue_skies:ventium_ingot', 'blue_skies:raw_ventium_block')
    event.blasting('9x blue_skies:horizonite_ingot', 'blue_skies:raw_horizonite_block')
    event.blasting('9x blue_skies:aquite', 'blue_skies:raw_aquite_block')
    event.blasting('9x blue_skies:charoite', 'blue_skies:raw_charoite_block')
    event.blasting('9x bloodmagic:ingot_hellforged', 'bloodmagic:rawdemoniteblock')
    event.blasting('9x create:zinc_ingot', '#forge:storage_blocks/raw_zinc')
})

/*
    event.shaped('minecraft:spawner', [
        '',
        '',
        '',
    ], {
        A:'',
        B:''
    })

    event.blasting('', '')

*/
