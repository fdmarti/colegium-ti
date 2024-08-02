import { useToast } from 'vue-toastification';

const toast = useToast();

export class Toast {
  constructor(public message: string) {}

  static success(message: string) {
    return toast.success(message);
  }

  static error(message: string) {
    return toast.error(message);
  }
}
