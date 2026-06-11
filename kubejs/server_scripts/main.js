
const groups = [
    'abcdefghijklmnopqrstuvwxyz'.split(''),
    '0123456789'.split(''),
    [
        'up_arrow',
        'upright_arrow',
        'right_arrow',
        'downright_arrow',
        'down_arrow',
        'downleft_arrow',
        'left_arrow',
        'upleft_arrow',
        'plus',
        'minus'
    ],
    ['blank']
]

const vanilla_dyes = [
    'white',
    'orange',
    'magenta',
    'light_blue',
    'yellow',
    'lime',
    'pink',
    'gray',
    'light_gray',
    'cyan',
    'purple',
    'blue',
    'brown',
    'green',
    'red',
    'black'
]

const isVanillaDye = (color) => {
    return vanilla_dyes.includes(color)
}


const dyeName = (color) => {
    const namespace = isVanillaDye(color) ? 'minecraft' : 'dye_depot'
    return `${namespace}:${color}`
}

ServerEvents.tags('item', event => {
    event.add('c:foods/milk', 'minecraft:milk_bucket')
    event.add('c:drinks/milk', 'aether:skyroot_milk_bucket')

    event.add('minecraft:dyeable', '#computercraft:dyeable')

    Color.DYE.forEach(color => {
        event.add('waystones:portstones', `waystones:${color}_portstone`)
    })

    Color.DYE.forEach(color => {
        if (!isVanillaDye(color)) {
            event.add('bits_n_bobs:chairs', `bits_n_bobs:${color}_chair`)

            event.add('numismatics:cards', `numismatics:${color}_card`)
            event.add('numismatics:id_cards', `numismatics:${color}_id_card`)
        }
    })
    
})

ServerEvents.tags('block', event => {

    Color.DYE.forEach(color => {
        event.add('bits_n_bobs:nixie_boards', `bits_n_bobs:${color}_nixie_board`)
        if (!isVanillaDye(color)) {
            event.add('bits_n_bobs:chairs', `bits_n_bobs:${color}_chair`)
            event.add('minecraft:mineable/axe', `bits_n_bobs:${color}_chair`)

            event.add('minecraft:mineable/pickaxe', `bits_n_bobs:${color}_nixie_board`)
            event.add('minecraft:mineable/pickaxe', `bits_n_bobs:${color}_large_nixie_tube`)
            
        }
    })

    event.add('bits_n_bobs:nixie_boards', 'bits_n_bobs:nixie_board')

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
        event.add('betterend:overgrown_end_stone', block)
    })

    const squash = [
        'blue',
        'green',
        'purple'
    ]

    squash.forEach(block => {
        event.add('deep_aether:squash', `deep_aether:${block}_squash`)
        event.add('deep_aether:carved_squash', `deep_aether:carved_${block}_squash`)
    })

    const storage_blocks = [
        'betterend:aeternium_block',
        'betterend:charcoal_block',
        'betterend:ender_block',
        'betterend:terminite_block',
        'betterend:thallasium_block'
    ]
    storage_blocks.forEach(block => {
        event.add('c:storage_blocks', block)
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
        event.add('minecraft:planks', block)
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

    const fragile = [
        "#deep_aether:squash",
        "betterend:cave_pumpkin",
        "betterend:aurora_crystal",
        "betterend:emerald_ice"
    ]

    fragile.forEach(block => {
        event.add('sable:fragile', block)
    })

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
})

