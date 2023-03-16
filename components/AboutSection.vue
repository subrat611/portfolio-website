<script>
export default {
  name: "AboutSection",
};
</script>

<template>
  <div class="about-container">
    <div class="about-wrapper">
      <h1 class="section-title">Skills I Have</h1>
      <div class="skills-list-wrapper" id="skills">
        <div class="container">
          <img src="~/assets/js.png" alt="js-logo" />
          <span class="skill-js">JavaScript (ES6 +)</span>
        </div>
        <div class="container">
          <img src="~/assets/react.png" alt="react-logo" />
          <span class="skill-react">React Js</span>
        </div>
        <div class="container">
          <img
            src="https://profilinator.rishav.dev/skills-assets/vuejs-original-wordmark.svg"
            alt="vuejs-logo"
          />
          <span class="skill-vue">Vue Js</span>
        </div>
        <div class="container">
          <img
            src="https://profilinator.rishav.dev/skills-assets/nuxt.png"
            alt="nuxtjs-logo"
          />
          <span class="skill-vue">Nuxt Js</span>
        </div>
        <div class="container">
          <img src="~/assets/html-5.png" alt="html-logo" />
          <span class="skill-html">HTML 5</span>
        </div>
        <div class="container">
          <img src="~/assets/css-3.png" alt="css-logo" />
          <span class="skill-css">CSS 3</span>
        </div>
        <div class="container">
          <img
            src="https://profilinator.rishav.dev/skills-assets/sass-original.svg"
            alt="scss-logo"
          />
          <span class="skill-css">SCSS</span>
        </div>
        <div class="container">
          <img
            src="https://profilinator.rishav.dev/skills-assets/bootstrap-plain.svg"
            alt="scss-logo"
          />
          <span class="skill-css">Bootstrap 5</span>
        </div>
        <div class="container">
          <img src="~/assets/c-.png" alt="cpp-logo" />
          <span class="skill-cpp">C++</span>
        </div>
        <div class="container">
          <img
            src="https://profilinator.rishav.dev/skills-assets/linux-original.svg"
            alt="linux-logo"
          />
          <span class="skill-cpp">Linux</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about-container {
  padding: 0 10%;

  .about-wrapper {
    .section-title {
      font-size: 2.5rem;
      font-family: "Manrope", sans-serif;
      font-weight: 700;
      text-align: center;
    }

    .skills-list-wrapper {
      width: 50%;
      margin: 2rem auto;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;

      .container {
        margin: 2rem 0.5rem;
        height: 65px;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: "Manrope", sans-serif;
        font-weight: 500;

        img {
          height: 100%;
          aspect-ratio: 1/1;
        }

        span {
          margin: 0.2rem 0;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-weight: 700;
        }

        // .skill-js {
        //   background: #ffd60a;
        // }
        // .skill-react {
        //   background: #0496ff;
        //   color: #f1f4fa;
        // }
        // .skill-html {
        //   background: #ff6b35;
        //   color: #f1f4fa;
        // }
        // .skill-css {
        //   background: #3f37c9;
        //   color: #edf2fb;
        // }
        // .skill-cpp {
        //   background: #3f37c9;
        //   color: #edf2fb;
        // }
      }
    }
  }
}
</style>
