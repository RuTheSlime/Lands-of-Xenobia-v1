onEvent('tags.items', event => {
    //Crafting Tables
    event.add('forge:workbench', 'minecraft:crafting_table')
    event.add('forge:workbench', '#blue_skies:crafting_tables')
    //chipped blocks to raw block
    event.add('forge:storage_blocks/raw_copper', '#chipped:raw_copper_block')
    event.add('forge:storage_blocks/raw_gold', '#chipped:raw_gold_block')
    event.add('forge:storage_blocks/raw_iron', '#chipped:raw_iron_block')
    //Hammers tags
    event.add('forge:hammers', 'stalwart_dungeons:iron_hammer')
    event.add('forge:hammers', 'stalwart_dungeons:diamond_hammer')
    event.add('forge:hammers', 'stalwart_dungeons:netherite_hammer')
    event.add('forge:blankrune', 'bloodmagic:blankrune')
})