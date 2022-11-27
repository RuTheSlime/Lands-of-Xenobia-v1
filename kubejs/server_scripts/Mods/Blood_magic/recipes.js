onEvent('recipes', event => {
    event.custom({
        type: 'jobsplus:construction',
        result: { item: 'bloodmagic:alchemytable' },
        key: {
            A: { item: 'minecraft:polished_deepslate' },
            B: { item: 'minecraft:iron_ingot' },
            C: { item: 'minecraft:gold_ingot' },
            D: { item: 'bloodmagic:blankslate'},
            E: { item: 'ars_nouveau:archwood_planks'}
        },
        pattern: [
            'AAAAA',
            'E C E',
            'EBDBE',
            'E   E',
            '     '
        ],
        job: 'ENCHANTER',
        requiredLevel: 8
    })
})