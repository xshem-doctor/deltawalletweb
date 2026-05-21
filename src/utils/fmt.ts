/**
 * Replace ``{{name}}`` placeholders in a template with values from a map.
 * Keeps unknown keys intact so missing translations don't render junk.
 */
export function fmt(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{\{(\w+)\}\}/g, (match, name) => {
    if (name in vars) {
      return String(vars[name as keyof typeof vars]);
    }
    return match;
  });
}

/** Format a decimal-as-string for display (trim trailing zeros / decimal point). */
export function fmtAmount(raw: string | number, maxFractionDigits = 6): string {
  const value = typeof raw === "number" ? raw : Number(raw);
  if (Number.isNaN(value)) return String(raw);
  return value
    .toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: maxFractionDigits,
    });
}
