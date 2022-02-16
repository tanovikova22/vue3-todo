type status = "To do" | "Done" | "In progress";

export interface TodoItem {
    id: number;
    title: string;
    createdAt: Date;
    description: string;
    status: status;
    doneAt?: Date;
    priority: number;
}