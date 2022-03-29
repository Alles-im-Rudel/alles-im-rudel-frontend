<template>
  <div class="articles-of-association">
    <BaseSectionTitle>
      Vereinssatzung
    </BaseSectionTitle>

    <BaseContainer class="mb-16">
      <h3 :class="headlineClasses">
        § 1 Name, Sitz, Zweck & Eintragung
      </h3>

      <div class="articles-of-association-list">
        <ListItem label="1">
          Der Verein führt den Namen <strong>Alles im Rudel</strong>.
        </ListItem>
        <ListItem label="2">
          Der Sitz des Vereins ist Elmshorn, Schleswig-Holstein, Deutschland.
        </ListItem>
        <ListItem label="3">
          Der Zweck des Vereins ist der Erhalt und die Förderung einer sozialen Einheit, zu welcher all jene gehören,
          welche sich mit der sozialen Gruppendynamik „Alles im Rudel“ identifizieren und allgemeinhin von der
          Gruppendynamik als Teil dieser sozialen Einheit erachtet werden. Der Satzungszweck wird insbesondere durch
          einen regelmäßigen sozialen Austausch der Vereinsmitglieder erfüllt, welcher unter anderem auch in
          verschiedenen Vereinssparten erfolgen kann.
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
          Der Verein soll ins Vereinsregister eingetragen werden.
        </ListItem>
      </div>

      <h3 :class="headlineClasses">
        § 2 Mitglieder
      </h3>

      <div class="articles-of-association-list">
        <ListItem label="1">
          Jede natürliche Person kann Mitglied des Vereins werden.
        </ListItem>
        <ListItem label="2">
          Vereinsmitglieder bleiben bis zum Austritt, Ausschluss oder Tod als Mitglieder im Verein.
        </ListItem>
        <ListItem label="3">
          Falls mindestens ein Drittel der Vereinsmitglieder beim Vorstand einen Antrag auf eine außerordentliche
          Mitgliederversammlung einreicht, ist der Vorstand dazu verpflichtet, eine solche binnen zweier Wochen
          einzuberufen.
        </ListItem>
      </div>

      <h3 :class="headlineClasses">
        § 3 Eintritt der Mitglieder
      </h3>

      <div class="articles-of-association-list">
        <ListItem label="1">
          Um ein Mitglied des Vereins werden zu können, muss ein Mitgliedsaufnahmeantrag in elektronischer Form beim
          Vorstand gestellt werden.
        </ListItem>
        <ListItem label="2">
          Über die Aufnahme einer Person als Vereinsmitglied entscheidet der Vorstand.
        </ListItem>
        <ListItem label="3">
          Die Entscheidung des Vorstands über die Aufnahme einer Person in den Verein und die Bekanntgabe dieser
          Entscheidung hat binnen zweier Wochen zu erfolgen.
        </ListItem>
      </div>

      <h3 :class="headlineClasses">
        § 4 Austritt der Mitglieder
      </h3>

      <div class="articles-of-association-list">
        <ListItem label="1">
          Vereinsmitglieder können vom Vorstand mit sofortiger Wirkung aus dem Verein ausgeschlossen werden.
        </ListItem>
        <ListItem label="2">
          Vereinsmitglieder können aus dem Verein austreten, indem sie dem Vorstand ihren Austritt in elektronischer
          Form mitteilen. Der Austritt wird daraufhin zum Ende des Folgemonats wirksam.
        </ListItem>
      </div>

      <h3 :class="headlineClasses">
        § 5 Mitgliedsbeiträge
      </h3>

      <div class="articles-of-association-list">
        <ListItem label="1">
          Jedes Mitglied hat monatlich den Mitgliedsbeitrag an das Vereinskonto zu entrichten.
        </ListItem>
        <ListItem label="2">
          Die Höhe des monatlichen Mitgliedsbeitrags wird spätestens binnen zweier Wochen nach der Neuwahl des Vorstands
          durch diesen bekanntgegeben und dieser neue Mitgliedsbeitrag gilt daraufhin ab dem Ende des Folgemonats.
        </ListItem>
        <ListItem label="3">
          Je nach Spartenzugehörigkeit und Regelung innerhalb der Sparte kann es zusätzlich zu dem
          Vereinsmitgliedsbeitrag noch zu individuellen Spartenbeiträgen kommen, welche ebenfalls an das Vereinskonto zu
          entrichten sind.
        </ListItem>
      </div>

      <h3 :class="headlineClasses">
        § 6 Organe des Vereins
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
        § 7 Vorstand
      </h3>

      <div class="articles-of-association-list">
        <ListItem label="1">
          Der Vorstand setzt sich aus dem Vorstandsvorsitzenden, dem stellvertretenden Vorstandsvorsitzenden und dem
          Schatzmeister zusammen, welche jeweils durch die Mitgliederversammlung gewählt werden und bis zur Neuwahl im
          Amt bleiben.
        </ListItem>
        <ListItem label="2">
          Jegliche Beschlüsse des Vorstands sind nur gültig, wenn diese einstimmig beschlossen wurden. Dies gilt sowohl
          bei internen als auch bei externen Vereinsangelegenheiten.
        </ListItem>
        <ListItem label="3">
          Ausschließlich der gesamte Vorstand vertritt den Verein als gesetzlicher Vertreter in gerichtlichen und
          außergerichtlichen Angelegenheiten.
        </ListItem>
        <ListItem label="4">
          Der Vorstand haftet dem Verein für einen bei der Wahrnehmung seiner Pflichten verursachten Schaden nur bei
          Vorliegen von Vorsatz oder grober Fahrlässigkeit.
        </ListItem>
        <ListItem label="5">
          Der Vorstand kann einzelne Vereinsmitglieder mit besonderen Rechten und Pflichten versehen, welche über die
          Kompetenzen anderer Vereinsmitglieder hinausgehen.
        </ListItem>
      </div>

      <h3 :class="headlineClasses">
        § 8 Mitgliederversammlung
      </h3>

      <div class="articles-of-association-list">
        <ListItem label="1">
          Die Mitgliederversammlung wird jährlich zu Beginn des dritten Quartals binnen zweier Wochen vom Vorstand
          einberufen.
        </ListItem>
        <ListItem label="2">
          Die Mitglieder werden spätestens eine Woche vor der Mitgliederversammlung zu dieser in elektronischer Form
          durch den Vorstand eingeladen.
        </ListItem>
        <ListItem label="3">
          Die Mitgliederversammlung wird durch den Vorstand geleitet, welcher ebenfalls das Protokoll führt. Im
          Anschluss an die Mitgliederversammlung wird das Protokoll durch den protokollführenden Vorstand unterzeichnet.
        </ListItem>
        <ListItem label="4">
          Auf der Mitgliederversammlung hat der Vorstand den Vereinsmitgliedern die Finanzen des Vereins offenzulegen.
        </ListItem>
        <ListItem label="5">
          Zur Beschlussfassung der Mitgliederversammlung ist die einfache Mehrheit an Stimmen der erschienenen
          Vereinsmitglieder erforderlich.
        </ListItem>
        <ListItem label="6">
          Alle vier Jahre entlastet die Mitgliederversammlung den Vorstand und wählt diesen anschließend neu. Bei einer
          durch die Mitglieder über den Vorstand veranlassten außerordentlichen Mitgliederversammlung wird der Vorstand
          ebenfalls entlastet und anschließend neu gewählt.
        </ListItem>
        <ListItem label="7">
          Neben der jährlich stattfindenden, ordentlichen Mitgliederversammlung kann der Vorstand jederzeit eine
          außerordentliche Mitgliederversammlung einberufen, welche wie eine ordentliche Mitgliederversammlung fungiert.
        </ListItem>
      </div>

      <h3 :class="headlineClasses">
        § 9 Sparten
      </h3>

      <div class="articles-of-association-list">
        <ListItem label="1">
          Eine Sparte ist ein gesonderter Vereinsbereich, welcher sich zusätzlich zum eigentlichen Vereinszweck noch mit
          einem anderen Themenbereich beschäftigt.
        </ListItem>
        <ListItem label="2">
          Über die Einführung jeglicher Sparten entscheidet der Vorstand.
        </ListItem>
        <ListItem label="3">
          Jede Sparte muss mindestens einen Spartenzuständigen haben.
        </ListItem>
        <ListItem label="4">
          Die Ernennung und die Abberufung der Spartenzuständigen erfolgt durch den Vorstand und ist mit sofortiger
          Wirkung gültig.
        </ListItem>
        <ListItem label="5">
          Um einer Sparte beizutreten, können Vereinsmitglieder bei den jeweiligen Spartenzuständigen einen
          Spartenaufnahmeantrag in elektronischer Form stellen.
        </ListItem>
        <ListItem label="6">
          Die Entscheidung der Spartenzuständigen über die Aufnahme eines Vereinsmitglieds in die Sparte und die
          Bekanntgabe dieser Entscheidung hat binnen zweier Wochen zu erfolgen.
        </ListItem>
        <ListItem label="7">
          Bezüglich ihrer Sparte haben die Spartenzuständigen den Vorstand unverzüglich über den Eintritt und den
          Austritt von Spartenmitgliedern in Kenntnis zu setzen.
        </ListItem>
        <ListItem label="8">
          Spartenzuständige können für ihre Sparte einen gesonderten monatlichen Spartenbeitrag festlegen, welcher
          jedoch erst ab dem Ende des Folgemonats gilt und zuvor vom Vorstand genehmigt werden muss.
        </ListItem>
        <ListItem label="9">
          Der Spartenbeitrag ist von den Spartenmitgliedern zusätzlich zum Vereinsmitgliedsbeitrag ebenfalls an das
          Vereinskonto zu entrichten.
        </ListItem>
        <ListItem label="10">
          Spartenmitglieder können aus der jeweiligen Sparte austreten, indem sie den Spartenzuständigen ihren Austritt
          in elektronischer Form mitteilen. Der Austritt wird daraufhin zum Ende des Folgemonats wirksam.
        </ListItem>
        <ListItem label="11">
          Über die Abschaffung jeglicher Sparten entscheidet der Vorstand.
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
      </div>

      <div class="pb-2 mt-12 text-center">
        Elmshorn, 08.01.2022
      </div>
    </BaseContainer>
  </div>
</template>

<script>
import ListItem from '@/views/static/articles-of-association/parts/ListItem';

export default {
  components: {ListItem},
  metaInfo: {
    title: 'Alles im Rudel | Vereinssatzung'
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