import translate from 'translate';
import { getLocales } from 'expo-localization';

const deviceLanguage = getLocales()[0]?.languageCode;

// Translation
translate.engine = 'google'; // "google", "yandex", "libre", "deepl"

export const translateText = async text =>
  await translate(`${text}`, { from: deviceLanguage, to: 'en' });
