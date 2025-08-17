import { object, number } from 'yup';

export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  const schema = object({
    limit: number()
      .integer('limit must be an integer')
      .min(1, 'limit must be >= 1')
      .max(100, 'limit must be <= 100')
      .optional(),
  });

  try {
    const { limit } = await schema.validate(query, { abortEarly: false });

    return await event.$fetch<UsersResponse>(`https://dummyjson.com/users`, {
      query: { limit },
    });
  } catch (err: unknown) {
    throw createError({
      statusCode: 400,
      message: 'Validation error',
      data: err,
    });
  }
});
