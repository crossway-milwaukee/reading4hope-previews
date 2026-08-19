const n = 14;
const base = new URL("./chunks/", import.meta.url);
const texts = await Promise.all(
  Array.from({ length: n }, (_, i) => {
    const name = "p" + String(i).padStart(2, "0") + ".txt";
    return fetch(new URL(name, base)).then((r) => {
      if (!r.ok) throw new Error(name + " " + r.status);
      return r.text();
    });
  })
);
(0, eval)(texts.join(""));
