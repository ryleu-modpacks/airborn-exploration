// Visit the wiki for more info - https://kubejs.com/
console.info('Hello, World! (Loaded startup example script)')

const $DataComponents = Java.loadClass('net.minecraft.core.component.DataComponents')

const groups = [
    {
        type: 'Letter',
        values: 'abcdefghijklmnopqrstuvwxyz'.split(''),
        tooltipValue: char => char.toUpperCase(),
        textureValue: char => char
    },
    {
        type: 'Number',
        values: '0123456789'.split(''),
        tooltipValue: char => char,
        textureValue: char => char
    },
    {
        type: 'Symbol',
        values: [
            'up_arrow',
            'down_arrow',
            'left_arrow',
            'right_arrow',
            'plus',
            'minus'
        ],
        tooltipValue: symbol => symbol.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
        textureValue: symbol => symbol
    }
]

StartupEvents.registry('item', event => {

    for (const group of groups) {
        for (const value of group.values) {
            event.create(`frequency_${value}`).displayName('Frequency').tooltip(Text.aqua(`${group.type}: ${group.tooltipValue(value)}`)).tag('minecraft:dyeable')
            .color((stack, tintIndex) => {
                const dyed = stack.get($DataComponents.DYED_COLOR);
                return dyed ? dyed.rgb() : -1;
            });
        }
    }

    event.create('unfinished_television_housing', 'create:sequenced_assembly').displayName('Unfinished Television Housing').parentModel('kubejs:block/television_housing')
    event.create('incomplete_television', 'create:sequenced_assembly').displayName('Incomplete Television').parentModel('kubejs:block/open_television')
    event.create('tinted_glass_sheet').displayName('Tinted Glass Sheet')

})

StartupEvents.registry('block', event => {

    event.create('television_housing', 'cardinal')
    .displayName('Television Housing')
    .soundType('wood')
    .mapColor('brown')
    .hardness(1.5)
    .tagBlock('minecraft:mineable/axe')

    event.create('open_television', 'cardinal')
    .displayName('Open Television')
    .soundType('wood')
    .mapColor('brown')
    .hardness(1.5)
    .tagBlock('minecraft:mineable/axe')
})