/* eslint-disable @typescript-eslint/no-explicit-any */
export type None = null | undefined;

export type EmptyObject = Record<string, never>;

export type ObjectOfAny = Record<string, any>;

export type Empty = None | false | 0 | '' | [] | EmptyObject;
