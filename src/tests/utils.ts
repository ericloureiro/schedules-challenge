export const getRandomEnum = <T extends object>(anEnum: T): T[keyof T] => {
  const enumValues = Object.keys(anEnum)
    .filter((key) => typeof anEnum[key as keyof typeof anEnum] === 'number')
    .map((key) => key);

  const randomIndex = Math.floor(Math.random() * enumValues.length);

  return anEnum[randomIndex as keyof T];
};

export function getRandomEnumValue<T>(anEnum: T): T[keyof T] {
  //save enums inside array
  const enumValues = Object.keys(anEnum) as Array<keyof T>;

  //Generate a random index (max is array length)
  const randomIndex = Math.floor(Math.random() * enumValues.length);
  // get the random enum value

  const randomEnumKey = enumValues[randomIndex];

  return anEnum[randomEnumKey];
  // if you want to have the key than return randomEnumKey
}
