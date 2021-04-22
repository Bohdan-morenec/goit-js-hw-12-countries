import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/confirm/dist/PNotifyConfirm.css';

const pnotifyEror = () => {
  setTimeout(() => {
    error({
      text: 'Too many matches found. Please enter a more specific query!',
    });
  }, 600);
};

export { pnotifyEror };
