export function toKebabCase(str: string) {
  return str
    .toLowerCase() // convert to lower case
    .split(' ') // split on spaces
    .join('-') // join with hyphens
}

export function toTitleCase(str: string): string {
  return str
    .split('-') // split on hyphens
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // capitalize the first letter of each word
    .join(' ') // join with spaces
}
