ServerEvents.tags("block", event => {
    // Basic Block Weights 
    const super_light = [
        "#aether:aerogel",
        "#bits_n_bobs:nixie_boards",
        "#minecraft:beds",
        "toms_storage:inventory_cable",
        "toms_storage:inventory_cable_framed",
        "toms_storage:inventory_cable_connector",
        "toms_storage:inventory_cable_connector_framed",
        "computercraft:cable",
        "computercraft:wireless_modem_normal",
        "computercraft:wireless_modem_advanced",
        "waystones:warp_plate",
    ]
    super_light.forEach(block => {
        event.add("sable:super_light", block)
    })
    event.remove("sable:super_light", "aether:aerogel_slab")

    const light = [
        "betterend:neon_cactus",
        "betterend:neon_cactus_block",
        "#create:shaft",
        "#create:cogwheel",
        "#create:large_cogwheel",
        "createbigcannons:log_cannon_end",
        "createbigcannons:log_cannon_chamber",
        "createbigcannons:very_small_cast_mould",
        "createbigcannons:small_cast_mould",
        "createbigcannons:medium_cast_mould",
        "createbigcannons:large_cast_mould",
        "createbigcannons:very_large_cast_mould",
        "createbigcannons:cannon_end_cast_mould",
        "createbigcannons:sliding_breech_cast_mould",
        "createbigcannons:screw_breech_cast_mould",
        "createbigcannons:autocannon_breech_cast_mould",
        "createbigcannons:autocannon_recoil_spring_cast_mould",
        "createbigcannons:autocannon_barrel_cast_mould",
        "#create_connected:catalysts",
        "toms_storage:storage_terminal",
        "toms_storage:crafting_terminal"
    ]
    light.forEach(block => {
        event.add("sable:light", block)
    })

    const heavy = [
        "createbigcannons:cast_iron_cannon_end",
        "createbigcannons:cast_iron_cannon_barrel",
        "createbigcannons:cast_iron_cannon_chamber",
        "createbigcannons:cast_iron_sliding_breech",
        "createbigcannons:cast_iron_quickfiring_breech",

        "createbigcannons:unbored_cast_iron_cannon_barrel",
        "createbigcannons:unbored_cast_iron_cannon_chamber",
        "createbigcannons:unbored_cast_iron_sliding_breech",
        "createbigcannons:unbored_cast_iron_quickfiring_breech"
    ]
    heavy.forEach(block => {
        event.add("sable:heavy", block)
    })

    const super_heavy = [
        "createbigcannons:steel_sliding_breech",
        "createbigcannons:steel_quickfiring_breech",
        "createbigcannons:steel_screw_breech",
        "createbigcannons:thick_steel_cannon_chamber",
        "createbigcannons:built_up_steel_cannon_chamber",
        "createbigcannons:steel_cannon_chamber",
        "createbigcannons:built_up_steel_cannon_barrel",
        "createbigcannons:steel_cannon_barrel",
        "createbigcannons:very_small_steel_cannon_layer",
        "createbigcannons:small_steel_cannon_layer",
        "createbigcannons:medium_steel_cannon_layer",
        "createbigcannons:large_steel_cannon_layer",
        "createbigcannons:very_large_steel_cannon_layer",

        "createbigcannons:unbored_steel_sliding_breech",
        "createbigcannons:incomplete_steel_sliding_breech",
        "createbigcannons:unbored_steel_screw_breech",
        "createbigcannons:incomplete_steel_screw_breech",
        "createbigcannons:unbored_very_small_steel_cannon_layer",
        "createbigcannons:unbored_small_steel_cannon_layer",
        "createbigcannons:unbored_medium_steel_cannon_layer",
        "createbigcannons:unbored_large_steel_cannon_layer",
        "createbigcannons:unbored_very_large_steel_cannon_layer",

        "createbigcannons:nethersteel_screw_breech",
        "createbigcannons:thick_nethersteel_cannon_chamber",
        "createbigcannons:built_up_nethersteel_cannon_chamber",
        "createbigcannons:nethersteel_cannon_chamber",
        "createbigcannons:built_up_nethersteel_cannon_barrel",
        "createbigcannons:nethersteel_cannon_barrel",
        "createbigcannons:very_small_nethersteel_cannon_layer",
        "createbigcannons:small_nethersteel_cannon_layer",
        "createbigcannons:medium_nethersteel_cannon_layer",
        "createbigcannons:large_nethersteel_cannon_layer",
        "createbigcannons:very_large_nethersteel_cannon_layer",

        "createbigcannons:unbored_nethersteel_screw_breech",
        "createbigcannons:incomplete_nethersteel_screw_breech",
        "createbigcannons:unbored_very_small_nethersteel_cannon_layer",
        "createbigcannons:unbored_small_nethersteel_cannon_layer",
        "createbigcannons:unbored_medium_nethersteel_cannon_layer",
        "createbigcannons:unbored_large_nethersteel_cannon_layer",
        "createbigcannons:unbored_very_large_nethersteel_cannon_layer"
    ]
    super_heavy.forEach(block => {
        event.add("sable:super_heavy", block)
    })

    // Volume Block Properties

    // const half_volume = []
    // half_volume.forEach(block => {
    //     event.add("sable:half_volume", block)
    // })

    const quarter_volume = [
        "waystones:warp_plate"
    ]
    quarter_volume.forEach(block => {
        event.add("sable:quarter_volume", block)
    })

    // Special Block Properties
    const fragile = [
        "#deep_aether:squash",
        "betterend:cave_pumpkin",
        "betterend:aurora_crystal",
        "betterend:emerald_ice"
    ]
    fragile.forEach(block => {
        event.add("sable:fragile", block)
    })

    const slippery = [
        "aether:quicksoil",
        "aether:quicksoil_glass",
        "aether:quicksoil_glass_pane",
        "betterend:emerald_ice",
        "betterend:dense_emerald_ice",
        "betterend:ancient_emerald_ice"
    ]
    slippery.forEach(block => {
        event.add("sable:slippery", block)
    })

    // const bouncy = []
    // bouncy.forEach(block => {
    //     event.add("sable:bouncy", block)
    // })

    const frictive = [
        "deep_aether:virulent_quicksand"
    ]
    frictive.forEach(block => {
        event.add("sable:frictive", block)
    })

    const diode = [
        "tinyredstone:redstone_panel",
        "tinygates:and_gate_block",
        "tinygates:clock_block",
        "tinygates:counter_block",
        "tinygates:edge_detector_block",
        "tinygates:not_gate_block",
        "tinygates:or_gate_block",
        "tinygates:rs_latch_block",
        "tinygates:t_flip_flop_block",
        "tinygates:xor_gate_block"
    ]
    diode.forEach(block => {
        event.add("sable:diode", block)
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
        event.add("sable:end_stones", block)
    })

    const end_stone_slabs = [
        "minecraft:end_stone_brick_slab",
        "betterend:end_stone_slab",
        "betterend:end_stone_brick_cracked_slab",
        "betterend:end_stone_brick_weathered_slab"
    ]
    end_stone_slabs.forEach(block => {
        event.add("sable:end_stone_slabs", block)
    })
})