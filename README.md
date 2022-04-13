# Desafio Tech Back-End (Calindra)
Desafio realizado para processo seletivo da empresa Calindra, no qual consistia na criação de uma RestAPI que recebia como parâmetros de entrada endereços, são realizados os calculos das distâncias euclidianas entre elas (dadas suas coordenadas geográgicas) e retornando quais seriam os endereços mais proximos entre si e os mais distantes também.

Esse desafio contou com o consumo da API externa [Geocoding](https://developers.google.com/maps/documentation/geocoding/start) para utilizar coordenadas geográficas dos endereços, assim como organização via MVC.

## Pré requisitos:
- Node.js v16.14.0
- NPM v8.3.1

## Pacotes:
### Dependencias: 
- [Express](https://www.npmjs.com/package/express): v4.17.3
- [Axios](https://www.npmjs.com/package/axios): v0.26.1
- [CORS](https://www.npmjs.com/package/cors): v2.8.5
- [Dotenv](https://www.npmjs.com/package/dotenv): v16.0.0
### Dependencias Dev:
- [Nodemon](https://www.npmjs.com/package/nodemon): v2.0.15


## Entrada Esperada:
```
url
?address=Av.+Rio+Branco,+1+Centro,+Rio+de+Janeiro+RJ,20090003
&address2=Praça+Mal.+Âncora,+122+Centro,+Rio+de+Janeiro+RJ,+20021200
&address3=Rua+19+de+Fevereiro,+34+Botafogo,+Rio+de+Janeiro+RJ,+22280030
&address4=Rua+Araguari,+609+Ramos,+Rio+de+Janeiro+RJ,+21031670
```

via heroku:


## Saida Esperada:
Exemplo utilizando 4 endereços:
```json
{
	"neaby": {
		"way": {
			"start": "Av. Rio Branco, 1 - Centro, Rio de Janeiro - RJ, 20090-003, Brazil",
			"end": "Praça Mal. Âncora, 122 - Centro, Rio de Janeiro - RJ, 20021-200, Brazil"
		},
		"dist": 0.011921952761606592
	},
	"farAway": {
		"way": {
			"start": "R. Araguari, 609 - Ramos, Rio de Janeiro - RJ, 21031-670, Brazil",
			"end": "R. Dezenove de Fevereiro, 34 - Botafogo, Rio de Janeiro - RJ, 22280-030, Brazil"
		},
		"dist": 0.12412096764564189
	}
}
```

## Utilização / Instalação via terminal:
Passo 1 - Clone o repositório:
```
git clone https://github.com/yagormorares/desafioBackEndCalindra.git
```

Passo 2 - Abra a pasta XX:
```
cd nomeDaPasta
```

Passo 3 - Instale os pacotes:
```
npm install
```

Passo 4 - Inicie o servidor:
```
npm start
```

Obs: Para utilizar as ferramentas de desenvolvimento:
```
npm run dev
```

Obs2: Para que a sua aplicação funcione, no arquivo ".env.example" está o template que deve ser utilizado para usar a KEY propria daquele que está baixando essa aplicação, e substituindo ".env.example" para somente ".env".
```
KEY = 'Sua chave google.'
```

## Utilização via Heroku:
A RestAPI em questão teve seu deploy feita na plataforma [Heroku](https://www.heroku.com/), com o seguinte link:
```
https://desafio-back-end-calindra.herokuapp.com/
```

A url de exemplo:
```
https://desafio-back-end-calindra.herokuapp.com/
?address=Av.+Rio+Branco,+1+Centro,+Rio+de+Janeiro+RJ,20090003
&address2=Praça+Mal.+Âncora,+122+Centro,+Rio+de+Janeiro+RJ,+20021200
&address3=Rua+19+de+Fevereiro,+34+Botafogo,+Rio+de+Janeiro+RJ,+22280030
&address4=Rua+Araguari,+609+Ramos,+Rio+de+Janeiro+RJ,+21031670
```