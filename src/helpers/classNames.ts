type Mods = Record<string, boolean | string>;

function classNames(
  mainClass: string,
  mods: Mods,
  additionalClasses: string[]
): string {
  return [
    mainClass,
    ...additionalClasses,
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className, value]) => className),
  ].join(" ");
}

export default classNames;
