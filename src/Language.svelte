<script>
  export let visible, setLanguage, language
</script>

<nav class:visible={visible}>
  <ul>
    <li on:click={ e => setLanguage("en") } class:active={language === "en"}>
      <abbr title="English">en</abbr>
    </li>
    <li class="separator">  / </li>
    <li on:click={ e => setLanguage("de") } class:active={language === "de"}>
      <abbr title="Deutsch">de</abbr>
    </li>    
  </ul>
</nav>

<style>
  nav {
    opacity: 1;
    transition: opacity 0.3s;
    position: fixed;
    top:30px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;
    font-size: 24px;
    line-height: 25px;
  }
  @media (max-width: 500px) {
    nav {
      top:15px;
      font-size: 18px;
      line-height: 25px;
    }
  }
  li {
    display: inline;
    white-space: pre;
    position: relative;
    bottom: 0.1ex;
  }
  abbr {
    position: relative;
    top: 0.1ex;
  }
  li.active {
    border-bottom: solid 0.2ex;
  }
  li:not(.active):not(.separator) {
    cursor: pointer;
  }
  nav:not(.visible) {
    opacity: 0;
  }
  abbr[title] {
    border-bottom: none !important;
    cursor: inherit !important;
    text-decoration: none !important;
  }
</style>