<template>
  <div>
    <NGLForm
      v-if="!showSuccess"
      :currentCount="currentCount"
      @onSuccess="handleSuccess"
    />
    <NGLSuccess
      v-else
      :currentCount="currentCount"
      @onAgain="handleAgain"
    />
  </div>
</template>

<script>
import NGLForm from '~/components/NGLForm.vue'
import NGLSuccess from '~/components/NGLSuccess.vue'

export default {
  components: {
    NGLForm,
    NGLSuccess
  },
  data() {
    return {
      showSuccess: false,
      currentCount: 312
    }
  },
  mounted() {
    setInterval(() => {
      const randomIncrement = Math.floor(Math.random() * 5) + 1
      this.currentCount += randomIncrement
    }, 1000)
  },
  methods: {
    handleSuccess() {
      this.showSuccess = true
    },
    handleAgain() {
      this.showSuccess = false
    }
  }
}
</script>
