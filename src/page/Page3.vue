<template>
  <div>
    <p>Component: Page3</p>
    <p>---</p>
    <amp-viewer src="../../amp/page3.html"></amp-viewer>
    <p>---</p>
  </div>
</template>

<script>
import AmpViewer from "../component/AMPViewer";

export default {
  name: 'page3',
  components: {
    AmpViewer,
  },
}
</script>
