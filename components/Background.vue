<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {
      selected: "common",
      backgrounds: [
        {
          text: "Sandy Gold",
          value: "common",
          color: "#2D81FF",
          image: "/assets/images/woofers/sandy.png",
          rarity: "50.00%",
        },
        {
          text: "East Bay Blue",
          value: "uncommon",
          image: "assets/images/woofers/blue.png",
          rarity: "40.00%",
        },
        {
          text: "Burgundy",
          value: "rare",
          image: "assets/images/woofers/burg.png",
          rarity: "9.00%",
        },
        {
          text: "East Bay Blue",
          value: "epic",
          image: "assets/images/woofers/blue.png",
          rarity: "1.00%",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
