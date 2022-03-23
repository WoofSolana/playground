

<template>
  <div>
    <div class="container max-w-8xl m-auto">
      <div class="playground bg-gray-600 flex flex-col justify-center items-start m-4 py-4 px-4 rounded-lg">
        <div class="playground__title lg:text-center">WOOF Playground</div>
        <div class="playground__wrapper w-full py-4">
          <div class="playground__attributes lg:grid lg:grid-cols-3 pt-5">
            <div class="playground__attribute-wrapper">
              <div class="playground-select">
                <label for="Background" class="playground-select__label">
                  Background
                </label>
                <select id="Background" v-model='selected'  class="playground-select__select">
                  <option v-for="option in backgrounds" :value="option" class="playground-select__option"> {{ option.text }} </option>
                </select>
              </div>
              <div  class="playground-attribute">
                <div class="playground-attribute__percentage">{{ selected.rarity }}</div>
                <div class="playground-attribute__rarity" :style="{ background: `${selected.color}`  }"  >
                  {{ selected.fact }}
                </div>
              </div>
            </div>
            <div class="playground__attribute-wrapper">
              <div class="playground-select">
                <label for="Background" class="playground-select__label">
                  Skin / Breed
                </label>
                <select v-model='skin'  class="playground-select__select ">
                  <option v-for="option in skins" :value="option" class="playground-select__option uppercase"> {{ option.text }} </option>
                </select>
              </div>
              <div class="playground-attribute" >
                <div class="playground-attribute__percentage">{{ skin.rarity }}</div>
                <div
                  class="playground-attribute__rarity" :style="{ background: `${skin.color}`  }"  
                >
                  {{ skin.fact }}
                </div>
              </div>
            </div>
            <div class="playground__attribute-wrapper">
              <div class="playground-select">
                <label for="Head" class="playground-select__label">
                  Head 
                </label>
                <select v-model='head'  class="playground-select__select ">
                  <option v-for="option in heads" :value="option" class="playground-select__option uppercase"> {{ option.text }} </option>
                </select>
              </div>
              <div class="playground-attribute" >
                <div class="playground-attribute__percentage">{{ head.rarity }}</div>
                <div
                  class="playground-attribute__rarity" :style="{ background: `${head.color}`  }"  
                >
                  {{ head.fact }}
                </div>
              </div>
            </div>
            <div class="playground__attribute-wrapper">
              <div class="playground-select">
                <label for="Eye" class="playground-select__label">
                  Eyes 
                </label>
                <select v-model='eye'  class="playground-select__select ">
                  <option v-for="option in eyes" :value="option" class="playground-select__option"> {{ option.text }} </option>
                </select>
              </div>
              <div class="playground-attribute" >
                <div class="playground-attribute__percentage">{{ eye.rarity }}</div>
                <div
                  class="playground-attribute__rarity" :style="{ background: `${eye.color}`  }"  
                >
                  {{ eye.fact }}
                </div>
              </div>
            </div>
            <div class="playground__attribute-wrapper">
              <div class="playground-select">
                <label for="Eye" class="playground-select__label">
                  Clothing 
                </label>
                <select v-model='clothing'  class="playground-select__select ">
                  <option v-for="option in clothings" :value="option" class="playground-select__option"> {{ option.text }} </option>
                </select>
              </div>
              <div class="playground-attribute" >
                <div class="playground-attribute__percentage">{{ clothing.rarity }}</div>
                <div
                  class="playground-attribute__rarity" :style="{ background: `${clothing.color}`  }"  
                >
                  {{ clothing.fact }}
                </div>
              </div>
            </div>
            <div class="playground__attribute-wrapper">
              <div class="playground-select">
                <label for="Mouth" class="playground-select__label">
                  Mouth 
                </label>
                <select v-model="mouth"  class="playground-select__select ">
                  <option v-for="option in mouths" :value="option" class="playground-select__option"> {{ option.text }} </option>
                </select>
              </div>
              <div class="playground-attribute" >
                <div class="playground-attribute__percentage">{{ mouth.rarity }}</div>
                <div
                  class="playground-attribute__rarity" :style="{ background: `${mouth.color}`  }"  
                >
                  {{ mouth.fact }}
                </div>
              </div>
            </div>

          </div>
          <div class="playground__layers-wrapper">
            <div class="playground__layers">
              <div class="playground__layer w-full h-full z-0" :style="{ background: ` center/cover url(${selected.image})` }"></div>
              <div class="playground__layer w-full h-full z-10" :style="{ background: ` center/cover url(${skin.image})` }"></div>
              <div class="playground__layer w-full h-full z-20" :style="{ background: ` center/cover url(${head.image})` }"></div>
              <div class="playground__layer w-full h-full z-10" :style="{ background: ` center/cover url(${eye.image})` }"></div>
              <div class="playground__layer w-full h-full z-30" :style="{ background: ` center/cover url(${clothing.image})` }"></div>
              <div class="playground__layer w-full h-full z-40" :style="{ background: ` center/cover url(${mouth.image})` }"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import styling from "@/assets/css/main.css"
    import sandy from "@/assets/images/woofers/sandy.png"
    export default {
        data() {
            return {
                selected: 'true',
                skin: 'A',
                head: 'A',
                mouth: 'A',
                eye: 'A',
                clothing: 'A',
                backgrounds: [
                  { text: 'Sandy Gold', value: 'true', fact: 'common', color: '#949494', image: require('@/assets/images/woofers/sandy.png'), rarity: '50.00%' },
                  { text: 'East Bay Blue', value: 'B', fact: 'uncommon', color: '#20d58a', image: require('@/assets/images/woofers/blue.png'), rarity: '40.00%' },
                  { text: 'Burgundy', value: 'C', fact: 'epic', color: '#9901f6', image: require('@/assets/images/woofers/burg.png'), rarity: '9.00%' },
                  { text: 'Night Sky', value: "D", fact: 'mythic', color: '#ed2939', image: require('@/assets/images/woofers/night.png'), rarity: '1.00%' }
                ],
                skins: [
                  { text: 'Terrier', value: 'A', fact: 'common', color: '#949494', image: require('@/assets/images/woofers/skin/terrier.png'), rarity: '30.00%' },
                  { text: 'Labrador', value: 'B', fact: 'common', color: '#949494', image: require('@/assets/images/woofers/skin/labrador.png'), rarity: '25.00%' },
                  { text: 'Retriever', value: 'C', fact: 'uncommon', color: '#32CD32', image: require('@/assets/images/woofers/skin/retriever.png'), rarity: '15.00%' },
                  { text: 'Beagle', value: 'D', fact: 'rare', color: '#00b3ff', image: require('@/assets/images/woofers/skin/beagle.png'), rarity: '8.00%' },
                  { text: 'Ridgeback', value: 'E', fact: 'rare', color: '#00b3ff', image: require('@/assets/images/woofers/skin/ridgeback.png'), rarity: '7.00%' },
                  { text: 'Doberman', value: 'F', fact: 'rare', color: '#00b3ff', image: require('@/assets/images/woofers/skin/doberman.png'), rarity: '6.00%' },
                  { text: 'Alaskan', value: 'G', fact: 'epic', color: '#9901f6', image: require('@/assets/images/woofers/skin/alaskan.png'), rarity: '5.00%' },
                  { text: 'Golden', value: 'H', fact: 'legendary', color: '#ff8101', image: require('@/assets/images/woofers/skin/golden.png'), rarity: '2.50%' },
                  { text: 'Woof', value: 'I', fact: 'legendary', color: '#ff8101', image: require('@/assets/images/woofers/skin/woof100.png'), rarity: '1.00%' },
                  { text: 'Skeleton', value: 'J', fact: 'mythic', color: '#ed2939', image: require('@/assets/images/woofers/skin/skeleton.png'), rarity: '0.50%' }
                ],
                heads: [
                  { text: 'None', value: 'A', fact: 'common', color: '#949494', image: '', rarity: '24.00%' },
                  { text: 'Blue Snapback', value: 'B', fact: 'common', color: '#949494', image: require('@/assets/images/woofers/head/bluesnap.png'), rarity: '8.80%' },
                  { text: 'Black Snapback', value: 'C', fact: 'common', color: '#949494', image: require('@/assets/images/woofers/head/blacksnap.png'), rarity: '8.80%' },
                  { text: 'Fedora', value: 'D', fact: 'uncommon', color: '#32CD32', image: require('@/assets/images/woofers/head/fedora.png'), rarity: '5.80%' },
                  { text: 'Red Beanie', value: 'E', fact: 'uncommon', color: '#32CD32', image: require('@/assets/images/woofers/head/redbeanie.png'), rarity: '5.30%' },
                  { text: 'Black Beanie', value: 'F', fact: 'uncommon', color: '#32CD32', image: require('@/assets/images/woofers/head/blackbeanie.png'), rarity: '5.20%' },
                  { text: 'Bandana', value: 'G', fact: 'rare', color: '#00b3ff', image: require('@/assets/images/woofers/head/bandana.png'), rarity: '4.50%' },
                  { text: 'TopHat', value: 'H', fact: 'rare', color: '#00b3ff', image: require('@/assets/images/woofers/head/tophat.png'), rarity: '4.50%' },
                  { text: 'Pirate', value: 'I', fact: 'rare', color: '#00b3ff', image: require('@/assets/images/woofers/head/pirate.png'), rarity: '3.70%' },
                  { text: 'Outlaw', value: 'J', fact: 'epic', color: '#9901f6', image: require('@/assets/images/woofers/head/outlaw.png'), rarity: '3.50%' },
                  { text: 'Light Bulbs', value: 'K', fact: 'epic', color: '#9901f6', image: require('@/assets/images/woofers/head/bulp.png'), rarity: '3.40%' },
                  { text: 'Cowboy', value: 'L', fact: 'epic', color: '#9901f6', image: require('@/assets/images/woofers/head/cowboy.png'), rarity: '3.20%' },
                  { text: "Copter's Hat", value: 'M', fact: 'epic', color: '#9901f6', image: require('@/assets/images/woofers/head/copter.png'), rarity: '2.90%' },
                  { text: 'Chef', value: 'N', fact: 'epic', color: '#9901f6', image: require('@/assets/images/woofers/head/chef.png'), rarity: '2.80%' },
                  { text: "Captain's Hat", value: 'O', fact: 'epic', color: '#9901f6', image: require('@/assets/images/woofers/head/captain.png'), rarity: '2.70%' },
                  { text: 'Knight', value: 'P', fact: 'epic', color: '#9901f6', image: require('@/assets/images/woofers/head/knight.png'), rarity: '2.50%' },
                  { text: 'Rastafarian', value: 'Q', fact: 'legendary', color: '#ff8101', image: require('@/assets/images/woofers/head/rasta.png'), rarity: '1.00%' },
                  { text: 'Tiara', value: 'R', fact: 'legendary', color: '#ff8101', image: require('@/assets/images/woofers/head/tiara.png'), rarity: '1.00%' },
                  { text: 'Crown', value: 'S', fact: 'legendary', color: '#ff8101', image: require('@/assets/images/woofers/head/crown.png'), rarity: '1.00%' },
                  { text: 'Santa Hat', value: 'T', fact: 'legendary', color: '#ff8101', image: require('@/assets/images/woofers/head/santahat.png'), rarity: '1.00%' },
                  { text: 'Horns', value: 'U', fact: 'legendary', color: '#ff8101', image: require('@/assets/images/woofers/head/horns.png'), rarity: '1.00%' },
                  { text: 'SOL Snapback', value: 'V', fact: 'legendary', color: '#ff8101', image: require('@/assets/images/woofers/head/solsnap.png'), rarity: '1.00%' },
                  { text: 'Antlers', value: 'W', fact: 'mythic', color: '#ed2939', image: require('@/assets/images/woofers/head/antlers.png'), rarity: '0.50%' },
                  { text: 'Island Boy', value: 'X', fact: 'mythic', color: '#ed2939', image: require('@/assets/images/woofers/head/islandboys.png'), rarity: '0.50%' },
                  { text: 'Hokage', value: 'Y', fact: 'mythic', color: '#ed2939', image: require('@/assets/images/woofers/head/ninja.png'), rarity: '0.50%' },
                  { text: 'Astronaut', value: 'Z', fact: 'mythic', color: '#ed2939', image: require('@/assets/images/woofers/head/astronaut.png'), rarity: '0.50%' }
                ],
                eyes: [
                  { text: 'None', value: 'A', fact: 'common', color: '#949494', image: '', rarity: '35.00%' },
                  { text: 'Glasses', value: 'B', fact: 'common', color: '#949494', image: require('@/assets/images/woofers/eyes/glasses.png'), rarity: '9.30%' },
                  { text: 'Round Glasses', value: 'C', fact: 'common', color: '#949494', image: require('@/assets/images/woofers/eyes/roundglasses.png'), rarity: '7.50%' },
                  { text: 'Sunglasses', value: 'D', fact: 'common', color: '#949494', image: require('@/assets/images/woofers/eyes/sunglasses.png'), rarity: '7.30%' },
                  { text: 'Goggles', value: 'E', fact: 'common', color: '#949494', image: require('@/assets/images/woofers/eyes/goggles.png'), rarity: '7.30%' },
                  { text: 'Make-Up', value: 'F', fact: 'uncommon', color: '#32CD32', image: require('@/assets/images/woofers/eyes/makeup.png'), rarity: '5.50%' },
                  { text: 'Bandit Mask', value: 'G', fact: 'uncommon', color: '#32CD32', image: require('@/assets/images/woofers/eyes/bandit.png'), rarity: '5.50%' },
                  { text: 'Stoned', value: 'H', fact: 'rare', color: '#00b3ff', image: require('@/assets/images/woofers/eyes/stoned.png'), rarity: '3.10%' },
                  { text: 'Snek Eyes', value: 'I', fact: 'rare', color: '#00b3ff', image: require('@/assets/images/woofers/eyes/snekeyes.png'), rarity: '3.00%' },
                  { text: 'Heart Eyes', value: 'J', fact: 'epic', color: '#9901f6', image: require('@/assets/images/woofers/eyes/hearteyes.png'), rarity: '2.70%' },
                  { text: 'Eyepatch', value: 'K', fact: 'epic', color: '#9901f6', image: require('@/assets/images/woofers/eyes/eyepatch.png'), rarity: '2.60%' },
                  { text: 'Monocle', value: 'L', fact: 'epic', color: '#9901f6', image: require('@/assets/images/woofers/eyes/monocle.png'), rarity: '2.50%' },
                  { text: 'Red Vipers', value: 'M', fact: 'epic', color: '#9901f6', image: require('@/assets/images/woofers/eyes/redviper.png'), rarity: '2.40%' },
                  { text: 'Scouter', value: 'N', fact: 'legendary', color: '#ff8101', image: require('@/assets/images/woofers/eyes/scouter.png'), rarity: '2.00%' },
                  { text: 'Green Viper', value: 'O', fact: 'legendary', color: '#ff8101', image: require('@/assets/images/woofers/eyes/greenviper.png'), rarity: '2.00%' },
                  { text: 'Robo Lens', value: 'P', fact: 'legendary', color: '#ff8101', image: require('@/assets/images/woofers/eyes/robolens.png'), rarity: '1.00%' },
                  { text: 'Laser Eyes', value: 'Q', fact: 'mythic', color: '#ed2939', image: require('@/assets/images/woofers/eyes/lasereyes.png'), rarity: '0.50%' },
                  { text: 'SOL Vipers', value: 'R', fact: 'mythic', color: '#ed2939', image: require('@/assets/images/woofers/eyes/solanaviper.png'), rarity: '0.50%' }
                ],
                clothings: [
                  { text: 'None', value: 'A', fact: 'common', color: '#949494', image: '', rarity: '20.00%' },
                  { text: 'Red T-Shirt', value: 'B', fact: 'common', color: '#949494', image: require('@/assets/images/woofers/clothing/redshirt.png'), rarity: '12.00%' },
                  { text: 'Tank Top', value: 'C', fact: 'common', color: '#949494', image: require('@/assets/images/woofers/clothing/tanktop.png'), rarity: '12.00%' },
                  { text: 'Wool Sweater', value: 'D', fact: 'uncommon', color: '#32CD32', image: require('@/assets/images/woofers/clothing/woolsweater.png'), rarity: '8.00%' },
                  { text: 'Red Collar', value: 'E', fact: 'uncommon', color: '#32CD32', image: require('@/assets/images/woofers/clothing/redcollar.png'), rarity: '7.00%' },
                  { text: 'Spiked Collar', value: 'F', fact: 'rare', color: '#00b3ff', image: require('@/assets/images/woofers/clothing/spikedcollar.png'), rarity: '5.50%' },
                  { text: 'Polo', value: 'G', fact: 'rare', color: '#00b3ff', image: require('@/assets/images/woofers/clothing/poloshirt.png'), rarity: '5.00%' },
                  { text: 'Stripped Shirt', value: 'H', fact: 'rare', color: '#00b3ff', image: require('@/assets/images/woofers/clothing/striped.png'), rarity: '5.00%' },
                  { text: 'White Shirt & Chain', value: 'I', fact: 'rare', color: '#00b3ff', image: require('@/assets/images/woofers/clothing/whiteshirt.png'), rarity: '5.00%' },
                  { text: 'Icy Chain', value: 'J', fact: 'epic', color: '#f94144', image: require('@/assets/images/woofers/clothing/icy.png'), rarity: '3.00%' },
                  { text: 'Emerald Necklace', value: 'K', fact: 'epic', color: '#f94144', image: require('@/assets/images/woofers/clothing/emerald.png'), rarity: '3.00%' },
                  { text: 'Diamond Necklace', value: 'L', fact: 'epic', color: '#f94144', image: require('@/assets/images/woofers/clothing/diamond.png'), rarity: '3.00%' },
                  { text: 'Reptile', value: 'M', fact: 'epic', color: '#9901f6', image: require('@/assets/images/woofers/clothing/reptile.png'), rarity: '2.50%' },
                  { text: 'Referee', value: 'N', fact: 'epic', color: '#9901f6', image: require('@/assets/images/woofers/clothing/referee.png'), rarity: '2.50%' },
                  { text: 'Gold Chain', value: 'O', fact: 'epic', color: '#9901f6', image: require('@/assets/images/woofers/clothing/chain.png'), rarity: '2.50%' },
                  { text: 'Suit', value: 'P', fact: 'legendary', color: '#ff8101', image: require('@/assets/images/woofers/clothing/suit.png'), rarity: '2.00%' },
                  { text: 'Cowboy', value: 'Q', fact: 'legendary', color: '#ff8101', image: require('@/assets/images/woofers/clothing/cowboy.png'), rarity: '2.00%' },
                  { text: 'Green Hoodie', value: 'R', fact: 'legendary', color: '#ff8101', image: require('@/assets/images/woofers/clothing/greenhoodie.png'), rarity: '1.00%' },
                  { text: 'Black Hoodie', value: 'S', fact: 'legendary', color: '#ff8101', image: require('@/assets/images/woofers/clothing/blackhoodie.png'), rarity: '1.00%' },
                  { text: 'Santa Suit', value: 'T', fact: 'mythic', color: '#ed2939', image: require('@/assets/images/woofers/clothing/santa.png'), rarity: '0.50%' },
                  { text: 'Hokage', value: 'U', fact: 'mythic', color: '#ed2939', image: require('@/assets/images/woofers/clothing/hokage.png'), rarity: '0.50%' },
                  { text: 'Cape', value: 'V', fact: 'mythic', color: '#ed2939', image: require('@/assets/images/woofers/clothing/cape.png'), rarity: '0.50%' },
                  { text: 'Astronaut', value: 'W', fact: 'mythic', color: '#ed2939', image: require('@/assets/images/woofers/clothing/astronaut.png'), rarity: '0.50%' }
                ],
                mouths: [
                  { text: 'None', value: 'A', fact: 'common', color: '#949494', image: '', rarity: '20.00%' },
                  { text: 'Tongue', value: 'B', fact: 'common', color: '#949494', image: require('@/assets/images/woofers/mouth/tongue.png'), rarity: '15.00%' },
                  { text: 'Cigarette', value: 'C', fact: 'common', color: '#949494', image: require('@/assets/images/woofers/mouth/cigarette.png'), rarity: '12.00%' },
                  { text: 'Joint', value: 'D', fact: 'uncommon', color: '#32CD32', image: require('@/assets/images/woofers/mouth/joint.png'), rarity: '5.50%' },
                  { text: 'Cigar', value: 'E', fact: 'uncommon', color: '#32CD32', image: require('@/assets/images/woofers/mouth/cigar.png'), rarity: '4.50%' },
                  { text: 'Lipstick', value: 'F', fact: 'rare', color: '#00b3ff', image: require('@/assets/images/woofers/mouth/liptstick.png'), rarity: '4.00%' },
                  { text: 'Big Smile', value: 'G', fact: 'rare', color: '#00b3ff', image: require('@/assets/images/woofers/mouth/bigsmile.png'), rarity: '3.50%' },
                  { text: 'Red Nose', value: 'H', fact: 'rare', color: '#00b3ff', image: require('@/assets/images/woofers/mouth/rednose.png'), rarity: '3.00%' },
                  { text: 'Rabbit Teeth', value: 'I', fact: 'epic', color: '#9901f6', image: require('@/assets/images/woofers/mouth/rabbit.png'), rarity: '2.06%' },
                  { text: 'Covid Mask', value: 'I', fact: 'epic', color: '#9901f6', image: require('@/assets/images/woofers/mouth/covidmarket.png'), rarity: '2.06%' },
                  { text: 'Bubblegum', value: 'I', fact: 'epic', color: '#9901f6', image: require('@/assets/images/woofers/mouth/bubblegum.png'), rarity: '2.06%' },
                  { text: 'Moustache', value: 'I', fact: 'legendary', color: '#ff8101', image: require('@/assets/images/woofers/mouth/moustache.png'), rarity: '1.70%' },
                  { text: 'Bandana', value: 'I', fact: 'legendary', color: '#ff8101', image: require('@/assets/images/woofers/mouth/bandana.png'), rarity: '1.50%' },
                  { text: 'Pipe', value: 'I', fact: 'legendary', color: '#ff8101', image: require('@/assets/images/woofers/mouth/pipe.png'), rarity: '1.50%' },
                  { text: 'Robo Mask', value: 'I', fact: 'mythic', color: '#ed2939', image: require('@/assets/images/woofers/mouth/robomouth.png'), rarity: '0.36%' },
                  { text: 'Grillz', value: 'I', fact: 'mythic', color: '#ed2939', image: require('@/assets/images/woofers/mouth/grillz.png'), rarity: '0.18%' }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

    :root {
      --common: #949494;
      --uncommon: #20d58a;
      --rare: #00b3ff;
      --epic: #9901f6;
      --legendary: #ff8101;
      --mythic: #ed2939;
    }
    .playground {
        background-color: #1F1F1F;
        color: white;
    }

    .playground__attribute-wrapper {
        position: relative;
        background-color: #1A1A1A;
        margin-bottom: 1.5rem;
        padding: 0.5rem;
        border-radius: 0.5rem;
        width: 100%;
    }
    .playground-select {
        display: flex;
        flex-direction: column;
        width: 70%;
    }
    .playground-select__select {
        background-color: #121212;
        padding: 0.5rem;
    }
    .playground-select__label {
        padding-bottom: 0.5rem;
    }
        

        .playground-attribute__percentage {
            position: absolute;
            right: 1.5rem;
            top: 3rem;
        }
        @media only screen and (min-width: 575.98px ) {
          .playground-attribute__percentage {
            right: 0.5rem;
            top: 2.5rem;
              font-size: 18px;
          }
        }
        @media only screen and (min-width: 992px) {
          .playground-attribute__percentage {
            right: 0.5rem;
            top: 2.3rem;
            font-size: 20px;
          }
        }

        .playground-attribute__rarity {
            position: absolute;
            top: -0.50rem;
            right: -0.1rem;
            padding: 8px 16px 8px 16px;
            font-size: 10px;
            font-weight: 200;
            border-radius: 8px;
            letter-spacing: 1px;
            text-transform: uppercase;
        }
        @media only screen and (min-width: 575.98px ) {
          .playground-attribute__rarity {
            top: -1.2rem;
            right: 0.1rem;
          }
        }
        @media only screen and (min-width: 992px) {
          .playground-attribute__rarity {
            top: -1rem;
            right: 0.1rem;
          }
        }
</style>
