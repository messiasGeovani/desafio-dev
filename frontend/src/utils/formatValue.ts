export function formatValue(value: number): string {
  const formatedValue = Math.abs(Number(value)).toFixed(2).split(".");

  // parsing number to brazilian format type
  formatedValue[0] = formatedValue[0].split(/(?=(?:...)*$)/).join(".");

  return formatedValue.join(",");
}
