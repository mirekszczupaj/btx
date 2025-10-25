<template>
  <div>
    <p v-if="error" style="color: red">Błąd: {{ error }}</p>
    <p v-else-if="!data">Ładowanie...</p>
    <pre v-else>{{ data }}</pre>
  </div>
</template>

<script>
import axios from "axios";
import { ref, onMounted } from "vue";

export default {
  setup() {
    const data = ref(null);
    const error = ref(null);

    onMounted(async () => {
      try {
        const res = await axios.get(import.meta.env.VITE_API_URL + "/api");
        data.value = res.data;
      } catch (err) {
        error.value = err.message;
      }
    });

    return { data, error };
  },
};
</script>
