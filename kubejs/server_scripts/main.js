
const groups = [
    "abcdefghijklmnopqrstuvwxyz".split(""),
    "0123456789".split(""),
    [
        "up_arrow",
        "upright_arrow",
        "right_arrow",
        "downright_arrow",
        "down_arrow",
        "downleft_arrow",
        "left_arrow",
        "upleft_arrow",
        "plus",
        "minus"
    ],
    ["blank"]
]

const vanilla_dyes = [
    "white",
    "orange",
    "magenta",
    "light_blue",
    "yellow",
    "lime",
    "pink",
    "gray",
    "light_gray",
    "cyan",
    "purple",
    "blue",
    "brown",
    "green",
    "red",
    "black"
]

const isVanillaDye = (color) => {
    return vanilla_dyes.includes(color)
}


const dyeName = (color) => {
    const namespace = isVanillaDye(color) ? "minecraft" : "dye_depot"
    return `${namespace}:${color}`
}

ServerEvents.tags("item", event => {
    event.add("minecraft:doors", "copycats:copycat_iron_door")
})

ServerEvents.tags("block", event => {

    event.add("minecraft:doors", "copycats:copycat_iron_door")
    event.add("bits_n_bobs:nixie_boards", "bits_n_bobs:nixie_board")

    const overgrownEndStone = [
        "betterend:end_mycelium",
        "betterend:end_mycelium_path",
        "betterend:end_moss",
        "betterend:end_moss_path",
        "betterend:chorus_nylium",
        "betterend:chorus_nylium_path",
        "betterend:cave_moss",
        "betterend:cave_moss_path",
        "betterend:crystal_moss",
        "betterend:crystal_moss_path",
        "betterend:shadow_grass",
        "betterend:shadow_grass_path",
        "betterend:pink_moss",
        "betterend:pink_moss_path",
        "betterend:amber_moss",
        "betterend:amber_moss_path",
        "betterend:jungle_moss",
        "betterend:jungle_moss_path",
        "betterend:sangnum",
        "betterend:sangnum_path",
        "betterend:rutiscus",
        "betterend:rutiscus_path"
    ]

    overgrownEndStone.forEach(block => {
        event.add("betterend:overgrown_end_stone", block)
    })

    const squash = [
        "blue",
        "green",
        "purple"
    ]

    squash.forEach(block => {
        event.add("deep_aether:squash", `deep_aether:${block}_squash`)
        event.add("deep_aether:carved_squash", `deep_aether:carved_${block}_squash`)
    })

    const storage_blocks = [
        "betterend:aeternium_block",
        "betterend:charcoal_block",
        "betterend:ender_block",
        "betterend:terminite_block",
        "betterend:thallasium_block",
        "corn_delight:corn_crate",
        "corn_delight:corn_kernel_bag"
    ]
    storage_blocks.forEach(block => {
        event.add("c:storage_blocks", block)
    })

    const catalysts = [
        "create_connected:empty_fan_catalyst",
        "create_connected:fan_blasting_catalyst",
        "create_connected:fan_smoking_catalyst",
        "create_connected:fan_splashing_catalyst",
        "create_connected:fan_haunting_catalyst"
    ]
    catalysts.forEach(block => {
        event.add("create_connected:catalysts", block)
    })

    const planks = [
		"aether:skyroot_planks",
		"deep_aether:roseroot_planks",
		"deep_aether:yagroot_planks",
		"deep_aether:cruderoot_planks",
		"deep_aether:conberry_planks",
		"deep_aether:sunroot_planks"
	]

    planks.forEach(block => {
        event.add("minecraft:planks", block)
    })
})

