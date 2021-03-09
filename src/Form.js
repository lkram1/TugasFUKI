import React from 'react';

export default class Form extends React.Component{
    state = { 
        "NamaMatkul" : '',
        "Dosen" :'',
        "Jumlah SKS" : 0,
        "Deskripsi" : '',
        "Semester" : 'Genap',
        "Tahun Ajar" : '2020/2021'
    }

    change = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({
            "NamaMatkul" :'',
            "Dosen" :'',
            "Jumlah SKS" : '',
            "Deskripsi" : '',
            "Semester" : 'Genap',
            "Tahun Ajar" : '2020/2021'
        });
    };

    showInfo(){
        
    }

render(){
    return(
        <div>
        <form>
            <input placeholder="Nama Matkul"
            name="NamaMatkul"
             value={this.state['NamaMatkul']} 
             onChange={e => this.change(e)}/>
            <br />
            <input placeholder="Dosen"
            name="Dosen"
             value={this.state['Dosen']} 
             onChange={e => this.change(e)}/>
            <br />

            <input placeholder="Jumlah SKS"
            name="Jumlah SKS"
             value={this.state['Jumlah SKS']} 
             onChange={e => this.change(e)}/>
            <br />

            <textarea placeholder="Deskripsi"
            name="Deskripsi"
             value={this.state['Deskripsi']} 
             onChange={e => this.change(e)}/>
            <br />

            <select placeholder="Semester" name="Semester" value={this.state["Semester"]} onChange={e => this.change(e)}>
                <option value="Genap">Genap</option>
                <option value="Ganjil">Ganjil</option>
            </select>
            <br />

            <select placeholder="Tahun Ajar" name="Tahun Ajar" value={this.state["Tahun Ajar"]} onChange={e => this.change(e)}>
                <option value="2020/2021">2020/2021</option>
                <option value="2019/2020">2019/2020</option>
                <option value="2018/2019">2018/2019</option>
                <option value="2017/2018">2018/2019</option>

            </select>
            <br/>
        <button onClick= {(e) => this.onSubmit(e)} > Submit </button>            
        </form>
        </div>
    )
}

}