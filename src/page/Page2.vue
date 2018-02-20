<template>
  <div>
    <p>Component: Page2</p>
    <p>---</p>
    <amp-viewer src="../../amp/page2.html"></amp-viewer>
    <p>---</p>
  </div>
</template>

<script>
import AmpViewer from "../component/AMPViewer";

export default {
  name: 'page2',
  components: {
    AmpViewer,
  },
}
</script>
