<template>
  <div class="qrcode" ref="qrCodeUrl">
    
  </div>
</template>
<script>
import QRCode from 'qrcodejs2'
export default {
  data() {
    return {
      
    }
  },
  mounted() {
    this.creatQrCode()
  },
  methods: {
    creatQrCode() {
      new QRCode(this.$refs.qrCodeUrl, {
        text: 'xxxx', // 需要转换为二维码的内容
        width: 100,
        height: 100,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
      })
    },
  }
}
</script>