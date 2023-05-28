export const  truncateText = (text: string, maxLength = 150) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + "...";
  }

export const getReadableData = (date: Date) => new Date(date).toLocaleDateString("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric",
})

export const getDefaultTheme = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('color-theme');
    if (typeof storedPrefs === 'string') return storedPrefs;
    const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
    if (userMedia.matches) return 'dark';
  }
  return 'light';
}

export const sanitizedHTML = (html: string) => html.replace(/<[^>]+>/g, "")