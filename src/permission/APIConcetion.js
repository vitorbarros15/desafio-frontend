import axios from "axios";

// async function makeProtectedRequest() {
//   try {
//     const token = localStorage.getItem("token"); // Recupere o token armazenado.

//     if (!token) {
//       return;
//     }

//     const headers = { Authorization: `Bearer ${token}` };
//     const response = await axios.get("https://desafio-iall.azurewebsites.net/api/login", { headers });
//     console.log(response.data);
//   } catch (error) {
//     console.error("Erro na solicitação protegida:", error);
//   }
// }

async function makeLogin() {
  try {
    const response = await axios.post("https://desafio-iall.azurewebsites.net/api/login", {
      username: "vitor@teste.com",
      password: "vitor@17"
    });

    const { token } = response.data;
    localStorage.setItem("token", token);
    console.log("token", token);
    // makeProtectedRequest();
  } catch (error) {
    console.error("Erro ao fazer login:", error);
  }
}

export default makeLogin;
