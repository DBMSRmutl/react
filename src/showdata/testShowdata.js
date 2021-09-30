//var fetch = require("node-fetch");
import fetch from 'node-fetch' 


    console.log("before fetch data");
    fetch('/data')
        .then(res => res.json())
        .then(list => this.setState({ list }))
    console.log("after fetch data");
