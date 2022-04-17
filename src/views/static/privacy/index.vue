<template>
  <div>
    <BaseSectionTitle>
      Datenschutzerklärung
    </BaseSectionTitle>

    <BaseContainer class="mt-12 mb-16">
      <h3 class="text-h4 mb-2">
        Allgemeiner Hinweis und Pflichtinformationen
      </h3>

      <h3 :class="headlineClasses">
        Benennung der verantwortlichen Stelle
      </h3>
      <p :class="textClasses">
        Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
      </p>
      <p :class="textClasses">
        Alles im Rudel e.V.<br>
        Norderstraße 23<br>
        25335 Elmshorn<br>
        Deutschland<br>
        <br>
        Telefon: +49 176 55234699<br>
        E-Mail: allesimrudel@gmail.com
      </p>
      <p :class="textClasses">
        Die verantwortliche Stelle entscheidet allein oder gemeinsam mit anderen über die Zwecke und Mittel der
        Verarbeitung von personenbezogenen Daten (z.B. Namen, Kontaktdaten o. Ä.).
      </p>

      <h3 :class="headlineClasses">
        Widerruf Ihrer Einwilligung zur Datenverarbeitung
      </h3>
      <p :class="textClasses">
        Nur mit Ihrer ausdrücklichen Einwilligung sind einige Vorgänge der Datenverarbeitung möglich. Ein Widerruf
        Ihrer bereits erteilten Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine formlose Mitteilung
        per
        E-Mail. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
      </p>

      <h3 :class="headlineClasses">
        Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde
      </h3>
      <p :class="textClasses">
        Als Betroffener steht Ihnen im Falle eines datenschutzrechtlichen Verstoßes ein Beschwerderecht bei der
        zuständigen Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde bezüglich datenschutzrechtlicher Fragen ist der
        Landesdatenschutzbeauftragte des Bundeslandes, in dem sich der Sitz unseres Unternehmens befindet. Der
        folgende
        Link stellt eine Liste der Datenschutzbeauftragten sowie deren Kontaktdaten bereit: <a
          href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html"
          target="_blank"
        >https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html</a>.
      </p>

      <h3 :class="headlineClasses">
        Recht auf Datenübertragbarkeit
      </h3>
      <p :class="textClasses">
        Ihnen steht das Recht zu, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags
        automatisiert verarbeiten, an sich oder an Dritte aushändigen zu lassen. Die Bereitstellung erfolgt in einem
        maschinenlesbaren Format. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen
        verlangen, erfolgt dies nur, soweit es technisch machbar ist.
      </p>

      <h3 :class="headlineClasses">
        Recht auf Auskunft, Berichtigung, Sperrung, Löschung
      </h3>
      <p :class="textClasses">
        Sie haben jederzeit im Rahmen der geltenden gesetzlichen Bestimmungen das Recht auf unentgeltliche Auskunft
        über Ihre gespeicherten personenbezogenen Daten, Herkunft der Daten, deren Empfänger und den Zweck der
        Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Diesbezüglich und
        auch zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit über die im Impressum
        aufgeführten Kontaktmöglichkeiten an uns wenden.
      </p>

      <h3 :class="headlineClasses">
        SSL- bzw. TLS-Verschlüsselung
      </h3>
      <p :class="textClasses">
        Aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, die Sie an uns als
        Seitenbetreiber
        senden, nutzt unsere Website eine SSL-bzw. TLS-Verschlüsselung. Damit sind Daten, die Sie über diese Website
        übermitteln, für Dritte nicht mitlesbar. Sie erkennen eine verschlüsselte Verbindung an der „https://“
        Adresszeile Ihres Browsers und am Schloss-Symbol in der Browserzeile.
      </p>

      <h3 :class="headlineClasses">
        Server-Log-Dateien
      </h3>
      <p :class="textClasses">
        In Server-Log-Dateien erhebt und speichert der Provider der Website automatisch Informationen, die Ihr
        Browser
        automatisch an uns übermittelt. Dies sind:
      </p>
      <ul>
        <li>Besuchte Seite auf unserer Domain</li>
        <li>Datum und Uhrzeit der Serveranfrage</li>
        <li>Browsertyp und Browserversion</li>
        <li>Verwendetes Betriebssystem</li>
        <li>Referrer URL</li>
        <li>Hostname des zugreifenden Rechners</li>
        <li>IP-Adresse</li>
      </ul>
      <p :class="textClasses">
        Es findet keine Zusammenführung dieser Daten mit anderen Datenquellen statt. Grundlage der Datenverarbeitung
        bildet Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur Erfüllung eines Vertrags oder
        vorvertraglicher Maßnahmen gestattet.
      </p>

      <h3 :class="headlineClasses">
        Registrierung auf dieser Website
      </h3>
      <p :class="textClasses">
        Zur Nutzung bestimmter Funktionen können Sie sich auf unserer Website registrieren. Die übermittelten Daten
        dienen ausschließlich zum Zwecke der Nutzung des jeweiligen Angebotes oder Dienstes. Bei der Registrierung
        abgefragte Pflichtangaben sind vollständig anzugeben. Andernfalls werden wir die Registrierung ablehnen.
      </p>
      <p :class="textClasses">
        Im Falle wichtiger Änderungen, etwa aus technischen Gründen, informieren wir Sie per E-Mail. Die E-Mail wird
        an
        die Adresse versendet, die bei der Registrierung angegeben wurde.
      </p>
      <p :class="textClasses">
        Die Verarbeitung der bei der Registrierung eingegebenen Daten erfolgt auf Grundlage Ihrer Einwilligung (Art.
        6
        Abs. 1 lit. a DSGVO). Ein Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit möglich. Für den
        Widerruf
        genügt eine formlose Mitteilung per E-Mail. Die Rechtmäßigkeit der bereits erfolgten Datenverarbeitung bleibt
        vom Widerruf unberührt.
      </p>
      <p :class="textClasses">
        Wir speichern die bei der Registrierung erfassten Daten während des Zeitraums, den Sie auf unserer Website
        registriert sind. Ihren Daten werden gelöscht, sollten Sie Ihre Registrierung aufheben. Gesetzliche
        Aufbewahrungsfristen bleiben unberührt.
      </p>

      <h3 :class="headlineClasses">
        Kontaktformular
      </h3>
      <p :class="textClasses">
        Per Kontaktformular übermittelte Daten werden einschließlich Ihrer Kontaktdaten gespeichert, um Ihre Anfrage
        bearbeiten zu können oder um für Anschlussfragen bereitzustehen. Eine Weitergabe dieser Daten findet ohne Ihre
        Einwilligung nicht statt.
      </p>
      <p :class="textClasses">
        Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt ausschließlich auf Grundlage Ihrer
        Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Ein Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit
        möglich. Für den Widerruf genügt eine formlose Mitteilung per E-Mail. Die Rechtmäßigkeit der bis zum Widerruf
        erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.
      </p>
      <p :class="textClasses">
        Über das Kontaktformular übermittelte Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre
        Einwilligung zur Speicherung widerrufen oder keine Notwendigkeit der Datenspeicherung mehr besteht. Zwingende
        gesetzliche Bestimmungen - insbesondere Aufbewahrungsfristen - bleiben unberührt.
      </p>

      <h3 :class="headlineClasses">
        Speicherdauer von Beiträgen und Kommentaren
      </h3>
      <p :class="textClasses">
        Beiträge und Kommentare sowie damit in Verbindung stehende Daten, wie beispielsweise IP-Adressen, werden
        gespeichert. Der Inhalt verbleibt auf unserer Website, bis er vollständig gelöscht wurde oder aus rechtlichen
        Gründen gelöscht werden musste.
      </p>
      <p :class="textClasses">
        Die Speicherung der Beiträge und Kommentare erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a
        DSGVO). Ein Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine
        formlose Mitteilung per E-Mail. Die
        Rechtmäßigkeit bereits erfolgter Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.
      </p>

      <h3 :class="headlineClasses">
        Abonnieren von Posts
      </h3>
      <p :class="textClasses">
        Sie können als Nutzer unserer Website nach erfolgter Anmeldung Posts abonnieren. Mit einer
        Bestätigungs-E-Mail prüfen wir, ob Sie der Inhaber der angegebenen E-Mail-Adresse sind. Sie können die
        Abo-Funktion für Kommentare jederzeit über einen Link,
        der sich in einer Abo-Mail befindet, abbestellen. Zur Einrichtung des Abonnements eingegebene Daten werden im
        Falle der Abmeldung gelöscht. Sollten diese Daten für andere Zwecke und an anderer Stelle an uns übermittelt
        worden sein, verbleiben diese
        weiterhin bei uns.
      </p>

      <h3 :class="headlineClasses">
        Newsletter-Daten
      </h3>
      <p :class="textClasses">
        Zum Versenden unseres Newsletters benötigen wir von Ihnen eine E-Mail-Adresse. Eine Verifizierung der
        angegebenen E-Mail-Adresse ist notwendig und der Empfang des Newsletters ist einzuwilligen. Ergänzende Daten
        werden nicht erhoben oder sind freiwillig.
        Die Verwendung der Daten erfolgt ausschließlich für den Versand des Newsletters.
      </p>
      <p :class="textClasses">
        Die bei der Newsletteranmeldung gemachten Daten werden ausschließlich auf Grundlage Ihrer Einwilligung (Art.
        6
        Abs. 1 lit. a DSGVO) verarbeitet. Ein Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit möglich. Für
        den Widerruf genügt eine formlose
        Mitteilung per E-Mail oder Sie melden sich über den "Austragen"-Link im Newsletter ab. Die Rechtmäßigkeit der
        bereits erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.
      </p>
      <p :class="textClasses">
        Zur Einrichtung des Abonnements eingegebene Daten werden im Falle der Abmeldung gelöscht. Sollten diese Daten
        für andere Zwecke und an anderer Stelle an uns übermittelt worden sein, verbleiben diese weiterhin bei
        uns.
      </p>

      <h3 :class="headlineClasses">
        YouTube
      </h3>
      <p :class="textClasses">
        Für Integration und Darstellung von Videoinhalten nutzt unsere Website Plugins von YouTube. Anbieter des
        Videoportals ist die YouTube, LLC, 901 Cherry Ave., San Bruno, CA 94066, USA.
      </p>
      <p :class="textClasses">
        Bei Aufruf einer Seite mit integriertem YouTube-Plugin wird eine Verbindung zu den Servern von YouTube
        hergestellt. YouTube erfährt hierdurch, welche unserer Seiten Sie aufgerufen haben.
      </p>
      <p :class="textClasses">
        YouTube kann Ihr Surfverhalten direkt Ihrem persönlichen Profil zuzuordnen, sollten Sie in Ihrem YouTube
        Konto
        eingeloggt sein. Durch vorheriges Ausloggen haben Sie die Möglichkeit, dies zu unterbinden.
      </p>
      <p :class="textClasses">
        Die Nutzung von YouTube erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote. Dies
        stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.
      </p>
      <p :class="textClasses">
        Einzelheiten zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von YouTube unter: <a
          href="https://www.google.de/intl/de/policies/privacy"
        >https://www.google.de/intl/de/policies/privacy</a>.
      </p>

      <h3 :class="headlineClasses">
        Cookies
      </h3>
      <p :class="textClasses">
        Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät
        speichert.
        Cookies helfen uns dabei, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
      </p>
      <p :class="textClasses">
        Einige Cookies sind “Session-Cookies.” Solche Cookies werden nach Ende Ihrer Browser-Sitzung von selbst
        gelöscht. Hingegen bleiben andere Cookies auf Ihrem Endgerät bestehen, bis Sie diese selbst löschen. Solche
        Cookies helfen uns, Sie bei Rückkehr auf
        unserer Website wiederzuerkennen.
      </p>
      <p :class="textClasses">
        Mit einem modernen Webbrowser können Sie das Setzen von Cookies überwachen, einschränken oder unterbinden.
        Viele Webbrowser lassen sich so konfigurieren, dass Cookies mit dem Schließen des Programms von selbst
        gelöscht
        werden. Die Deaktivierung von Cookies
        kann eine eingeschränkte Funktionalität unserer Website zur Folge haben.
      </p>
      <p :class="textClasses">
        Das Setzen von Cookies, die zur Ausübung elektronischer Kommunikationsvorgänge oder der Bereitstellung
        bestimmter, von Ihnen erwünschter Funktionen (z.B. Warenkorb) notwendig sind, erfolgt auf Grundlage von Art. 6
        Abs. 1 lit. f DSGVO. Als Betreiber dieser
        Website haben wir ein berechtigtes Interesse an der Speicherung von Cookies zur technisch fehlerfreien und
        reibungslosen Bereitstellung unserer Dienste. Sofern die Setzung anderer Cookies (z.B. für Analyse-Funktionen)
        erfolgt, werden diese in dieser
        Datenschutzerklärung separat behandelt.
      </p>
    </BaseContainer>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: 'Alles im Rudel | Datenschutz'
  },
  data() {
    return {
      headlineClasses: 'text-h5 mb-4 pt-6',
      textClasses: ''
    };
  }
};
</script>
