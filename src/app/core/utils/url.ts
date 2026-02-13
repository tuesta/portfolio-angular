export const toUrl = (text: string): string => {
  const normalize: Record<string, string> = {
    'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u',
    'ñ': 'n', 'ü': 'u', ' ': '-', '\n': '-'
  };

  return text
    .toLowerCase()
    .split('')
    .map(char => normalize[char] ?? char)
    .join('');
};
