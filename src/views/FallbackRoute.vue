<template>
  <div class="fallback center">
    <div class="side_cont center">
      <div class="fallback__side fallback__left flex-col">
        <div class="fallback__message">Page not found, sorry</div>
        <div class="fallback__submessage">
          You may have misspelled the url,
          or the page may no longer exist. Here are some suggested pages
        </div>
        <ul class="fallback__links">
          <li class="fallback__link">
            <router-link to="/">HOME</router-link>
          </li>
          <li class="fallback__link">
            <a href="https://network-status.vatsim.net/">STATUS PAGE</a>
          </li>
          <li class="fallback__link">
            <router-link to="/developer/login">DEVELOPER PORTAL</router-link>
          </li>
        </ul>
      </div>
      <div class="fallback__side center">
        <div class="fallback__cont">
          <div class="fallback__title fallback__title-upper">404</div>
          <div class="fallback__title">404</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({

});
</script>

<style lang="scss" scoped>
.fallback {
  width: 100%;
  height: 100%;

  @media (max-width: 950px) {
    align-items: start;
  }
}

.side__cont {
  max-width: 1920px;
}

.fallback__side {
  width: 50%;
  height: 100%;

  @media (max-width: 950px) {
    height: auto;
    width: auto;
  }
}

.fallback__left {
  display: flex;
  justify-content: center;
  padding: 0 4rem;

  @media (max-width: 950px) {
    padding: 2rem;
  }
}

.fallback__message {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1rem;
}

.fallback__submessage {
  font-size: 1.25rem;
}

.fallback__links {
  margin-top: 1.5rem;
}

.fallback__link {
  font-weight: normal;
  margin-bottom: 0.5rem;
}

.fallback__href {
  color: var(--grey);
  transition: color 100ms linear;

  &:hover {
    color: var(--white);
    cursor: pointer;
  }
}

.fallback__title {
  -webkit-text-stroke: 2px var(--highlightBlue);
  filter: opacity(0.3);
  color: transparent;
  font-size: 20vmin;
  font-weight: 700;

  @media (max-width: 950px) {
    display: none;
  }
}

.fallback__title-upper {
  -webkit-text-stroke: 2px var(--white);
  filter: opacity(1);
  z-index: 3;
  position: absolute;
  transition: transform 150ms ease-in-out;
  height: min-content;

  &:hover {
    transform: scale(1.2);
    cursor: default;
  }
}
</style>
