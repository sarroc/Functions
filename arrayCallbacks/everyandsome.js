// EVERY

const things = ['dog', 'dig', 'log', 'bag', 'wag'];

const allLetters = things.every(word => word.length === 3);
const allEndinG = things.every(word => {
    const last = word.length - 1;
    return word[last] === 'g'
})

// SOME if at least one is true it will return true

const items = ['dog', 'jello', 'log', 'cupcake', 'bag', 'wag'];

const totalCar = items.some(word => {
    return word.length > 4;
})
const startwithZ = items.some(word => word[0] === 'Z')
const containCake = items.some(w => w.includes('cake'))