ServerEvents.recipes(event => {
    const disabled = [
        // Charging
        "createaddition:charging/electrify_gold_block",
        "createaddition:charging/electrify_gold_ingot",
        "createaddition:charging/electrify_gold_nugget",
        "createaddition:charging/electrify_gold_rod",
        "createaddition:charging/electrify_gold_sheet",
        "createaddition:charging/electrify_gold_wire",

        // Electrum
        "createaddition:mixing/electrum",
        "createaddition:pressing/electrum_ingot",
        "createaddition:rolling/electrum_plate",
        "createaddition:rolling/electrum_ingot",
        "createaddition:crafting/electrum_block",
        "createaddition:crafting/electrum_ingot_from_electrum_block",
        "createaddition:crafting/electrum_ingot_from_nugget",
        "createaddition:crafting/electrum_nugget",
        "createaddition:crafting/electrum_amulet",
        "createaddition:crafting/electrum_spool",

        // Wires
        "createaddition:rolling/copper_plate",
        "createaddition:rolling/iron_plate",
        "createaddition:rolling/gold_plate",

        // Rods
        "createaddition:rolling/copper_ingot",
        "createaddition:rolling/iron_ingot",
        "createaddition:rolling/gold_ingot",
        "createaddition:rolling/brass_rod",

        // Spools
        "createaddition:crafting/spool",
        "createaddition:crafting/copper_spool",
        "createaddition:crafting/gold_spool",
        "createaddition:crafting/festive_spool",

        // Connectors
        "createaddition:crafting/connector",
        "createaddition:crafting/large_connector",
        "createaddition:crafting/small_light_connector",

        // Capacitor
        "createaddition:crafting/capacitor_1",
        "createaddition:crafting/capacitor_2",

        // Energy network blocks
        "createaddition:crafting/modular_accumulator",
        "createaddition:crafting/portable_energy_interface",
        "createaddition:crafting/redstone_relay",

        // Electrical machines
        "createaddition:mechanical_crafting/alternator",
        "createaddition:mechanical_crafting/electric_motor",
        "createaddition:mechanical_crafting/tesla_coil"
    ]

    disabled.forEach(id => event.remove({id: id}))

    // Barbed Wire
    event.remove({id: "createaddition:crafting/barbed_wire"})
    event.stonecutting("2x createaddition:barbed_wire", "minecraft:iron_ingot")
})

RecipeViewerEvents.removeEntries("item", event => {
    const hidden = [
        // Electrum
        "createaddition:electrum_ingot",
        "createaddition:electrum_block",
        "createaddition:electrum_nugget",
        "createaddition:electrum_sheet",
        "createaddition:electrum_rod",
        "createaddition:electrum_wire",
        "createaddition:electrum_spool",
        "createaddition:electrum_amulet",

        // Wires
        "createaddition:copper_wire",
        "createaddition:gold_wire",
        "createaddition:iron_wire",

        // Spools
        "createaddition:spool",
        "createaddition:copper_spool",
        "createaddition:gold_spool",
        "createaddition:festive_spool",

        // Connectors
        "createaddition:connector",
        "createaddition:large_connector",
        "createaddition:small_light_connector",

        // Machines
        "createaddition:modular_accumulator",
        "createaddition:alternator",
        "createaddition:electric_motor",
        "createaddition:tesla_coil",
        "createaddition:portable_energy_interface",
        "createaddition:redstone_relay",
        "createaddition:capacitor",

        // Rods
        "createaddition:copper_rod",
        "createaddition:iron_rod",
        "createaddition:brass_rod",
        "createaddition:gold_rod"
    ]

    hidden.forEach(id => event.remove(id))
})
