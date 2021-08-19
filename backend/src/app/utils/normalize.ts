import { IStoreDTO } from "../dtos/IStoreDTO";

export function normalizeStoreData(store: IStoreDTO[]): IStoreDTO[] {
  const storeNames = new Set();
  const storeOwners = new Set();

  const filteredArray = store.filter((store) => {
    const duplicate =
      storeNames.has(store.name) && storeOwners.has(store.owner);

    storeNames.add(store.name);
    storeOwners.add(store.owner);

    return !duplicate;
  });

  return filteredArray;
}
