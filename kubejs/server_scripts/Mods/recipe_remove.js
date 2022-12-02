onEvent('recipes',event => {
    /*remove single recipes */
    event.remove({output: 'pyromancer:court_or_embers'})
    event.remove({output: 'apotheosis:salvaging_table'})
    event.remove({output: 'apotheosis:reforging_table'})
    event.remove({output: 'apotheosis:sigil_of_socketing'})
    event.remove({output: 'create:windmill_bearing'})
    event.remove({output: 'create:mechanical_crafter'})
    event.remove({output: 'create:water_wheel'})
    event.remove({output: 'minecraft:iron_ingot'})
    event.remove({output: 'minecraft:gold_ingot'})
    event.remove({output: 'minecraft:copper_ingot'})
    /*remove all mod recipes */
    event.remove({mod: 'alltheores'})
    /*remove recipe id's */
    event.remove({id: "create:milling"})
    event.remove({id: 'minecraft:blasting'})
})

//event.remove({output: ''})
