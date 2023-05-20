import { atom } from "jotai";

export interface singleTask {
    id: string;
    title: string;
    description: string;
    completed: boolean;
}

export interface TaskAtomInterface {
    tasks: singleTask[]
}

const taskAtom = atom<TaskAtomInterface>({
    tasks: JSON.parse(localStorage.getItem('j-tasks') as string) || []
})

export default taskAtom