onEvent('recipes', event => {
//remove recipes
    event.remove({output: 'jobsplus:small_backpack'})
    event.remove({output: 'jobsplus:medium_backpack'})
    event.remove({output: 'jobsplus:large_backpack'})
    event.remove({output: 'jobsplus:huge_backpack'})
    event.remove({output: 'jobsplus:ender_backpack'})
    event.remove({output: 'jobsplus:construction_table'})
//add recipes
    event.shaped('jobsplus:construction_table', [
    'CCC',
    'IPI',
    'PPP'
    ], {
    C:'#forge:workbench',
    I:'minecraft:iron_ingot',
    P:'#minecraft:planks'
    })
})
//  event.shaped('minecraft:spawner', [
//      '',
//      '',
//      '',
//    ], {
//      A:'',
//      B:''
//    })