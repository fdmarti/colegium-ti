import { studentsApi } from '@/api/studentsApi';
import type { Student } from '@/modules/students/interfaces/Students';

export const GetStudents = async (): Promise<Student[] | []> => {
  try {
    const { data } = await studentsApi.get<Student[]>('/students');
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
