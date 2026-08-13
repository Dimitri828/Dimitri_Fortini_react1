export default async function getData() {
   const PROMISE = await fetch("./annunci.json");
   const DATA = await PROMISE.json();
   return DATA;
}