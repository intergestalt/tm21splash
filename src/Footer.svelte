<script>
  import Ksb from './Ksb.svelte'
</script>

<footer>

  <p class="links1">
    <a href="#">News</a>
    <a href="#">Press</a>
    <a href="#">Newsletter</a>
    <a href="#">Telegram</a>
  </p>

  <p>
    transmediale e.V., Gerichstr. 35, D-13347 Berlin <br />
    +49 (0)30 959 994 231, info[at]transmediale.de
  </p>

  <p>
    The festival has been funded as a cultural institution of excellence by Kulturstiftung des Bundes since 2004. Additional funding by Senatsverwaltung für Kultur Berlin, European Union’s Horizon 2020, Bundeszentrale für politische Bildung and Medienboard Berlin Brandenburg. See all our supporters.
  </p>

  <p>
    <Ksb />
  </p>
  
  <p class="links2">
    <a href="#">Data privacy</a>
    <a href="#">Imprint</a>
  </p>

</footer>

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
  .links1 a:not(:first-child),
  .links2 a:not(:first-child) {
    margin-left: 1ex;
  }
  .links2 {
    padding-top: 1.5em
  }
</style>