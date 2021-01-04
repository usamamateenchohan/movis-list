import { notification } from 'antd';

export const openNotificationWithIcon = (type, message, description) => {
  notification[type]({
    message,
    description
  });
};

export const getUrlLastId = (value) => {
  const array = value.split('/');
  return array[array.length - 1];
}