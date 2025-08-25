export default defineEventHandler(async (event) => {
  const baseURL = useRuntimeConfig().public.API_BASE_URL;

  try {
    return await event.$fetch('/', {
      baseURL,
    });
  } catch (error) {
    throw createError({
      statusCode: 400,
      message: 'Validation error',
      data: error,
    });
  }
});
