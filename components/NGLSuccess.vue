<template>
  <div
    class="min-h-screen bg-gradient-to-br from-pink-600 via-orange-500 to-yellow-500 flex flex-col justify-center items-center p-4 text-white relative"
  >
    <button
      class="absolute top-4 left-4 text-2xl font-bold"
      @click="goBack"
    >
      ←
    </button>

    <!-- Container -->
    <div class="flex flex-col items-center gap-6 mt-10">
      <div class="flex flex-col items-center">
        <div class="w-20 h-20 rounded-full bg-white flex items-center justify-center">
          <span class="text-4xl text-green-500 font-bold">✔</span>
        </div>
        <h1 class="text-2xl font-bold mt-2">Sent!</h1>
      </div>

      <!-- Counter -->
      <p class="text-sm font-bold">
        👇 {{ currentCount }} people just tapped the button 👇
      </p>

      <button
        class="w-full max-w-xs bg-black text-white py-2 rounded-full hover:bg-gray-900 transition-colors font-semibold"
        @click="goClone"
      >
        Get your own messages!
      </button>

      <button
        class="text-white underline"
        @click="sendAnother"
      >
        Send another message
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentCount: {
      type: Number,
      default: 309
    }
  },
  methods: {
    goBack() {
      this.$emit('onAgain')
    },
    goClone() {
      window.open('https://github.com/ferdian99/ngl-by-ferdi.git', '_blank')
    },
    sendAnother() {
      this.$emit('onAgain')
    }
  }
}
</script>
