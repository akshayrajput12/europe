import CountryPage from "@/countries/page"

// ISR Configuration - Revalidate every 30 days (same as stand pages)
export const revalidate = 2592000; // 30 days in seconds

export default function Page() {
  return <CountryPage />
}

export const metadata = {
  title: 'Exhibition Stands | Countries',
  description: 'Explore our exhibition stand services across Europe\'s major trade show destinations',
}