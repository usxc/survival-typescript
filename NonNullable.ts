type T1 = string | null | undefined;
type T2 = NonNullable<T1>;

// type T2 = string

// NonNullableは、nullまたはundefinedを含む型からいずれも除外するユーティリティ型。