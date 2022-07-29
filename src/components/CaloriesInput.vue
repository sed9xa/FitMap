<template>
  <div>
      <v-row>
          <v-col cols="3"><v-text-field :value="value2" v-on="listeners" label="Калории" type="number"></v-text-field></v-col>
      </v-row>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    listeners() {
      return {
        // Pass all component listeners directly to input
        ...this.$listeners,
        // Override input listener to work with v-model
        vtextfield: (event) => this.$emit("vtextfield", event.target.value),
      };
    },
  },
};
</script>