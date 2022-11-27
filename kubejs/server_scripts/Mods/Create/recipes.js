onEvent('recipes',event => {
    event.custom({
        type: 'jobsplus:construction',
        result: {item:'create:millstone'},
        key: {
            A: {item: 'create:cogwheel'},
            B: {item: 'create:andesite_casing'},
            C: {item: 'minecraft:smooth_stone_slab'}
        },
        pattern: [
            '     ',
            '  A  ',
            '  B  ',
            '  C  ',
            '     '
        ],
        job: 'BUILDER',
        requiredLevel: 2
    })
    event.custom({
        type: 'jobsplus:construction',
        result: {item:'create:water_wheel'},
        key: {
            A: {item: 'minecraft:oak_planks'},
            B: {item: 'minecraft:oak_slab'},
            C: {item: 'create:large_cogwheel'}
        },
        pattern: [
            '  B  ',
            ' BAB ',
            'BACAB',
            ' BAB ',
            '  B  '
        ],
        job: 'BUILDER',
        requiredLevel: 5
    })
    event.custom({
        type: 'jobsplus:construction',
        result: {item:'create:mechanical_crafter'},
        key: {
            A: {item:'create:electron_tube'},
            B: {item:'create:brass_casing'},
            C: {item:'minecraft:crafting_table'},
            D: {item:'create:cogwheel'}
        },
        pattern: [
            '  A  ',
            '  B  ',
            '  C  ',
            '  D  ',
            '     '
        ],
        job: 'BUILDER',
        requiredLevel: 10
    })
    event.custom({
        type: 'jobsplus:construction',
        result: {item:'create:windmill_bearing'},
        key: {
            A: {item:'minecraft:oak_slab'},
            B: {item:'create:shaft'},
            C: {item:'create:andesite_casing'},
            D: {item:'create:cogwheel'}
        },
        pattern: [
            '  A  ',
            '  B  ',
            '  C  ',
            '  D  ',
            '     '
        ],
        job: 'BUILDER',
        requiredLevel: 3
    })
})