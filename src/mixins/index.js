export default {
  methods: {
    btnMusicPlay() {
      let music = new Audio('/public/music/boom.mp3')
      music.play()
    }
  }
}