import { toast } from 'react-toastify';

export const userTypes = {
  DONOR: 'donor',
  BLOOD_BANK: 'blood_bank',
  HOSPITAL: 'hospital',
};

export const ToastHandler = (type, message) => {
  if (type === 'error') {
    toast.error(message, {
      position: 'bottom-right',
      autoClose: 1000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } else if (type === 'warn') {
    toast.warn(message, {
      position: 'bottom-right',
      autoClose: 1000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } else if (type === 'success') {
    toast.success(message, {
      position: 'bottom-right',
      autoClose: 1000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  } else if (type === 'info') {
    toast.info(message, {
      position: 'bottom-right',
      autoClose: 1000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
};
