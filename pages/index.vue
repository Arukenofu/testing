<script setup>


const inputs = ref({
  supreme: '',
  prime: '',
  exquisite: '',
  fine: '',
  uncommon: '',
  common: ''
});

const values = {
  supreme: 4000,
  prime: 3000,
  exquisite: 2000,
  fine: 400,
  uncommon: 200,
  common: 100
}

const getAll = computed(() => {
  let total = 0;

  for (const key in inputs.value) {
    total += inputs.value[key] * values[key]
  }

  return total
})

const levels = [
    1000,
    4000,
    10000,
    22000,
    40000,
    72000,
    120000,
    200000
]

const getCollectionLevel = () => {
  for (let i = 0; i < levels.length; i++) {
    if (getAll.value < levels[i]) {
      return i;
    }
  }
  return levels.length;
}




</script>

<template>
  <div class="layout">
    <h1>
      Калькулятор очков коллекции MLBB
      <a href="https://t.me/infomlbb/13981">Узнать подробнее</a>
      <a href="https://t.me/infomlbb/13996">Полный список редкостей</a>

    </h1>

    <p>
      Supreme скины <span>4000 очков</span>
    </p>
    <input
        type="number"
        placeholder="Количество ваших Supreme скинов..."
        max="13"
        min="0"
        v-model="inputs.supreme"
    >

    <p>
      Prime скины <span>3000 очков</span>
    </p>
    <input
        type="number"
        placeholder="Количество ваших Prime скинов..."
        max="79"
        min="0"
        v-model="inputs.prime"
    >

    <p>
      Exquisite скины <span>2000 очков</span>
    </p>
    <input
        type="number"
        placeholder="Количество ваших Exquisite скинов..."
        max="96"
        min="0"
        v-model="inputs.exquisite"
    >

    <p>
      Fine скины <span>400 очков</span>
    </p>
    <input
        type="number"
        placeholder="Количество ваших Fine скинов..."
        max="126"
        min="0"
        v-model="inputs.fine"
    >

    <p>
      Uncommon скины <span>200 очков</span>
    </p>
    <input
        type="number"
        placeholder="Количество ваших Uncommon скинов..."
        max="242"
        min="0"
        v-model="inputs.uncommon"
    >

    <p>
      Common скины <span>100 очков</span>
    </p>
    <input
        type="number"
        placeholder="Количество ваших common скинов..."
        max="259"
        min="0"
        v-model="inputs.common"
    >

    <label>Текущее количество очков: {{getAll}} </label>

    <label class="chtotitutdelaesh">
      Ваш уровень коллекции: {{getCollectionLevel()}}
    </label>


  </div>
</template>

<style scoped>
.layout {
  margin-top: 61px;
  padding: 0 var(--padding);
  width: 100%;
  margin-bottom: 81px;

  h1 {
    margin-bottom: 21px;
    a {
      color: #3a61ff;
      font-size: .55em;
      white-space: nowrap;
      cursor: pointer;

      &:last-child {
        margin-left: 12px;
        white-space: nowrap;
      }
    }
  }

  p {
    font-weight: 500;
    font-size: 1.2em;
    max-width: 500px;
    margin-bottom: 6px;
    display: flex;
    align-items: center;
  }

  span {
    margin-left: auto;
    font-size: .75em;
    color: #808080;
  }

  input {
    width: 100%;
    max-width: 500px;
    height: 40px;
    background-color: inherit;
    border: hsl(240, 5.3%, 11.2%) 1px solid;
    border-radius: 8px;
    -moz-appearance: textfield; appearance: textfield;
    color: #dcdcdc;
    padding: 0 9px;
    font-size: 1em;
    transition: outline-color .2s ease;
    outline: none;
    font-family: "Nunito Sans", sans-serif;
    margin-bottom: 14px;
    font-weight: 500;

    &:hover, &:focus, &:focus-visible {
      outline: 2px solid #dcdcdc;

    }
  }

  label {
    display: block;
    font-size: 1.1em;
  }

  button {
    display: block;
    max-width: 500px;
    width: 100%;
    height: 45px;
    background-color: #dcdcdc;
    color: #0a0a0a;
    border-radius: 4px;
    font-family: "Nunito Sans", sans-serif;
    font-weight: 700;
    font-size: 1em;
    border: none;
    cursor: pointer;

    &:active {
      opacity: 0.9;
    }
  }
}

.chtotitutdelaesh {
  font-weight: 800;
}
</style>