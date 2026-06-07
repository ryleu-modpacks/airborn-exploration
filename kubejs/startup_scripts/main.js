
const $DataComponents = Java.loadClass('net.minecraft.core.component.DataComponents')

Platform.mods.kubejs.name = 'Create: Airborn Exploration'

const groups = [
    {
        type: 'blank'
    },
    {
        type: 'letter',
        values: 'abcdefghijklmnopqrstuvwxyz'.split(''),
        tooltipValue: char => char.toUpperCase()
    },
    {
        type: 'number',
        values: '0123456789'.split(''),
        tooltipValue: char => char
    },
    {
        type: 'symbol',
        values: [
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
        tooltipValue: symbol => symbol.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    }
]

ItemEvents.modification(event => {
    event.modify('betterend:charcoal_block', item => {
        item.burnTime = 16000
    })
})

StartupEvents.registry('item', event => {

    for (const group of groups) {
        if (group.type === 'blank') {
            event.create('frequency_blank').displayName('Blank Frequency')
            .texture('layer0', 'kubejs:item/frequency/base')
            .tag('minecraft:dyeable').tag('kubejs:frequency')
            .color((stack, tintIndex) => {
                const dyed = stack.get($DataComponents.DYED_COLOR);
                return dyed ? dyed.rgb() : -1;
            });
            continue;
        }
        for (const value of group.values) {
            event.create(`frequency_${value}`).displayName('Frequency')
            .tooltip(Text.aqua(`Frequency: ${group.tooltipValue(value)}`))
            .texture('layer0', 'kubejs:item/frequency/base')
            .texture('layer1', `kubejs:item/frequency/${group.type}/${value}`)
            .tag('minecraft:dyeable').tag('kubejs:frequency').tag(`kubejs:frequency/${group.type}`)
            .color((stack, tintIndex) => {
                const dyed = stack.get($DataComponents.DYED_COLOR);
                if (tintIndex != 0) {
                    if (dyed) {
                        const rgb = dyed.rgb();
                        const r = (rgb >> 16) & 0xFF;
                        const g = (rgb >> 8) & 0xFF;
                        const b = rgb & 0xFF;
                        const brightness = (r + g + b) / 3;
                        return brightness > 200 ? 0x010101 : -1;
                    }
                    return 0x993333;
                }
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

    event.create('cornmeal').displayName('Cornmeal').tag('c:cornmeal').tag('c:flours/corn').tag('c:flours')
    event.create('polenta').displayName('Polenta').tag('kubejs:polenta')
        .maxStackSize(16)
        .food(food => {
            food.nutrition(6)
            .saturation(0.4)
            .usingConvertsTo('minecraft:bowl')
        })

    event.create('corn_whiskey').displayName('Corn Whiskey')
    .texture('brewinandchewin:item/vodka').tag('brewinandchewin:fermented_drinks')
        .tooltip(Text.red('Tipsy (03:00)'))
        .tooltip(Text.red('Intoxication (02:30)'))
        .maxStackSize(16)
        .containerItem('brewinandchewin:tankard')
        .useAnimation('drink')
        .useDuration(itemstack => 40)
        .use((level, player, hand) => true)
        .finishUsing((itemstack, level, entity) => {
            if (!entity.player) return itemstack
            
            const effects = entity.potionEffects

            let id = 'brewinandchewin:tipsy'

            effects.add('brewinandchewin:intoxication', 150*20, 0, false, false)
            // the tipsy effect increases in level by 1 and length by 3 minutes for each consecutive drink
            if (effects.isActive(id)) {
                let current = effects.getActive(id)

                effects.add(
                    id,
                    current.duration + 3600,
                    Math.min(current.amplifier + 1, 10),
                    false,
                    true
                )
            } else {
                effects.add(id, 3600, 0, false, true)
            }

            if (!entity.creative) {
                itemstack.shrink(1)

                if (itemstack.empty) {
                    return Item.of('brewinandchewin:tankard')
                }

                entity.give(Item.of('brewinandchewin:tankard'))
            }

            return itemstack
        })
        // .attachCapability(
        //     CapabilityBuilder.FLUID.customItemStack()
        //     .withCapacity(250)
        //     .getFluid(container => Fluid.of('kubejs:corn_whiskey', 250))

        //     .onFill((container, fluid, amount) => 0)
        //     .onDrain((container, fluid, amount) => {
        //         if (fluid.id != 'kubejs:corn_whiskey') return Fluid.empty
        //         if (fluid.amount < 250) return Fluid.empty
        //         return Fluid.of('kubejs:corn_whiskey', 250)
        //     })
        // )

})

StartupEvents.registry('block', event => {

    event.create('television_housing', 'cardinal')
    .displayName('Television Housing')
    .soundType('wood')
    .mapColor('wood')
    .hardness(1.5)
    .tagBlock('minecraft:mineable/axe')

    event.create('open_television', 'cardinal')
    .displayName('Open Television')
    .soundType('wood')
    .mapColor('wood')
    .hardness(1.5)
    .tagBlock('minecraft:mineable/axe')
})

StartupEvents.registry('fluid', event => {
    event.create('magnetic_slurry')
    .displayName('Magnetic Slurry')
    .noBlock()

    event.create('corn_whiskey', 'thin')
    .displayName('Corn Whiskey')
    .noBlock()
    .tint('#F5DEB3')
    .translucent()
})