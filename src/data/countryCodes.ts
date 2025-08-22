import { allCountries, type Country } from 'country-telephone-data'

export interface CountryCode {
  code: string;
  country: string;
  name: string;
  iso2: string;
  priority: number;
  format: string;
  uniqueKey: string;
}

// Transform the library data to our interface and ensure unique keys
export const countryCodes: CountryCode[] = allCountries.map((country: Country, index: number) => ({
  code: `+${country.dialCode}`,
  country: country.iso2.toUpperCase(),
  name: country.name,
  iso2: country.iso2,
  priority: country.priority,
  format: country.format,
  // Add index to ensure unique keys for duplicate dial codes
  uniqueKey: `${country.iso2}-${country.dialCode}-${index}`
}));

// Sort by country name for better UX
export const sortedCountryCodes = [...countryCodes].sort((a, b) => 
  a.name.localeCompare(b.name)
);