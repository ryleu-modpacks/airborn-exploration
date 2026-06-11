ServerEvents.tags('block', event => {
    // Basic Block Weights 
    const super_light = [
        '#aether:aerogel',
        '#bits_n_bobs:nixie_boards',
        'toms_storage:inventory_cable',
        'toms_storage:inventory_cable_framed',
        'toms_storage:inventory_cable_connector',
        'toms_storage:inventory_cable_connector_framed',
        'computercraft:cable',
        'computercraft:wireless_modem_normal',
        'computercraft:wireless_modem_advanced'
    ]
    super_light.forEach(block => {
        event.add('sable:super_light', block)
    })
    event.remove('sable:super_light', 'aether:aerogel_slab')

    const light = [
        'betterend:neon_cactus',
        'betterend:neon_cactus_block',
        'toms_storage:storage_terminal',
        'toms_storage:crafting_terminal'
    ]
    light.forEach(block => {
        event.add('sable:light', block)
    })

    // heavy and super heavy are placeholders for now.
    const heavy = []
    heavy.forEach(block => {
        event.add('sable:heavy', block)
    })

    const super_heavy = []
    super_heavy.forEach(block => {
        event.add('sable:super_heavy', block)
    })

    // Special Block Properties
    const fragile = [
        "#deep_aether:squash",
        "betterend:cave_pumpkin",
        "betterend:aurora_crystal",
        "betterend:emerald_ice"
    ]
    fragile.forEach(block => {
        event.add('sable:fragile', block)
    })

    const slippery = []
    slippery.forEach(block => {
        event.add('sable:slippery', block)
    })

    const bouncy = []
    bouncy.forEach(block => {
        event.add('sable:bouncy', block)
    })

    const end_stones = [
        "#betterend:overgrown_end_stone",
        "minecraft:end_stone_brick_wall",
        "betterend:endstone_dust",
        "betterend:end_stone_stairs",
        "betterend:end_stone_wall",
        "betterend:end_stone_brick_cracked",
        "betterend:end_stone_brick_cracked_stairs",
        "betterend:end_stone_brick_cracked_wall",
        "betterend:end_stone_brick_weathered",
        "betterend:end_stone_brick_weathered_stairs",
        "betterend:end_stone_brick_weathered_wall"
    ]
    end_stones.forEach(block => {
        event.add('sable:end_stones', block)
    })

    const end_stone_slabs = [
        "minecraft:end_stone_brick_slab",
        "betterend:end_stone_slab",
        "betterend:end_stone_brick_cracked_slab",
        "betterend:end_stone_brick_weathered_slab"
    ]
    end_stone_slabs.forEach(block => {
        event.add('sable:end_stone_slabs', block)
    })
})