<template>
  <!-- Screen -->
  <div
    class="min-h-screen bg-gradient-to-br from-pink-600 via-orange-500 to-yellow-500 flex flex-col justify-center items-center p-4 text-white"
  >
    <!-- Container -->
    <div
      class="w-full max-w-[400px] lg:max-w-[600px] flex flex-col gap-y-3 justify-center items-center"
    >
      <!-- Card -->
      <div class="w-full rounded-3xl overflow-hidden">
        <!-- Header / Profile -->
        <div class="flex flex-row gap-3 p-4 items-center bg-white">
          <img src="/img/profile.png" class="rounded-full w-12 h-12" />
          <div class="flex flex-col items-start">
            <h1 class="text-sm lg:text-base font-medium text-gray-900">
              @haloferdi
            </h1>
            <p class="text-sm lg:text-base font-bold text-gray-900">
              send me anonymous messages!
            </p>
          </div>
        </div>

        <!-- Form container -->
        <div class="relative bg-white/50 w-full p-4">
          <textarea
            v-model="message"
            placeholder="send me anonymous message"
            class="w-full h-24 bg-transparent placeholder:text-black/50 text-black text-base lg:text-xl font-semibold focus:outline-none"
          ></textarea>

          <!-- Dice randomizer -->
          <button
            class="absolute bottom-3 right-3 bg-white/30 text-black rounded-full px-2 py-1 font-bold"
            @click="handleDice"
          >
            🎲
          </button>
        </div>
      </div>

      <p class="text-xs lg:text-sm text-center">
        🔒 anonymous q&a • by @haloferdi
      </p>

      <button
        @click="handleSubmit"
        :disabled="isLoading"
        class="w-full bg-black text-white py-2 rounded-full hover:bg-gray-900 transition-colors text-sm lg:text-base font-semibold disabled:bg-gray-700 disabled:cursor-not-allowed"
      >
        {{ isLoading ? 'Loading...' : 'Send!' }}
      </button>

      <p class="text-xs lg:text-sm font-bold mt-10">
        👇 {{ currentCount }} people just tapped the button 👇
      </p>

      <button
        class="w-full bg-white text-black text-sm lg:text-base font-semibold px-4 py-2 rounded-full bouncy-btn"
        @click="redirectToHome"
      >
        Get your own messages! (Clone)
      </button>

      <div class="flex gap-3 text-xs lg:text-sm text-white/60">
        <a>Term</a>
        <a>Privacy</a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

const RANDOM_QUESTIONS = [
  "Apa kenangan masa kecil paling berkesan yang kamu punya?",
  "Kalau bisa punya satu kekuatan super, apa itu?",
  "Sebutkan satu hal yang bikin kamu semangat hari ini!",
  "Pernah naksir sama temen sendiri? Ceritain dong!",
  "Apa tempat liburan impianmu di Indonesia?",
  "Siapa orang terkenal yang pengen kamu temui dan ajak ngobrol?",
  "Kapan terakhir kali kamu nangis dan kenapa?",
  "Kalau bisa teleport, kamu mau pergi ke mana sekarang?",
  "Apa makanan favorit yang nggak bisa kamu tolak?",
  "Kalau lagi stres, biasanya kamu ngapain?",
  "Apa hal paling aneh yang pernah kamu lakukan saat bosan?",
  "Kalau kamu bisa tinggal di satu tempat selamanya, kamu pilih di mana?",
  "Apa rahasia kecil yang belum pernah kamu ceritakan ke siapa pun?",
  "Kapan momen paling membahagiakan di hidupmu sejauh ini?",
  "Hal memalukan apa yang kamu lakukan waktu kecil dan masih keingat sampai sekarang?",
  "Kalau lagi bad mood, apa cara tercepatmu untuk memperbaiki suasana hati?",
  "Apa pendapatmu tentang cinta pada pandangan pertama? Pernah ngalamin?",
  "Kalau disuruh belajar satu skill baru dalam sehari, skill apa yang pengen kamu kuasai?",
  "Pilih hidup tanpa musik atau hidup tanpa internet?",
  "Kalau bisa bertukar hidup dengan seseorang selama satu hari, mau jadi siapa dan kenapa?",
  "Sebutkan satu kebiasaan unikmu yang orang lain mungkin nggak tahu?"
]

export default {
  props: {
    currentCount: {
      type: Number,
      default: 312
    }
  },
  data() {
    return {
      message: '',
      isLoading: false
    }
  },
  methods: {
    handleDice() {
      const randomIndex = Math.floor(Math.random() * RANDOM_QUESTIONS.length)
      this.message = RANDOM_QUESTIONS[randomIndex]
    },
    async handleSubmit() {
      if (!this.message.trim()) {
        alert('Masih kosong nih. Tulis pesannya dulu, yes!')
        return
      }
      this.isLoading = true
      try {
        await axios.post('https://api.formspark.io/9UW6nBHTg', {
          message: this.message
        })
        // Jika sukses, emit event ke parent (NGL.vue)
        this.$emit('onSuccess')
        // Reset message
        this.message = ''
      } catch (error) {
        console.error(error)
        alert('There was a problem sending your message.')
      } finally {
        this.isLoading = false
      }
    },
    redirectToHome() {
      window.open('https://github.com/ferdian99/ngl-by-ferdi.git', '_blank')
    }
  }
}
</script>

<style scoped>
@keyframes bounce {
  0%, 100% {
    transform: translateY(0%);
  }
  50% {
    transform: translateY(-5%);
  }
}

.bouncy-btn {
  animation: bounce 1s infinite;
}
</style>
