onEvent('recipes', event => {
    event.shaped('functionalstorage:creative_vending_upgrade', [
        'PCP',
        'GKG',
        'PCP'
        ], {
        K:'projecte:klein_star_omega',
        C:'functionalstorage:netherite_upgrade',
        P:'forbidden_arcanus:eternal_stella',
        G:'kubejs:god_soul'
        })
    event.smithing('ars_nouveau:creative_spell_book', 'ars_nouveau:archmage_spell_book','kubejs:god_soul')
    event.shaped('ars_nouveau:creative_source_jar', [
        'SBD',
        'WJA',
        'FGF'
    ], {
        S:'ars_nouveau:familiar_starbuncle',
        B:'ars_nouveau:familiar_bookwyrm',
        D:'ars_nouveau:familiar_drygmy',
        W:'ars_nouveau:familiar_wixie',
        A:'ars_nouveau:familiar_whirlisprig',
        J:'ars_nouveau:source_jar',
        F:'ars_nouveau:summon_focus',
        G:'kubejs:god_soul'
    })
    event.smithing('create:creative_motor', 'createaddition:electric_motor', 'kubejs:god_soul')
    
})