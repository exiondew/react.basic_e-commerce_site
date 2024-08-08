export default async function getFileURL(path) {
  if (typeof window === "undefined") {
    // Node.js ortamı
    const { pathToFileURL } = await import("url");
    return pathToFileURL(path).href;
  } else {
    // Tarayıcı ortamı
    return new URL(path, window.location.href).href;
  }
}
