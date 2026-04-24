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

    event.remove({id:'vista:television'})

    for (const group of groups) {
        for (const value of group) {
            event.stonecutting(`kubejs:frequency_${value}`, 'minecraft:name_tag')
        }
    }

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
})