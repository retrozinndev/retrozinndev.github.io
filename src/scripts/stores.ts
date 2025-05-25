import { atom, type PreinitializedWritableAtom } from "nanostores";

export type AtomStoreType<AtomType> = PreinitializedWritableAtom<AtomType> & object & {
    key: string;
};

const stores: Record<string, AtomStoreType<any>> = {} as const;
export function addStore<StoreType = any>(key: string, initialValue: StoreType): AtomStoreType<StoreType> {
    if(Object.hasOwn(stores, key)) {
        console.warn(`Stores: there's already a key named \`${key}\``);
        return stores[key as keyof typeof stores];
    }

    stores[key] = atom(initialValue);
    return stores[key];
}

export function removeStore(key: string): boolean {
    if(Object.hasOwn(stores, key)) {
        stores[key as keyof typeof stores].off();
        delete stores[key as keyof typeof stores];
        return true;
    }

    return false;
}
