export function formatToCPF(value) {
  let formatedCpf;

  if (value.length !== 11) {
    return value;
  }

  formatedCpf = value.replace(
    /(\d{3})(\d{3})(\d{3})(\d{2})/,
    (_, firstArg, secondArg, thirdArg, fourthArg) =>
      `${firstArg}.${secondArg}.${thirdArg}-${fourthArg}`
  );

  return formatedCpf;
}
