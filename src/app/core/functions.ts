export function sanitizeQuery(query: any) {

  if (typeof query === "object") {
    const urlQuery = new URLSearchParams();
    const keys = Object.keys(query);
    keys.forEach(key => {
      if (query[key]) {
        urlQuery.append(key, query[key]);
      }
    });
    return `?${urlQuery.toString()}`;
  } else if (typeof query === "string") {
    if (query.trim().substring(0, 1) !== "?") {
      query = `?${query.trim()}`;
    }
    return query.length > 1 ? query : "";
  }
  return "";
}
