import { studentsApi } from '@/api/studentsApi';

export interface UpdateSuccess {
  result: true;
  newStatus: string;
}

export interface UpdateError {
  result: false;
}

export const UpdateStudentState = async (
  studentId: number,
  status: string,
): Promise<UpdateSuccess | UpdateError> => {
  try {
    const { data } = await studentsApi.put(`/students/${studentId}`, {
      status,
    });

    if (!data) {
      return {
        result: false,
      };
    }

    return {
      result: true,
      newStatus: status,
    };
  } catch (error) {
    console.error(error);
    return {
      result: false,
    };
  }
};