ServerEvents.recipes(event => {

    // Remove existing recipes
    event.remove({id:'vista:television'})
    event.remove({id: 'vista:viewfinder'})
    event.remove({id: 'vista:hollow_cassette'})
    event.remove({output: '#waystones:waystones'})
    event.remove({output: '#waystones:portstones'})
    event.remove({output: '#waystones:sharestones'})
    event.remove({id: 'simulated:spring'})
    event.remove({id: 'createbigcannons:mixing/alloy_steel'})
    event.remove({id: 'createbigcannons:steel_scrap'})
    event.remove({id: 'createbigcannons:mixing/alloy_bronze_brass'})
    event.remove({id: 'createbigcannons:mixing/alloy_bronze_tin'})
    event.remove({id: 'createbigcannons:mixing/alloy_bronze_tinless'})
    event.remove({id: 'createbigcannons:bronze_scrap'})
    event.remove({output: 'farmersdelight:wheat_dough'})
    event.remove({id: 'farmersdelight:wheat_dough_from_wheat'}) // y no work?
    event.remove({output: 'corn_delight:cornbread_batter'})
    event.remove({output: 'corn_delight:creamy_corn_drink'}) // this isn't for dedup. I just think "corn drink" sounds gross
    event.remove({mod: 'create_aeronautics_toolgun'})

    // Dyed Block/Item Recipes
    Color.DYE.forEach(color => {
        if (!isVanillaDye(color)) {
            event.shapeless(`bits_n_bobs:${color}_chair`, [`dye_depot:${color}_wool`, Ingredient.of('#minecraft:wooden_stairs')])
            event.shapeless(`bits_n_bobs:${color}_chair`, [`dye_depot:${color}_dye`, Ingredient.of('#bits_n_bobs:chairs')])

            event.recipes.create.mixing([`createdieselgenerators:${color}_cement`, CreateItem.of(`dye_depot:${color}_concrete_powder`, 0.25)], [Fluid.of('minecraft:water', 100), `dye_depot:${color}_concrete_powder`])

            event.shaped(
                `numismatics:${color}_card`,
                [
                    'PID'
                ],
                {
                    'P': 'create:precision_mechanism',
                    'I': 'create:iron_sheet',
                    'D': `dye_depot:${color}_dye`
                }
            )
            event.shaped(
                `numismatics:${color}_id_card`,
                [
                    ' D ',
                    'IPB'
                ],
                {
                    'D': `dye_depot:${color}_dye`,
                    'I': 'create:iron_sheet',
                    'P': 'minecraft:paper',
                    'B': 'create:brass_nugget'
                }
            )
        }
    })

    // Misc Recipes
    event.replaceOutput({output: 'createbigcannons:steel_ingot'}, 'createbigcannons:steel_ingot', 'create_ironworks:steel_ingot')
    event.replaceOutput({output: 'createbigcannons:steel_block'}, 'createbigcannons:steel_block', 'create_ironworks:steel_block')
    event.replaceOutput({output: 'createbigcannons:steel_scrap'}, 'createbigcannons:steel_scrap', 'create_ironworks:steel_nugget')
    event.replaceOutput({output: 'createbigcannons:bronze_ingot'}, 'createbigcannons:bronze_ingot', 'create_ironworks:bronze_ingot')
    event.replaceOutput({output: 'createbigcannons:bronze_block'}, 'createbigcannons:bronze_block', 'create_ironworks:bronze_block')
    event.replaceOutput({output: 'createbigcannons:bronze_scrap'}, 'createbigcannons:bronze_scrap', 'create_ironworks:bronze_nugget')

    event.shapeless('create_ironworks:steel_ingot', ['createbigcannons:steel_ingot'])
    event.shapeless('create_ironworks:steel_block', ['createbigcannons:steel_block'])
    event.shapeless('create_ironworks:steel_nugget', ['createbigcannons:steel_scrap'])
    event.shapeless('create_ironworks:bronze_ingot', ['createbigcannons:bronze_ingot'])
    event.shapeless('create_ironworks:bronze_block', ['createbigcannons:bronze_block'])
    event.shapeless('create_ironworks:bronze_nugget', ['createbigcannons:bronze_scrap'])

    event.replaceInput({id: 'minecraft:lodestone'}, 'minecraft:netherite_ingot', Ingredient.of('#c:ingots/iron'))

    event.replaceInput({input: 'minecraft:egg'}, 'minecraft:egg', '#c:eggs')

    event.replaceInput({id: 'betterend:end_stone_brick_cracked_wall'}, 'minecraft:end_stone_bricks', 'betterend:end_stone_brick_cracked')
    event.replaceInput({id: 'betterend:end_stone_brick_weathered_wall'}, 'minecraft:end_stone_bricks', 'betterend:end_stone_brick_weathered')

    event.shaped(
        'betterend:end_stone_wall',
        [
            'SSS',
            'SSS'
        ],
        {
            'S': 'minecraft:end_stone'
        }
    )
    event.stonecutting('betterend:end_stone_wall', 'minecraft:end_stone')

    event.recipes.create.deploying('create:turntable', [Ingredient.of('#minecraft:wooden_slabs'), 'create:shaft'])
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
        {'material': 'create:shadow_steel', 'casing': 'create:shadow_steel_casing'},
        {'material': 'create:refined_radiance', 'casing': 'create:refined_radiance_casing'}
    ]

    casings.forEach(casing => {
        event.recipes.create.deploying(casing.casing, [Ingredient.of('#c:stripped_logs'), casing.material])
        event.recipes.create.deploying(casing.casing, [Ingredient.of('#c:stripped_woods'), casing.material])
    })

    // Frequency Items
    for (const group of groups) {
        for (const value of group) {
            event.stonecutting(`kubejs:frequency_${value}`, 'minecraft:name_tag')
        }
    }

    // Television Assembly
    event.recipes.create.sequenced_assembly(
        [
            CreateItem.of('kubejs:television_housing')
        ],
        'create:andesite_casing',
        [
            event.recipes.create.deploying('kubejs:unfinished_television_housing', ['kubejs:unfinished_television_housing', 'create:iron_sheet']),
            event.recipes.create.pressing('kubejs:unfinished_television_housing', 'kubejs:unfinished_television_housing')
        ]
    ).transitionalItem('kubejs:unfinished_television_housing').loops(5)

    event.recipes.create.sequenced_assembly(
        [
            CreateItem.of('kubejs:open_television')
        ],
        'kubejs:television_housing',
        [
            event.recipes.create.deploying('kubejs:incomplete_television', ['kubejs:incomplete_television', 'create:electron_tube']),
            event.recipes.create.deploying('kubejs:incomplete_television', ['kubejs:incomplete_television', 'createaddition:capacitor']),
            event.recipes.create.deploying('kubejs:incomplete_television', ['kubejs:incomplete_television', 'createaddition:copper_wire']),
        ]
    ).transitionalItem('kubejs:incomplete_television').loops(3)

    event.recipes.create.cutting(['3x kubejs:tinted_glass_sheet'], 'minecraft:tinted_glass')
    event.recipes.create.deploying('vista:television', ['kubejs:open_television', 'kubejs:tinted_glass_sheet'])

    // Viewfinder Assembly
    event.recipes.create.sequenced_assembly(
        [
            CreateItem.of('kubejs:viewfinder_housing')
        ],
        'create:andesite_casing',
        [
            event.recipes.create.deploying('kubejs:incomplete_viewfinder', ['kubejs:incomplete_viewfinder', 'create:copper_sheet']),
            event.recipes.create.deploying('kubejs:incomplete_viewfinder', ['kubejs:incomplete_viewfinder', 'create:iron_sheet']),
            event.recipes.create.pressing('kubejs:incomplete_viewfinder', 'kubejs:incomplete_viewfinder')
        ]
    ).transitionalItem('kubejs:incomplete_viewfinder').loops(4)

    event.recipes.create.sequenced_assembly(
        [
            CreateItem.of('kubejs:rose_lens')
        ],
        'create:polished_rose_quartz',
        [
            event.recipes.create.cutting('kubejs:incomplete_rose_lens', 'kubejs:incomplete_rose_lens'),
            event.recipes.create.deploying('kubejs:incomplete_rose_lens', ['kubejs:incomplete_rose_lens', Ingredient.of('#create:sandpaper')]),
            event.recipes.create.filling('kubejs:incomplete_rose_lens', [Fluid.of('minecraft:water', 100), 'kubejs:incomplete_rose_lens'])
        ]
    ).transitionalItem('kubejs:incomplete_rose_lens').loops(3)

    event.recipes.create.sequenced_assembly(
        [
            CreateItem.of('kubejs:optical_mechanism')
        ],
        'create:precision_mechanism',
        [
            event.recipes.create.deploying('kubejs:incomplete_optical_mechanism', ['kubejs:incomplete_optical_mechanism', 'create:cogwheel']),
            event.recipes.create.deploying('kubejs:incomplete_optical_mechanism', ['kubejs:incomplete_optical_mechanism', 'kubejs:rose_lens'])
        ]
    ).transitionalItem('kubejs:incomplete_optical_mechanism').loops(3)

    event.shaped(
        'vista:viewfinder',
        [
            't ',
            'HM',
            'T '
        ],
        {
            'H': 'kubejs:viewfinder_housing',
            'M': 'kubejs:optical_mechanism',
            'T': 'create:turntable',
            't': 'create:transmitter'
        }
    )

    // Linked Cassette Assembly
    event.recipes.create.crushing('kubejs:iron_dust', 'minecraft:iron_ingot')

    event.recipes.create.mixing(
        Fluid.of('kubejs:magnetic_slurry', 1000),
        [
            Ingredient.of('#c:dusts/iron', 2),
            Fluid.of('minecraft:water', 1000)
        ]
    )

    event.shaped(
        'kubejs:cassette_shell',
        [
            ' I ',
            'ISI',
            ' I '
        ],
        {
            'S': 'create:shaft',
            'I': 'create:iron_sheet'
        }
    )

    event.recipes.create.sequenced_assembly(
        [
            CreateItem.of('kubejs:magnetic_tape')
        ],
        'minecraft:paper',
        [
            event.recipes.create.deploying('kubejs:unfinished_magnetic_tape', ['kubejs:unfinished_magnetic_tape', Ingredient.of('#c:dusts/iron')]),
            event.recipes.create.deploying('kubejs:unfinished_magnetic_tape', ['kubejs:unfinished_magnetic_tape', 'minecraft:slime_ball'])
        ]
    ).transitionalItem('kubejs:unfinished_magnetic_tape').loops(2)

    event.recipes.create.sequenced_assembly(
        [
            CreateItem.of('kubejs:wet_magnetic_tape')
        ],
        'minecraft:paper',
        [
            event.recipes.create.filling('kubejs:unfinished_magnetic_tape', [Fluid.of('kubejs:magnetic_slurry', 100), 'kubejs:unfinished_magnetic_tape']),
            event.recipes.create.deploying('kubejs:unfinished_magnetic_tape', ['kubejs:unfinished_magnetic_tape', 'minecraft:slime_ball'])
        ]
    ).transitionalItem('kubejs:unfinished_magnetic_tape').loops(2)

    event.smoking('kubejs:magnetic_tape', 'kubejs:wet_magnetic_tape')

    event.shaped(
        'vista:hollow_cassette',
        [
            'CTt'
        ],
        {
            'C': 'kubejs:cassette_shell',
            'T': 'kubejs:magnetic_tape',
            't': 'create:transmitter'
        }
    )
    event.shaped(
        'vista:hollow_cassette',
        [
            'Ct'
        ],
        {
            'C': 'vista:cassette',
            't': 'create:transmitter'
        }
    )


    // Create Waystones
    const waystone_recipe = (material, casing, waystone) => {
        event.recipes.create.mechanical_crafting(waystone, [
            ' EEE ',
            'MMMMM',
            ' CCC ',
            '  W  ',
            ' CCC ',
            'MMMMM'
        ],
        {
            'E': 'minecraft:ender_pearl',
            'M': material,
            'C': casing,
            'W': 'waystones:warp_stone'
        }
    )
    }

    const portstone_recipe = (color) => {
        event.recipes.create.mechanical_crafting(`waystones:${color}_portstone`, [
            '  W  ',
            ' DCD ',
            'MMCMM'
        ],
        {
            'W': 'waystones:warp_stone',
            'D': `${dyeName(color)}_dye`,
            'C': 'create:andesite_casing',
            'M': 'minecraft:polished_andesite'
        }
    )
    }

    const sharestone_recipe = (color) => {
        event.recipes.create.mechanical_crafting(`waystones:${color}_sharestone`, [
            'MMCMM',
            ' CDC ',
            '  W  ',
            ' CDC ',
            'MMMMM'
        ],
        {
            'W': 'waystones:warp_stone',
            'D': `${dyeName(color)}_dye`,
            'C': 'create:andesite_casing',
            'M': 'minecraft:polished_andesite'
        }
    )
    }

    waystone_recipe('minecraft:polished_andesite', 'create:andesite_casing', 'waystones:waystone')
    waystone_recipe('minecraft:stone_bricks', 'create:copper_casing', 'waystones:mossy_waystone')
    waystone_recipe('minecraft:stone_bricks', 'create:brass_casing', 'waystones:sandy_waystone')
    waystone_recipe('minecraft:deepslate_bricks', 'create:railway_casing', 'waystones:deepslate_waystone')
    waystone_recipe('minecraft:blackstone', 'create:shadow_steel_casing', 'waystones:blackstone_waystone')
    waystone_recipe('minecraft:end_stone_bricks', 'create:refined_radiance_casing', 'waystones:end_stone_waystone')

    Color.DYE.forEach(color => {
        portstone_recipe(color)

        // for some reason there is no white sharestone ¯\_(ツ)_/¯
        if (color != 'white') {
            sharestone_recipe(color)
        }
    })

    // Corn
    event.recipes.create.milling(['kubejs:cornmeal', CreateItem.of('2x kubejs:cornmeal', 0.25), CreateItem.of('corn_delight:corn_seeds', 0.125)], 'corn_delight:corn_seeds')
    event.recipes.farmersdelight.cooking(
        'meals',
        [
            'kubejs:cornmeal',
            'minecraft:milk_bucket'
        ],
        'kubejs:polenta',
        0.35,
        100,
        'minecraft:bowl'
    )
    event.recipes.farmersdelight.cooking(
        'meals',
        [
            'kubejs:cornmeal',
            'minecraft:milk_bucket',
            'veggiesdelight:garlic_clove',
            'veggiesdelight:garlic_clove',
            'farmersdelight:tomato'
        ],
        'kubejs:garlic_tomato_polenta',
        0.5,
        200,
        'minecraft:bowl'
    )
    event.shapeless(
        'corn_delight:cornbread_batter',
        [
            Ingredient.of('#c:flours/corn'),
            'minecraft:milk_bucket',
            'minecraft:egg'
        ]
    )
    event.recipes.create.mixing(
        'corn_delight:cornbread_batter',
        [
            Ingredient.of('#c:flours/corn'),
            Fluid.of('minecraft:milk', 1000),
            'minecraft:egg'
        ]
    )

    // Brewin' and Chewin'
    const fill = (item, container, fluid, amount) => {
        event.recipes.create.filling(
            Item.of(item),
            [
                Fluid.of(fluid, amount),
                container
            ]
        )
    }

    const pour = (item, container, fluid, amount) => {
        event.recipes.create.emptying(
            [
                Fluid.of(fluid, amount),
                container
            ],
            Item.of(item)
        )
    }

    const bulkFermenting = (inputs, fluidInput, output, count, time, heat) => {
        const ingredients = fluidInput ? inputs.concat([{"type": "fluid_stack", "fluid": fluidInput, "amount": 1000}]) : inputs
        const resultAmount = count ? {"id": output, "count": count} : {"id": output, "amount": 1000}
        const baseRecipe = {
            "ingredients": ingredients,
            "processing_time": time,
            "results": [resultAmount]
        }

        if (heat) {
            baseRecipe["heat_requirement"] = heat
        }

        let bulkRecipe = JSON.parse(JSON.stringify(baseRecipe))
        bulkRecipe["type"] = "createdieselgenerators:bulk_fermenting"

        let basinRecipe = JSON.parse(JSON.stringify(baseRecipe))
        basinRecipe["type"] = "createdieselgenerators:basin_fermenting"

        event.custom(bulkRecipe)
        event.custom(basinRecipe)
    }

    const fermenting = (input, output) => {
        event.custom({
            "type": "brewinandchewin:fermenting",
            "base_fluid": {
                "amount": 1000,
                "ingredient": {
                "tag": "#c:water"
                },
                "unit": "millibuckets"
            },
            "experience": 1.0,
            "ingredients": input,
            "result": {
                "amount": 1000,
                "id": output
            },
            "unit": "millibuckets"
        })

        event.custom({
            'type': 'brewinandchewin:keg_pouring',
            'fluid': {
                'amount': 250,
                'id': output,
            },
            'output': {
                'count': 1,
                'id': output
            },
            'unit': 'millibuckets'
        })

        fill(output, 'brewinandchewin:tankard', output, 250)
        pour(output, 'brewinandchewin:tankard', output, 250)
    }

    fermenting([{"tag": 'c:crops/corn'}, {"tag": 'c:seeds/corn'}, [], []], 'kubejs:bourbon')
    bulkFermenting([
            {"tag": 'c:crops/corn'},
            {"tag": 'c:seeds/corn'}
    ], 'minecraft:water', 'kubejs:bourbon', false, 9600, false)

    const drinks = [
        'beer',
        'vodka',
        'mead',
        'rice_wine',
        'pale_jane',
        'egg_grog',
        'glittering_grenadine',
        'saccharine_rum',
        'salty_folly',
        'bloody_mary',
        'red_rum',
        'strongroot_ale',
        'steel_toe_stout',
        'dread_nog',
        'withering_dross'
    ]

    const cheeses = [
        'flaxen_cheese',
        'scarlet_cheese'
    ]
    
    drinks.forEach(drink => {
        fill(`brewinandchewin:${drink}`, 'brewinandchewin:tankard', `brewinandchewin:${drink}`, 250)
        pour(`brewinandchewin:${drink}`, 'brewinandchewin:tankard', `brewinandchewin:${drink}`, 250)
    })

    cheeses.forEach(cheese => {
        fill(`brewinandchewin:unripe_${cheese}_wheel`, 'minecraft:honeycomb', `brewinandchewin:${cheese}`, 1000)
    })

    bulkFermenting([
        {"item": "minecraft:wheat"},
        {"item": "minecraft:wheat_seeds"},
        {"item": "minecraft:brown_mushroom"}
    ], 'minecraft:water', 'brewinandchewin:beer', false, 9600, false)

    bulkFermenting([
        {"tag": "c:crops/potato"},
        {"item": "minecraft:wheat"},
        {"item": "minecraft:wheat_seeds"}
    ], 'minecraft:water', 'brewinandchewin:vodka', false, 9600, false)

    bulkFermenting([
        {"item": "minecraft:wheat"},
        {"item": "minecraft:wheat_seeds"},
        {"item": "minecraft:sweet_berries"}
    ], 'create:honey', 'brewinandchewin:mead', false, 9600, false)

    bulkFermenting([
        {"tag": "c:crops/rice"},
        {"item": "minecraft:brown_mushroom"}
    ], 'minecraft:water', 'brewinandchewin:rice_wine', false, 9600, false)

    bulkFermenting([
        {"item": "minecraft:honey_bottle"},
        {"item": "farmersdelight:tree_bark"},
        {"item": "minecraft:lily_of_the_valley"},
        {"item": "minecraft:sugar"}
    ], 'brewinandchewin:rice_wine', 'brewinandchewin:pale_jane', false, 4800, 'heated')

    bulkFermenting([
        {"tag": "c:eggs"},
        {"tag": "c:crops/cabbage"},
        {"item": "minecraft:sugar"}
    ], 'minecraft:milk', 'brewinandchewin:egg_grog', false, 9600, false)

    // glittering grenadine requires chilling, but bulk fermenting doesn't support that, so no bulk fermenting recipe for it :(

    bulkFermenting([
        {"item": "minecraft:sweet_berries"},
        {"item": "minecraft:sugar_cane"},
        {"item": "minecraft:melon"}
    ], 'brewinandchewin:mead', 'brewinandchewin:saccharine_rum', false, 4800, 'heated')

    // salty folly requires chilling, but bulk fermenting doesn't support that, so no bulk fermenting recipe for it :(

    bulkFermenting([
        {"tag": "c:crops/tomato"},
        {"tag": "c:crops/cabbage"},
        {"item": "minecraft:sweet_berries"}
    ], 'brewinandchewin:vodka', 'brewinandchewin:bloody_mary', false, 4800, 'heated')

    bulkFermenting([
        {"item": "minecraft:crimson_fungus"},
        {"item": "minecraft:nether_wart"},
        {"item": "minecraft:fermented_spider_eye"},
        {"item": "minecraft:shroomlight"}
    ], 'brewinandchewin:bloody_mary', 'brewinandchewin:red_rum', false, 4800, 'superheated')

    bulkFermenting([
        {"tag": "c:crops/beetroot"},
        {"tag": "c:crops/potato"},
        {"item": "minecraft:brown_mushroom"},
        {"item": "brewinandchewin:jerky"}
    ], 'brewinandchewin:beer', 'brewinandchewin:strongroot_ale', false, 4800, false)

    // steel-toed stout and dread nog requires freezing, but bulk fermenting doesn't support that, so no bulk fermenting recipe for them :(

    bulkFermenting([
        {"item": "minecraft:wither_rose"},
        {"item": "minecraft:ink_sac"},
        {"item": "minecraft:nether_wart"},
        {"item": "minecraft:bone"}
    ], 'brewinandchewin:salty_folly', 'brewinandchewin:withering_dross', false, 9600, 'superheated')

    bulkFermenting([
        {"item": "minecraft:brown_mushroom"},
        {"item": "minecraft:pumpkin_seeds"},
        {"item": "minecraft:sugar"}
    ], 'minecraft:milk', 'brewinandchewin:flaxen_cheese', false, 9600, 'heated')

    bulkFermenting([
        {"item": "minecraft:crimson_fungus"},
        {"item": "minecraft:nether_wart"},
        {"item": "minecraft:sugar"}
    ], 'minecraft:milk', 'brewinandchewin:scarlet_cheese', false, 9600, 'superheated')

    bulkFermenting([
        {"tag": "brewinandchewin:foods/jerky_meat"},
        {"tag": "brewinandchewin:foods/jerky_meat"},
        {"tag": "brewinandchewin:foods/jerky_meat"},
    ], false, 'brewinandchewin:jerky', 3, 9600, 'heated')

    bulkFermenting([
        {"tag": "c:foods/safe_raw_fish"},
        {"tag": "c:foods/safe_raw_fish"},
        {"item": "minecraft:dried_kelp"}
    ], false, 'brewinandchewin:kippers', 2, 9600, 'heated')

    bulkFermenting([
        {"tag": "c:crops/cabbage"},
        {"tag": "c:foods/vegetable"},
        {"item": "minecraft:kelp"}
    ], false, 'brewinandchewin:kimchi', 2, 9600, 'heated')

    // pickled pickles and fudge requires chilling, but bulk fermenting doesn't support that, so no bulk fermenting recipe for it :(
})

LootJS.modifiers((event) => {
    Color.DYE.forEach(color => {
        if (!isVanillaDye(color)) {
            event.addBlockModifier(`bits_n_bobs:${color}_chair`)
                .addLoot(LootEntry.of(`bits_n_bobs:${color}_chair`))

            event.addBlockModifier(`bits_n_bobs:${color}_nixie_board`)
                .addLoot(LootEntry.of(`bits_n_bobs:nixie_board`))

            event.addBlockModifier(`bits_n_bobs:${color}_large_nixie_tube`)
                .addLoot(LootEntry.of(`bits_n_bobs:large_nixie_tube`))
        }
    })
})