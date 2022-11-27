onEvent('recipes',event => {
    event.remove({output: 'pyromancer:court_or_embers'})
    event.remove({output: 'apotheosis:salvaging_table'})
    event.remove({output: 'apotheosis:reforging_table'})
    event.remove({output: 'apotheosis:sigil_of_socketing'})
    event.remove({output: 'create:windmill_bearing'})
    event.remove({output: 'create:mechanical_crafter'})
    event.remove({output: 'create:water_wheel'})
    event.remove({output: 'create:millstone'})
})

//event.remove({output: ''})
