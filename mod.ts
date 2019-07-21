import { writeJson, readJson, readFileStr } from "./deps.ts";
console.log("Welcome to Deno 🦕");

const { Deno } = window;

window.onload = async function () {
    console.log('onload');
    await writeJson("./hello.json", { foo: "bar" }, { spaces: 2 });
    const f = await readJson('./hello.json');
    console.log(typeof f);
    const s = await readFileStr('./hello.json');
    console.log(typeof s);
};

(async () => {
    console.log('async run');
    // const result = await fetch("https://deno.land/std/examples/echo_server.ts");
})();

console.log(Deno);
console.dir(window.Deno);
console.dir(console);
console.log(window.location.href);