window.onload = async () => {
    // boolean
    const b: boolean = false;
    // number
    const decimal: number = 6;
    const hex: number = 0xf00d;
    const binary: number = 0b1010;
    const octal: number = 0o744;
    const readableBudget = 1_000_000;
    const number1 = 99;
    const number2 = 99.0000;
    console.log(`number1 === number2 --> ${number1 === number2}`);
    // string
    const red: string = "red";
    const blue: string = 'blue';
    const yellow: string = `yellow`;
    const lightBlue: string = `light ${blue}`;
    const multiLine: string =
        `1st line
    
2nd line

3rd line`;
    console.log(multiLine);
    // array
    const array1: number[] = [1, 2, 3];
    const array2: Array<number> = [1, 2, 3];
    console.log(array1 == array2);
    // tuple
    const tuple: [string, number, boolean] = ['1', 1, true];
    // enum
    enum Color {
        Red,
        Green, 
        Blue
    }
    console.log(Color.Blue);
    // any
    const any: any = 1;
    console.log(any);
    // void, undefined, null
    const unusable: void = undefined;
    // const unusable2: void = null;    //error with strictNullChecks
    const u: undefined = undefined;
    const n: null = null;
    let name: string | null = '';   //union types
    name = null;
    // never
    // object
    // type assertion
    const s : any = 'hello';
    const length : number = (<string>s).length;
    const length2 : number = (s as string).length;

    // non-null assertion operator
    let person: { name: string } | null = { name: 'tom' };
    // person = null;
    console.log(person!.name);

    // json
    const t = {name: '\/`"></?'};
    console.log(JSON.stringify(t));

    //typeof
    //instanceof
};