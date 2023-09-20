<template>
  <div class="about-view">
    <div class="about-wrapper markdown-body">

      <h2>"还款与责任：诚信社会的生存之道"</h2>

      <ul>
        <li></li>
        <li>不还债的行为不仅对个体和银行造成损失，还可能对整个社会产生深远的危害。</li>
        <li>
          它削弱了社会的诚信体系，加重了金融不稳定性，威胁了经济和社会的健康发展。
        </li>
        <li>因此，诚实守信、履行债务承诺是维护社会秩序和稳定的重要一环。</li>
      </ul>

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
  padding: 2.5rem;
}
</style>
