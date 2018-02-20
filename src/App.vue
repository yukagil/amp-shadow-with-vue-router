<template>
  <div id="app">
    <nav>
      <p>vue-router</p>
      <ul>
        <li><router-link to="/page1">go to page1</router-link></li>
        <li><router-link to="/page2">go to page2</router-link></li>
        <li><router-link to="/page3">go to page3</router-link></li>
      </ul>
    </nav>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>
