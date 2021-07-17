import { FormErrorMessage, FormLabel, FormControl, Input, Button } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  startDate: Yup.string()
    .required('Start date is required')
    .matches(
      /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
      'Start date must be a valid date in the format YYYY-MM-DD',
    ),
  endDate: Yup.string()
    .required('End date is required')
    .matches(
      /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
      'Start date must be a valid date in the format YYYY-MM-DD',
    ),
});

function EventForm() {
  const formOptions = { resolver: yupResolver(validationSchema) };

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm(formOptions);

  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 3000);
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.name}>
        <FormLabel htmlFor="title">First name</FormLabel>
        <Input id="title" placeholder="title" {...register('title')} />
        <FormErrorMessage>{errors.title && errors.title.message}</FormErrorMessage>
      </FormControl>
      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        Submit
      </Button>
    </form>
  );
}

export default EventForm;
