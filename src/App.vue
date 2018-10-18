<template>
  <div id="app">
    <nav>
      <p>vue-router</p>
      <ul>
        <li>エンドポイント毎に別のComponentを設定している場合</li>
        <ul>
          <li><router-link to="/page1">/page1</router-link></li>
          <li><router-link to="/page2">/page2</router-link></li>
          <li><router-link to="/page3">/page3</router-link></li>
        </ul>
      </ul>
      <ul>
        <li>Componentの再利用が発生する場合(再利用時に変更が変更されない)</li>
        <ul>
          <li><router-link to="/reuse-route/page1">/reuse-route/page1</router-link></li>
          <li><router-link to="/reuse-route/page2">/reuse-route/page2</router-link></li>
          <li><router-link to="/reuse-route/page3">/reuse-route/page3</router-link></li>
        </ul>
      </ul>
      <ul>
        <li>Componentの再利用が起こらない処理を加えた場合</li>
        <ul>
          <li><router-link to="/not-reuse-route/page1">/not-reuse-route/page1</router-link></li>
          <li><router-link to="/not-reuse-route/page2">/not-reuse-route/page2</router-link></li>
          <li><router-link to="/not-reuse-route/page3">/not-reuse-route/page3</router-link></li>
        </ul>
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
