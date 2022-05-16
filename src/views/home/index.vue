<template>
  <div class="white">
    <v-parallax
      src="/assets/backgrounds/default.jpg"
      alt=""
      class="d-flex justify-center align-center"
    >
      <VueAnimation type="fade-in">
        <div class="d-flex justify-center align-center">
          <img
            src="/assets/logos/logo-slim.png"
            style="width: 95%; max-width: 825px"
            alt="Alles im Rudel Wölfe"
          >
        </div>
      </VueAnimation>
    </v-parallax>
    <BaseContainer class="mt-14 mb-16 text-center">
      <VueAnimation type="fade-in">
        <h1 class="text-h3 text-sm-h2">
          Willkommen
        </h1>
        <BaseParagraph class="mt-4 mb-0">
          bei Alles im Rudel e.V.
        </BaseParagraph>
      </VueAnimation>
      <VueAnimation type="fade-in">
        <BaseParagraph>
          <br>Wir sind ein stetig wachsender Verein mit Sitz in Elmshorn, dessen Zweck es ist, sich für den Erhalt & die
          Förderung der sozialen Einheit „Alles im Rudel“ einzusetzen, zu welcher insbesondere unsere Vereinsmitglieder
          gehören.
          <br>Dies geschieht vornehmlich durch einen regelmäßigen sozialen Austausch unserer Vereinsmitglieder, welcher
          grundsätzlich in den unterschiedlichsten Formen erfolgen kann.
          <br>
          <br>Unter anderem geschieht dies auch in den verschiedenen Vereinssparten, welche nach Bedarf von unseren
          Vereinsmitgliedern ins Leben gerufen werden können, um so dediziert spezielle Interessen abzubilden.
        </BaseParagraph>
      </VueAnimation>
    </BaseContainer>
    <News />
    <About />
  </div>
</template>

<script>
import News from '@/views/home/parts/News';
import About from '@/views/home/parts/About';

export default {
  name: 'Home',
  components: {
    News,
    About
  },
  jsonld() {
    return {
      '@context': 'http://schema.org/',
      '@type': 'Organization',
      'name': 'Alles im Rudel e.V.',
      'description': 'Alles im Rudel ist ein Verein in Elmshorn, der 2021 gegründet wurde und mehrere Sparten hat, wie z.B. Airsoft oder E-Sports',
      'telephone': '+49 176 55234699',
      'email': 'allesimrudel@gmail.com',
      'logo': 'https://www.allesimrudel.de/assets/logos/logo-slim.png',
      'url': 'https://www.allesimrudel.de',
      'sameAs': 'https://www.airsoft-verzeichnis.de/index.php?status=team&teamnummer=011712',
      'image': [
        'https://www.allesimrudel.de/assets/backgrounds/default.jpg',
        'https://www.allesimrudel.de/assets/logos/logo-slim.png'
      ],
      'areaServed': 'Deutschland',
      'foundingDate' : '2021-05-28',
      'founders': [
        {
          '@type': 'person',
          'name': 'Silas Beckmann',
          'birthDate': '1998-04-20',
          'gender': 'Male',
          'email': 'silas.beckmann@t-online.de'
        },
        {
          '@type': 'person',
          'name': 'Timm Vollborn',
          'birthDate': '1999-01-30',
          'gender': 'Male',
          'email': 'timm.vollborn@outlook.de'
        },
        {
          '@type': 'person',
          'name': 'Nick Nickels',
          'birthDate': '1998-12-28',
          'gender': 'Male',
          'email': 'Nick.Nickels.Privat@gmail.com'
        }
      ],
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Norderstraße 23',
        'addressLocality': 'Elmshorn',
        'addressRegion': 'PI',
        'postalCode': '25335',
        'addressCountry': 'DE'
      },
      'sponsor': [
        {
          '@type': 'Organization',
          'name': 'Begadi GmbH',
          'description': 'BEGADI Taktische Bekleidung, Airsoftwaffen, Outdoor und Zubehör - www.begadi.com.',
          'email': 'support@begadi.com',
          'logo': 'https://www.begadi.com/skin/frontend/begadi/default/images/logo.png',
          'url': 'https://www.begadi.com/',
        },
        {
          '@type': 'Organization',
          'name': 'B.A.D. Agency Airsoft GmbH',
          'description': 'Herzlich Willkommen auf dem Online-Shop der B.A.D. Agency Airsoft GmbH. Wir freuen uns sehr, dass Du den Weg zu uns gefunden hast.',
          'email': 'hq@badagency.de',
          'logo': 'https://badagency.de/media/image/ba/ea/5b/badagency-shop-logo-main.png',
          'url': 'https://badagency.de//',
        },
        {
          '@type': 'Organization',
          'name': 'Autoreparatur Henry Krohn GmbH',
          'description': 'Vereinbaren Sie jetzt einen Werkstatt-Termin bei fachmännischem Kfz-Service für alle Fahrzeug-Marken! Bei uns finden Sie alles, was Ihr Auto braucht',
          'email': 'Henry@HenryKrohn.de',
          'logo': 'https://www.autoreparatur-krohn.de/fileadmin/img/MH_Logo_4C_rgb.png',
          'url': 'https://www.autoreparatur-krohn.de/',
        },
      ]
    };
  },
};
</script>