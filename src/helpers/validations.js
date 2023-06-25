import * as Yup from 'yup';

export const LoginValidations = () => {
    return Yup.object().shape({
      email: Yup.string()
        .email('Invalid email, please provide a valid email.')
        .required('Email is required'),
      password: Yup.string()
        .required('Password is required'),
    });
}

export const ArticleValidations = () => {
  return Yup.object().shape({
    description: Yup.string()
      .required('Description is required'),
    body: Yup.string()
      .required('Content is required'),
    image: Yup.mixed().required('Image is required').test('fileType', 'Invalid file format', (value) => {
      if (value && value.length) {
        const file = value[0];
        const validTypes = ['image/jpeg', 'image/png', 'image/gif'];
        return validTypes.includes(file.type);
      }
      return false; // Disallow empty value
    }),
  });
}

export const ArticleWthValidations = () => {
  return Yup.object().shape({
    description: Yup.string()
      .required('Description is required'),
    body: Yup.string()
      .required('Content is required'),
  });
}