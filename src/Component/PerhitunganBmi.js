import React from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';

class PerhitunganBmi extends React.Component {
    state = { beratBadan: 0, TinggiBadan: null, bmi: null, ket: null, Ket: null, ubahTinggikeMeter: null };

    hitungBMI() {
        let beratBadan = this.state.beratBadan;
        let TinggiBadan = this.state.TinggiBadan;
        let ubahTinggikeMeter = parseFloat(TinggiBadan) / 100;
        let bmi = parseFloat(beratBadan) / (ubahTinggikeMeter * ubahTinggikeMeter);
        if (bmi < 18) {
            ket = 'Kekurangan Berat Badan';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            ket = 'Berat Badan Normal';
        } else if (bmi >= 25 && bmi <= 29.9) {
            ket = 'Kelebihan Berat Badan';
        } else if (bmi >= 30) {
            ket = 'Kegemukan';
        }
        this.setState({ Ket: ket });
    }
    render() {
        return (
            <View>
                <Text>Hitung BMI</Text>
                <TextInput
                    style={{ heigh: 40 }}
                    placeholder="Masukan Berat Badan"
                    onChangeText={InputBB => this.setState({ beratBadan: InputBB })}
                    value={this.state.beratBadan}
                />
                <TextInput
                    placeholder="Masukan Tinggi Badan"
                    style={{ heigh: 40 }}
                    onChangeText={InputTinggi =>
                        this.setState({ TinggiBadan: InputTinggi })
                    }
                    value={this.state.TinggiBadan}
                />

                <Button
                    title="Hitung BMI"
                    onPress={() => {
                        this.hitungBMI();
                    }}
                />
                <Text>{this.state.bmi}</Text>
                <Text>{this.state.Ket}</Text>
            </View>
        );
    }
}

export default PerhitunganBmi;