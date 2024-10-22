const { createApp, ref } = Vue

createApp({
    setup() {
        const old = ref(18)
        const fullName = 'Álvaro Brito' 
        const msg = ref(`Usando VueJs - ${fullName} (${old})`)

        const valueRandom = ref(Math.floor(Math.random()*10))

        const image = ref('https://64.media.tumblr.com/1e7b4097b9734080c3c8c32897f370c1/ea0aebc5ab4ef9c4-97/s1280x1920/991edd765708d09cb5d124e1037a9705c2ebf232.jpg')

        return {
            old,
            fullName,
            msg,
            valueRandom,
            image
        }

    }
}).mount('#desafio')