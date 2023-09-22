<template>
  <div class="about-view">
    <div class="about-wrapper markdown-body">

      <h2>薛坤欠债还钱,天经地义</h2>

      <ul>
        <li>
          此人借我8万5千元,从2019至2023年。多次承诺几号给钱，多次失信。现在已经找不到人了，电话无法打通。
        </li>
        <li>
          实在无奈联系到他家人,他家人也是搞笑,电话接通直接说不认识薛坤，你打错了,然后挂断电话。打了多次后，他家人终于承认了，嘴里一直骂，骂我们借钱给薛坤，骂我们害了他，最后放下狠话，薛坤的事情随便你们怎么搞。
        </li>
      </ul>
      <img src="../../public/source/mosaic身份证.png">

    </div>

  </div>
</template>

<script>
import 'github-markdown-css/github-markdown-light.css';

import {setTitle} from '@/assets/js/utils';

export default {
  name: 'AboutView',
  created() {
    setTitle('关于');
  },
}
</script>

<style lang="less" scoped>
.about-wrapper {
  height: 100%;
  //background-image: url("../../public/source/");
}
</style>
