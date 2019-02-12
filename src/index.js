import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function getName(mahasiswa){
	return 'Nama : '+ mahasiswa.nama + 'NIM : '+mahasiswa.NIM;
}

function selamatDatang(mahasiswa){
	if ((mahasiswa.angkatan>2017)) {
		return "Selamat datang gamada" + mahasiswa.angkatan;
	}else{
		return "Angkatan" + mahasiswa.angkatan
	}
}

function tick(){
	const element= (
		<div>
			<h1>Hello world</h1>
			<h2> it is {new date().toLocaleTimeString()}.</h2>
		</div>
	);
	ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick,1000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
