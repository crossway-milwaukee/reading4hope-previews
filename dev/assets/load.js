const parts = ['bundle.p0.txt', 'bundle.p1.txt', 'bundle.p2.txt', 'bundle.p3.txt', 'bundle.p4.txt', 'bundle.p5.txt'];
const texts = await Promise.all(parts.map((p) => fetch(new URL(p, import.meta.url)).then((r) => {
  if (!r.ok) throw new Error('Failed to load ' + p);
  return r.text();
})));
const blob = new Blob(texts, { type: 'text/javascript' });
await import(URL.createObjectURL(blob));
