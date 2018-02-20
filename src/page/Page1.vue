<template>
  <div>
    <p>Component: Page1</p>
    <p>---</p>
    <amp-viewer src="../../amp/page1.html"></amp-viewer>
    <p>---</p>
  </div>
</template>

<script>
import AmpViewer from "../component/AMPViewer";

export default {
  name: 'page1',
  components: {
    AmpViewer,
  },
}
</script>
