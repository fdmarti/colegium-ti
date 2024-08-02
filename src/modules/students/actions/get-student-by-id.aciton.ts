import { studentsApi } from '@/api/studentsApi';
import type { Student } from '@students/interfaces/Students';

export interface StudentSuccess {
  student: Student;
  result: true;
}

export interface StudentError {
  result: false;
}

export const GetStudentById = async (studentId: number): Promise<StudentSuccess | StudentError> => {
  try {
    const { data } = await studentsApi.get<Student>(`/students/${studentId}`);

    if (data.id) {
      return {
        student: data,
        result: true,
      };
    }

    return {
      result: false,
    };
  } catch (error) {
    console.error(error);
    return {
      result: false,
    };
  }
};
