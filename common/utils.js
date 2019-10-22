export const findById = (array, id) => {
    for(let i = 0; i < array.length; i++) {
        const bar = array[i];

        if(bar.id === id) {
            return bar;
        }
    }
};