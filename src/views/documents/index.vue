<template>
  <div>
    <BaseSectionTitle>
      Interne Dokumente
    </BaseSectionTitle>

    <BaseContainer class="mt-14 mb-14">
      <BaseParagraph class="mb-12">
        <strong>Alle internen Vereinsdokumente im Überblick.</strong><br />
        Während Themen wie die Satzung nach außen hin verfügbar sein müssen, so sind die hier zu findenden Dokumente
        erst einmal nur Intern verfügbar.
      </BaseParagraph>
      <BaseParagraph>
        <strong>Umgang mit dem Husky</strong>
      </BaseParagraph>

      <div class="download-card">
        <!-- Linke Seite -->
        <div class="download-content">
          <h1>Husky Regelbetrieb</h1>
          <BaseParagraph>
            Hier könnte Ihre Beschreibung stehen.
          </BaseParagraph>
        </div>

        <!-- Rechte Seite -->
        <div class="download-action">
          <a 
            href="/downloads/regelbetrieb_husky.pdf" 
            download
            class="download-button"
          >
            📄
            <span>PDF Download</span>
          </a>
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
