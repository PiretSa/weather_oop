class Weather{
    constructor(city){
        this.city = city
        this.key = '6d57ccdea3baf774719ab0b7ae95c51c'
    }
    async getWeather(){
        const responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`)
        const responceData = await responce.json()
        return responceData
    }
    changeCity(city){
        this.city = city
    }
}

