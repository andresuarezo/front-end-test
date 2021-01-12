<template>
  <div class="mx-auto my-5">
    <div class="text-center w-full mx-auto">
      <h1 class="ml-5 text-green-600 font-bold text-2xl text-left">
        Valoraciones del producto
      </h1>
      <p class="ml-5 p-2 m-auto text-left">
        Aquí puedes consultar las ultimas valoraciones que los usuarios han
        hecho sobre este producto
      </p>
    </div>
    <div class="grid grid-cols-1 mx-auto md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="(val, idx) in valor"
        :key="idx"
        class="max-w-xs mx-auto my-1 shadow rounded border border-gray-200"
      >
        <span class="ml-3 text-gray-600 font-bold">{{ val.rating }},0</span>
        <address class="ml-3 text-xs text-gray-600">
          {{ val.author }} {{ unMeme(val.date) }}
        </address>
        <p class="p-2 w-11/12 mx-auto font-gray-800 font-semibold">
          {{ val.comment }}
        </p>
        <div class="w-full">
          <button
            type="button"
            :class="{
              'box-content ml-5 mb-2 rounded w-18 h-5 px-6 text-center py-2 border border-gray-200 hover:border-gray-600 hover:shadow-inner transform hover:scale-110': !val.clase,
              'box-content text-white ml-5 mb-2 rounded w-18 h-5 px-6 text-center py-2 border border-gray-200 hover:border-gray-600 hover:shadow-inner bg-green-900':
                val.clase,
            }"
            :disabled="val.clase"
            @click="tocaBoton(idx)"
          >
            {{ !val.clase ? 'Es util' : 'Gracias!' }}
          </button>
          <span class="text-xs text-gray-600 w-4 ml-5"
            >{{ val.useful_count }} creen que es util</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    valor() {
      return this.$store.getters.getLista
    },
  },
  created() {
    this.$store.dispatch('populaValores')
  },
  methods: {
    unMeme(x) {
      const da = new Date(x)
      const dia =
        da.getDay() === 0
          ? 'domingo'
          : da.getDay() === 1
          ? 'lunes'
          : da.getDay() === 2
          ? 'martes'
          : da.getDay() === 3
          ? 'miercoles'
          : da.getDay() === 4
          ? 'jueves'
          : da.getDay() === 5
          ? 'viernes'
          : 'sabado'
      const mes = [
        'enero',
        'febrero',
        'marzo',
        'abril',
        'mayo',
        'junio',
        'julio',
        'agosto',
        'septiembre',
        'octubre',
        'noviembre',
        'diciembre',
      ]
      return `el dia ${dia}, ${da.getDate()} de ${
        mes[da.getMonth()]
      } del ${da.getFullYear()}`
    },
    tocaBoton(x) {
      return this.$store.commit('unamas', x)
    },
  },
}
</script>
