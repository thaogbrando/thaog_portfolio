import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const cookieLocale = cookies().get('locale')?.value;

  return {
    locale: cookieLocale || 'en',
    messages: (await import(`../../messages/${cookieLocale || 'en'}.json`)).default
  };
});