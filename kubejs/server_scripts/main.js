// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded server example script)')


const groups = [
    'abcdefghijklmnopqrstuvwxyz'.split(''),
    '0123456789'.split(''),
    [
        'up_arrow',
        'down_arrow',
        'left_arrow',
        'right_arrow',
        'plus',
        'minus'
    ]
]

ServerEvents.recipes(event => {

    // Remove existing recipes
    event.remove({id:'vista:television'})
    event.remove({id: 'vista:viewfinder'})
    event.remove({id: 'vista:hollow_cassette'})

    // Misc Recipes
    event.recipes.create.deploying('create:turntable', [Ingredient.of('#minecraft:wooden_slabs'), 'create:shaft'])

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
})