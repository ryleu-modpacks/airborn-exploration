const create_encasing_shaft_materials = [
    "brass",
    "copper",
    "zinc",
    "acacia",
    "birch",
    "bamboo",
    "cherry",
    "crimson",
    "dark_oak",
    "oak",
    "jungle",
    "mangrove",
    "warped"
]

const create_casings = [
    "andesite",
    "brass",
    "copper",
    "railway",
    "shadow_steel",
    "refined_radiance",
    "creative",
    "industrial_iron",
    "weathered_iron"
]

const create_machines = {
    "configurable_gearbox": true,
    "automatic_clutch": true,
    "gearbox": false,
    "press": false,
    "mixer": false,
    "depot": false,
    "encased_chain_drive": false,
    "adjustable_chain_gearshift": false,
    "chain_conveyor": false,
    "gearshift": false,
    "clutch": false,
    "deployer": false,
    "portable_storage_interface": false,
    "encased_fan": false,
    "mechanical_harvester": false,
    "mechanical_saw": false,
    "mechanical_drill": false,
    "mechanical_plough": false,
    "mechanical_roller": false,
    "slicer": false
}

ServerEvents.tags("item", event => {

    // Shafts, Cogwheels, and Large Cogwheels
    event.add("create:shaft", "create:shaft")
    event.add("create:shaft", "copycats:copycat_shaft")
    event.add("create:shaft", "createcasing:glass_shaft")
    event.add("create:shaft", "createcasing:spruce_shaft")

    event.add("create:cogwheel", "create:cogwheel")
    event.add("create:cogwheel", "copycats:copycat_cogwheel")
    event.add("create:cogwheel", "createcasing:andesite_cogwheel")

    event.add("create:large_cogwheel", "create:large_cogwheel")
    event.add("create:large_cogwheel", "copycats:copycat_large_cogwheel")
    event.add("create:large_cogwheel", "createcasing:andesite_large_cogwheel")
    create_encasing_shaft_materials.forEach(material => {
        event.add("create:shaft", `createcasing:${material}_shaft`)
        event.add("create:cogwheel", `createcasing:${material}_cogwheel`)
        event.add("create:large_cogwheel", `createcasing:${material}_large_cogwheel`)
    })

    // Machines
    Object.keys(create_machines).forEach(machine => {
        const has_andesite_casing = create_machines[machine]
        if (!has_andesite_casing) {
            if (machine === "slicer") {
                event.add("sliceanddice:slicer", "sliceanddice:slicer")
            } else if (machine === "gearbox") {
                event.add("create:gearbox", "create:gearbox")
                event.add("create:gearbox", "create:vertical_gearbox")
            } else if (machine === "press" || machine === "mixer") {
                event.add(`create:${machine}`, `create:mechanical_${machine}`)
            } else {
                event.add(`create:${machine}`, `create:${machine}`)
            }
        }

        create_casings.forEach(casing => {
            if (has_andesite_casing || casing !== "andesite") {
                if (machine === "slicer") {
                    event.add(`sliceanddice:slicer`, `createcasing:${casing}_slicer`)
                } else if (machine === "gearbox") {
                    event.add(`create:gearbox`, `createcasing:${casing}_gearbox`)
                    event.add(`create:gearbox`, `createcasing:vertical_${casing}_gearbox`)
                } else {
                    event.add(`create:${machine}`, `createcasing:${casing}_${machine}`)
                }
            }
        })
    })
})

ServerEvents.tags("block", event => {

    // Shafts, Cogwheels, and Large Cogwheels
    event.add("create:shaft", "create:shaft")
    event.add("create:shaft", "copycats:copycat_shaft")
    event.add("create:shaft", "createcasing:glass_shaft")
    event.add("create:shaft", "createcasing:spruce_shaft")

    event.add("create:cogwheel", "create:cogwheel")
    event.add("create:cogwheel", "copycats:copycat_cogwheel")
    event.add("create:cogwheel", "createcasing:andesite_cogwheel")

    event.add("create:large_cogwheel", "create:large_cogwheel")
    event.add("create:large_cogwheel", "copycats:copycat_large_cogwheel")
    event.add("create:large_cogwheel", "createcasing:andesite_large_cogwheel")
    create_encasing_shaft_materials.forEach(material => {
        event.add("create:shaft", `createcasing:${material}_shaft`)
        event.add("create:cogwheel", `createcasing:${material}_cogwheel`)
        event.add("create:large_cogwheel", `createcasing:${material}_large_cogwheel`)
    })

    // Machines
    Object.keys(create_machines).forEach(machine => {
        const has_andesite_casing = create_machines[machine]
        if (!has_andesite_casing) {
            if (machine === "slicer") {
                event.add("sliceanddice:slicer", "sliceanddice:slicer")
            } else if (machine === "gearbox") {
                event.add("create:gearbox", "create:gearbox")
                event.add("create:gearbox", "create:vertical_gearbox")
            } else if (machine === "press" || machine === "mixer") {
                event.add(`create:${machine}`, `create:mechanical_${machine}`)
            } else {
                event.add(`create:${machine}`, `create:${machine}`)
            }
        }

        create_casings.forEach(casing => {
            if (has_andesite_casing || casing !== "andesite") {
                if (machine === "slicer") {
                    event.add(`sliceanddice:slicer`, `createcasing:${casing}_slicer`)
                } else if (machine === "gearbox") {
                    event.add(`create:gearbox`, `createcasing:${casing}_gearbox`)
                    event.add(`create:gearbox`, `createcasing:vertical_${casing}_gearbox`)
                } else {
                    event.add(`create:${machine}`, `createcasing:${casing}_${machine}`)
                }
            }
        })
    })
})