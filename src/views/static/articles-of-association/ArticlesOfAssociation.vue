<template>
  <div class="articles-of-association">
    <BaseSectionTitle>
      Vereinssatzung
    </BaseSectionTitle>

    <BaseContainer class="mb-16">
      <h3 :class="headlineClasses">
        § 1 Name, Sitz, Logo & Geschäftsjahr
      </h3>

      <div class="articles-of-association-list">
        <ListItem label="1">
          Der Verein führt den Namen <strong>Alles im Rudel e.V.</strong>.
         </ListItem>
        <ListItem label="2">
          Der Verein ist unter der Nummer VR-2355-PI in das Vereinsregister beim Amtsgericht Pinneberg eingetragen.
        </ListItem>
        <ListItem label="3">
          Der Sitz des Vereins ist Elmshorn, Schleswig-Holstein, Deutschland.
        </ListItem>
        <ListItem label="4">
          Das Logo des Vereins ist wie nachstehend:
          <div class="articles-of-association-logo my-8">
            <img
              src="/assets/logos/logo-slim.png"
              alt="Logo"
            >
          </div>
        </ListItem>
        <ListItem label="5">
          Das Geschäftsjahr des Vereins ist das Kalenderjahr.
        </ListItem>
      </div>

      <h3 :class="headlineClasses">
        § 2 Zweck & Gemeinnützigkeit
      </h3>

      <div class="articles-of-association-list">
        <ListItem label="1">
          Der Zweck des Vereins ist die Förderung des Sports und der Kultur. Dieser Satzungszweck wird insbesondere
          durch die Organisation und Durchführung von sportlichen und kulturellen Aktivitäten und Events verwirklicht.
        </ListItem>
        <ListItem label="2">
          Der Verein ist selbstlos tätig; er verfolgt ausschließlich und unmittelbar gemeinnützige Zwecke im Sinne
          des Abschnitts „Steuerbegünstigte Zwecke“ nach §§ 51 ff. der Abgabenordnung. Mittel des Vereins dürfen
          nur für satzungsmäßige Zwecke genutzt werden. Der Verein verfolgt nicht in erster Linie eigenwirtschaftliche Ziele.
        </ListItem>
        <ListItem label="3">
          Mitglieder erhalten keine Zuwendungen aus Mitteln des Vereins, keine Gewinnanteile und keine unangemessenen
          Vergütungen.
        </ListItem>
        <ListItem label="4">
          Es darf keine Person durch Ausgaben, die dem Zweck des Vereins fremd sind, oder durch unverhältnismäßig hohe
          Vergütungen begünstigt werden.
        </ListItem>
      </div>

      <h3 :class="headlineClasses">
        § 3 Mitglieder, Eintritt & Austritt
      </h3>

      <div class="articles-of-association-list">
        <ListItem label="1">
          Jede natürliche Person kann Mitglied des Vereins werden.
        </ListItem>
        <ListItem label="2">
          Um ein Mitglied des Vereins werden zu können, muss ein Mitgliedsaufnahmeantrag in elektronischer Form beim
          Vorstand gestellt werden.
        </ListItem>
        <ListItem label="3">
          Über die Aufnahme einer Person als Vereinsmitglied entscheidet der Vorstand.
        </ListItem>
        <ListItem label="4">
          Die Entscheidung des Vorstands über die Aufnahme einer Person in den Verein und die Bekanntgabe dieser
          Entscheidung hat binnen zweier Wochen zu erfolgen.
        </ListItem>
        <ListItem label="5">
          Über den Ausschluss eines Mitglieds entscheidet der Vorstand. Vor der Entscheidung ist dem Mitglied Gelegenheit
          zur Stellungnahme zu geben. Der Ausschluss ist in Textform zu begründen und dem Mitglied bekannt zu machen.
        </ListItem>
        <ListItem label="6">
          Vereinsmitglieder können aus dem Verein austreten, indem sie dem Vorstand ihren Austritt in elektronischer
          Form mitteilen. Der Austritt wird daraufhin zum Ende des Folgemonats wirksam.
        </ListItem>
        <ListItem label="7">
          Vereinsmitglieder bleiben bis zum Austritt, Ausschluss oder Tod als Mitglieder im Verein.
        </ListItem>
      </div>

      <h3 :class="headlineClasses">
        § 4 Mitglieds- & Spartenbeiträge
      </h3>

      <div class="articles-of-association-list">
        <ListItem label="1">
          Jedes Vereinsmitglied hat monatlich den Mitgliedsbeitrag und je nach Spartenzugehörigkeit und Regelung innerhalb
          der Sparte gegebenenfalls zusätzlich anfallende Spartenbeiträge an das Vereinskonto zu entrichten.
        </ListItem>
        <ListItem label="2">
          Die Höhe des monatlichen Mitgliedsbeitrags wird per Beschluss auf der Mitgliederversammlung festgelegt.
        </ListItem>
        <ListItem label="3">
          Zusätzlich kann jede Sparte auf Vorschlag des Spartenleiters einen individuellen Spartenbeitrag erheben. Dieser
          wird von den in der Mitgliederversammlung anwesenden Spartenmitgliedern mit einfacher Mehrheit beschlossen.
          Bei Neugründung einer Sparte wird der erstmalige Spartenbeitrag durch den Spartenleiter festgelegt und bedarf
          zum Inkrafttreten der Genehmigung durch den Vorstand.
        </ListItem>
        <ListItem label="4">
          Der Mitgliedsbeitrag und gegebenenfalls festgelegte Spartenbeiträge gelten nach einer neuen Festlegung erst zum
          Ende des Folgemonats.
        </ListItem>
        <ListItem label="5">
          Erfolgt die Zahlung des Mitgliedsbeitrags und gegebenenfalls der Spartenbeiträge trotz Fälligkeit nicht oder
          kann ein Beitrag aufgrund fehlender Kontodeckung mittels des SEPA-Lastschriftverfahrens nicht eingezogen
          werden, trägt das Mitglied die dem Verein dadurch entstehenden Kosten. Darüber hinaus kann der Verein nach
          erfolgloser Mahnung Mahngebühren erheben.
        </ListItem>
        <ListItem label="6">
          Der aktuelle Mitgliedsbeitrag, jeweils alle aktuellen Spartenbeiträge und die Mahngebühren sind auf der
          Website des Vereins öffentlich einsehbar.
        </ListItem>
      </div>

      <h3 :class="headlineClasses">
        § 5 Organe des Vereins
      </h3>

      <div class="articles-of-association-list">
        <ListItem label="1">
          Die Organe des Vereins sind der Vorstand und die Mitgliederversammlung.
        </ListItem>
        <ListItem label="2">
          Vereinssparten sind keine Organe des Vereins.
        </ListItem>

      </div>

      <h3 :class="headlineClasses">
        § 6 Vorstand
      </h3>

      <div class="articles-of-association-list">
        <ListItem label="1">
          Der Vorstand setzt sich aus dem Vorstandsvorsitzenden, dem stellvertretenden Vorstandsvorsitzenden und
          dem Schatzmeister zusammen, welche jeweils durch die Mitgliederversammlung gewählt werden und bis zur
          Neuwahl im Amt bleiben.
        </ListItem>
        <ListItem label="2">
          Jegliche Beschlüsse des Vorstands sind nur gültig, wenn diese einstimmig beschlossen wurden.
          Dies gilt sowohl bei internen als auch bei externen Vereinsangelegenheiten.
        </ListItem>
        <ListItem label="3">
          Ausschließlich der gesamte Vorstand vertritt den Verein als gesetzlicher Vertreter in gerichtlichen
          und außergerichtlichen Angelegenheiten.
        </ListItem>
        <ListItem label="4">
          Der Vorstand haftet dem Verein für einen bei der Wahrnehmung seiner Pflichten verursachten Schaden nur
          bei Vorliegen von Vorsatz oder grober Fahrlässigkeit.
        </ListItem>
        <ListItem label="5">
          Der Vorstand kann einzelne Vereinsmitglieder mit besonderen Rechten und Pflichten versehen, welche
          über die Kompetenzen anderer Vereinsmitglieder hinausgehen.
        </ListItem>
        <ListItem label="6">
          Der Vorstand ist verpflichtet, den Mitgliedern auf Anfrage Einsicht in die Vereinsfinanzen zu gewähren.
          Hierzu stellt der Vorstand eine aktuelle Übersicht der Einnahmen und Ausgaben sowie der dazugehörigen
          Belege zur Verfügung, soweit nicht schutzwürdige Interessen entgegenstehen.
        </ListItem>
      </div>

      <h3 :class="headlineClasses">
        § 7 Mitgliederversammlung
      </h3>

      <div class="articles-of-association-list">
        <ListItem label="1">
          Die Mitgliederversammlung wird vom Vorstand einberufen und findet einmal jährlich im dritten Quartal
          statt.
        </ListItem>
        <ListItem label="2">
          Die Mitglieder werden spätestens zwei Wochen vor der Mitgliederversammlung zu dieser in elektronischer
          Form durch den Vorstand eingeladen. Diese Einladung enthält eine Übersicht der geplanten
          Tagesordnungspunkte.
        </ListItem>
        <ListItem label="3">
          Die Mitgliederversammlung wird durch den Vorstandsvorsitzenden oder ein anderes vom Vorstand bestimmtes
          Mitglied geleitet. Zu Beginn der Mitgliederversammlung wird per einfacher Mehrheit ein Protokollführer
          gewählt. Das Protokoll ist vom Versammlungsleiter und vom Protokollführer zu unterzeichnen.
        </ListItem>
        <ListItem label="4">
          Auf der Mitgliederversammlung hat der Vorstand den Vereinsmitgliedern die Mitgliederentwicklung und die
          Finanzen des Vereins offenzulegen. Des Weiteren hat der Spartenleiter je Sparte der Mitgliederversammlung
          die wichtigsten Spartenaktivitäten zu berichten.
        </ListItem>
        <ListItem label="5">
          Zur Beschlussfassung der Mitgliederversammlung ist die einfache Mehrheit an Stimmen der erschienenen
          Vereinsmitglieder erforderlich.
        </ListItem>
        <ListItem label="6">
          Alle vier Jahre entlastet die Mitgliederversammlung den Vorstand und wählt diesen anschließend neu.
          Gleichzeitig wählen die anwesenden Spartenmitglieder jeder Sparte den Spartenleiter und den stellvertretenden
          Spartenleiter mit einfacher Mehrheit neu.
        </ListItem>
      </div>

      <h3 :class="headlineClasses">
        § 8 Außerordentliche Mitgliederversammlung
      </h3>

      <div class="articles-of-association-list">
        <ListItem label="1">
          Neben der jährlich stattfindenden, ordentlichen Mitgliederversammlung kann es zu außerordentlichen
          Mitgliederversammlungen kommen.
        </ListItem>
        <ListItem label="2">
          Wenn eine außerordentliche Mitgliederversammlung erforderlich ist, muss diese durch den Vorstand
          binnen zweier Wochen einberufen werden und binnen vier Wochen stattfinden.
        </ListItem>
        <ListItem label="3">
          Eine außerordentliche Mitgliederversammlung kann einstimmig durch den Vorstand einberufen werden
          und fungiert dabei wie eine ordentliche Mitgliederversammlung. Bei Zustimmung von zwei Dritteln
          des Vorstands kann dieser ebenfalls eine außerordentliche Mitgliederversammlung einberufen, auf
          welcher jedoch der gesamte Vorstand, alle Spartenleiter inklusive aller stellvertretenden
          Spartenleiter entlastet und anschließend neugewählt werden müssen.
        </ListItem>
        <ListItem label="4">
          Falls mindestens ein Drittel der Vereinsmitglieder beim Vorstand einen Antrag auf eine
          außerordentliche Mitgliederversammlung einreicht, ist der Vorstand dazu verpflichtet, eine solche
          einzuberufen. Auf dieser außerordentlichen Mitgliederversammlung müssen der gesamte Vorstand, alle
          Spartenleiter inklusive aller stellvertretenden Spartenleiter entlastet und anschließend
          neugewählt werden.
        </ListItem>
      </div>

      <h3 :class="headlineClasses">
        § 9 Sparten
      </h3>

      <div class="articles-of-association-list">
        <ListItem label="1">
          Eine Sparte ist ein gesonderter Vereinsbereich, welcher sich neben dem allgemeinen Vereinszweck zusätzlich
          mit der Förderung eines ausgewählten sportlichen oder kulturellen Aspekts beschäftigt.
        </ListItem>
        <ListItem label="2">
          Zur Einführung einer neuen Sparte können drei Vereinsmitglieder gemeinsam einen formlosen Antrag an den
          Vorstand stellen. Anschließend ist der Vorstand verpflichtet, binnen zweier Wochen über die Einführung der
          Sparte zu entscheiden.
        </ListItem>
        <ListItem label="3">
          Jede Sparte hat einen Spartenleiter und einen stellvertretenden Spartenleiter. Diese beiden Ämter bilden
          zusammen die Spartenleitung. Bei der Neugründung einer Sparte werden der Spartenleiter und der
          stellvertretende Spartenleiter durch den Vorstand ernannt.
        </ListItem>
        <ListItem label="4">
          Spartenleiter können einzelne Spartenmitglieder mit besonderen Rechten und Pflichten versehen, welche über
          die Kompetenzen anderer Spartenmitglieder hinausgehen. Der Vorstand kann derartig vergebene Kompetenzen
          entziehen und dem Spartenleiter das Recht, solche Kompetenzen vergeben zu dürfen, grundsätzlich entziehen.
        </ListItem>
        <ListItem label="5">
          Um einer Sparte beizutreten, können Vereinsmitglieder bei dem zuständigen Spartenleiter einen
          Spartenaufnahmeantrag in elektronischer Form stellen.
        </ListItem>
        <ListItem label="6">
          Die Entscheidung des Spartenleiters über die Aufnahme eines Vereinsmitglieds in die Sparte und die Bekanntgabe
          dieser Entscheidung hat binnen zweier Wochen zu erfolgen.
        </ListItem>
        <ListItem label="7">
          Bezüglich seiner Sparte hat der Spartenleiter den Vorstand unverzüglich über den Eintritt und den Austritt von
          Spartenmitgliedern in Kenntnis zu setzen.
        </ListItem>
        <ListItem label="8">
          Spartenmitglieder können aus der jeweiligen Sparte austreten, indem sie dem Spartenleiter ihren Austritt in
          elektronischer Form mitteilen. Der Austritt wird daraufhin zum Ende des
