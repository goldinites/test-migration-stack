import { object, number, type InferType } from 'yup';

export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  const schema = object({
    limit: number()
      .integer('limit must be an integer')
      .min(1, 'limit must be >= 1')
      .max(100, 'limit must be <= 100')
      .optional(),
  });

  type Query = InferType<typeof schema>;

  try {
    const validatedQuery: Query = await schema.validate(query, { stripUnknown: true });

    return await event.$fetch<UsersResponse>(`https://dummyjson.com/users`, {
      query: validatedQuery,
    });
  } catch (err: unknown) {
    throw createError({
      statusCode: 400,
      message: 'Validation error',
      data: err,
    });
  }
});
