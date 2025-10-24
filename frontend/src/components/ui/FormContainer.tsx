import { zodResolver } from '@hookform/resolvers/zod';
import type { ReactNode } from 'react';
import { useForm, type DefaultValues, type FieldValues, type SubmitHandler } from 'react-hook-form';
import type { ZodType } from 'zod';

interface FormContainerProps<T extends FieldValues> {
  schema: ZodType<T, any>;
  defaultValues?: DefaultValues<T>;
  onSubmit: SubmitHandler<T>;
  children: (methods: ReturnType<typeof useForm<T>>) => ReactNode;
}

export function FormContainer<T extends FieldValues> ({ schema, defaultValues, onSubmit, children }: FormContainerProps<T>) {

  const methods = useForm<T>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)}>
      {children(methods)}
    </form>
  )
}
