# Capdas-Ecommerce
<img src="https://user-images.githubusercontent.com/82999632/141605310-14c04293-d6a3-434a-ae81-7d12b8b746b7.png" height="700"/>

Capdas is our self designed and developed mobile website which provides sustainable clothing store providing platform for national seller and tailors to provide their services online.

<!-- ![Alt Text](https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif) -->
<img src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif" height="40"/>Visit our live website at ()
## Installation

CapdaS-Ecommerce requires - [Node.js](https://nodejs.org/en/) to run.
Clone the project from Command prompt or Bash.

```bash
 git clone https://github.com/suvamAdhikary/Capdas-ECommerce.git

cd client/capdas
```

Install the dependencies using ``` npm install``` and devDependencies and start the server from command propmt or any other command shell.
 And run the project ```npm start``` 
# Tech Stack

<p float="left">
  <img src="https://user-images.githubusercontent.com/82999632/141611593-29b14f19-9f21-4556-9d70-b0ecd02d5c5d.png" height="150"/>
  <img src="https://user-images.githubusercontent.com/82999632/141611596-dba971cd-b98e-407f-94a0-85511beddc5a.png"  height="150"/> 
  <img src="https://user-images.githubusercontent.com/82999632/141611605-2113cf8c-9510-49f5-bc02-67b4d9544b45.png"  height="150"/>
  <img src="https://user-images.githubusercontent.com/82999632/141611609-37338139-bcbc-4565-8120-41cbeedcad40.png" height="150"/>
</p>



# Features Associated with CapdaS
- A user can register his account.
- User can also authenticate with OAuth.
- User can search for a items with debouncing.
- User can filter the items on the basis of various parameters.
- One can check the realtime database developed with MongoDB.
## Contributers

- [@SuvamAdhikary](https://github.com/suvamAdhikary)
- [@MukhiaRambhu](https://github.com/mukhiarambhu)
- [@RishabhAnand](https://github.com/Dastan27)
- [@VishwaTewari](https://www.figma.com/file/22preZnQo2OHqBYveg2oqA/Application-from-Scratch?node-id=182%3A118)
- [@LokeshSingh](https://github.com/lokesh15mca)
- [@AmolBarkale](https://github.com/amolbarkale)

# Glimpse of website
<img src="https://user-images.githubusercontent.com/82999632/141613798-8ed77531-d933-4d61-ac72-ed3665933e3f.png" height="500"/>
<img src="https://user-images.githubusercontent.com/82999632/141613802-9aeb740e-2519-49d9-9765-172898719d2c.png" height="500"/>
<img src="https://user-images.githubusercontent.com/82999632/141613805-0ecd0a35-38a0-4a2a-92ce-d2872763769d.png" height="500"/>
<img src="https://user-images.githubusercontent.com/82999632/141613806-8c6a7d11-e18e-4a93-b599-3f946e27c767.png" height="500"/>

# Support

 If you have any feedback, please reach out to us at

- vishwa_uxd1_065@masai.school
- amol_nj2_051@masai.school
- lokesh_sm2_306@masai.school
- suvam_fw11_059@masai.school
- rambhu_nj2_117@masai.school
- rambhu_nj2_117@masai.school


## NPM Packages used

- ### react [![react](https://camo.githubusercontent.com/475b49b04214dfa67c1ec8a2837888ae63003feb7b71fd45be30ff360148ad87/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f72656163742e7376673f7374796c653d666c6174)](https://github.com/facebook/react)

- ### react-router-dom [![react-router-dom](https://camo.githubusercontent.com/475b49b04214dfa67c1ec8a2837888ae63003feb7b71fd45be30ff360148ad87/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f72656163742e7376673f7374796c653d666c6174)](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)
- ### axios [![axios](https://camo.githubusercontent.com/1f22b6c297d1cb0e3aa68b2e6fed42da8b002bbefca8d63e99e0b790da8cce9b/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f6178696f732e7376673f7374796c653d666c61742d737175617265)](https://github.com/axios/axios)

- ### create-react-app [![create-react-app](https://camo.githubusercontent.com/475b49b04214dfa67c1ec8a2837888ae63003feb7b71fd45be30ff360148ad87/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f72656163742e7376673f7374796c653d666c6174)](https://github.com/facebook/create-react-app)
- ### styled-components [![styled-components](https://camo.githubusercontent.com/5ba6643341d94abdad0bc89edf930b9223664ffd462c61e4f32ec06cdbf50eb9/68747470733a2f2f636f6465636f762e696f2f67682f7374796c65642d636f6d706f6e656e74732f7374796c65642d636f6d706f6e656e74732f636f7665726167652e7376673f6272616e63683d6d61696e)](https://github.com/styled-components/styled-components)
- ### iconify/react
- ### react-bootstrap [![react-bootstrap](https://camo.githubusercontent.com/f02d7ddafecce45e5c6e5d24ac76753cc2560e27eb41e347b4aed935392a32eb/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f72656163742d656c61737469632d6361726f7573656c2e7376673f7374796c653d666c61742d737175617265)](https://github.com/react-bootstrap/react-bootstrap)



#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `http://localhost:6060/products` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `http://localhost:6060/products/618e16372bb0de1282068fd8` | `string` | **Required**. Id of item to fetch |



