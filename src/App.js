import React, {Component} from 'react';
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/Weather";

const API_KEY = "24109904043f405dae4144451190404";

class App extends Component {

    state = {
        temp_c: undefined,
        city: undefined,
        country: undefined,
        wind_dir: undefined,
        wind_kph: undefined,
        error: undefined
    }

    gettingWeather = async (e) => {
        e.preventDefault();
        var city = e.target.elements.city.value;
        if (city) {
            const api_url = await fetch(`https://api.apixu.com/v1/current.json?key=${API_KEY}&q=${city}`);
            const info = await api_url.json();

            this.setState({
                temp_c: info.current.temp_c,
                city: info.location.name,
                country: info.location.country,
                wind_dir: info.current.wind_dir,
                wind_kph: info.current.wind_kph,
                error: undefined
            });
        } else {
            this.setState({
                temp_c: undefined,
                city: undefined,
                country: undefined,
                wind_dir: undefined,
                wind_kph: undefined,
                error: "Введите название города"
            });
        }
    }

    render() {
        return (
            <div className="wrapper">
                <div className="main">
                    <div className="container">
                        <div className="row">
                            <div className="col-5 info">
                                <Info/>
                            </div>
                            <div className="col-7 form">
                                <Form weatherMethod={this.gettingWeather}/>
                                <Weather
                                    temp_c={this.state.temp_c}
                                    city={this.state.city}
                                    country={this.state.country}
                                    wind_dir={this.state.wind_dir}
                                    wind_kph={this.state.wind_kph}
                                    error={this.state.error}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
