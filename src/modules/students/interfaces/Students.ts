export interface Student {
  id: number;
  name: string;
  avatar: string;
  status: State;
  createdAt: string;
}

export enum State {
  P = 'P',
  V = 'V',
  A = 'A',
  T = 'T',
}