ServerEvents.recipes(event => {

    // Remove existing recipes
    event.remove({id: "aether:aether_saddle"})
    event.remove({id:"vista:television"})
    event.remove({id: "vista:viewfinder"})
    event.remove({id: "vista:hollow_cassette"})
    event.remove({output: "#waystones:waystones"})
    event.remove({output: "#waystones:portstones"})
    event.remove({output: "#waystones:sharestones"})
    event.remove({output: "createdeco:zinc_sheet"})
    event.remove({id: "simulated:spring"})
    event.remove({id: "createbigcannons:mixing/alloy_steel"})
    event.remove({id: "createbigcannons:steel_scrap"})
    event.remove({id: "createbigcannons:mixing/alloy_bronze_brass"})
    event.remove({id: "createbigcannons:mixing/alloy_bronze_tin"})
    event.remove({id: "createbigcannons:mixing/alloy_bronze_tinless"})
    event.remove({id: "createbigcannons:bronze_scrap"})
    event.remove({mod: "create_aeronautics_toolgun"})

    // Misc Recipes
    event.replaceOutput({output: "createbigcannons:steel_ingot"}, "createbigcannons:steel_ingot", "create_ironworks:steel_ingot")
    event.replaceOutput({output: "createbigcannons:steel_block"}, "createbigcannons:steel_block", "create_ironworks:steel_block")
    event.replaceOutput({output: "createbigcannons:steel_scrap"}, "createbigcannons:steel_scrap", "create_ironworks:steel_nugget")
    event.replaceOutput({output: "createbigcannons:bronze_ingot"}, "createbigcannons:bronze_ingot", "create_ironworks:bronze_ingot")
    event.replaceOutput({output: "createbigcannons:bronze_block"}, "createbigcannons:bronze_block", "create_ironworks:bronze_block")
    event.replaceOutput({output: "createbigcannons:bronze_scrap"}, "createbigcannons:bronze_scrap", "create_ironworks:bronze_nugget")

    event.shapeless("create_ironworks:steel_ingot", ["createbigcannons:steel_ingot"])
    event.shapeless("create_ironworks:steel_block", ["createbigcannons:steel_block"])
    event.shapeless("create_ironworks:steel_nugget", ["createbigcannons:steel_scrap"])
    event.shapeless("create_ironworks:bronze_ingot", ["createbigcannons:bronze_ingot"])
    event.shapeless("create_ironworks:bronze_block", ["createbigcannons:bronze_block"])
    event.shapeless("create_ironworks:bronze_nugget", ["createbigcannons:bronze_scrap"])

    event.replaceInput({input: "minecraft:egg"}, "minecraft:egg", "#c:eggs")

    event.replaceInput({id: "betterend:end_stone_brick_cracked_wall"}, "minecraft:end_stone_bricks", "betterend:end_stone_brick_cracked")
    event.replaceInput({id: "betterend:end_stone_brick_weathered_wall"}, "minecraft:end_stone_bricks", "betterend:end_stone_brick_weathered")
    event.shaped(
        "betterend:end_stone_wall",
        [
            "SSS",
            "SSS"
        ],
        {
            "S": "minecraft:end_stone"
        }
    )
    event.stonecutting("betterend:end_stone_wall", "minecraft:end_stone")

    event.recipes.create.milling([CreateItem.of("minecraft:leather", 0.5)], Ingredient.of("#minecraft:bundles"))
    event.recipes.create.deploying("create:turntable", [Ingredient.of("#minecraft:wooden_slabs"), "create:shaft"])
    event.custom({
        "type": "createaddition:rolling",
        "ingredients": [
            {"tag": "c:rods/iron"}
        ],
        "results": [
            {"id": "simulated:spring", "count": 1}
        ]
    })

    const casings = [
        {"material": "create:shadow_steel", "casing": "create:shadow_steel_casing"},
        {"material": "create:refined_radiance", "casing": "create:refined_radiance_casing"}
    ]

    casings.forEach(casing => {
        event.recipes.create.deploying(casing.casing, [Ingredient.of("#c:stripped_logs"), casing.material])
        event.recipes.create.deploying(casing.casing, [Ingredient.of("#c:stripped_woods"), casing.material])
    })

    // Frequency Items
    for (const group of groups) {
        for (const value of group) {
            event.stonecutting(`kubejs:frequency_${value}`, "minecraft:name_tag")
        }
    }

    const pillar_casings = [
        "andesite",
        "brass",
        "copper",
        "railway",
        "shadow_steel",
        "refined_radiance"
    ]
    pillar_casings.forEach(casing => {
        event.stonecutting(`kubejs:${casing}_casing_pillar`, `create:${casing}_casing`)
        event.stonecutting(`create:${casing}_casing`, `kubejs:${casing}_casing_pillar`)
    })
    event.stonecutting("kubejs:creative_casing_pillar", "createcasing:creative_casing")
    event.stonecutting("createcasing:creative_casing", "kubejs:creative_casing_pillar")

    // Television Assembly
    event.recipes.create.sequenced_assembly(
        [
            CreateItem.of("kubejs:television_housing")
        ],
        "create:andesite_casing",
        [
            event.recipes.create.deploying("kubejs:unfinished_television_housing", ["kubejs:unfinished_television_housing", "create:iron_sheet"]),
            event.recipes.create.pressing("kubejs:unfinished_television_housing", "kubejs:unfinished_television_housing")
        ]
    ).transitionalItem("kubejs:unfinished_television_housing").loops(5)

    event.recipes.create.sequenced_assembly(
        [
            CreateItem.of("kubejs:open_television")
        ],
        "kubejs:television_housing",
        [
            event.recipes.create.deploying("kubejs:incomplete_television", ["kubejs:incomplete_television", "create:electron_tube"]),
            event.recipes.create.deploying("kubejs:incomplete_television", ["kubejs:incomplete_television", "createaddition:capacitor"]),
            event.recipes.create.deploying("kubejs:incomplete_television", ["kubejs:incomplete_television", "createaddition:copper_wire"]),
        ]
    ).transitionalItem("kubejs:incomplete_television").loops(3)

    event.recipes.create.cutting(["3x kubejs:tinted_glass_sheet"], "minecraft:tinted_glass")
    event.recipes.create.deploying("vista:television", ["kubejs:open_television", "kubejs:tinted_glass_sheet"])

    // Viewfinder Assembly
    event.recipes.create.sequenced_assembly(
        [
            CreateItem.of("kubejs:viewfinder_housing")
        ],
        "create:andesite_casing",
        [
            event.recipes.create.deploying("kubejs:incomplete_viewfinder", ["kubejs:incomplete_viewfinder", "create:copper_sheet"]),
            event.recipes.create.deploying("kubejs:incomplete_viewfinder", ["kubejs:incomplete_viewfinder", "create:iron_sheet"]),
            event.recipes.create.pressing("kubejs:incomplete_viewfinder", "kubejs:incomplete_viewfinder")
        ]
    ).transitionalItem("kubejs:incomplete_viewfinder").loops(4)

    event.recipes.create.sequenced_assembly(
        [
            CreateItem.of("kubejs:rose_lens")
        ],
        "create:polished_rose_quartz",
        [
            event.recipes.create.cutting("kubejs:incomplete_rose_lens", "kubejs:incomplete_rose_lens"),
            event.recipes.create.deploying("kubejs:incomplete_rose_lens", ["kubejs:incomplete_rose_lens", Ingredient.of("#create:sandpaper")]),
            event.recipes.create.filling("kubejs:incomplete_rose_lens", [Fluid.of("minecraft:water", 100), "kubejs:incomplete_rose_lens"])
        ]
    ).transitionalItem("kubejs:incomplete_rose_lens").loops(3)

    event.recipes.create.sequenced_assembly(
        [
            CreateItem.of("kubejs:optical_mechanism")
        ],
        "create:precision_mechanism",
        [
            event.recipes.create.deploying("kubejs:incomplete_optical_mechanism", ["kubejs:incomplete_optical_mechanism", "create:cogwheel"]),
            event.recipes.create.deploying("kubejs:incomplete_optical_mechanism", ["kubejs:incomplete_optical_mechanism", "kubejs:rose_lens"])
        ]
    ).transitionalItem("kubejs:incomplete_optical_mechanism").loops(3)

    event.shaped(
        "vista:viewfinder",
        [
            "t ",
            "HM",
            "T "
        ],
        {
            "H": "kubejs:viewfinder_housing",
            "M": "kubejs:optical_mechanism",
            "T": "create:turntable",
            "t": "create:transmitter"
        }
    )

    // Linked Cassette Assembly
    event.recipes.create.crushing("kubejs:iron_dust", "minecraft:iron_ingot")

    event.recipes.create.mixing(
        Fluid.of("kubejs:magnetic_slurry", 1000),
        [
            Ingredient.of("#c:dusts/iron", 2),
            Fluid.of("minecraft:water", 1000)
        ]
    )

    event.shaped(
        "kubejs:cassette_shell",
        [
            " I ",
            "ISI",
            " I "
        ],
        {
            "S": "create:shaft",
            "I": "create:iron_sheet"
        }
    )

    event.recipes.create.sequenced_assembly(
        [
            CreateItem.of("kubejs:magnetic_tape")
        ],
        "minecraft:paper",
        [
            event.recipes.create.deploying("kubejs:unfinished_magnetic_tape", ["kubejs:unfinished_magnetic_tape", Ingredient.of("#c:dusts/iron")]),
            event.recipes.create.deploying("kubejs:unfinished_magnetic_tape", ["kubejs:unfinished_magnetic_tape", "minecraft:slime_ball"])
        ]
    ).transitionalItem("kubejs:unfinished_magnetic_tape").loops(2)

    event.recipes.create.sequenced_assembly(
        [
            CreateItem.of("kubejs:wet_magnetic_tape")
        ],
        "minecraft:paper",
        [
            event.recipes.create.filling("kubejs:unfinished_magnetic_tape", [Fluid.of("kubejs:magnetic_slurry", 100), "kubejs:unfinished_magnetic_tape"]),
            event.recipes.create.deploying("kubejs:unfinished_magnetic_tape", ["kubejs:unfinished_magnetic_tape", "minecraft:slime_ball"])
        ]
    ).transitionalItem("kubejs:unfinished_magnetic_tape").loops(2)

    event.smoking("kubejs:magnetic_tape", "kubejs:wet_magnetic_tape")

    event.shaped(
        "vista:hollow_cassette",
        [
            "CTt"
        ],
        {
            "C": "kubejs:cassette_shell",
            "T": "kubejs:magnetic_tape",
            "t": "create:transmitter"
        }
    )
    event.shaped(
        "vista:hollow_cassette",
        [
            "Ct"
        ],
        {
            "C": "vista:cassette",
            "t": "create:transmitter"
        }
    )


    // Create Waystones
    const waystone_recipe = (material, casing, waystone) => {
        event.recipes.create.mechanical_crafting(waystone, [
            " EEE ",
            "MMMMM",
            " CCC ",
            "  W  ",
            " CCC ",
            "MMMMM"
        ],
        {
            "E": "minecraft:ender_pearl",
            "M": material,
            "C": casing,
            "W": "waystones:warp_stone"
        }
    )
    }

    const portstone_recipe = (color) => {
        event.recipes.create.mechanical_crafting(`waystones:${color}_portstone`, [
            "  W  ",
            " DCD ",
            "MMCMM"
        ],
        {
            "W": "waystones:warp_stone",
            "D": `${dyeName(color)}_dye`,
            "C": "create:andesite_casing",
            "M": "minecraft:polished_andesite"
        }
    )
    }

    const sharestone_recipe = (color) => {
        event.recipes.create.mechanical_crafting(`waystones:${color}_sharestone`, [
            "MMCMM",
            " CDC ",
            "  W  ",
            " CDC ",
            "MMMMM"
        ],
        {
            "W": "waystones:warp_stone",
            "D": `${dyeName(color)}_dye`,
            "C": "create:andesite_casing",
            "M": "minecraft:polished_andesite"
        }
    )
    }

    waystone_recipe("minecraft:polished_andesite", "create:andesite_casing", "waystones:waystone")
    waystone_recipe("minecraft:stone_bricks", "create:copper_casing", "waystones:mossy_waystone")
    waystone_recipe("minecraft:stone_bricks", "create:brass_casing", "waystones:sandy_waystone")
    waystone_recipe("minecraft:deepslate_bricks", "create:railway_casing", "waystones:deepslate_waystone")
    waystone_recipe("minecraft:blackstone", "create:shadow_steel_casing", "waystones:blackstone_waystone")
    waystone_recipe("minecraft:end_stone_bricks", "create:refined_radiance_casing", "waystones:end_stone_waystone")

    Color.DYE.forEach(color => {
        portstone_recipe(color)

        // for some reason there is no white sharestone ¯\_(ツ)_/¯
        if (color != "white") {
            sharestone_recipe(color)
        }
    })
    
})