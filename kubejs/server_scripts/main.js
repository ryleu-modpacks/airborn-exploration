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

    for (const group of groups) {
        for (const value of group) {
            event.stonecutting(`kubejs:frequency_${value}`, 'minecraft:name_tag')
        }
    }
})