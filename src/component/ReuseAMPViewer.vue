<template>
  <vue-amp-shadow
    @click.native="linkClick"
    :src="`../../amp/${pageName}.html`"
  />
</template>

<script>
import VueAmpShadow from "vue-amp-shadow";

export default {
  name: 'not-recycle-amp-viewer',
  props: {
    pageName: {
      type: String,
      required: true
    }
  },
  methods: {
    linkClick(e) {
      if (e.defaultPrevented) {
        return false;
      }
      const a = e.composedPath().filter(el => el.tagName === 'A')[0]
      if (a && a.href) {
        const url = new URL(a.href);
        if (url.hostname === window.location.hostname) {
          e.preventDefault();
          this.$router.push(url.pathname);
          return false;
        }
        return true;
      }
    },
  },
  components: {
    VueAmpShadow,
  },
}
</script>
