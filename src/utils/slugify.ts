// Utility: convert a Greek category name to a URL-safe slug
export function categoryToSlug(category: string): string {
  const map: Record<string, string> = {
    'α': 'a', 'ά': 'a', 'β': 'b', 'γ': 'g', 'δ': 'd',
    'ε': 'e', 'έ': 'e', 'ζ': 'z', 'η': 'i', 'ή': 'i',
    'θ': 'th', 'ι': 'i', 'ί': 'i', 'ϊ': 'i', 'ΐ': 'i',
    'κ': 'k', 'λ': 'l', 'μ': 'm', 'ν': 'n', 'ξ': 'x',
    'ο': 'o', 'ό': 'o', 'π': 'p', 'ρ': 'r', 'σ': 's',
    'ς': 's', 'τ': 't', 'υ': 'y', 'ύ': 'y', 'ϋ': 'y',
    'ΰ': 'y', 'φ': 'f', 'χ': 'ch', 'ψ': 'ps', 'ω': 'o', 'ώ': 'o',
    'Α': 'a', 'Ά': 'a', 'Β': 'b', 'Γ': 'g', 'Δ': 'd',
    'Ε': 'e', 'Έ': 'e', 'Ζ': 'z', 'Η': 'i', 'Ή': 'i',
    'Θ': 'th', 'Ι': 'i', 'Ί': 'i', 'Ϊ': 'i',
    'Κ': 'k', 'Λ': 'l', 'Μ': 'm', 'Ν': 'n', 'Ξ': 'x',
    'Ο': 'o', 'Ό': 'o', 'Π': 'p', 'Ρ': 'r', 'Σ': 's',
    'Τ': 't', 'Υ': 'y', 'Ύ': 'y', 'Ϋ': 'y',
    'Φ': 'f', 'Χ': 'ch', 'Ψ': 'ps', 'Ω': 'o', 'Ώ': 'o',
  };

  return category
    .split('')
    .map(ch => map[ch] ?? ch)
    .join('')
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '')
    .replace(/--+/g, '-')
    .replace(/^-|-$/g, '');
}
