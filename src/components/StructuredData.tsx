export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: 'JGW Dietetics',
    description:
      'Specialist Registered Dietitian Jackie Wilson — IBS, gut health, diabetes, and lifestyle dietetic support. 30+ years NHS experience.',
    url: 'https://www.jgw-dietetics.co.uk',
    telephone: '07770769322',
    email: 'info@jgw-dietetics.co.uk',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Clevedon',
      addressRegion: 'North Somerset',
      addressCountry: 'GB',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 51.4432,
      longitude: -2.8583,
    },
    areaServed: [
      { '@type': 'City', name: 'Bristol' },
      { '@type': 'City', name: 'Clevedon' },
      { '@type': 'AdministrativeArea', name: 'South West England' },
    ],
    founder: {
      '@type': 'Person',
      name: 'Jackie Wilson',
      jobTitle: 'Registered Dietitian',
      hasCredential: [
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'degree',
          name: 'BSc Nutrition and Dietetics',
        },
        {
          '@type': 'EducationalOccupationalCredential',
          name: 'HCPC Registration',
          recognizedBy: {
            '@type': 'Organization',
            name: 'Health and Care Professions Council',
          },
        },
      ],
    },
    medicalSpecialty: ['Gastroenterology', 'Endocrinology', 'Nutrition'],
    priceRange: '££',
    openingHours: 'Mo-Fr 09:00-20:00 Sa 09:00-17:00',
    sameAs: [
      'https://www.facebook.com/jgwdietetics',
      'https://www.linkedin.com/in/jackiewilsonrd',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
