window.onload = async () => {
    const array = [1, 2, 3, 4, 5, 6, 6, 7, 8, 8];
    const set = new Set(array);
    console.log(set.size);
    console.log(set.has(5));
    set.delete(5);
    console.log(set.has(5));
    set.add(5);

    for(const value of set) {
        console.log(`value = ${value}`);
    }

    for(const key of set.keys()) {
        console.log(`key = ${key}`);
    }

    for(const value of set.values()) {
        console.log(`value = ${value}`);
    }

    for(const [key, value] of set.entries()) {
        console.log(`key = ${key}, value = ${value}`);
    }

    set.forEach(value => {
        console.log(`value = ${value}`);
    });

    // clone set
    const clonedSet = new Set(set);
    console.log(`cloned set -> ${clonedSet}, size = ${clonedSet.size}`)

    // merge set
    const set2 = new Set([10, 11]);
    const mergedSet = new Set([...set, ...set2]);
    console.log(`cloned set -> ${mergedSet}, size = ${mergedSet.size}`)

    const array1 = Array.from(set);
    const array2 = [...set];
    console.log(`array1.length = ${array1.length}`);
    console.log(`array2.length = ${array2.length}`);
};