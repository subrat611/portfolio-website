<script>
export default {
  name: "NavBar",
};
</script>

<template>
  <nav class="nav-wrapper">
    <h5 class="nav-logo"><nuxt-link to="/">subrat</nuxt-link></h5>
    <ul class="nav-mid-lists">
      <li><nuxt-link to="/">Home</nuxt-link></li>
      <li><nuxt-link to="/">About</nuxt-link></li>
      <li><nuxt-link to="/">Experience</nuxt-link></li>
      <li><nuxt-link to="/">Work</nuxt-link></li>
      <li><nuxt-link to="/">Contact</nuxt-link></li>
    </ul>
    <ul class="nav-end-lists">
      <li><a>social links</a></li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.nav-wrapper {
  position: fixed;
  width: 100vw;
  padding: 0.5rem 10%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .nav-logo {
    font-family: "Comforter Brush", cursive;
    font-size: 2.5rem;
    letter-spacing: 0.1em;
    transform: rotate(-2deg);
    cursor: pointer;
  }

  .nav-mid-lists {
    display: flex;

    li {
      margin: 0 1rem;
      font-family: "Manrope", sans-serif;
      font-weight: 500;

      a:hover {
        color: #383838;
      }
    }
  }

  .nav-end-lists {
    display: flex;

    li {
      margin: 0 1rem;
      font-family: "Manrope", sans-serif;
      font-weight: 500;
    }
  }
}
</style>
