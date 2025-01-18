const app = Vue.createApp({
    data() {
        return {
            language: 'Deutsch',
            direction: 'ltr'
        };
    },
    watch: {
        language(newLang) {
            if (newLang === 'Arabisch' || newLang === 'Hebräisch') {
                this.direction = 'rtl';
                document.documentElement.dir = 'rtl';
                document.querySelector('.content-wrapper').classList.remove('content-ltr');
                document.querySelector('.content-wrapper').classList.add('content-rtl');
            } else {
                this.direction = 'ltr';
                document.documentElement.dir = 'ltr';
                document.querySelector('.content-wrapper').classList.remove('content-rtl');
                document.querySelector('.content-wrapper').classList.add('content-ltr');
            }
            console.log(`Sprache geändert zu: ${newLang}, Richtung: ${this.direction}`);
        }
    },
    mounted() {
        this.updateDirection(this.language);
    },
    methods: {
        updateDirection(lang) {
            this.direction = (lang === 'Arabisch' || lang === 'Hebräisch') ? 'rtl' : 'ltr';
            document.documentElement.dir = this.direction;
            
            const contentWrapper = document.querySelector('.content-wrapper');
            if (this.direction === 'rtl') {
                contentWrapper.classList.remove('content-ltr');
                contentWrapper.classList.add('content-rtl');
            } else {
                contentWrapper.classList.remove('content-rtl');
                contentWrapper.classList.add('content-ltr');
            }
        }
    }
});

app.mount('#app');

function toggleNav() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active');
}

