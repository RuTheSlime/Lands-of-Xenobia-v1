onEvent('recipes', event => {
    event.custom({
        type: 'ars_nouveau:enchanting_apparatus',
        keepNbtOfReagent: false,
        output:{item:'simplyswords:runic_tablet'},
        pedestalItems: [
            {item: {tag: 'forge:dragon_scales'}},
            {item: {tag: 'forge:dragon_scales'}},
            {item: {tag: 'forge:dragon_scales'}},
            {item: {tag: 'forge:dragon_scales'}},
            {item: {tag: 'forge:blankrune'}},
            {item: {tag: 'forge:blankrune'}},
            {item: {tag: 'forge:blankrune'}},
            {item: {tag: 'forge:blankrune'}},
        ],
        reagent: [
            {item: 'ars_nouveau:runic_chalk'}
        ],
        sourceCost: 15
    })
})