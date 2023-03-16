<script>
export default {
  name: "HeroSection",
};
</script>

<template>
  <div class="hero-container" id="home">
    <div class="hero-wrapper">
      <div class="profile"></div>
      <span class="intro">Hi, I'm Subrat</span>
      <h1 class="title">
        Turn your <span class="title-design">Design</span> into
        <span class="title-code">Code</span>
      </h1>
      <h3 class="desc">Front-end developer from india 🇮🇳.</h3>
      <a
        href="https://www.linkedin.com/in/subratkumarjena/"
        target="_blank"
        class="connect-btn"
        >Connect With Me</a
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero-container {
  padding: 0 10%;
  height: 100vh;

  .hero-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: "Manrope", sans-serif;

    .profile {
      height: 150px;
      width: 150px;
      background: #29323c;
      border-radius: 50px;
      margin: 1rem 0;
    }

    .intro {
      font-weight: 600;
      font-size: 1.3rem;
    }

    .title {
      margin: 0.5rem;
      line-height: 3rem;
      font-weight: 600;

      .title-design {
        color: #29323c;
        background-image: linear-gradient(-20deg, #8d21f881 10%, #fd17b0cb 90%);
        padding: 0.1rem 1rem;
        border-radius: 50px;
      }

      .title-code {
        color: #29323c;
        background-image: linear-gradient(-20deg, #00cdac 0%, #8ddad5 100%);
        padding: 0.1rem 1rem;
        border-radius: 50px;
      }
    }

    .desc {
      font-weight: 600;
      width: 60%;
      text-align: center;
      line-height: 1.8rem;
      margin: 0.5rem;
      text-transform: capitalize;
    }

    .connect-btn {
      margin-top: 0.8rem;
      outline: none;
      background: #ece9e6; /* fallback for old browsers */
      background: -webkit-linear-gradient(
        to right,
        #ffffff,
        #ece9e6
      ); /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(
        to right,
        #ffffff,
        #ece9e6
      ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      border: 1px solid #29323c;
      padding: 0.5rem 1rem;
      font-size: 1.05rem;
      border-radius: 13px;
      font-family: "Manrope", sans-serif;
      letter-spacing: 0.02em;
      cursor: pointer;

      &:hover {
        background: #e4e0dc;
        background: -webkit-linear-gradient(
          to right,
          #ffffff,
          #e6e2de
        ); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(
          to right,
          #ffffff,
          #e2dfdc
        ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      }
    }
  }
}
</style>
