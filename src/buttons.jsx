export const firstButtons = []

export const secondButtons = []


for(let i=0; i<10; i++){


    firstButtons.push({
        name: `${i} to ${(i*10)+9}`,
        key: i,
        value: i*10
    })

    secondButtons.push({
        name: i,
        key: i,
        value: i
    })
}