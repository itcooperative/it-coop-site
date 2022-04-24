export default function (doc) {
  if (doc.type === "main") {
    return `/${doc.lang}`;
  }

  if (doc.type === "projects") {
    return `/${doc.lang}/projects`;
  }

  return "/not-found";
}
