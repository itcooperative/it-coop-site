export default function (doc) {
  console.log(doc);
  if (doc.type === "main") {
    return `/${doc.lang}`;
  }

  if (doc.type === "projects") {
    return `/${doc.lang}/projects`;
  }

  return `/`;
}
