import { useForm } from 'react-hook-form';
import styles from './CreateJob.module.scss';
import axios from 'axios';
import { useState } from 'react';

import { Job } from '@interfaces/Job.interface';

export const CreateJob = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Job>({
    defaultValues: {},
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: Job) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/jobs`, data);
      console.log('Работа успешно создана:', response.data);
    } catch (error) {
      setError('Произошла ошибка при создании работы');
      console.error('Ошибка при создании работы:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Создание работы</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.formGroup}>
          <label>Название работы</label>
          <input
            type='text'
            placeholder='Название работы'
            {...register('name', {
              required: 'Это поле обязательно',
              minLength: { value: 3, message: 'Минимум 3 символа' },
            })}
          />
          {errors.name && <p className={styles.error}>{errors.name.message}</p>}
        </div>

        <div className={styles.formGroup}>
          <label>Уникальное название</label>
          <input
            type='text'
            placeholder='Уникальное название'
            {...register('uniqueName', {
              required: 'Это поле обязательно',
              pattern: {
                value: /^[a-zA-Z0-9-_]+$/,
                message: 'Только буквы, цифры, тире и подчеркивание',
              },
            })}
          />
          {errors.uniqueName && <p className={styles.error}>{errors.uniqueName.message}</p>}
        </div>

        <div className={styles.formGroup}>
          <label>Уровень</label>
          <input
            type='number'
            min={1}
            max={50}
            step={1}
            {...register('lvl', {
              required: 'Это поле обязательно',
              min: { value: 1, message: 'Минимальное значение 1' },
              max: { value: 50, message: 'Максимальное значение 50' },
              valueAsNumber: true,
            })}
          />
          {errors.lvl && <p className={styles.error}>{errors.lvl.message}</p>}
        </div>

        <div className={styles.formGroup}>
          <label>Город</label>
          <input
            type='text'
            placeholder='Город'
            {...register('city', {
              required: 'Это поле обязательно',
              minLength: { value: 2, message: 'Минимум 2 символа' },
            })}
          />
          {errors.city && <p className={styles.error}>{errors.city.message}</p>}
        </div>

        <div className={styles.formGroup}>
          <label>О работе</label>
          <input
            type='text'
            placeholder='О работе'
            {...register('about', {
              required: 'Это поле обязательно',
              minLength: { value: 10, message: 'Минимум 10 символов' },
            })}
          />
          {errors.about && <p className={styles.error}>{errors.about.message}</p>}
        </div>

        <div className={styles.formGroup}>
          <label>HTML описание</label>
          <textarea
            placeholder='HTML код описания'
            {...register('htmlDescriptionCode', {
              required: 'Это поле обязательно',
            })}
          />
          {errors.htmlDescriptionCode && (
            <p className={styles.error}>{errors.htmlDescriptionCode.message}</p>
          )}
        </div>

        <div className={styles.formGroup}>
          <label>Настройка</label>
          <input
            type='number'
            placeholder='Настройка'
            {...register('settings', {
              required: 'Это поле обязательно',
              valueAsNumber: true,
            })}
          />
          {errors.settings && <p className={styles.error}>{errors.settings.message}</p>}
        </div>

        {error && <p className={styles.formError}>{error}</p>}
        <button disabled={isLoading}>{isLoading ? 'Отправка...' : 'Отправить'}</button>
      </form>
    </div>
  );
};
