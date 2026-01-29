import translations from '../i18n/translations.json';

export type Language = 'es' | 'en';

export function getTranslation(key: string, lang: Language = 'es'): string {
    const keys = key.split('.');
    let value: any = translations[lang];

    for (const k of keys) {
        if (value[k]) {
            value = value[k];
        } else {
            console.warn(`Translation key not found: ${key}`);
            return key;
        }
    }

    return typeof value === 'string' ? value : key;
}

export function getCurrentLanguage(): Language {
    if (typeof window !== 'undefined') {
        const saved = localStorage.getItem('language');
        return (saved as Language) || 'es';
    }
    return 'es';
}

export function setLanguage(lang: Language): void {
    if (typeof window !== 'undefined') {
        localStorage.setItem('language', lang);
        document.documentElement.lang = lang;
    }
}
