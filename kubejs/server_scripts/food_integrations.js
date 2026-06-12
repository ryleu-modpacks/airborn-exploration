ServerEvents.tags('item', event => {
    event.add('c:foods/milk', 'minecraft:milk_bucket')
    event.add('c:drinks/milk', 'aether:skyroot_milk_bucket')

    event.add("create:upright_on_belt", "brewinandchewin:tankard")
    event.add("create:upright_on_belt", "#brewinandchewin:fermented_drinks")
})

ServerEvents.recipes(event => {
    
    event.remove({output: "farmersdelight:wheat_dough"})
    event.remove({id: "farmersdelight:wheat_dough_from_wheat"})
    event.remove({output: "corn_delight:cornbread_batter"})
    event.remove({output: "corn_delight:creamy_corn_drink"}) // this isn"t for dedup. I just think "corn drink" sounds gross

    // Corn
    event.recipes.create.milling(["kubejs:cornmeal", CreateItem.of("2x kubejs:cornmeal", 0.25), CreateItem.of("corn_delight:corn_seeds", 0.125)], "corn_delight:corn_seeds")
    event.recipes.farmersdelight.cooking(
        "meals",
        [
            "kubejs:cornmeal",
            "minecraft:milk_bucket"
        ],
        "kubejs:polenta",
        0.35,
        100,
        "minecraft:bowl"
    )
    event.recipes.farmersdelight.cooking(
        "meals",
        [
            "kubejs:cornmeal",
            "minecraft:milk_bucket",
            "veggiesdelight:garlic_clove",
            "veggiesdelight:garlic_clove",
            "farmersdelight:tomato"
        ],
        "kubejs:garlic_tomato_polenta",
        0.5,
        200,
        "minecraft:bowl"
    )
    event.shapeless(
        "corn_delight:cornbread_batter",
        [
            Ingredient.of("#c:flours/corn"),
            "minecraft:milk_bucket",
            "minecraft:egg"
        ]
    )
    event.recipes.create.mixing(
        "corn_delight:cornbread_batter",
        [
            Ingredient.of("#c:flours/corn"),
            Fluid.of("minecraft:milk", 1000),
            "minecraft:egg"
        ]
    )

    // Brewin" and Chewin" Fermenting Recipes
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
            "type": "brewinandchewin:keg_pouring",
            "fluid": {
                "amount": 250,
                "id": output,
            },
            "output": {
                "count": 1,
                "id": output
            },
            "unit": "millibuckets"
        })

        fill(output, "brewinandchewin:tankard", output, 250)
        pour(output, "brewinandchewin:tankard", output, 250)
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

    fermenting([{"tag": "c:crops/corn"}, {"tag": "c:seeds/corn"}, [], []], "kubejs:bourbon")


    const drinks = [
        "beer",
        "vodka",
        "mead",
        "rice_wine",
        "pale_jane",
        "egg_grog",
        "glittering_grenadine",
        "saccharine_rum",
        "salty_folly",
        "bloody_mary",
        "red_rum",
        "strongroot_ale",
        "steel_toe_stout",
        "dread_nog",
        "withering_dross"
    ]

    const cheeses = [
        "flaxen_cheese",
        "scarlet_cheese"
    ]
    
    drinks.forEach(drink => {
        fill(`brewinandchewin:${drink}`, "brewinandchewin:tankard", `brewinandchewin:${drink}`, 250)
        pour(`brewinandchewin:${drink}`, "brewinandchewin:tankard", `brewinandchewin:${drink}`, 250)
    })

    cheeses.forEach(cheese => {
        fill(`brewinandchewin:unripe_${cheese}_wheel`, "minecraft:honeycomb", `brewinandchewin:${cheese}`, 1000)
    })

    bulkFermenting([
            {"tag": "c:crops/corn"},
            {"tag": "c:seeds/corn"}
    ], "minecraft:water", "kubejs:bourbon", false, 9600, false)

    bulkFermenting([
        {"item": "minecraft:wheat"},
        {"item": "minecraft:wheat_seeds"},
        {"item": "minecraft:brown_mushroom"}
    ], "minecraft:water", "brewinandchewin:beer", false, 9600, false)

    bulkFermenting([
        {"tag": "c:crops/potato"},
        {"item": "minecraft:wheat"},
        {"item": "minecraft:wheat_seeds"}
    ], "minecraft:water", "brewinandchewin:vodka", false, 9600, false)

    bulkFermenting([
        {"item": "minecraft:wheat"},
        {"item": "minecraft:wheat_seeds"},
        {"item": "minecraft:sweet_berries"}
    ], "create:honey", "brewinandchewin:mead", false, 9600, false)

    bulkFermenting([
        {"tag": "c:crops/rice"},
        {"item": "minecraft:brown_mushroom"}
    ], "minecraft:water", "brewinandchewin:rice_wine", false, 9600, false)

    bulkFermenting([
        {"item": "minecraft:honey_bottle"},
        {"item": "farmersdelight:tree_bark"},
        {"item": "minecraft:lily_of_the_valley"},
        {"item": "minecraft:sugar"}
    ], "brewinandchewin:rice_wine", "brewinandchewin:pale_jane", false, 4800, "heated")

    bulkFermenting([
        {"tag": "c:eggs"},
        {"tag": "c:crops/cabbage"},
        {"item": "minecraft:sugar"}
    ], "minecraft:milk", "brewinandchewin:egg_grog", false, 9600, false)

    // glittering grenadine requires chilling, but bulk fermenting doesn"t support that, so no bulk fermenting recipe for it :(

    bulkFermenting([
        {"item": "minecraft:sweet_berries"},
        {"item": "minecraft:sugar_cane"},
        {"item": "minecraft:melon"}
    ], "brewinandchewin:mead", "brewinandchewin:saccharine_rum", false, 4800, "heated")

    // salty folly requires chilling, but bulk fermenting doesn"t support that, so no bulk fermenting recipe for it :(

    bulkFermenting([
        {"tag": "c:crops/tomato"},
        {"tag": "c:crops/cabbage"},
        {"item": "minecraft:sweet_berries"}
    ], "brewinandchewin:vodka", "brewinandchewin:bloody_mary", false, 4800, "heated")

    bulkFermenting([
        {"item": "minecraft:crimson_fungus"},
        {"item": "minecraft:nether_wart"},
        {"item": "minecraft:fermented_spider_eye"},
        {"item": "minecraft:shroomlight"}
    ], "brewinandchewin:bloody_mary", "brewinandchewin:red_rum", false, 4800, "superheated")

    bulkFermenting([
        {"tag": "c:crops/beetroot"},
        {"tag": "c:crops/potato"},
        {"item": "minecraft:brown_mushroom"},
        {"item": "brewinandchewin:jerky"}
    ], "brewinandchewin:beer", "brewinandchewin:strongroot_ale", false, 4800, false)

    // steel-toed stout and dread nog requires freezing, but bulk fermenting doesn"t support that, so no bulk fermenting recipe for them :(

    bulkFermenting([
        {"item": "minecraft:wither_rose"},
        {"item": "minecraft:ink_sac"},
        {"item": "minecraft:nether_wart"},
        {"item": "minecraft:bone"}
    ], "brewinandchewin:salty_folly", "brewinandchewin:withering_dross", false, 9600, "superheated")

    bulkFermenting([
        {"item": "minecraft:brown_mushroom"},
        {"item": "minecraft:pumpkin_seeds"},
        {"item": "minecraft:sugar"}
    ], "minecraft:milk", "brewinandchewin:flaxen_cheese", false, 9600, "heated")

    bulkFermenting([
        {"item": "minecraft:crimson_fungus"},
        {"item": "minecraft:nether_wart"},
        {"item": "minecraft:sugar"}
    ], "minecraft:milk", "brewinandchewin:scarlet_cheese", false, 9600, "superheated")

    bulkFermenting([
        {"tag": "brewinandchewin:foods/jerky_meat"},
        {"tag": "brewinandchewin:foods/jerky_meat"},
        {"tag": "brewinandchewin:foods/jerky_meat"},
    ], false, "brewinandchewin:jerky", 3, 9600, "heated")

    bulkFermenting([
        {"tag": "c:foods/safe_raw_fish"},
        {"tag": "c:foods/safe_raw_fish"},
        {"item": "minecraft:dried_kelp"}
    ], false, "brewinandchewin:kippers", 2, 9600, "heated")

    bulkFermenting([
        {"tag": "c:crops/cabbage"},
        {"tag": "c:foods/vegetable"},
        {"item": "minecraft:kelp"}
    ], false, "brewinandchewin:kimchi", 2, 9600, "heated")

    // pickled pickles and fudge requires chilling, but bulk fermenting doesn"t support that, so no bulk fermenting recipe for them :(
})