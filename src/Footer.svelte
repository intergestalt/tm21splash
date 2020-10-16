<script>
  import Ksb from "./Ksb.svelte";
  import A from './A.svelte'

  export let language

  const links1 = [
    {
      title: "News",
      en: "https://transmediale.de/",
      de: "https://transmediale.de/de"
    },
    {
      title: "Press",
      en: "https://transmediale.de/press",
      de: "https://transmediale.de/de/press"
    },
    {
      title: "Newsletter",
    en: "https://transmediale.de/newsletter",
    de: "https://transmediale.de/de/newsletter"
    },
    {
      title: "Telegram",
      newtab: true,
      en: "https://t.me/transmediale",
      de: "https://t.me/transmediale"
    },
    {
      title: "See all our supporters",
      en: "https://transmediale.de/partners",
      de: "https://transmediale.de/de/partners "
    },
  ]
  const links2 = [
    {
      title: "Data Privacy",
      en: "https://transmediale.de/data-privacy ",
      de: "https://transmediale.de/de/data-privacy"
    },
    {
      title: "Imprint",
      en: "https://transmediale.de/imprint",
      de: "https://transmediale.de/de/imprint"
    }
  ];

  const t = link => link[language]
</script>

<style>
  footer {
    font-size: 18px;
    line-height: 25px;
    text-align: center;
    padding: 2.5em 10vw;
  }
  @media (max-width: 500px) {
    footer {
      font-size: 14px;
      line-height: 19px;
    }
  }
  p {
    margin-bottom: 1.5em;
  }
  .links1 span:not(:first-child),
  .links2 span:not(:first-child) {
    margin-left: 1ex;
  }
  .links2 {
    padding-top: 1.5em;
  }
  a {
    pointer-events: all;
  }
</style>

<footer>

  <p class="links1">
    {#each links1 as link}
      <span>
        <A text={link.title} href={t(link)} newtab={link.newtab} />
      </span>
    {/each}
  </p>

  <p>
    transmediale e.V., Gerichstr. 35, D-13347 Berlin
    <br />
    +49 (0)30 959 994 231, info[at]transmediale.de
  </p>

  <p>
    The festival has been funded as a cultural institution of excellence by
    Kulturstiftung des Bundes since 2004. Additional funding by Senatsverwaltung
    für Kultur Berlin, European Union’s Horizon 2020, Bundeszentrale für
    politische Bildung and Medienboard Berlin Brandenburg. See all our
    supporters.
  </p>

  <p>
    <Ksb />
  </p>

  <p class="links2">
    {#each links2 as link}
      <span>
        <A text={link.title} href={t(link)} newtab={link.newtab} />
      </span>
    {/each}
  </p>

</footer>
