export const parameterToNumber = (nb: unknown): number => {
  // convert a queryParameter in number,  if not possible return NaN
  return parseInt((nb ?? "").toString(), 10);
};

export const dateToString = (date: Date): string =>
  date.toISOString().split("T")[0]!;
