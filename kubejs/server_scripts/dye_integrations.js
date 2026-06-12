ServerEvents.tags("item", event => {

    event.add("minecraft:dyeable", "#computercraft:dyeable")
    
    Color.DYE.forEach(color => {
        event.add("simulated:portable_engines", `simulated:${color}_portable_engine`)
        event.add("dye_depot:dye_baskets", `dye_depot:${color}_dye_basket`)
        event.add("waystones:portstones", `waystones:${color}_portstone`)
        if (!isVanillaDye(color)) {
            event.add("bits_n_bobs:chairs", `bits_n_bobs:${color}_chair`)

            event.add("numismatics:cards", `numismatics:${color}_card`)
            event.add("numismatics:id_cards", `numismatics:${color}_id_card`)
        }
    })
})

ServerEvents.tags("block", event => {
    Color.DYE.forEach(color => {
        event.add("bits_n_bobs:nixie_boards", `bits_n_bobs:${color}_nixie_board`)
        if (!isVanillaDye(color)) {
            event.add("bits_n_bobs:chairs", `bits_n_bobs:${color}_chair`)
            event.add("minecraft:mineable/axe", `bits_n_bobs:${color}_chair`)

            event.add("minecraft:mineable/pickaxe", `bits_n_bobs:${color}_nixie_board`)
            event.add("minecraft:mineable/pickaxe", `bits_n_bobs:${color}_large_nixie_tube`)
            
        }
    })
})

ServerEvents.recipes(event => {
    Color.DYE.forEach(color => {
        if (!isVanillaDye(color)) {
            event.shapeless(`bits_n_bobs:${color}_chair`, [`dye_depot:${color}_wool`, Ingredient.of("#minecraft:wooden_stairs")])
            event.shapeless(`bits_n_bobs:${color}_chair`, [`dye_depot:${color}_dye`, Ingredient.of("#bits_n_bobs:chairs")])

            event.recipes.create.mixing([`createdieselgenerators:${color}_cement`, CreateItem.of(`dye_depot:${color}_concrete_powder`, 0.25)], [Fluid.of("minecraft:water", 100), `dye_depot:${color}_concrete_powder`])

            event.shaped(
                `numismatics:${color}_card`,
                [
                    "PID"
                ],
                {
                    "P": "create:precision_mechanism",
                    "I": "create:iron_sheet",
                    "D": `dye_depot:${color}_dye`
                }
            )
            event.shaped(
                `numismatics:${color}_id_card`,
                [
                    " D ",
                    "IPB"
                ],
                {
                    "D": `dye_depot:${color}_dye`,
                    "I": "create:iron_sheet",
                    "P": "minecraft:paper",
                    "B": "create:brass_nugget"
                }
            )
        }
    })
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