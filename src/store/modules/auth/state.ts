export interface User {
    id: string,
    name: string;
    email: string;
};

export interface State {
    isAuthed: boolean;
    user: User | null
};

export const state: State = {
    isAuthed: false,
    user: null
};