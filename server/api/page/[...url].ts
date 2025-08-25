export default defineEventHandler(async (event) => {
  const baseURL = useRuntimeConfig().public.API_BASE_URL;
  const url = getRouterParam(event, 'url');

  if (!url) return;

  try {
    return await event.$fetch(url, {
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
