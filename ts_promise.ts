const message$: Promise<string> = new Promise((resolve, reject) => {
    resolve('hello world!');
});

message$.then(message => {
    console.log(`message -> ${message}`);
    // throw new Error('simulate error');
    // return Promise.reject(new Error('simulate error'));
    return message;
}).then(message => {
    console.log(`message2 -> ${message}`);
}).catch(reason => {
    console.log(`promise rejected -> ${reason}`);
}).finally(() => {
    console.log(`promise finally`);
});

// window.onunhandledrejection = (e) => {
//     console.log(`promise rejected -> ${e.promise} - ${e.reason}`);
// };

const one$: Promise<string> = new Promise((resolve, reject) => {
    console.log(`construct one$`);
    setTimeout(() => {
        resolve('one');
    }, 3000);
});

const two$: Promise<string> = new Promise((resolve, reject) => {
    console.log(`construct two$`);
    setTimeout(() => {
        resolve('two');
    }, 2000);
});

const three$: Promise<string> = new Promise((resolve, reject) => {
    console.log(`construct three$`);
    setTimeout(() => {
        resolve('three');
    }, 5000);
});

const reject$: Promise<string> = new Promise((resolve, reject) => {
    reject('hello error!');
});

const testAsyncFunction = async () => {
    try {
        const message = await reject$;
        return message;
    } catch (error) {
        console.log(`error happened - ${error}`);
        return `default message on error`;
    } finally {
        console.log(`finally block`);
    }
};

window.onload = async () => {
    console.log(`window.onload`);

    const message = await testAsyncFunction();
    console.log(`message = ${message}`);

    const array = [one$, two$, three$];
    for await (const message of array) {
        console.log(message);
    }
};

Promise.all([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3), Promise.resolve(4)]).then(value => {
    console.log(`Promise.all - resolved - ${value}`);
}).catch(reason => {
    console.log(`Promise.all - rejected - ${reason}`);
});

Promise.all([Promise.resolve(1), Promise.reject(2), Promise.reject(3), Promise.resolve(4)]).then(value => {
    console.log(`Promise.all - resolved - ${value}`);
}).catch(reason => {
    console.log(`Promise.all - rejected - ${reason}`);
});

Promise.race([Promise.resolve(1), Promise.reject(2), Promise.reject(3), Promise.resolve(4)]).then(value => {
    console.log(`Promise.race - resolved - ${value}`);
}).catch(reason => {
    console.log(`Promise.race - rejected - ${reason}`);
});

// Promise.allSettled([Promise.resolve(1), Promise.reject(2), Promise.reject(3), Promise.resolve(4)]).then(value => {
//     console.log(`Promise.allSettled - resolved - ${value}`);
// }).catch(reason => {
//     console.log(`Promise.allSettled - rejected - ${reason}`);
// });