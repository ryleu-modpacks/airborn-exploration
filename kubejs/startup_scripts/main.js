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

    event.create('iron_dust').displayName('Iron Dust').tag('c:dusts/iron').tag('c:dusts')
    event.create('tinted_glass_sheet').displayName('Tinted Glass Sheet')
    event.create('rose_lens').displayName('Rose Lens')
    event.create('wet_magnetic_tape').displayName('Wet Magnetic Tape').texture('vista:item/picture_tape').color('#699EE4')
    event.create('magnetic_tape').displayName('Magnetic Tape').texture('vista:item/picture_tape')
    event.create('cassette_shell').displayName('Cassette Shell').texture('vista:item/cassette')
    event.create('optical_mechanism').displayName('Optical Mechanism')

    event.create('viewfinder_housing').displayName('Viewfinder Housing')


    event.create('incomplete_rose_lens', 'create:sequenced_assembly').displayName('Incomplete Rose Lens').texture('kubejs:item/rose_lens')
    event.create('unfinished_magnetic_tape', 'create:sequenced_assembly').displayName('Unfinished Magnetic Tape').texture('vista:item/picture_tape')
    event.create('incomplete_optical_mechanism', 'create:sequenced_assembly').displayName('Incomplete Optical Mechanism').texture('kubejs:item/optical_mechanism')
    event.create('unfinished_television_housing', 'create:sequenced_assembly').displayName('Unfinished Television Housing').parentModel('kubejs:block/television_housing')
    event.create('incomplete_television', 'create:sequenced_assembly').displayName('Incomplete Television').parentModel('kubejs:block/open_television')
    event.create('incomplete_viewfinder', 'create:sequenced_assembly').displayName('Incomplete Viewfinder').texture('kubejs:item/viewfinder_housing')

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

StartupEvents.registry('fluid', event => {
    event.create('magnetic_slurry')
    .displayName('Magnetic Slurry')
    .noBlock()
})