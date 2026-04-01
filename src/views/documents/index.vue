<template>
  <div>
    <BaseSectionTitle>
      Interne Dokumente
    </BaseSectionTitle>

    <BaseContainer class="mt-14 mb-14">
      <BaseParagraph class="mb-12">
        <strong>Alle internen Vereinsdokumente im Überblick.</strong><br />
        Während einige Unterlagen wie die Satzung öffentlich sind, stehen die hier bereitgestellten Dateien ausschließlich Vereinsmitgliedern intern zur Verfügung.
      </BaseParagraph>

      <div class="download-card">
        <!-- Linke Seite -->
        <div class="download-content">
          <h1>Husky Regelbetrieb</h1>
          <BaseParagraph>
            Das Dokument beschreibt Aufgaben und Verantwortlichkeiten des Husky-Komitees sowie Regelungen für Einsatz, Fahrtauglichkeit und Umgang mit Verstößen während des Spielbetriebs.
          </BaseParagraph>
        </div>

        <!-- Rechte Seite -->
        <div class="download-action">
          <a 
            href="/assets/documents/airsoft/konzept_regelbetrieb_husky.pdf" 
            download
            class="download-button"
          >
            📄
            <span>PDF Download</span>
          </a>
        </div>
      </div>

      <div class="download-card">
        <!-- Linke Seite -->
        <div class="download-content">
          <h1>Mahngebühren-Regelung</h1>
          <BaseParagraph>
            Mahngebühren werden fällig, wenn ein Vereinsmitglied sein persönliches Bankkonto zum Zeitpunkt des SEPA-Lastschrifteinzugs der Mitglieds- & Spartenbeiträge jeweils zum Monatsanfang nicht gedeckt hat, sodass die Vereinsbeiträge des Mitglieds nicht eingezogen werden können. Diese Mahngebühren werden erhoben, da einerseits Zusatzkosten durch die Bank anfallen und andererseits ein administrativer Mehraufwand durch den Schatzmeister entsteht.
          </BaseParagraph>
          <BaseParagraph>
            Die Höhe der Mahngebühren setzt sich dabei grundsätzlich wie folgt zusammen:
            <ul>
              <li>Ursprünglicher Mitglieds- & Spartenbeitrag</li>
              <li>Mahngebühr á 25 % auf den Ursprungswert</li>
              <li>Zusatzkosten durch die Bank</li>
            </ul>
          </BaseParagraph>
          <BaseParagraph>
            Sollten drei Mal innerhalb eines zeitlich eng zusammenliegenden Zeitraums die Mitglieds- & Spartenbeiträge nicht eingezogen werden können, behält sich der Vorstand das Recht vor, das Vereinsmitglied aus dem Verein auszuschließen.
          </BaseParagraph>
        </div>

        <!-- Rechte Seite -->
        <div class="download-action">
        </div>
      </div>

    </BaseContainer>
  </div>
</template>

<style scoped>
.download-section {
  margin: 60px 0;
}

.download-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  padding: 40px;
  background: #f8f9fb;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.05);
}

.download-content {
  flex: 1;
}

.download-action {
  display: flex;
  align-items: center;
}

.download-button {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 24px;
  background: #e53935;
  color: white;
  font-weight: 600;
  text-decoration: none;
  border-radius: 12px;
  transition: all 0.2s ease;
}

.download-button:hover {
  background: #c62828;
  transform: translateY(-2px);
}
</style>