Folgemonats wirksam.
        </ListItem>
        <ListItem label="9">
          Eine Sparte kann durch Beschluss der Spartenmitglieder auf der Mitgliederversammlung aufgelöst werden. Für
          diesen Beschluss bedarf es einer Mehrheit von drei Vierteln der Stimmen aller Spartenmitglieder.
        </ListItem>
        <ListItem label="10">
          Eine Sparte kann im Rahmen dieser Satzung eigene Regelungen für ihre Mitglieder erlassen. Zur Einführung
          einer neuen Regelung können mindestens drei Spartenmitglieder gemeinsam einen Antrag an die Spartenleitung
          stellen. Die Spartenleitung informiert den Vorstand und entscheidet innerhalb von zwei Wochen über den
          Antrag. Führt eine Regelung zu zusätzlichen Kosten für die Spartenmitglieder, bedarf sie vor Inkrafttreten
          die Genehmigung des Vorstands.
        </ListItem>
      </div>

      <h3 :class="headlineClasses">
        § 10 Auflösung des Vereins
      </h3>

      <div class="articles-of-association-list">
        <ListItem label="1">
          Der Verein kann durch Beschluss der Mitgliederversammlung aufgelöst werden. Für diesen Beschluss bedarf es
          einer Mehrheit von drei Vierteln der Stimmen der Vereinsmitglieder.
        </ListItem>
        <ListItem label="2">
          Bei Auflösung oder Aufhebung des Vereins oder bei Wegfall steuerbegünstigter Zwecke fällt das Vermögen des
          Vereins an den Landessportverband Schleswig-Holstein e.V., welcher dieses unmittelbar und ausschließlich
          für gemeinnützige Zwecke zu verwenden hat.
        </ListItem>
      </div>

      <div class="articles-of-association-list">
        <ListItem label="1">
          Sollten einzelne Bestimmungen dieser Satzung unwirksam oder undurchführbar sein oder werden, bleibt die
          Wirksamkeit der übrigen Bestimmungen unberührt. Anstelle der unwirksamen oder undurchführbaren Bestimmung
          gilt eine Regelung als vereinbart, die dem Sinn und Zweck der unwirksamen Bestimmung möglichst nahekommt.
        </ListItem>
      </div>

      <div class="pb-2 mt-12 text-center">
        Elmshorn, 27.09.2025
      </div>
    </BaseContainer>
  </div>
</template>

<script>
import ListItem from '@/views/static/articles-of-association/parts/ListItem';

export default {
  components: {ListItem},
  metaInfo: {
    title: 'Alles im Rudel e.V. | Vereinssatzung'
  },
  data() {
    return {
      headlineClasses: 'text-h5 mb-6 pt-12 text-center',
      textClasses: ''
    };
  }
};
</script>

<style lang="scss">
.articles-of-association {
  .articles-of-association-logo {
    width: 80%;
    max-width: 275px;
    margin-left: auto;
    margin-right: auto;

    img {
      width: 100%;
    }
  }
}
</style>
