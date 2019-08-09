window.onload = async () => {
    const array: [number, string][] = [[1, 'one'], [2, 'two'], [3, 'three']];
    const map = new Map(array);
    console.log(`map size = ${map.size}`);
    map.set(4, 'four');
    console.log(map.has(5));
    console.log(map.get(3));
    map.delete(5);
    map.delete(2);

    for (const [key, value] of map) {
        console.log(`key = ${key}, value = ${value}`);
    }

    for (const key of map.keys()) {
        console.log(`key = ${key}`);
    }

    for (const value of map.values()) {
        console.log(`value = ${value}`);
    }

    for (const [key, value] of map.entries()) {
        console.log(`key = ${key}, value = ${value}`);
    }

    map.forEach((value, key) => {
        console.log(`key = ${key}, value = ${value}`);
    });

    //clone map
    const clonedMap = new Map(map);

    //merge maps
    const map2 = new Map([[3, 'THREE'], [9, 'nine']]);
    const mergedMap = new Map([...map, ...map2]);

    //convert map to array
    const arrayFromMap1 = Array.from(map);
    const arrayFromMap2 = [...map]; 
    console.log(arrayFromMap1 === arrayFromMap2);

    //convert object to map
    const obj = {
        name: 'jerry',
        age: 4,
        gender: 'male'
    };
    const mapFromObject = new Map(Object.entries(obj));
    console.log(mapFromObject);

    //conver map to object
    const obj2 = Object.fromEntries(mapFromObject);
    console.log(obj2);

    const type = typeof map;
    console.log(type);

    console.log(map instanceof Object);
    console.log(map instanceof Function);
    console.log(map instanceof Map);
};