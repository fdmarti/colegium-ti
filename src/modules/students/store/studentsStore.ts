import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import type { Student, State } from '@students/interfaces/Students';
import {
  GetStudents,
  UpdateStudentState,
  GetStudentById,
  type StudentSuccess,
  type StudentError,
} from '@students/actions';

export const useStudentStore = defineStore('student', () => {
  const studentsList = ref<Student[] | []>([]);
  const studentFilter = ref('');
  const isLoading = ref(true);

  const getStudents = async () => {
    try {
      const result = await GetStudents();
      studentsList.value = result;

      isLoading.value = false;
    } catch (error) {
      return [];
    }
  };

  const getStudentById = async (studentId: number): Promise<StudentSuccess | StudentError> => {
    try {
      const student = await GetStudentById(studentId);

      if (student.result) {
        return {
          result: true,
          student: student.student,
        };
      }

      return {
        result: false,
      };
    } catch (error) {
      return {
        result: false,
      };
    }
  };

  const changeStudentStatus = async (studentId: number, status: State): Promise<boolean> => {
    try {
      const data = await UpdateStudentState(studentId, status);

      if (data.result) {
        updateStudentList(studentId, status);
        return true;
      }

      return false;
    } catch (error) {
      return false;
    }
  };

  const updateStudentList = (studentId: number, status: State) => {
    for (let i = 0; i < studentsList.value.length; i++) {
      if (studentsList.value[i].id == studentId) {
        studentsList.value[i].status = status;
        break;
      }
    }

    return;
  };

  return {
    studentsAll: computed(() => studentsList.value),
    students: computed(() => {
      const textLower = studentFilter.value.toLowerCase();

      return studentsList.value.filter((student) => {
        if (student.name.toLowerCase().includes(textLower)) {
          return student;
        }
      });
    }),
    studentsAmount: computed(() => studentsList.value.length),
    amountStudentsP: computed(() => {
      return studentsList.value.filter((student) => student.status === 'P').length;
    }),
    amountStudentsV: computed(() => {
      return studentsList.value.filter((student) => student.status === 'V').length;
    }),
    amountStudentsA: computed(() => {
      return studentsList.value.filter((student) => student.status === 'A').length;
    }),
    amountStudentsT: computed(() => {
      return studentsList.value.filter((student) => student.status === 'T').length;
    }),

    isLoading,
    studentFilter,

    getStudents,
    changeStudentStatus,
    getStudentById,
  };
});
