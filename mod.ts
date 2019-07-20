import { writeJson } from "./deps.ts";
console.log("Welcome to Deno 🦕");

const { Deno } = window;

window.onload = async function () {
    console.log('onload');
};

(async () => {
    console.log('async run');
    // const result = await fetch("https://deno.land/std/examples/echo_server.ts");
})();

console.log(Deno);
console.dir(window.Deno);
console.dir(console);
console.log(window.location.href);

writeJson("./target.dat", { foo: "bar" }, { spaces: 2 });