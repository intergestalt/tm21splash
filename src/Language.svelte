<script>
  import { hover } from './stores.js';

  export let visible, setLanguage, language

  const toggleHovering = toggle => hover.update(()=>toggle);

</script>

<nav class:visible={visible}>
  <ul>
    <li on:click={ e => setLanguage("en") } class:active={language === "en"} on:mouseenter={()=>toggleHovering(language !== "en" && true)} on:mouseleave={()=>toggleHovering(false)}>
      <abbr title="English">en</abbr>
    </li>
    <li class="separator">  / </li>
    <li on:click={ e => setLanguage("de") } class:active={language === "de"} on:mouseenter={()=>toggleHovering(language !== "de" && true)} on:mouseleave={()=>toggleHovering(false)}>
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
    pointer-events: none;
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
    pointer-events: all;
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