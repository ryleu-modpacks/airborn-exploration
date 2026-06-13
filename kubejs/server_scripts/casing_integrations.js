const create_encasing_metal_shaft_materials = [
    "brass",
    "copper",
    "zinc"
]

const create_encasing_wooden_shaft_materials = [
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

const generateTags = (event) => {
    // Shafts, Cogwheels, and Large Cogwheels
    event.add("create:shaft", "create:shaft")
    event.add("create:shaft/special", "copycats:copycat_shaft")
    event.add("create:shaft/special", "createcasing:glass_shaft")
    event.add("create:shaft/wood", "createcasing:spruce_shaft")

    event.add("create:cogwheel/wood", "create:cogwheel")
    event.add("create:cogwheel", "copycats:copycat_cogwheel")
    event.add("create:cogwheel/metal", "createcasing:andesite_cogwheel")

    event.add("create:large_cogwheel/wood", "create:large_cogwheel")
    event.add("create:large_cogwheel", "copycats:copycat_large_cogwheel")
    event.add("create:large_cogwheel/metal", "createcasing:andesite_large_cogwheel")
    create_encasing_metal_shaft_materials.forEach(material => {
        event.add("create:shaft/metal", `createcasing:${material}_shaft`)
        event.add("create:cogwheel/metal", `createcasing:${material}_cogwheel`)
        event.add("create:large_cogwheel/metal", `createcasing:${material}_large_cogwheel`)
    })
    create_encasing_wooden_shaft_materials.forEach(material => {
        event.add("create:shaft/wood", `createcasing:${material}_shaft`)
        event.add("create:cogwheel/wood", `createcasing:${material}_cogwheel`)
        event.add("create:large_cogwheel/wood", `createcasing:${material}_large_cogwheel`)
    })
    event.add("create:shaft", "#create:shaft/wood")
    event.add("create:shaft", "#create:shaft/metal")
    event.add("create:shaft", "#create:shaft/special")
    event.add("create:cogwheel", "#create:cogwheel/wood")
    event.add("create:cogwheel", "#create:cogwheel/metal")
    event.add("create:large_cogwheel", "#create:large_cogwheel/wood")
    event.add("create:large_cogwheel", "#create:large_cogwheel/metal")

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
}

ServerEvents.tags("item", event => {
    generateTags(event)
})

ServerEvents.tags("block", event => {
    generateTags(event)
})

ServerEvents.recipes(event => {
    create_casings.forEach(casing => {
        if (casing === "industrial_iron") {
            event.shapeless("createcasing:industrial_iron_encased_chain_drive", ["create:industrial_iron_block", "3x create:zinc_nugget"])
        } else if (casing === "weathered_iron") {
            event.shapeless("createcasing:weathered_iron_encased_chain_drive", ["create:weathered_iron_block", "3x create:zinc_nugget"])
        } else if (casing === "creative") {
            event.shapeless("createcasing:creative_encased_chain_drive", ["createcasing:creative_casing", "3x create:zinc_nugget"])
        } else if (casing !== "andesite") {
            event.shapeless(`createcasing:${casing}_encased_chain_drive`, [`create:${casing}_casing`, "3x create:zinc_nugget"])
        }
    })

    event.replaceInput({input: "create:shaft"}, "create:shaft", "#create:shaft")
    event.replaceInput({input: "create:cogwheel"}, "create:cogwheel", "#create:cogwheel/wood")
    event.replaceInput({input: "create:large_cogwheel"}, "create:large_cogwheel", "#create:large_cogwheel/wood")
})