
onEvent('item.registry', event => {
	// Register new items here
	event.create('god_soul').displayName('God Soul').unstackable(true).glow(true).rarity(epic)
})

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})